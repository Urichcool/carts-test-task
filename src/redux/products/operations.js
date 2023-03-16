import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchProductById = createAsyncThunk(
  'fetchProductById',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`products/${params.id}`);
      response.data.quantity = params.quantity;
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
