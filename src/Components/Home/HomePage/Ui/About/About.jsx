import React, { useEffect, useState } from 'react'
import { useStoreHook } from '../../../../../Hooks/UseStoreHook'
import { setIsEditing } from '../../../../../Store/Slices/MenuSlice'

const About = () => {

  const [bgColor,setBgColor] = useState("")
  const [fontColor , setFontColor] = useState("")
  const [buttonColor,setButtonColor] = useState("")
  const [font,setFont] = useState("")
  const [color,setColors] = useState({  section: "Professional",
    palette: "p1",
  });
  const {home , menu ,dispatch} = useStoreHook()

  useEffect(()=>{
    setColors(home?.selectedColor)
  },[home?.selectedColor])
  useEffect(()=>{
    setBgColor( home?.color[color.section][color.palette]?.c1 || "#fff" )
    setButtonColor( home?.color[color.section][color.palette]?.c2 || "#DCDCDC" )
    setFontColor( home?.color[color.section][color.palette]?.c3 || "#003000" )
  },[color])
  useEffect(() => {
    const { section, font } = home?.selectedFont 
    
    const selectedFont = home?.font[section]?.[font]?.font || ""; 
    setFont(selectedFont)

    // setFontStyle({ fontFamily: selectedFont });
  }, [home?.selectedFont, home?.font])

  const [size, setSize] = useState({ width: 300, height: 100 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
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
    <div className="w-full h-3/4  flex hover:border-4 hover:border-blue-600  ">
      
      <div className="w-1/2 h-full bg-green-400">
        <img src="https://static1.squarespace.com/static/638634996334031d32d130cd/640e2ba285cff559a64eae69/640e2ba285cff559a64eae7f/1667245698226/Chair+.jpg?format=1500w" className='w-full h-full object-cover' alt="image" loading='lazy' />
      </div>
      <div className="w-1/2 h-full p-5 flex flex-col justify-center items-center">
          <div className='flex flex-col justify-center items-center'>
          <h1 className={`text-xl  lg:text-4xl md:text-3xl font-semibold ${font}`} style={{color:buttonColor}}>More about <br/> our brand</h1>
          <span style={{color:fontColor}} className={`${font} text-xs md:text-lg`}>Tell People about who your are, your origin, your process,or your inspirations. Tap into your creativity.You've got this. The way you tell your story online can make all the difference.</span>
          </div>
          <div>
            <button className={`rounded-lg mt-5 lg:mt-10  w-28 h-10 text-white text-xs ${font}`}  style={{background:buttonColor , color:fontColor}}>LEARN MORE</button>
          </div>

          
      
      </div>

 
    
  </div>
  )
}

export default About
