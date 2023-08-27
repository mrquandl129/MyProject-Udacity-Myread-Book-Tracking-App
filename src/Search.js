import React from "react";
import SearchShelf from "./components/SearchShelf";
import { NavLink } from "react-router-dom";

const Search = ({
    handleSearchQuery,
    query,
    handleUpdate,
    mergedBooks,
}) => {
    return (
        <div className="search-books">
        <div className="search-books-bar">
            <NavLink to="/" className="close-search">
                Close
            </NavLink>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title, author, or ISBN"
              onChange={handleSearchQuery}
            />
          </div>
        </div>
        {/* Search Shelf */}
        <SearchShelf
          query={query}
          mergedBooks={mergedBooks}
          handleUpdate={handleUpdate}
        />
      </div>
    )
};

export default Search;