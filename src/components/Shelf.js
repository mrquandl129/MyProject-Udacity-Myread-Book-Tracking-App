import React from "react";
import Book from "./Book";

const Shelf = ({ titleName, booksData, shelf, handleUpdate }) => {
    const bookShelf = booksData.filter((book) => book.shelf === shelf);

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{titleName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {bookShelf.map((book) => (
                <div key={book.id}>
                <Book book={book} handleUpdate={handleUpdate} />
                </div>
            ))}
            </ol>
        </div>
        </div>
    );
}
 
export default Shelf;