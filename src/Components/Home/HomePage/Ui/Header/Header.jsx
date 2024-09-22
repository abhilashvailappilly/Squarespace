import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../../../Hooks/UseStoreHook'

const Header = () => {

   
    
  const [fontColor , setFontColor] = useState("")
  const [buttonColor,setButtonColor] = useState("")
  const [color,setColors] = useState({  section: "Professional",
    palette: "p1",
  });
  const {home,menu} = useStoreHook()

  useEffect(()=>{
    setColors(home?.selectedColor)
  },[home?.selectedColor])
  useEffect(()=>{
   
    setButtonColor( home?.color[color.section][color.palette]?.c2 || "#DCDCDC" )
    setFontColor( home?.color[color.section][color.palette]?.c3 || "#003000" )
  },[color])
  return (
    <div className='w-full h-10 p-2  flex justify-between items-center '> 
    <div>
      <span style={{color:fontColor}} className={`${menu.website.title.font}text-lg font-bold`}>{home?.title?.text}</span>
    </div>
    <div className="flex gap-2 mr-5 " >
      <span className='text-sm font-bold'  style={{color:fontColor}}>About</span>
      <span className='text-sm font-bold'  style={{color:fontColor}}>Contact</span>
    </div>
    </div>
  )
}

export default Header
