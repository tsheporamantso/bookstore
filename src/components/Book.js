import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../Redux/Books/booksSlice';

export default function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const deleteReload = () => {
    dispatch(removeBook(id));
    dispatch(getBooks());
  };
  return (
    <>
      <div className="booklist">
        <h2>List of Books</h2>
        <ul>
          <li className="bookitems">
            <p>
              {title}
            </p>
            <p>
              {author}
            </p>
            <p>
              {category}
            </p>
            <button type="button" className="button key" onClick={() => deleteReload()}>Remove</button>
          </li>
        </ul>
      </div>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
