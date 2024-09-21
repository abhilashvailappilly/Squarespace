import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../../../Hooks/UseStoreHook'

const Intro = () => {
  const {home} = useStoreHook()
  const [font,setFont] = useState("")

  useEffect(() => {
    const { section, font } = home?.selectedFont 
    
    const selectedFont = home?.font[section]?.[font]?.font || ""; 
    setFont(selectedFont)

    // setFontStyle({ fontFamily: selectedFont });
  }, [home?.selectedFont, home?.font])
  return (
    <div className='w-full h-2/3 bg-green-300 hover:border-4 hover:border-blue-600 relative'>
      <div className='w-full h-full overflow-hidden '>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/028/151/527/small_2x/close-up-modern-white-table-top-with-free-space-to-edit-your-product-display-with-books-above-the-living-room-blurred-in-the-background-generative-ai-photo.jpeg' className='object-cover w-full h-full' />
        <div className='absolute inset-0 flex justify-center items-center  bg-opacity-50 bg-black'>
          <span className={`text-white text-xl font-bold ${font}`}>Introduce your brand</span>
        </div>
      </div>
    </div>
  )
}

export default Intro
