import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BooksShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelftitle: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const {books, bookshelftitle, updateShelf} = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelftitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" key={bookshelftitle}>
                        {
                            books.map(book => (
                                <li key={book.id}>
                                    <Book key={book.id}
                                        updateShelf={updateShelf}
                                        book={book}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksShelf

