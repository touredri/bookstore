import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OBNKWGIJ4XQMsqXwQmgK/books/';

export const getBooks = createAsyncThunk('book/getBook', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('book/addBook', async (book, thunkAPI) => {
  try {
    await axios.post(url, book);
    thunkAPI.dispatch(getBooks());
    const res = thunkAPI.getState().books;
    return res;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('book/remove', async (id, thunkAPI) => {
  try {
    await axios.delete(url + id);
    thunkAPI.dispatch(getBooks());
    const res = thunkAPI.getState().books;
    return res.data;
  } catch (error) {
    return error.message;
  }
});

// Create a slice of state
const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const newArray = [];
        keys.forEach((key) => {
          newArray.push(Object.assign({ item_id: key }, ...payload[key]));
        });
        state.books = [...newArray];
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.books.push(payload); // add book to the list
      })
      .addCase(removeBook.fulfilled, (state, { payload }) => {
        state.books = state.books.filter((book) => book.item_id !== payload); // remove book
      });
  },
});
export default bookSlice.reducer;
