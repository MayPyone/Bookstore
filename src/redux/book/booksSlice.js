import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalbooks: [],
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O92kginp6T1sTL75SMAS/books');
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addUsers = createAsyncThunk('user/addUsers', async (data) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/O92kginp6T1sTL75SMAS/books',
      data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteUsers = createAsyncThunk('user/addUsers', async (id) => {
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
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.totalbooks = action.payload;
    });
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
