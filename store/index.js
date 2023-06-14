import { combineReducers, createStore } from "@reduxjs/toolkit";

import cartReducer from "@/store/cartSlice";
import productReducer from "@/store/filterSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["cart"],
};

const rootReducer = combineReducers({
   products: productReducer,
   cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
