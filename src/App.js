import React, { Component } from "react";
import debounce from "lodash.debounce";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import BookLists from "./BookLists";
import BookSearch from "./BookSearch";

import "./App.css";

const bookShelves = [
  { id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Read" },
];

class App extends Component {
  // npm install --save react-router-dom
  // npm install --save form-serialize
  // npm install --save prop-types
  //npm i --save lodash.debounce

  state = {
    books: [],
    searchBookResults: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }
  updateBookShelf = (book, shelf) => {
    //console.log(book)
    //console.log(shelf)
    BooksAPI.update(book, shelf);
    if (shelf === "None") {
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id).concat(book),
      }));
    }
  };

  searchForBooks = debounce((query) => {
    //console.log(query);
    //let vs = JSON.stringify({ query });
    //console.log(vs);

    if (query.length > 1) {
      BooksAPI.search(query).then((books) => {
        //console.log(books);
        if (books.error) {
          this.setState({ searchBookResults: [] });
        } else {
          const mapReceivedBook = books.map((receivedBook) => {
            this.state.books.map((bookInshelf) => {
              if (receivedBook.id === bookInshelf.id) {
                receivedBook.shelf = bookInshelf.shelf;
              }
              return bookInshelf;
            });
            return receivedBook;
          });

          this.setState({ searchBookResults: mapReceivedBook });
        }
      });
    } else {
      this.setState({ searchBookResults: [] });
    }
  }, 300);
  clearSearch = () => {
    this.setState({ searchBookResults: [] });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <BookLists
                bookShelves={bookShelves}
                books={this.state.books}
                onBookShelfUpdate={this.updateBookShelf}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <BookSearch
                searchBookResults={this.state.searchBookResults}
                onSearch={this.searchForBooks}
                onBookShelfUpdate={this.updateBookShelf}
                onClearSearch={this.clearSearch}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
