import React from "react";

const BookShelf = ({book, handleUpdate }) => {
    const handleUpdateShelf = (e) => {
        const value = e.target.value;
        handleUpdate(book, value);
    };
    return (
        <select value = {book.shelf ? book.shelf : "none"} onChange = {handleUpdateShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    );
};

export default BookShelf;