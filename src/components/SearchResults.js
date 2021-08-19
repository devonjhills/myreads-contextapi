import React, { useContext } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../context/SearchContext';

const SearchResults = () => {

  const {bookResults} = useContext(SearchContext);

  return (
    <Jumbotron className="m-1">
      <SearchBar />
      <div className="search-books-results">
        {bookResults.length > 0 ?
          <BookList
            books={bookResults}
          /> :
          <h3 className="text-center mt-5">
            <FontAwesomeIcon className="mr-1" icon={faFrown} />No Results
          </h3>
        }
      </div>
    </Jumbotron>
  )
};

export default SearchResults;
