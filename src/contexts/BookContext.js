import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [allBooks, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("allBooks");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("allBooks", JSON.stringify(allBooks));
  }, [allBooks]);

  return (
    <BookContext.Provider value={{ allBooks, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
