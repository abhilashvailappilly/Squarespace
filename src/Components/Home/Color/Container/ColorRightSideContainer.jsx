import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../../Hooks/UseStoreHook'
import { setSelectedColor } from '../../../../Store/Slices/HomeSlice'

const ColorRightSideContainer = () => {

  const {home,dispatch} = useStoreHook()
  const [color, setColor ] = useState({})
  useEffect(()=>{
    setColor(home?.color)
  })

  const handleClickSelectColor = (sessionKey , paletteKey)=>{
 
    dispatch(setSelectedColor({section:sessionKey,palette:paletteKey}))
    console.log(home.selectedColor)
  }
  return (
    <div className='w-full flex justify-center items-center'>
    <div className='w-3/4'>
    <div className='mt-24  w-full flex flex-col justify-evenly font-bold'>
          <h3 className='text-3xl '>Choose a color palette</h3>
     <span className='text-gray-500'>These custom palettes were curated by our designers. You can always change up your colors later.</span>
          
     </div>
   <div className='mt-10 flex flex-col gap-2'>
    
  
   
  <div className='w-full'>
      {Object.keys(color).map((sectionKey, sectionIndex) => (
        <div key={sectionIndex} className='mb-4'>
          <div className='w-full flex justify-between'>
            <h1 className='font-bold'>{sectionKey}</h1>

            {sectionKey === 'Professional' && (
              <h1 className='text-blue-400 bg-blue-50 rounded-lg px-1'>Recommended</h1>
            )}
          </div>
          
          <div className='flex mt-2'>
            {Object.keys(color[sectionKey]).map((paletteKey, paletteIndex) => (
              <div key={paletteIndex} className={`w-1/4 flex cursor-pointer rounded-full mr-1 transition-transform hover:scale-105 ${home?.selectedColor["section"] == sectionKey && home?.selectedColor["palette"] === paletteKey ? "border-4 border-spacing-2 border-black" : ""}` }onClick={()=>handleClickSelectColor(sectionKey,paletteKey)}>
                <div className='w-1/3 h-6 rounded-l-full' style={{ backgroundColor: color[sectionKey][paletteKey].c1 }}></div>
                <div className='w-1/3 h-6' style={{ backgroundColor: color[sectionKey][paletteKey].c2 }}></div>
                <div className='w-1/3 h-6 rounded-r-full' style={{ backgroundColor: color[sectionKey][paletteKey].c3 }}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
   </div>
    </div>
 </div>
  )
}

export default ColorRightSideContainer
