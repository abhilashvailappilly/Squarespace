import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
   title:{
    text:"Your title", font:"default font"
   },
   color:{
    color1:"",color2:"",color3:""
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
                ...action.payload // Overwrite only the properties provided in the payload
              };
        },
        clearTitle:(state,action)=>{
            state.title = {
                text:"Your title", font:"default font"
               }
        },
        
    }
})

export const {setTitle,clearTitle} = homeSlice.actions
export default homeSlice.reducer