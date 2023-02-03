import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get(
      "https://mern-ecommerce-backend-ten.vercel.app/api/products?page=0"
    );
    console.log(response.data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
