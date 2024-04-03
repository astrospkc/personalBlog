import React from 'react'
import Navbar from './Navbar';
import Search from './Search';

function Header() {
  return (
    <div className='bg-black'>
        
        <div  className='flex flex-col '>
          <Navbar/>
          <div className=' m-auto my-5'>
          <Search/>
          </div>
        </div>
    </div>
  )
}

  export default Header;