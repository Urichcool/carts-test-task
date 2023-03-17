import { createSlice } from '@reduxjs/toolkit';
import { fetchCarts, deleteCart, addCart } from './operations';


const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    items: [],
    isLoading: false,
    isDeleting: false,
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
      })
      .addCase(deleteCart.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
        const index = state.items.findIndex(
          cart => cart.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.error = null;
        const index = state.items.findIndex(
          cart => cart.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(addCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        action.payload.id = state.items.length + 1
        state.items.push(action.payload);
      }),
});

export const cartsReducer = cartsSlice.reducer;

export const getCarts = state => state.carts.items;
export const getIsLoading = state => state.carts.isLoading;
export const getIsDeleting = state => state.carts.isDeleting;
export const getError = state => state.carts.error;
