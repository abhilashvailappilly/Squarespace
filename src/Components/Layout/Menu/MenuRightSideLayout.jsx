import React from 'react'
import { useStoreHook } from '../../../Hooks/UseStoreHook'

const MenuRightSideLayout = ({children}) => {
  const { menu } = useStoreHook()
  return (
    <div className={`${menu?.isEditing ? "w-full" : "w-3/4" } w-4/5 h-full bg-red-400`}>
     {children}
    </div>
  )
}

export default MenuRightSideLayout
