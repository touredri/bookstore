import { createSlice } from '@reduxjs/toolkit';

// Create a slice of state
const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => state.books.filter((book) => book.id !== action.payload.id),
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
