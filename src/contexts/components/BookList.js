import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { allBooks } = useContext(BookContext);
  return allBooks.length ? (
    <div className="book-list">
      <ul>
        {allBooks.map((theBook) => {
          return <BookDetails theBook={theBook} key={theBook.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read</div>
  );
};

export default BookList;
