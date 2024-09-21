import React from 'react'
import LeftSideLayout from "../../Components/Layout/Home/LeftSideLayout";
import RightSideLayout from "../../Components/Layout/Home/RightSideLayout";
import ColorRightSideContainer from '../../Components/Home/Color/Container/ColorRightSideContainer';
import ColorLeftSideContainer from '../../Components/Home/Color/Container/ColorLeftSideContainer';
import HomePageLeftSideContainer from '../../Components/Home/HomePage/Container/HomePageLeftSideContainer';

const ColorsPage = () => {
  return (
    <div className="w-full h-full flex">
    <LeftSideLayout>
      <HomePageLeftSideContainer />
    </LeftSideLayout>
    <RightSideLayout>
      <ColorRightSideContainer />
    </RightSideLayout>
  </div>
  )
}

export default ColorsPage
