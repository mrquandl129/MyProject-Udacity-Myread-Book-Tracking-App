import React from "react";
import BookShelf from "./BookShelf";

const Book = ({ book, handleUpdate }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                            <BookShelf book={book} handleUpdate={handleUpdate} />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>
    );
};

export default Book