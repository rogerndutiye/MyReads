import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

import PropTypes from "prop-types";

class BookSearch extends Component {
  state = {
    inputValue: "",
  };

  searchHandle = (event) => {
    this.setState(() => ({
      inputValue: event.target.value,
    }));

    this.props.onSearch(event.target.value);
  };
  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button
                className="close-search"
                onClick={this.props.onClearSearch}
              >
                Close
              </button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={this.state.inputValue}
                placeholder="Search by title or author"
                onChange={this.searchHandle}
                autoFocus
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchBookResults.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  shelf={book.shelf ? book.shelf : "None"}
                  onBookShelfUpdate={this.props.onBookShelfUpdate}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  onBookShelfUpdate: PropTypes.func.isRequired,
};

export default BookSearch;
