import React from 'react'

// import imagebg from "../../public/backgroundImage.jpg";
import Dashboard from '@/app/dashboard/page';

const Modal = ({setModalOpen , ModalOpen})=>  {

  const handleClick = ()=>{
    setModalOpen(prevModalOpen=>!prevModalOpen);
    console.log(setModalOpen);
  }
  return (
    <div className='absolute w-full mx-auto border-2 border-black shadow-2xl '>
        
        <button className='bg-red-400 border-black-2 ' onClick={handleClick}>cancel it</button>
    </div>
  )
}

  export default Modal;