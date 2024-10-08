import React from 'react'
import { handleResetStore } from '../../../Methods/Redux'

const RightSideLayout = ({children}) => {
  const handleReset = ()=>{
    handleResetStore()
    
}
  return (
    <div className='w-full md:w-1/3 h-full no-scrollbar  overflow-auto'>
      <span className=' absolute z-10 cursor-pointer hover:scale-125 transition-transform font-bold  top-8  right-10' onClick={handleReset}>X</span>
      {children}
       
    </div>
  )
}

export default RightSideLayout
