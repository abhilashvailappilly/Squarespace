import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
   title:{
    text:"Your title", font:"default font"
   },
   color:{
    color1:"",color2:"",color3:""
   },
   sections:{
    intro:{ show:false, name:"Intro section" } ,
    product:{ show:false, name:"Product section" } ,
    service:{ show:false, name:"Service section" } ,
    about:{ show:false, name:"About section" } ,
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
        }
        
    }
})

export const {setTitle,clearTitle,setSections} = homeSlice.actions
export default homeSlice.reducer