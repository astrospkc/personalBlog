import React from 'react'

import img1 from "../../public/img1.jpg";
import Image from 'next/image';
import { IoIosHeart } from "react-icons/io";
import genres from "./GenreList.js"

function Genre() {
  return (
    <div className=' flex '>
        
        <ul className='flex flex-row  gap-2 text-white'>
            {genres.map((item, i)=>(
                <li key={i} className='bg-gray-600 rounded-3xl text-lg p-1 px-2'>{item}</li>
            ))}
            {/* <li>adventurous</li>
            <li>poetic</li>
            <li>lifestyle</li>
            <li>coding</li>
            <li>health</li>
            <li>education</li>
            <li>self-help</li> */}

        </ul>

    </div>
  )
}

  export default Genre;