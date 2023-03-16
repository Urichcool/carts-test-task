import { configureStore } from '@reduxjs/toolkit';
import { cartsReducer } from './carts/cartsSlice';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    products: productsReducer,
  },
});
