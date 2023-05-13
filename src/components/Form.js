import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, getBooks } from '../redux/books/bookSlice';
import './book.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `item${books.books.length + 1}`;
    const bookData = {
      item_id: id,
      title,
      category: 'action',
      author,
    };
    dispatch(addBook(bookData));
    dispatch(getBooks());
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" className="Update-progress addButton"> Add </button>
      </form>
    </div>
  );
}
