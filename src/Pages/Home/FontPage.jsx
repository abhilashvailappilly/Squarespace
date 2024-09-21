import React from 'react'
import LeftSideLayout from '../../Components/Layout/Home/LeftSideLayout'
import HomePageLeftSideContainer from '../../Components/Home/HomePage/Container/HomePageLeftSideContainer'
import RightSideLayout from '../../Components/Layout/Home/RightSideLayout'
import FontRightSideContainer from '../../Components/Home/Font/Container/FontRightSideContainer'

const FontPage = () => {
  return (
    <div className="w-full h-full flex">
      <LeftSideLayout>
        <HomePageLeftSideContainer />
      </LeftSideLayout>
      <RightSideLayout>
        <FontRightSideContainer />
      </RightSideLayout>
    </div>
  )
}

export default FontPage
