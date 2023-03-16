import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchCarts = createAsyncThunk(
  'getCarts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('carts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteCart = createAsyncThunk(
  'deleteCart',
  async (cartId, thunkAPI) => {
    try {
      const response = await axios.delete(`carts/${cartId}`);
      return response.data
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addCart = createAsyncThunk('addCart', async (cart, thunkAPI) => {
  try {
    const response = await axios.post('carts/add', cart);
    axios.defaults.headers = { 'Content-Type': 'application/json' };
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});