import React from 'react';
import { Link } from 'react-router-dom';
import img from './profil.png';
import './book.css';

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="nav">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <div className="links">
          <Link to="/" className="book">
            Books
          </Link>
          <Link to="/categories" className="CATEGORIES">Categories</Link>
        </div>
      </div>
      <img src={img} alt="profile" className="profile" />
    </div>
  );
}
