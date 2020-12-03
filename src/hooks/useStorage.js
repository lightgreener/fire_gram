import { useState, useEffect } from 'react'
import { projectStorage,projectFirestore,timestamp,database } from '../firebase/config'

const useStorage = (file) => {   //这个file 就是projectStorage里的
    const [ progress, setProgress] = useState(0);
    const [ error, setError] = useState(null);
    const [ url, setUrl] = useState(null);
    const [createAt,setCreateAt] = useState('');


    useEffect(() => {
        // references
        // 先要得到该文件的名字。对文件进行操作
        const storageRef = projectStorage.ref(file.name);
        // 收集url 存储到image里， image 由firebase生产
        const collectionRef = projectFirestore.collection('pic')
        console.log(collectionRef);
        // const collectionRef = database.ref('images'); // this is for realtime datatbase

        //如果state_changed ，
        storageRef.put(file).on('state_changed',(snap) =>{
            let percentage = (snap.bytesTransferred /   snap.totalBytes) * 100;   // loading的百分比
            setProgress(percentage);   //  看进度
        },(err)=>{   // if error occurs
            setError(err);
        },async () => {    // promise
            const url = await storageRef.getDownloadURL();
            console.log('it is url: ' + url);
            const createAt = timestamp(); //这里创建
            collectionRef.add({url,createAt}) // 添加url ，并创建一个创建时间， 需要在config 里完成
            // collectionRef.push({url:url,  //这里是realtime data
                              // createAt:createAt，
                              // pic_id:'34',
                            // }); //不是方法
            setUrl(url);
            // setCreateAt(createAt);
        })
    },[file])  // 如果file 改变， 就执行前面的函数

    return { progress, url, error }

}

export default useStorage;
