import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/booksSlice';
import categoriesReducer from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,

  },
});

export default store;
