import React, { Component } from "react";

import PropTypes from "prop-types";

class BookShelfChanger extends Component {
  // state = {
  //   shelf: ''
  // };
  handleUpdate = (event) => {
    const searchInputValue = event.target.value;
    // this.setState({ shelf: searchInputValue });
    this.props.onBookShelfUpdate(this.props.book, searchInputValue);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.handleUpdate}>
          <option value="" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="None">None</option>
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  onBookShelfUpdate: PropTypes.func.isRequired,
};

export default BookShelfChanger;
