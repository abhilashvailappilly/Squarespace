import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "../Slices/PagesSlice";
import homeReduer from "../Slices/HomeSlice";
const  store = configureStore({
    reducer: {
     pages:pagesReducer,
     home:homeReduer,
    }
})

export default store