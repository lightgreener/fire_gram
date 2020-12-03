import React from 'react';
import {motion} from 'framer-motion'
import ImageGrid from './ImageGrid'

const Modal = ({selectedImg,setSelectedImg }) => {
  const  _handleClick = (e)=>{
    if(e.target.classList.contains('backdrop')){
      setSelectedImg(null);
    }

  }

  const _deleteButton = (e) => {
    // e.preventDefault();
      console.log(selectedImg);  // 可以得到
      setSelectedImg(null);
      console.log();

  }

  return(
    <motion.div className='backdrop' onClick={_handleClick}
      initial = {{ opacity: 0}}
      animate = {{ opacity: 1}}
      >
      <motion.img  src={selectedImg} alt='enlarge pic'
        initial = {{ y: '-50vh'}}
        animate ={{ y: 0}}
      />


      <motion.button className='deleteBtn' onClick={ _deleteButton }
        initial = {{ opacity:0}}
        animate = {{ opacity:1}}
        transition = {{ delay:1}}
        >X</motion.button>
    </motion.div>
  )

}

export default Modal ;
