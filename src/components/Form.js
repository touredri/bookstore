import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import './book.css';

export default function Form() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const id = `item${books.length + 1}`;
    dispatch(addBook({ title, author, id }));
    e.target.reset();
  };
  return (
    <div className="add">
      <h2>ADD A NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Author" required />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}
