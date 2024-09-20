import React from 'react'
import { useStoreHook } from '../../../../Hooks/UseStoreHook'
import { setSections } from '../../../../Store/Slices/HomeSlice'

const HomePageRightSideContainer = () => {

  const {home,dispatch} = useStoreHook()

  const handleRadioChange = (sectionKey, show) => {
    dispatch(setSections({ sectionKey, updatedData: { show } }));
  };

  return (
    <div className='w-full flex justify-center items-center'>
       <div className='w-3/4'>
       <div className='mt-24  w-full flex flex-col justify-evenly font-bold'>
             <h3 className='text-3xl '>Build your homepage</h3>
        <span className='text-gray-500'>Build your homepage section by-section, adding as many or as few sections as you need</span>
             
        </div>
      <div className='mt-10 flex flex-col gap-2'>
       
      {Object.keys(home?.sections || {}).map((key) => {
            const section = home.sections[key];
            return (
              <div key={key} className='w-full h-12 flex justify-start gap-3 items-center border-2 border-grey-400'>
              <input
                type="checkbox"
                name="section"
                checked={section.show}
                onChange={() => handleRadioChange(key, !section.show)}
                className='w-6 h-6  rounded-full border-2 border-gray-400 bg-white appearance-none cursor-pointer checked:bg-black checked:after:content-["✔"] checked:after:text-white justify-center items-center flex checked:after:left-1.5 checked:after:top-[-2px]'
              />
                <span>{section.name}</span>
              </div>
            );
          })}

        {/* <div className='w-full h-12 bg-green-300 flex justify-start items-center'>
          <input type="radio" name="" id="" className='w-1/3 h-5' /> 
          <span className=''>Info section</span>
        </div> */}
       
      </div>
       </div>
    </div>
  )
}

export default HomePageRightSideContainer
