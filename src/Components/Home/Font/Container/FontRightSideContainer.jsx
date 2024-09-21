import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../../Hooks/UseStoreHook'
import { setSelectedFont } from '../../../../Store/Slices/HomeSlice'

const FontRightSideContainer = () => {
    const {home,dispatch} = useStoreHook()
    const [font, setFont ] = useState({})
    useEffect(()=>{
      setFont(home?.font)
    },[home?.font])

    const handleClickSelectFont = (section,font) => {
        console.log(section,font)
        dispatch(setSelectedFont({section,font}))
    }
  return (
    <div className='w-full flex justify-center items-center'>
    <div className='w-3/4'>
    <div className='mt-24  w-full flex flex-col justify-evenly font-bold'>
          <h3 className='text-3xl '>Choose a font pairing</h3>
     <span className='text-gray-500'>These custom pairings were curated by our designers. There are other font options you can explore later.</span>
          
     </div>
   <div className='mt-10 flex flex-col gap-2'>
    
  
   
  <div className='w-full'>
      {Object.keys(font).map((sectionKey, sectionIndex) => (
        <div key={sectionIndex} className='mb-4'>
          <div className='w-full flex justify-between'>
            <h1 className='font-bold'>{sectionKey}</h1>

            {sectionKey === 'Professional' && (
              <h1 className='text-blue-400 bg-blue-50 rounded-lg px-1'>Recommended</h1>
            )}
          </div>
          
          <div className='flex mt-2'>
            {Object.keys(font[sectionKey]).map((fontKey, paletteIndex) => (
              <div key={paletteIndex} className={`w-1/2 h-40 flex flex-col justify-center items-center cursor-pointer  mr-1 transition-transform hover:scale-105 ${home?.selectedFont["section"] == sectionKey && home?.selectedFont["font"] === fontKey ? "border-2 border-spacing-2 border-black" : "border-2"}` }onClick={()=>handleClickSelectFont(sectionKey,fontKey)}>
               <h1 className={` text-lg lg:text-2xl ${font[sectionKey][fontKey].name}`} >
                        {font[sectionKey][fontKey].name}
                      </h1>
                      <h1 >
                        {font[sectionKey][fontKey].font}
                      </h1>
               
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

export default FontRightSideContainer
