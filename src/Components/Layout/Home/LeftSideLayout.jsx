import React from 'react'

const LeftSideLayout = ({children}) => {
  return (
    <div className='w-2/3 h-full no-scrollbar hidden md:block  bg-white overflow-auto'>
      <div className=' absolute z-10  cursor-pointer hover:scale-125 transition-transform   top-8  left-10'>
        <span>logo </span>
        <span className=' text-sm font-semibold'>BLUEPRINT UI</span>
      </div>

      {children}
       
    </div>
  )
}

export default LeftSideLayout
