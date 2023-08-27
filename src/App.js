import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import HomePage from './HomePage';
import Search from './Search';
import HookQuery from './HookQuery';

function App() {
  const [booksData, setData] = useState([]);

  const [query, setQuery] = useState([]);
  const [searchQuery] = HookQuery(query);

  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapIdBooks, setMapIdBooks] = useState(new Map());

  const getAllBooks = async () => {
    await getAll().then((res) => {
      setData(res);
      setMapIdBooks(createMapOfBooks(res));
    });
  };

  const handleUpdateShelf = async (book, shelf) => {
    await update(book, shelf);
    getAllBooks();
  };

  const handleSearchQuery = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
  };

  useEffect(() => {
    const combiningBooksShelf = searchQuery.map((book) => {
      if (mapIdBooks.has(book.id)) {
        return mapIdBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combiningBooksShelf);
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  console.log(booksData[0]);
  
  useEffect(() => {
    getAllBooks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/search" element={ <Search handleSearchQuery={handleSearchQuery} query={query} handleUpdate={handleUpdateShelf} mergedBooks={mergedBooks}  /> }
          />
          <Route path="/" element={ <HomePage booksData={booksData} handleUpdate={handleUpdateShelf} /> }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
