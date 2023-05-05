import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="app">
    <h1>Bookstore</h1>
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nave-link">
          <Link to="/">Books</Link>
        </li>
        <li className="nave-link">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
