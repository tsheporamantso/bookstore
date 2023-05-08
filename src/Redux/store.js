import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/Books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,

  },
});

export default store;
