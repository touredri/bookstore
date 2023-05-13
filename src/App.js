import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getBooks } from './redux/books/bookSlice';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
