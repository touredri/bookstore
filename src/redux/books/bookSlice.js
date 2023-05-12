import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { async } from 'q';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Eb8OUpqa69TWgYQPazDO/books';

export const getBooks = createAsyncThunk('book/getBook', async (thunkAPI) => {
  try {
    const res = await axios(url);
    console.log(res.data);
    return res.date.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('errors');
  }
});
const postBook = createAsyncThunk('book/postBook', async (data) => {
  try {
    const pos = await axios.post(url, data);
  } catch (error) {
    return (error);
  }
});

// Create a slice of state
const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, { payload }) => [...state, payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
  extraReducers: {
    [getBooks.pending]: () => {},
    [getBooks.fulfilled]: (state, action) => { state.books = action.payload; },
    [getBooks.rejected]: () => {},
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
