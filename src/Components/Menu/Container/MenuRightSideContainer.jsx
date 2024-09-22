import React from 'react'
import TopNavbar from '../Ui/RightSide/TopNavbar'
import HomePageLeftSideContainer from '../../Home/HomePage/Container/HomePageLeftSideContainer'

const MenuRightSideContainer = () => {
  return (
    // <div className='pr-4'>
    <div className='w-full pr-4 h-full no-scrollbar block md:block  bg-white overflow-auto'>
    <TopNavbar/>
    

  <HomePageLeftSideContainer padding={"pt-0"} width={"w-full"}/>
       <div className='w-full h-10'>

       </div>
    </div>
    // </div>
  )
}

export default MenuRightSideContainer
