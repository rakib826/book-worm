import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold pt-10 pb-10">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-5/6 justify-center">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
