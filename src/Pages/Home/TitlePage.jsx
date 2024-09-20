import React from "react";
import { useSelector } from "react-redux";
import LeftSideLayout from "../../Components/Layout/Home/LeftSideLayout";
import RightSideLayout from "../../Components/Layout/Home/RightSideLayout";
import RightSideContainer from "../../Components/Home/Title/RightSideContainer";
import LeftSideContainer from "../../Components/Home/Title/LeftSideContainer";

const TitlePage = () => {
	const data = useSelector((state) => state.pages);
	return (
		<div className="w-full h-full flex">
			<LeftSideLayout>
				<LeftSideContainer />
			</LeftSideLayout>
			<RightSideLayout>
				<RightSideContainer />
			</RightSideLayout>
		</div>
	);
};

export default TitlePage;
