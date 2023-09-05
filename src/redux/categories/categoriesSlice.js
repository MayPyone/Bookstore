import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    check: (state) => {
      if (state.status === 'Under construction') {
        state.status = 'Under construction';
      }
    },
  },
});

export default categorySlice.reducer;
