import React, { useEffect, useState } from "react";
import { useStoreHook } from "../../../../Hooks/UseStoreHook";
import Intro from "../Ui/Intro/Intro";
import About from "../Ui/About/About";
import Product from "../Ui/Product/Product";

const HomePageLeftSideContainer = () => {
  const { home, dispatch } = useStoreHook();
  const [textUi, setTextUi] = useState(true);
  useEffect(() => {
    const anyActive = Object.keys(home?.sections || {}).every(
      (key) => home?.sections[key]?.show === false
    );
    setTextUi(anyActive);
  }, [home?.sections]);
  return (
    <div className="w-full h-full  flex justify-center items-center relative overflow-hidden">
      {textUi && (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-bold mx-auto text-grey-500">
              {" "}
              Add sections to build your homepage
            </h1>

            <span className="text-grey-500">
              Your homepage will showcase what you site is about and what you
              offer
            </span>
          </div>
        </div>
      )}
      
      <div className="w-full bg-red-300   h-full mt-10 flex flex-col justify-center items-center pt-20 ">
       <div className="bg-blue-300 w-3/4 h-full overflow-scroll ">
       {home.sections["intro"].show && <Intro />}
        {home.sections["product"].show && <Product />}
        {home.sections["about"].show && <About />}
        {home.sections["service"].show && <div>servive </div>}
       </div>
      </div>
    </div>
  );
};

export default HomePageLeftSideContainer;
