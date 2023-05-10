import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import './book.css';

export default function Book({
  category, title, author, id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <div className="book">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="book-buttons">
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
