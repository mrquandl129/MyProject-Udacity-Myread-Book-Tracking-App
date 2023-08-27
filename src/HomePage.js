import React from 'react';
import Shelf from './components/Shelf';
import { NavLink } from "react-router-dom";

const HomePage = ({ booksData, handleUpdate }) => {
  return (
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              handleUpdate={handleUpdate}
              booksData={booksData}
              titleName="Currently Reading"
              shelf="currentlyReading"
            />
            <Shelf
              handleUpdate={handleUpdate}
              booksData={booksData}
              titleName="Want To Read"
              shelf="wantToRead"
            />
            <Shelf
              handleUpdate={handleUpdate}
              booksData={booksData}
              titleName="Read"
              shelf="read"
            />
          </div>
        </div>
        <div className="open-search">
          <NavLink to="/search">Add a book</NavLink>
        </div>
      </div>
  )
}

export default HomePage