import { combineReducers } from 'redux';
import { configureStore } from '@redux/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducers = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});
const store = configureStore({
  reducer: rootReducers,
});
export default store;
