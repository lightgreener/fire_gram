import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [file, setFile] = useState( null );  //hook
    const [error,setError] = useState( null ); // hook 错误信息

    const types = ['image/png','image/jpeg'];

    const _handleOnChange = (e) => {
        console.log("working");    //每次有变化，就会启动该项
        let selected = e.target.files[0];  //只要一个文件
        console.log(selected);   // 得到文件的信息

        if (selected && types.includes(selected.type)) {   //检查选中的文件type是不是需要的
            setFile(selected);
            setError('');  // 如果是图片， 该error就不显示
        } else {
            setFile(null);
            setError('please select an image file (png or jpeg)');// hard code 显示错误信息， 并且
        }
    }

    return (
       <form>
           <label>
               <input type ="file" onChange={ _handleOnChange} />
               <span>+</span>
           </label>
           <div className='output'>
               { error && <div className ='error'>{ error }</div>}
               {/* 这里就是显示错误信息的地方， 如果没有错误信息，就显示下面的文件信息 */}
               { file && <div>{ file.name }</div>}
               {/*  这里显示进度条 */}
               { file && < ProgressBar file={ file } setFile={setFile} />}
           </div>
       </form>
    )
}

export default UploadForm;
