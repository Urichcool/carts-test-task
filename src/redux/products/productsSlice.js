import { createSlice } from '@reduxjs/toolkit';
import { fetchProductById } from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchProductById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      }),
});

export const productsReducer = productsSlice.reducer;

export const getProducts = state => state.products.items;
export const getProductsIsLoading = state => state.products.isLoading;
export const getProductsError = state => state.products.error;