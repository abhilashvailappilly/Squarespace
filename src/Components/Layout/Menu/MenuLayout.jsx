import React from 'react'

const MenuLayout = ({children}) => {
  return (
    <>
      <div className="bg-red-100 h-screen w-screen ">
        <div className="w-screen bg-white flex h-full ">
        {children}
        </div>
      </div>
    </>
  )
}

export default MenuLayout
