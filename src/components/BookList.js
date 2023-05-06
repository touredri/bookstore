import React from 'react';
import Form from './Form';
import Book from './Book';
import './book.css';

export default function BookList() {
  const list = [
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      category: 'Sci-Fi',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      category: 'History',
      author: 'J.R.R. Tolkien',
    },
  ];

  return (
    <div className="main">
      <div>
        {list.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            author={book.author}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}
