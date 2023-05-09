import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import './book.css';

export default function BookList() {
  const books = useSelector((store) => store.books);
  return (
    <div className="main">
      <div>
        {books.map((book) => (
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}
