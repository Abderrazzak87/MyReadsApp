import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearchBar from './BookSearchBar'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(result => {
      console.log(result)
      this.setState({books:result})
    })
  }

  updateShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(result => {

      BooksAPI.getAll().then(result => {
        console.log(result)
        this.setState({books:result})
      })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <BookSearchBar 
          books={books}
          updateShelf={this.updateShelf}
          />
        )}
        />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  key="Currently Reading"
                  bookshelftitle="Currently Reading"
                  books={books.filter(book => book.shelf === 'currentlyReading')}
                  updateShelf={this.updateShelf}
                />
                <BookShelf
                  key="Want to Read"
                  bookshelftitle="Want to Read"
                  books={books.filter(book => book.shelf === 'wantToRead')}
                  updateShelf={this.updateShelf}
                />
                <BookShelf
                  key="Read"
                  bookshelftitle="Read"
                  books={books.filter(book => book.shelf === 'read')}
                  updateShelf={this.updateShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
