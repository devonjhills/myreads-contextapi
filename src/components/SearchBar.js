import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { query, handleQuery, bookResults } = useContext(SearchContext);

  return (
    <div className="my-jumbo">
      <InputGroup hasValidation className="mb-5">
        <Link to="/">
          <Button variant="dark" title="Return Home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Link>
        <Form.Control
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
          isValid={bookResults}
          isInvalid={query && bookResults.length === 0}
        />
        <Form.Control.Feedback type="invalid">
          No results found for this query
        </Form.Control.Feedback>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
