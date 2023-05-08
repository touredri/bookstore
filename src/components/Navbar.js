import React from 'react';
import { Link } from 'react-router-dom';
import './book.css';

export default function Navbar() {
  return (
    <div className="nav">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <div className="links">
        <Link to="/" className="book">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  );
}
