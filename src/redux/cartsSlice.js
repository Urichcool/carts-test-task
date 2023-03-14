import { createSlice } from '@reduxjs/toolkit';
import { fetchCarts } from './operations';

const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCarts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.carts;
      }),
});

export const cartsReducer = cartsSlice.reducer;

export const getCarts = state => state.carts.items;
export const getIsLoading = state => state.carts.isLoading;
export const getError = state => state.carts.error;
