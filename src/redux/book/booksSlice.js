import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalbooks: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.totalbooks.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.totalbooks = state.totalbooks.filter((item) => item.id !== itemId);
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
