import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author } = book;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl h-full flex flex-col p-4">
        <figure className="bg-slate-50 rounded-lg">
          <img
            className="h-[240px] object-cover rounded mt-4 mb-4"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body flex flex-col flex-grow justify-start">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="flex-grow">
            {author}
          </p>
          <div className="card-actions justify-end mt-auto">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
