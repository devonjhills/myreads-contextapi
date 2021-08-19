import React, { useContext } from 'react'
import Shelves from './Shelves'
import { SHELFINFO } from '../constants'
import Footer from './Footer';
import { BookContext } from '../context/BookContext';

const Homepage = () => {

  const displayShelves = SHELFINFO.filter(shelf => shelf.key !== 'none');

  const {books} = useContext(BookContext);
  
  return (
    <>
      {displayShelves.map(shelf =>
        <Shelves
          key={shelf.key}
          shelfName={shelf.label}
          books={books.filter(book => book.shelf === shelf.key)}
        />
      )}
      <Footer />
    </>
  )
}

export default Homepage
