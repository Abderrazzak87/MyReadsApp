import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'

class BookSearchBar extends Component {

    /* Search Tba required props */
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    /* State contains the search query input and the list of books returned by the query */
    state = {
        query: '',
        returnedBooks: []
    }

    updateQuery = (query) => {

        // Update the variable state query
        this.setState({ query: query.trim()})
        this.searchBooks(query)

    }

    searchBooks = (query) => {
        if (query && query !== '') {
            // Call the BooksAPI serach method.
            BooksAPI.search(query).then((results) => {
                (results && results.length > 1) ? this.updateBooksShelf(results) : this.setState({ returnedBooks: [] })
            })

        }
        else {
            this.setState({ returnedBooks: [] })
        }
    }

    updateBooksShelf = (bookList) => {
        if (bookList && bookList.length > 1) {
            const books = this.props.books
            bookList.forEach(element => {

                for (const book of books) {
                    if (element.id === book.id){
                        element.shelf = book.shelf
                        
                    }
                }
            
            })
        }

        this.setState({ returnedBooks: bookList })

    }

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {(this.state.returnedBooks && this.state.returnedBooks.length > 0) &&
                        this.state.returnedBooks.map((book) => (
                            <li key={book.id}>
                                <Book
                                    key={book.id}
                                    updateShelf={this.props.updateShelf}
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }



}

export default BookSearchBar