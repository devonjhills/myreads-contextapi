import { createContext, useState, useContext } from "react";
import * as BooksAPI from "../BooksAPI";
import { BookContext } from "./BookContext";

export const SearchContext = createContext({});

const SearchContextProvider = (props) => {
  const { books } = useContext(BookContext);

  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);

  const handleQuery = async (query) => {
    setQuery(query);
    if (query !== "") {
      await BooksAPI.search(query).then((results) => {
        if (!results || results.error) {
          setBookResults([]);
        } else if (Array.isArray(results)) {
          results = results.map((book) => {
            let thisBook = books.find(({ id }) => book.id === id);
            return {
              ...book,
              shelf: thisBook?.shelf ?? "none",
            };
          });
          setBookResults(results);
        }
      });
    } else {
      setBookResults([]);
    }
  };

  return (
    <SearchContext.Provider value={{ query, bookResults, handleQuery }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
