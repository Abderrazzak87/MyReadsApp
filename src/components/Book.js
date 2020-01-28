import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Book extends Component {

    /* Book required props */
	static propTypes = {
		updateShelf: PropTypes.func.isRequired,
		book: PropTypes.object.isRequired
	}

    render() {

        const {book, updateShelf} = this.props
        const authors = (book.authors && book.authors.length > 1)  ? 
                        book.authors.join(", ") : book.authors
        const backgroundImage = (book.imageLinks && book.imageLinks.smallThumbnail) ? 
                                book.imageLinks.smallThumbnail : "none"


        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         
                         style={{ width: 128, 
                            height: 192, 
                            /* Use the background image only if there is one */
                            backgroundImage:`url(${backgroundImage})`}}>

                    </div>
                    <div className="book-shelf-changer">
                        <select
                        value={book.shelf}
                        onChange={event => updateShelf(book, event.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}
                </div>
            </div>
        )
    }

}

export default Book