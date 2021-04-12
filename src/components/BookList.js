import React from 'react'
import { Row } from 'react-bootstrap'
import BookCard from './BookCard'

const BookList = ({ books, updateBook }) => {
  return (
    <Row className="m-0">
      {books.map(book => (
        <BookCard
          key={book.id}
          updateBook={updateBook}
          book={book}
        />
      ))}
    </Row>
  )
}

export default BookList
