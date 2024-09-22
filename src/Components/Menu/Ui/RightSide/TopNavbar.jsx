import React from "react";
import IconArrowUpRight from "../../../Others/Icon/TopRightArrow";
import IconBxDesktop from "../../../Others/Icon/Desktop";
import IconMobile from "../../../Others/Icon/Mobile";
import IconPaintbrush2 from "../../../Others/Icon/Brush";
import { setIsEditing } from "../../../../Store/Slices/MenuSlice";
import { useStoreHook } from "../../../../Hooks/UseStoreHook";
import toast from "react-hot-toast";
import { handleResetStore } from "../../../../Methods/Redux";

const TopNavbar = () => {
    const {menu ,  dispatch} = useStoreHook()
    const handleClickEdit = ()=>{
        dispatch(setIsEditing(!menu?.isEditing))
        
    }
    const handleReset = ()=>{
      handleResetStore()
      
  }
  return (
    <div className="w-full bg-white h-16 mt-5 flex items-center justify-between">
      <div className=" flex items-center w-1/6 h-full">
        <button className="rounded-md hover:bg-gray-200 text-black text-base font-semibold w-12 h-12  ml-3 bg-white" onClick={handleClickEdit}>
          {menu.isEditing ? "Save" : "Edit"}
        </button>
        {/* <button   className="  rounded-md hover:bg-gray-200 text-black text-base font-semibold w-12 h-12  ml-3 bg-white">
          SAVE
        </button> */}
      </div>
      <div className="w-1/6 h-full flex flex-col justify-center items-center">
        <h1 className="text-xs font-bold text-black">Home</h1>
        <h1 className="text-gray-500 font-bold text-xs">Page . Published</h1>
      </div>
      <div className=" flex justify-between items-center w-1/6 h-full">
        <div className="flex w-2/4 border-4 rounded-lg items-center justify-center ">
          <div className="w-1/2 flex justify-center">
            <IconBxDesktop />
          </div>
            <div className="w-1/2 flex justify-center bg-gray-200">
            <IconMobile />
            </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <IconPaintbrush2 />
        </div>
        <div className="w-1/4 flex justify-center " onClick={handleReset}>
          <IconArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
