import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: '',
  },
  reducers: {
    statusCheck: (state) => ({ ...state, status: 'Under construction' }),
  },
});

export const { statusCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
