import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const Navbar = () => {
  const { allBooks } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Book List</h1>
      <p>Currently you have {allBooks.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
