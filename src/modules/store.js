import { configureStore } from "@reduxjs/toolkit";
import productSlice from "redux/productSlice";
import logger from "redux-logger";
import cartSlice from "redux/cartSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
