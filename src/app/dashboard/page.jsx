'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imagebg from "../../../public/backgroundImage.jpg";
import img1 from "../../../public/img1.jpg";
import Modal from '@/components/modal';


function Dashboard() {
  const [modalOpen , setModalOpen] = useState(false);

  const handleClick =()=>{
    console.log("open modal");
    setModalOpen(modalOpen=>!modalOpen)
  }
  return (  
       <div className='scroll-container relative min-h-screen bg-black '>
        <div className=''>
     <Image src={imagebg} className='fixed' />
     <div className='flex flex-col'>
      {/* for the title */}
      
      <div className='fixed  top-1/4 left-12 text-9xl font-bold font-sans tracking-wide w-[50%] shadow-black'><span className='shadow-2xl shadow-black text-'>ALL THAT LIES IN ONE PLACE</span>
      
      
      </div>
      <div className='absolute top-5 flex flex-col gap-2 m-5'>
        <Link href="/signup"><button className='bg-blue-400 text-black p-1' >signup</button></Link>
      
      <Link href="/login"><button className='bg-blue-400 text-black p-1'>login</button></Link>
      </div>
      <div className='absolute  top-20 right-20 justify-center items-center '>
        {/* if modalopen is true then open the modal otherwise keep it same */}
        {/* {modalOpen ? (
          <Modal/>
         
        ): */}
        
        <div className='grid grid-col gap-4'>
          <Link href="/blog">
          <div className='relative shadow-xl shadow-black rounded-3xl hover:cursor-pointer' onClick={handleClick}>
            <Image src={img1} className='w-96 h-96 opacity-40 hover:opacity-65 rounded-3xl '/>
            <span className='absolute left-1/3 top-1/3 text-white text-5xl font-extrabold font-serif'>BLOG</span>
          </div>
          </Link>
         
          <Link href="/vlog">
          <div className='relative shadow-xl shadow-black rounded-3xl hover:cursor-pointer '>
            <Image src={img1} className='w-96 h-96 opacity-40 hover:opacity-65 rounded-3xl'/>
            <div className='absolute left-1/3 top-1/3 text-white text-5xl font-extrabold font-serif'>VLOG</div>
          </div>
          </Link>
          <Link href="/creation">
          <div className='relative shadow-xl shadow-black rounded-3xl hover:cursor-pointer'>
            <Image src={img1} className='w-96 h-96 opacity-40 hover:opacity-65 rounded-3xl'/>
            <div className='absolute left-10 top-1/3 text-white text-5xl font-extrabold font-serif'>CREATION</div>
          </div>
          </Link>
        </div>

    
        {/* } */}
        
     </div>
     </div>
     </div>
     </div>

  
  );
}

export default Dashboard;
