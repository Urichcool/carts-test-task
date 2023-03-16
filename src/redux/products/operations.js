import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchProductById = createAsyncThunk(
  'fetchProductById',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(`products/${productId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
