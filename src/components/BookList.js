import React from 'react'
import { Row } from 'react-bootstrap'
import BookCard from './BookCard'

const BookList = ({books}) => {
  return (
    <Row className="m-0">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </Row>
  )
}

export default BookList
