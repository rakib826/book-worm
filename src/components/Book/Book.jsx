import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;

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
          <div>
            {tags.map((tag) => (
              <button className="py-1 px-2 bg-lime-100 mr-2 rounded-md italic text-sm">{tag}</button>
            ))}
          </div>
          <h2 className="card-title font-bold">
            {bookName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="flex-grow italic">By {author}</p>
          <div className="border-b-2 my-1"></div>
          <div className="flex flex-row justify-end items-center">
            <p> {category} </p>
            <p className="text-right"> {rating} </p>
          </div>
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
