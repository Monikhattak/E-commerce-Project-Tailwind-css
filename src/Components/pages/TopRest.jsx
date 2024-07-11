import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

function TopRest() {
  return (
    <div className='max-w-[1200px] mx-auto'>
    <div className='flex my-3 items-center justify-between'>
      <div className='text-[25px] font-bold'>Top Restaurant Chains In Islamabad</div>
      <div className='flex'>
      </div> 
    </div>
    <div className='flex'>
       <Card/>
      </div>
    </div>
    

  )
}

export default TopRest
