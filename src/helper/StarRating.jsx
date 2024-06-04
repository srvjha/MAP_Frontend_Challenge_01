import React from 'react'

export const StarRating = ({filled , onClick}) => (

    <svg
    onClick={onClick}
    xmlns='http://www.w3.org/2000/svg'
    fill={filled?'yellow':'black'}
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    className='w-6 h-6 cursor-pointer'
    stroke='currentColor'
    >
     <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d="M12 2.25l3.09 6.26 6.91 1.01-5 4.87 1.18 6.87L12 17.77l-6.18 3.25 1.18-6.87-5-4.87 6.91-1.01L12 2.25z"
     />
     
    </svg>
 )
