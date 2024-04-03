import React from 'react'
import Navbar from './Navbar';
import Search from './Search';
import img1 from "../../public/img1.jpg";
import Image from 'next/image';
import { IoIosHeart } from "react-icons/io";

function LatestCard() {
  return (
    <div className='bg-black w-1/2 h-1/2'>
        {/* picture + content */}

        <div className='flex flex-row justify-between w-1/2 h-1/3 '>
            {/* picture */}
          
            <Image className='object-fit' src={img1} alt="relatable image  according to the content"/>
          
            {/* content */}
            <div>
            <p className='text-white text-xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae modi odio neque obcaecati cumque! Temporibus, similique quia quasi eos nostrum, voluptate ut omnis atque distinctio non velit vero, totam fugiat?</p>
            {/* like button . comment section, bookmark , and three dot section */}
            <IoIosHeart className=' text-white text-3xl float-right bottom-0'/>

           </div>

        </div>
      
    </div>
  )
}

  export default LatestCard;