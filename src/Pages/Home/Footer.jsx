import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../Store/Slices/PagesSlice'
import { useStoreHook } from '../../Hooks/UseStoreHook'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const [value, setValue] = useState(0)
    const {home,pages,dispatch} = useStoreHook()
    const navigate = useNavigate()
    useEffect(() => {
        setValue(pages.currentPageIndex)
    }, [pages])

    const buildWebsite =()=>{
        navigate('/menu')
    }
    const handleNextClick = ()=> {
         dispatch(nextPage())
         navigate(`/${pages?.pages[value+1]}`)
        console.log(pages?.pages[value+1])
        console.log(pages)
        console.log(value+1)

    }
    const handleBackClick = ()=> {
        dispatch(prevPage())
        navigate(`/${pages?.pages[value-1]}`)
   

   }
   const isAnySectionSelected = Object.values(home.sections).some(section => section.show);
    return (
        <div className='bg-white h-1/4 w-full py-4 flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0'>
          {
            value !== 0 && 
            <button 
                    className='w-1/2 md:w-24 bg-black py-2 rounded text-center text-white font-extrabold cursor-pointer'
                    onClick={handleBackClick} 
                >
                    Back
                </button>
          }

            <div className="w-full md:w-3/5 flex flex-col items-center">
                <div className="w-full h-2 bg-gray-300 rounded">
                    <div
                        className="h-full bg-black rounded"
                        style={{ width: `${(value / 3) * 100}%` }}
                    />
                </div>
                <div className="w-full flex justify-between mt-2 text-xs md:text-sm lg:text-base">
                    <span className='text-black font-medium'>SITE INFO</span>
                    <span className='text-black font-medium'>HOME PAGE</span>
                    {/* <span className='text-black font-medium'>PAGES</span> */}
                    <span className='text-black font-medium'>COLORS</span>
                    <span className='text-black font-medium'>FONTS</span>
                </div>
            </div>

         { value < 3 ?   <button
                className={`w-1/2 md:w-24 bg-black py-2 rounded ${ (!isAnySectionSelected && value==1) ? "cursor-not-allowed" :"cursor-pointer"} text-center text-white font-extrabold  `}
                onClick={handleNextClick}
                // disabled={value === 3} 
                disabled={(!isAnySectionSelected && value==1)
                    
                }
            >
                Next
            </button>  :

             <button
                    className={`w-1/2 md:w-24 bg-black py-2 rounded text-center text-white font-extrabold cursor-pointer `}
                    onClick={buildWebsite}
                    
                >
                    Build
                </button> 
          
           }
        </div>
    )
}

export default Footer
