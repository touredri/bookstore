import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import './book.css';
import { getBooks } from '../redux/books/bookSlice';

export default function BookList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const books = useSelector((store) => store.books);

  return (
    <div className="main">
      <div>
        {books.books.map((book) => (
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            id={book.item_id}
            key={book.item_id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}
