import React,{ useEffect }from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
  const {url,progress} = useStorage(file);
  // console.log(progress,url);  现在
  // useEffect(() =>{}, [url]);   url 改变时， 执行前面的函数
useEffect(() =>{
  if(url) {
    setFile(null);  // 把进度条取消
  }
}, [url,setFile]);  // 我们用url 和 setFile



  return (


    <motion.div className="progress-bar"
      initial = {{width: 0}}
      animate = {{width:progress + '%'}}
      ></motion.div>
   // {/* <div className="progress-bar" style={{ width: progress + '%'}}></div>  这个也可以  */}
  )
}

export default ProgressBar;
