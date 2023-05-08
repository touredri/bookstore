import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    statusCheck: (state) => ({ ...state, status: 'Under construction' }),
  },
});

export const { statusCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
