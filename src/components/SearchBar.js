import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {

  const {query, handleQuery} = useContext(SearchContext);

  return (
    <Container>
      <InputGroup className="mb-5">
        <InputGroup.Prepend>
          <Link to='/'>
            <Button
              variant="dark"
              title="Return Home">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </Link>
        </InputGroup.Prepend>
        <FormControl
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
        />
      </InputGroup>
    </Container>
  )
}

export default SearchBar
