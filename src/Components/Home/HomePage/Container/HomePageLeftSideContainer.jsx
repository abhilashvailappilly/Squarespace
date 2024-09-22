import React, { useEffect, useState } from "react";
import { useStoreHook } from "../../../../Hooks/UseStoreHook";
import Intro from "../Ui/Intro/Intro";
import About from "../Ui/About/About";
import Product from "../Ui/Product/Product";
import Header from "../Ui/Header/Header";

const HomePageLeftSideContainer = (props) => {
  const { home, dispatch } = useStoreHook();
  const [textUi, setTextUi] = useState(true);
  const [color,setColors] = useState({  section: "Professional",
    palette: "p1",
  });
  const [bgColor,setBgColor] = useState("")
  const [fontColor , setFontColor] = useState("")
  const [buttonColor,setButtonColor] = useState("")

  useEffect(()=>{
    setColors(home?.selectedColor)
    console.log(home?.selectedColor)
  },[home?.selectedColor])
  useEffect(()=>{
    setBgColor( home?.color[color.section][color.palette]?.c1 || "#fff" )
    setButtonColor( home?.color[color.section][color.palette]?.c2 || "#DCDCDC" )
    setFontColor( home?.color[color.section][color.palette]?.c3 || "#003000" )
  },[color])
  useEffect(() => {
    const anyActive = Object.keys(home?.sections || {}).every(
      (key) => home?.sections[key]?.show === false
    );
    setTextUi(anyActive);
  }, [home?.sections]);
  return (
    <div className="w-full  h-full flex justify-center items-center relative overflow-hidden">
      {textUi ? (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-bold mx-auto text-grey-500">
              
              Add sections to build your homepage
            </h1>

            <span className="text-grey-500">
              Your homepage will showcase what you site is about and what you
              offer
            </span>
          </div>
        </div>
      ) :
      
      <div className={`${props?.padding} w-full  h-full mt-1 flex flex-col justify-center items-center pt-20 `}>
       <div className={`${props?.width} w-3/4 shadow-xl  shadow-slate-600  border-gray-300 h-full  overflow-y-auto custom-scrollbar` }
       style={{ backgroundColor:bgColor}}>
       <Header/>
        {home.sections["intro"].show && <Intro />}
        {home.sections["product"].show && <Product />}
        {home.sections["about"].show && <About />}
        {/* {home.sections["service"].show && <div>servive </div>} */}
        <div className="w-full h-14"></div>
       </div>
      </div>

    }
    </div>
  );
};

export default HomePageLeftSideContainer;
