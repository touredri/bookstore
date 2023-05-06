import React from 'react';
import './book.css';

export default function Form() {
  return (
    <div className="add">
      <h2>ADD A NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Author" required />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}
