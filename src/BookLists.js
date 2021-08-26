import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const BookLists = ({ bookShelves, books, onBookShelfUpdate }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {bookShelves.map((c) => (
        <BookShelf
          key={c.id}
          shelf={c}
          books={books}
          onBookShelfUpdate={onBookShelfUpdate}
        />
      ))}
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
};

BookLists.propTypes = {
  bookShelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onBookShelfUpdate: PropTypes.func.isRequired,
};

export default BookLists;
