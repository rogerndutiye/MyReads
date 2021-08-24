import React from 'react';

import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = ({shelf,books,onBookShelfUpdate}) =>{

    const booksInThisShelf= books.filter(book => book.shelf === shelf.id);
    //console.log(booksInThisCategory)
    return(
        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                    <ol className="books-grid">
        {booksInThisShelf.map(book => (

            <Book key={book.id} shelf={shelf.id} book={book} onBookShelfUpdate={onBookShelfUpdate} />
        ))}
         </ol>
         </div>
    </div>
    </div>
    </div>
    )

};

BookShelf.propTypes = {
    shelf : PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onBookShelfUpdate:PropTypes.func.isRequired
  };


export default BookShelf;