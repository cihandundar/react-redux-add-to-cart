import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: `cart`,
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    add(state, action) {
      state?.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
