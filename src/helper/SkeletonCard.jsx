import React from 'react'

const SkeletonCard = () => {
  return (
    <div className=" shadow-md rounded-lg w-[350px] h-[500px] flex flex-col justify-between overflow-hidden bg-gray-200 animate-pulse">
      <div className='aspect-[4/5] overflow-hidden'>
        <div className='w-full h-full bg-gray-300'></div>
      </div>
      <div className='p-4'>
        <div className='bg-gray-300 h-6 rounded w-3/4 mb-4'></div>
        <div className='bg-gray-300 h-6 rounded w-3/4 mb-4'></div>
        <hr className=' border-gray-300 mb-4'/>
        <div className='space-y-2'>
            <div className='bg-gray-300 h-4 rounded w-2/3'></div>
            <div className='bg-gray-300 h-4 rounded w-1/3'></div>
            <div className='bg-gray-300 h-4 rounded w-full'></div>
            <div className='bg-gray-300 h-4 rounded w-1/2'></div>

        </div>

      </div>
    </div>
  )
}

export default SkeletonCard
