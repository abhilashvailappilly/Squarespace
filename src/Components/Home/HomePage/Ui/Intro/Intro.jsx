import React, { useEffect, useState } from 'react';
import { useStoreHook } from '../../../../../Hooks/UseStoreHook';
import { Rnd } from 'react-rnd';
import toast from 'react-hot-toast';
import { setIntroTitle, setIsEditing, setIsSaved } from '../../../../../Store/Slices/MenuSlice';

const Intro = () => {
  const { home , menu ,dispatch} = useStoreHook();
  const [font, setFont] = useState("");

  useEffect(() => {
    const { section, font } = home?.selectedFont || {}; // Destructure and handle undefined
    const selectedFont = home?.font?.[section]?.[font]?.font || "";
    setFont(selectedFont);
  }, [home?.selectedFont, home?.font]);

  const [size, setSize] = useState({ width: 500, height: 100 });
  const [position, setPosition] = useState({ x: 400, y: 100 });
  const [isEditing, setEditing] = useState(false); 
  const [save, setSave] = useState(false);
  

  const handleTitleChange = (e) => {     
    dispatch(setIntroTitle(e.target.value))
  };

useEffect(()=>{
  setEditing(menu?.isEditing)
},[menu?.isEditing ])
useEffect(()=>{
  setSave(menu?.isSaved)
},[menu?.isSaved ])
  const handleDoubleClick = () => {
    if (!save) {
      toast("Please enable edit");
      return;
    }
    setIsEditing(true); 
  };

  const handleDrag = (d) => {
    if (!isEditing) {
      toast("Please enable edit");
      return;
    }
    setPosition({ x: d.x, y: d.y })
  };
  const handleResize = (ref,position) => {
    if (!isEditing) {
      toast("Please enable edit");
      return;
    }
    setSize({
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
    });
    setPosition(position); 
  };


  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full h-2/3 bg-green-300 hover:border-4 hover:border-blue-600 relative">
      <div className="w-full h-full overflow-hidden ">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/028/151/527/small_2x/close-up-modern-white-table-top-with-free-space-to-edit-your-product-display-with-books-above-the-living-room-blurred-in-the-background-generative-ai-photo.jpeg"
          className="object-cover w-full h-full"
        />
        <div className="absolute w-full h-full inset-0 flex justify-center items-center bg-opacity-50 bg-black">
          <Rnd
         
            size={{ width: size.width, height: size.height }}
            position={{ x: position.x, y: position.y }}
            onDragStop={(_, d) => handleDrag(d)}
        
            onResizeStop={(e, direction, ref, delta, position) => handleResize(ref,position)}
            bounds="parent"
            minWidth={100}
            minHeight={50}
            // maxWidth={500}
            // maxHeight={300}
          >
            <div className="border-2 w-full  h-full flex justify-center items-center overflow-hidden">

            {isEditing ? (
              <input
                // className="text-center w-full  bg-transparent outline-none"
                className={`text-white outline-none w-full text-4xl bg-transparent cursor-pointer font-bold ${font}`}
                value={menu?.website?.intro?.title}
                onChange={handleTitleChange}
                onBlur={handleBlur}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    setIsEditing(false);
                  }
                }}
                autoFocus
              />
            ) : (
             
                  <span onDoubleClick={handleDoubleClick} className={`text-white text-4xl cursor-pointer font-bold ${font}`}> {menu?.website?.intro?.title}</span>
            )}
             </div>
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default Intro;
