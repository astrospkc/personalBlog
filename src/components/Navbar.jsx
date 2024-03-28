import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row justify-between p-5 gap-10 max-w-full bg-slate-800 text-white'>
        
        <Link href="/dashboard">
        <div>logo</div>
        </Link>
        <div className='flex flex-row float-end gap-10'>
        
        <Link href="/dashboard"><div className='flex'>home</div></Link>
        <Link href="/about"> <div className='flex'>about</div></Link>
        <Link href="/contact"><div className='flex'>contact</div></Link>
        <div>
          Features
      </div>
        </div>
        {/* <Link href="/features"><div className=''>features</div></Link>  this will be the dropdown menu */}
  
    </div>
  )
}

  export default Navbar;