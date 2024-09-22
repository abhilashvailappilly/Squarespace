import React from 'react'
import Logo from '../../Svg/Logo'
import IconSettings from '../../Others/Icon/Settings'
import IconQuestionCircle from '../../Others/Icon/QuestionCircle'
import IconCheckCircle from '../../Others/Icon/CheckCircle'
import IconSearch from '../../Others/Icon/Search'

const MenuLeftSideContainer = () => {
  return (
    <div className='w-full h-full  overflow-scroll normal-scrollbar'>
     <div className="w-full h-24 mt-8 flex justify-between p-2">
  <Logo />
  
  <div className="relative w-10 h-10 rounded-full flex justify-center items-center hover:bg-blue-100 group">
    <div className="w-3/4 h-3/4 rounded-full">
      <IconSearch />
    </div>

    {/* Tooltip for Search */}
    <div className="absolute hidden group-hover:flex justify-center items-center -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-gray-700 bg-white text-sm rounded-md">
      Search
    </div>
  </div>
</div>

        <div className="w-full pl-6 mt-0 bg-white">
          <div className='flex gap-2 items-center '>
          <h1 className='text-gray-500 text-lg underline-animation w-fit font-semibold'>Setup Guide</h1> 
          <IconCheckCircle/>
          </div>
          <h1 className='text-black text-lg mt-4 mb-3 w-fit underline underline-offset-4 font-semibold'>Website</h1>
          <h1 className='text-gray-500 text-sm ml-5 mb-3 w-fit underline-animation font-semibold'>Pages</h1>
          <h1 className='text-gray-500 text-sm ml-5 mb-3 w-fit underline-animation font-semibold'>Styles</h1>
          <h1 className='text-gray-500 text-sm ml-5 mb-3 w-fit underline-animation font-semibold'>Assets</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Products & Services</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Invoicing</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Content & <br/> Memberships</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Donations</h1>
          <h1 className='text-gray-500 text-lg mb-8 w-fit underline-animation font-semibold'>Scheduling</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Finance</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Marketing</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Contacts</h1>
          <h1 className='text-gray-500 text-lg mb-2 w-fit underline-animation font-semibold'>Analytics</h1>
          

        </div>
        <div className="w-full mb-20 flex justify-between items-center">
  <div className="w-10 h-10 my-2 ml-5 bg-red-100 rounded-full">
    <img
      src="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg"
      alt="" loading='lazy'
      className="w-full h-full object-cover"
    />
  </div>

  <div className="flex gap-5 mr-5">
    <div className="relative w-4 h-4 bg-gray-500 rounded-full group">
      <IconQuestionCircle />
      <div className="absolute hidden group-hover:flex justify-center items-center -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-gray-700 text-sm rounded-md">
        Help
      </div>
    </div>

    <div className="relative w-4  h-4 rounded-full group">
      <IconSettings />
      <div className="absolute hidden group-hover:flex justify-center items-center -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-gray-700 bg-white text-sm rounded-md">
        Settings
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default MenuLeftSideContainer
