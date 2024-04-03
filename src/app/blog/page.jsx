import Genre from '@/components/Genre';
import Header from '@/components/Header';
import LatestCard from '@/components/LatestCard';

import Search from '@/components/Search';
import React from 'react'

function Blog() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Header/>
        {/* latest new blog , most watched and liked blog will be shown as a side scroll  */}
        <Genre/>
        <div className='flex flex-row justify-center m-auto '>
          
          <LatestCard/>
          {/* <LatestCard/>
          <LatestCard/>
          <LatestCard/>
          <LatestCard/>
          <LatestCard/>
          <LatestCard/>
          <LatestCard/> */}

          
        </div>
        
    </div>
  )
}

  export default Blog;