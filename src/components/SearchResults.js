import React, { useContext } from "react";
import BookList from "./BookList";
import SearchBar from "./SearchBar";
import { SearchContext } from "../context/SearchContext";

const SearchResults = () => {
  const { bookResults } = useContext(SearchContext);

  return (
    <div>
      <SearchBar />
      <div className="search-books-results">
        {bookResults.length > 0 ? (
          <BookList books={bookResults} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchResults;
