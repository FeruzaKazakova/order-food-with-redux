import { mealsSlice } from "./meals/mealsSlice";
import { basketSlice } from "./basket/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer:{
    meals: mealsSlice.reducer,
    basket: basketSlice.reducer,
  }
})