import React, { useDeferredValue } from "react";
import Book from "./Book";

const SearchShelf = ({ handleUpdate, query, mergedBooks }) => {
    const noData = <div className="no_data">there's no data to show </div>;
  
    const deferredMergedBooks = useDeferredValue(mergedBooks);
    return (
        <div className="search-books-results">
          <ol className="books-grid">
            {deferredMergedBooks && query
              ? deferredMergedBooks.map((book) => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      handleUpdate={handleUpdate}
                    />
                  );
                })
              : noData}
          </ol>
        </div>
      );
};

export default SearchShelf;