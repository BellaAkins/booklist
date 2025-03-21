import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./contexts/components/Navbar";
import BookList from "./contexts/components/BookList";
import BookForm from "./contexts/components/BookForm";

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
        <BookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
