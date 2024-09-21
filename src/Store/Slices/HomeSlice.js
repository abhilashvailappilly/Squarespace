import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
   title:{
    text:"Your title", font:"default font"
   },
   selectedColor: {section:"Professional", palette:"p1"},
   selectedFont: {section:"Professional", font:"f1"},
   color:{
    Professional:{
        p1:{c1:"#347928",c2:"#C0EBA6",c3:"#FCCD2A"} , 
        p2:{c1:"#001F3F",c2:"#3A6D8C",c3:"#6A9AB0"} , 
        p3:{c1:"#A5B68D",c2:"#003000",c3:"#000"} , 
        p4:{c1:"#795757",c2:"#664343",c3:"#3B3030"} , 
    },
    Playful:{
        p1:{c1:"#16423C",c2:"#6A9C89",c3:"#C4DAD2"} , 
        p2:{c1:"#CDC2A5",c2:"#AAB396",c3:"#674636"} , 
        p3:{c1:"#821131",c2:"#C7253E",c3:"#E85C0D"} , 
        p4:{c1:"#1E201E",c2:"#ffff",c3:"#697565"} , 
    },
   },
   font:{
    Professional:{
        f1:{name:"Roboto",font:"Roboto"} , 
        f2:{name:"Instrument Serif",font:"Newsreader"} , 
        // f3:{c1:"#A5B68D",c2:"#003000",c3:"#000"} , 
        // f4:{c1:"#795757",c2:"#664343",c3:"#3B3030"} , 
    },
    Playful:{
        f1:{name:"Shrikhand",font:"Bitter"} , 
        f2:{name:"Young Serif",font:"Bitter"} , 
    },
   },
   sections:{
    intro:{ show:false, name:"Intro section" } ,
    product:{ show:false, name:"Product section" } ,
    about:{ show:false, name:"About section" } ,
    // service:{ show:false, name:"Service section" } ,
    // service:{ show:false, name:"Service section" } ,
   }
}
const homeSlice = createSlice({
    name:"homeSlice",
    initialState,
    reducers :{
        setTitle:(state,action)=>{
            console.log(state)
            state.title = {
                ...state.title, 
                ...action.payload 
              };
        },
        clearTitle:(state,action)=>{
            state.title = {
                text:"Your title", font:"default font"
               }
        },
        setSections:(state,action) => {
            const { sectionKey, updatedData } = action.payload;
            state.sections[sectionKey] = {
                ...state.sections[sectionKey], 
                ...updatedData, 
            };
        },
        setSelectedColor : (state,action ) => {
            console.log(state.selectedColor)
            // console.log(action.payload)
            const {section,palette} = action.payload;
            state.selectedColor= {...state.selectedColor,section,palette}
        },
        setSelectedFont :(state,action) => {
            const {section,font} = action.payload;
            state.selectedFont= {...state.selectedFont,section,font}
        }
        
    }
})

export const {setTitle,clearTitle,setSections,setSelectedColor,setSelectedFont} = homeSlice.actions
export default homeSlice.reducer