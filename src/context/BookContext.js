import { createContext, useState, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'

export const BookContext = createContext({});

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
        console.log("initial loading of books");
        await BooksAPI.getAll().then((data) => {
          setBooks(data);
        });
      };
    
      const updateBook = async (book, shelfChange) => {
        await BooksAPI.update(book, shelfChange).then(() => {
          let onShelf = false;
          const newBooks = books.map((thisBook) => {
            if (thisBook.id === book.id) {
              onShelf = true;
              return { ...thisBook, shelf: shelfChange };
            }
            return thisBook;
          });
          !onShelf && newBooks.push({ ...book, shelf: shelfChange });
          setBooks(newBooks);
        });
      };

    useEffect(() => {
        getAllBooks();
      }, []);

      return(
          <BookContext.Provider value={{books, updateBook}}>
              {props.children}
          </BookContext.Provider>
      )
}

export default BookContextProvider;