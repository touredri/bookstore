import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<h3>Coming soon</h3>} />
      </Routes>
    </div>
  );
}

export default App;
