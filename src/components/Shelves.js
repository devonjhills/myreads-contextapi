import React from "react";
import BookList from "./BookList";
import ShelfHeader from "./ShelfHeader";

const Shelves = ({ books, shelfName }) => {
  return (
    <div className="my-jumbo">
      <ShelfHeader heading={shelfName} />
      <BookList books={books} />
    </div>
  );
};

export default Shelves;
