# MyReads App

## Description
```MyReadsApp``` is a simple single page React application that allows a user to track his favorite books reading. 

A book can be put in 3 different shelves ("Currently Reading", "Want to Read", "Read"). The user can move a book from one shelve to another when he wishes to read the book, when he is reading the book or when he finishes reading the book. The application allows the user to search new books from the Udacity Books API and add it to the desired shelf.

## Views and Components Hierarchy 

This application containes 2 views: 
* a main page that displays a list of "shelves", each of which contains a number of books. Each book has a control that lets the user select the shelf for that book. The main page also has a link to :

* a search page that allows a user to find books to add to his library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the search page, along with a control that allows to add the book to the user's library.

```js
App
    | search-books view
        | button : close-search
        | search-books-input-wrapper 
        | search-books-results
            | book
    | list-books main view
        | list-books-title : MyReads 
        | list-books-content
            | bookshelf
                | books-grid
                    | book
        | button : open-search
        
```

This React application is composed with the following React components:
* [`Book`](src/components/Book.js) : Represents a book.
* [`BookSearchBar`](src/components/BookSearchBar.js): The main component of the search view. Needs the [`Book`](src/components/Book.js) component to display the books resulted from the search query.
* [`BooksShelf`](src/components/BooksShelf.js) : The main component of the main page. Needs the [`Book`](src/components/Book.js) component to display the list of books present inside the shelf.

## How To Start
1. Clone this repository
```
git clone https://github.com/Abderrazzak87/MyReadsApp.git
```
2. Change directory to ```MyReadsApp``` folder and install all requisite npm packages :
```
cd MyReadsApp
npm install
```

3. Start the application :
```
npm start
```


## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Other Contributors

Starter HTML / CSS / JS code and BooksAPI taken from the [Udacity classroom repository](https://github.com/udacity/reactnd-project-myreads-starter).


## License

The contents of this repository are covered under the [MIT License](LICENSE).
