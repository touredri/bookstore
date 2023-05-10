import { createSlice } from '@reduxjs/toolkit';

// Create a slice of state
const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  reducers: {
    addBook: (state, { payload }) => {
      state.push(payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
