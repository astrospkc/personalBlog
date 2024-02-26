import React from 'react'
import imagebg from "../../../public/backgroundImage.jpg"
import img1 from "../../../public/img1.jpg"
import Image from 'next/image';
function Dashboard() {
  return (
    <div className='relative h-screen'>
        <Image src={imagebg} alt="background"  className='absolute inset-0 w-full h-full object-cover'/>
        {/* <div className='absolute inset-0 bg-black items-center j w-1/3'>
            <h1>the title</h1>
        </div> */}
        <div className='absolute inset-0 grid items-center sm:grid-cols-3 grid-rows-3 gap-3 h-screen '>
            {/* <h1 className='text-4xl text-white font-bold'>this is how its going</h1>
             */}
             
             <div className='  relative h-full w-1/2 hover:cursor-pointer hover:opacity-45 '>
                <Image src={img1} className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute top-1/2 left-1/3 inset-0 items-center justify-center text-black font-extrabold text-3xl '>BLOG</div>
            </div>
            <div className='relative h-full w-1/2 hover:cursor-pointer hover:opacity-45'>
                <Image src={img1} className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute top-1/2 left-1/3 inset-0 items-center justify-center text-black font-extrabold text-3xl'>VLOG</div>
            </div>
            <div className='relative h-full w-1/2 hover:cursor-pointer hover:opacity-45 overflow-hidden'>
                <Image src={img1} className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute top-1/2 left-1/3 inset-0 items-center justify-center text-black font-extrabold text-3xl'>CREATION</div>
            </div>
            
            
             {/* <div className='border-cyan-500 border-4 '>box 2</div>
             <div className='border-cyan-500 border-4 '>box 3</div> */}
        </div>
    </div>
  )
}

export default Dashboard;