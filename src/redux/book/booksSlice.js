import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalbooks: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      if (action.payload.title !== '' && action.payload.author !== '') {
        state.totalbooks.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      state.totalbooks = state.totalbooks.filter((item) => item.item_id !== action.payload);
      state.totalbooks.forEach((item, index) => {
        item.item_id = `item${index + 1}`;
      });
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
