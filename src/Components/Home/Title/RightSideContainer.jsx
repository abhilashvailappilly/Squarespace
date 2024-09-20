import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../Hooks/UseStoreHook';
import { setTitle } from '../../../Store/Slices/HomeSlice';

const RightSideContainer = () => {
    
    const [title,_] = useState("")
    const [titleFont,setTitleFont] = useState("Professional")

    const fontOptions = ["Professional", "Playful", "Sophisticated", "Friendly", "Bold", "Quirky", "Innovative"];

    const {home,dispatch} = useStoreHook()

    useEffect(()=> {
        console.log(home)
        setTitle(home.title?.text)
    },[])
    const changeTitle = (e)=>{
        setTitle(e.target.value)
        dispatch(setTitle({text:e.target.value}))
        console.log(home)
    }

  return (
    <div className='w-full flex justify-center items-center'>
        <h1>{title}</h1>
       <div className='w-3/4'>
       <div className='mt-24  w-full flex justify-evenly font-bold'>
             <h3 className='text-3xl '>Choose a site title and  brand personality</h3>
        </div>
      <div className='mt-10'>
        <h1 className='text-sm font-bold'>Site title</h1>
        <span className='text-gray-500'>This is the name of your site. You can change it later.</span>
        <div className='relative flex m-2 mt-4 mb-4'>
            <input
                type="text"
                onChange={changeTitle}
                className='w-full border-b-2 border-gray-300 focus:border-black focus:outline-none p-2 pr-8'
                placeholder='Your site title'
            />
            <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500'>100</span>
         </div>


        <div>
        <h1 className='text-sm font-bold'>Brand personality</h1>
            <span className='text-sm text-gray-500'>Each personality has a unique set of colors, fonts, and tone for creating AI-generated content.Having a clear brand personality can help build customer reationships.</span>
            <div className='grid grid-cols-2 row-span-2 gap-2 pt-2'>
                {
                    fontOptions.map( (font , index)=>(
                        <div key={index}  className={`w-full border border-black  flex hover:border-gray-500 text-gray-500 justify-center items-center cursor-pointer  transition duration-100 h-10 ${
                            titleFont === font ? 'border-2 border-black' : 'border border-transparent'
                        }  `}
                        onClick={()=>setTitleFont(font)} 
                        
                         >
                            <span>{font}</span>
                        </div>
                    ))
                }
               
                
            </div>
        </div>
      </div>
       </div>
    </div>
  )
}

export default RightSideContainer
