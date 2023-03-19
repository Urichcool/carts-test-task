import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchProductById = createAsyncThunk(
  'fetchProductById',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`products/${params.id}`);
      response.data.quantity = params.quantity;
      return response.data;
    } catch (e) {
      toast.error(`Product with id: ${params.id} doesn't exist`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
