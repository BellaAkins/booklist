import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const BookDetails = ({ theBook }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_EACHBOOK", id: theBook.id })}>
      <div className="title">{theBook.title}</div>
      <div className="author">{theBook.author}</div>
    </li>
  );
};

export default BookDetails;
