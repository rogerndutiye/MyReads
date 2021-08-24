import React from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

const Book = ({shelf,book,onBookShelfUpdate}) =>{

 

    return(

        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}></div>
          <BookShelfChanger shelf={shelf} book={book} onBookShelfUpdate={onBookShelfUpdate}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors"> {book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
      </div>

    
    )

}

Book.propTypes ={
    shelf : PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onBookShelfUpdate:PropTypes.func.isRequired
}
export default Book;