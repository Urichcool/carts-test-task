import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    catch {
      return thunkAPI.rejectWithValue(cartId)
    }
  }
)

export const addCart = createAsyncThunk('addCart', async (cart, thunkAPI) => {
  try {
    const response = await axios.post('carts/add', cart);
    axios.defaults.headers = { 'Content-Type': 'application/json' };
    return response.data;
  } catch (e) {
     toast.error(`User with id: ${cart.userId} doesn't exist`);
    return thunkAPI.rejectWithValue(e.message);
  }
});