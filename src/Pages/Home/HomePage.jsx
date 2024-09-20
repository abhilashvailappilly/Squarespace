import React from 'react'
import LeftSideLayout from '../../Components/Layout/Home/LeftSideLayout'
import RightSideLayout from '../../Components/Layout/Home/RightSideLayout'
import HomePageLeftSideContainer from '../../Components/Home/HomePage/Container/HomePageLeftSideContainer'
import HomePageRightSideContainer from '../../Components/Home/HomePage/Container/HomePageRightSideContainer'

const HomePage = () => {
  return (
    <div className="w-full h-full flex">
			<LeftSideLayout>
				<HomePageLeftSideContainer/>
			</LeftSideLayout>
			<RightSideLayout>
				<HomePageRightSideContainer/>
			</RightSideLayout>
		</div>
  )
}

export default HomePage
