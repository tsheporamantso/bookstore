import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../Redux/Books/booksSlice';

function Books() {
  const { bookList, status } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooks());
    }
    if (status === 'succeed') {
      dispatch(getBooks());
    }
  }, [status, dispatch]);
  return (
    <>
      <div>
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
        <Form />
      </div>
    </>
  );
}
export default Books;
