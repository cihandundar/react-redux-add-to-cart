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
    return response.data;
  }
);

export const fetchDetails = createAsyncThunk(
  "product/fetchDetails",
  async (slug) => {
    const response = await axios.get(
      `https://mern-ecommerce-backend-ten.vercel.app/api/products/${slug}`
    );
    return response?.data[0];
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
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
