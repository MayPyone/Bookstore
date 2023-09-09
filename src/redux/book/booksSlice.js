import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalbooks: [],
};

export const fetchBooks = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O92kginp6T1sTL75SMAS/books');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBooks = createAsyncThunk('user/addUsers', async (data) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O92kginp6T1sTL75SMAS/books',
      data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBooks = createAsyncThunk('user/addUsers', async (id) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O92kginp6T1sTL75SMAS/books/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.totalbooks = Object.keys(action.payload).map((item_id) => ({
        item_id,
        ...action.payload[item_id][0],
      }));
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
    });
    builder.addCase(fetchBooks.rejected, () => {
    });
    builder.addCase(addBooks.fulfilled, (state, action) => {
      state.totalbooks.push(action.payload);
    });
  },
});
export default bookSlice.reducer;
