import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBook, getBooks } from '../Redux/Books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const clickAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        item_id: uniqid(),
        title: newTitle,
        author: newAuthor,
        category: 'Fiction',
      },
    ));
    dispatch(getBooks());
  };
  return (
    <>
      <form>
        <h3>ADD NEW BOOK</h3>
        <input className="inputTitle" type="text" placeholder="Book title" required onChange={(e) => setNewTitle(e.target.value)} />
        <input className="inputAuthor" type="text" placeholder="Category" required onChange={(e) => setNewAuthor(e.target.value)} />
        <button className="submitButton" type="submit" onClick={clickAddBook}>Add Book</button>
      </form>
    </>
  );
}
