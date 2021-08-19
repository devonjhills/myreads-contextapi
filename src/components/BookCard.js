import React from 'react'
import { Card, Col } from 'react-bootstrap'
import MoveToShelfMenu from './MoveToShelfMenu'

const BookCard = ({ book }) => {
  return (
    <Col className="mb-1 mt-2" xs sm md={6} lg={4} xl={4}>
      <Card border-variant="dark"
        bg-variant="dark"
        text="info"
        border="dark"
        className="text-center">
        <div className="card-horizontal">
          <Card.Img
            style={{ width: 128, height: 193 }}
            src={book.imageLinks && book.imageLinks.thumbnail}
            alt="Book Cover Not Available">
          </Card.Img>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle
              className="text-muted mb-3">
              {(book.authors) ? (book.authors).join(", ") : 'No Author Listed'}
            </Card.Subtitle>
          </Card.Body>
        </div>
        <MoveToShelfMenu
          book={book} />
      </Card>
    </Col>
  )
}

export default BookCard
