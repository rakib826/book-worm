import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="w-80 h-[420px] transition-transform duration-300 hover:scale-105">
        <div className="card bg-base-100 shadow-xl h-full flex flex-col p-4 hover:shadow-2xl transition-shadow duration-300">
          <figure className="bg-slate-50 rounded-lg w-full h-[240px] flex items-center justify-center overflow-hidden">
            <img
              className="w-28 object-cover rounded transition-transform duration-300 hover:scale-110"
              src={image}
              alt={bookName}
            />
          </figure>
          <div className="card-body flex flex-col flex-grow justify-start">
            <div>
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="py-1 px-2 bg-lime-100 mr-2 rounded-md italic text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title font-bold text-lg">{bookName}</h2>
            <p className="italic text-sm">By {author}</p>
            <div className="border-b-2 my-1"></div>
            <div className="flex flex-row justify-between items-center text-sm">
              <p className="text-gray-600">{category}</p>
              <p className="text-right text-gray-700 font-semibold">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
