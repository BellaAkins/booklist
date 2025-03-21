import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_EACHBOOK",
      eachBook: {
        title: title,
        author: author,
      },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
