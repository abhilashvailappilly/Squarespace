import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
    currentPage : "home",
    currentPageIndex : 3
}
const pageSlice = createSlice({
    name:"pageSlice",
    initialState,
    reducers :{
        setCurrentPage:(state,action)=>{
            state.currentPage = action.payload
        },
        clearCurrentPage:(state,action)=>{
            state.currentPage = "home"
        },
        setCurrentPageIndex:(state,action)=>{
            state.currentPageIndex = action.payload
        }
    }
})

export const {setCurrentPage,clearCurrentPage} = pageSlice.actions
export default pageSlice.reducer