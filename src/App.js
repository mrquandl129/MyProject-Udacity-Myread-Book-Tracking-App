import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import HomePage from './HomePage';
import Search from './Search';
import HookQuery from './HookQuery';

function App() {
  const [data, setData] = useState([]);

  function initMapBook(books) {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  }

  const [mapBook, setMapBook] = useState(new Map());

  async function initBooks() {
    await getAll().then((item) => {
      if (item) {
        setData(item);
        setMapBook(initMapBook(item));
      }
    });
  }

  async function handleUpdateShelf (book, shelf) {
    await update(book, shelf);
    initBooks();
  }
  
  const [query, setQuery] = useState([]);
  const [searchQuery] = HookQuery(query);

  const handleSearchQuery = (e) => { setQuery(e.target.value) };

  const [componentBook, setComponentBook] = useState([]);
  useEffect(() => {
    const combiningBooks = searchQuery.map((item) => {
      if (item && mapBook.has(item.id)) {
        return mapBook.get(item.id);
      } else {
        return item;
      }
    });
    setComponentBook(combiningBooks);
    initBooks();
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/search" element={ <Search handleSearchQuery={handleSearchQuery} query={query} handleUpdate={handleUpdateShelf} mergedBooks={componentBook}  /> }
          />
          <Route path="/" element={ <HomePage booksData={data} handleUpdate={handleUpdateShelf} /> }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
