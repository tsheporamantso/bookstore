import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        <li>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" className="button key">Remove</button>
        </li>
      </ul>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
