import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pagesReducer from "../Slices/PagesSlice";
import homeReducer from "../Slices/HomeSlice";
import menuReducer from "../Slices/MenuSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage for web

const persistConfig = {
  key: "root", 
  storage,     
  whitelist: ["home", "menu"], 
};

const rootReducer = combineReducers({
  pages: pagesReducer,
  home: homeReducer,
  menu: menuReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
