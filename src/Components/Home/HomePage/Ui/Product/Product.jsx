import React, { useEffect, useState } from "react";
import { useStoreHook } from "../../../../../Hooks/UseStoreHook";

const Product = () => {
  
  const [fontColor , setFontColor] = useState("")
  const [buttonColor,setButtonColor] = useState("")
  const [color,setColors] = useState({  section: "Professional",
    palette: "p1",
  });
  const {home} = useStoreHook()

  useEffect(()=>{
    setColors(home?.selectedColor)
  },[home?.selectedColor])
  useEffect(()=>{

    setButtonColor( home?.color[color.section][color.palette]?.c2 || "#DCDCDC" )
    setFontColor( home?.color[color.section][color.palette]?.c3 || "#003000" )
  },[color])
  return (
    <div className="w-full h-2/3   hover:border-4 hover:border-blue-600  ">
      <div className="w-full h-1/6  flex justify-center items-end">
        <span className="text-xl font-semibold text-gray-500" style={{color:buttonColor}}>Featured Products</span>
      </div>
      <div className="w-full h-4/6 flex gap-2 justify-evenly items-center">
        <div>
          <div className="w-32 h-3/4 bg-red-500 rounded-full overflow-hidden">
            <img
              src="https://cdn.decornation.in/wp-content/uploads/2020/06/zanewhiteresize.jpg"
              alt="product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="underline gap-1 underline-offset-4" style={{color:fontColor}}>Product name</span>
            <span  style={{color:fontColor}}>$ 25</span>
          </div>
        </div>

        <div>
          <div className="w-32 h-1/2 bg-red-500 rounded-full overflow-hidden">
            <img
              src="https://cdn.decornation.in/wp-content/uploads/2020/06/zanewhiteresize.jpg"
              alt="product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className=" underline underline-offset-4 " style={{color:fontColor}} >Product name</span>
            <span  style={{color:fontColor}}>$ 25</span>
          </div>
        </div>

        <div>
          <div className="w-32 h-3/4 bg-red-500 rounded-full overflow-hidden">
            <img
              src="https://cdn.decornation.in/wp-content/uploads/2020/06/zanewhiteresize.jpg"
              alt="product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="underline underline-offset-4 " style={{color:fontColor}}>Product name</span>
            <span  style={{color:fontColor}}>$ 25</span>
          </div>
        </div>
      </div>

      <div className="w-full h-1/6  flex justify-center items-center">
        <button className=" text-white text-xs w-24 h-2/3 rounded-2xl" style={{background:buttonColor , color:fontColor}}>SHOP ALL</button>
      </div>
      
    </div>
  );
};

export default Product;
