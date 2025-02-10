import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    author,
    bookName,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = book;
  // console.log(typeof bookId,typeof id,typeof data[0].bookId)
  console.log(book);

  return (
    <div className="w-5/6 mx-auto mt-20">
      <div className="flex flex-row justify-center w-5/6 mx-auto bg-gray-100 py-4 px-1 rounded-2xl">
        <div className="w-1/2 mx-4 flex justify-center items-center">
          <img
            className="w-full max-h-[663px] rounded-xl"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="w-1/2 mx-4">
          <h1 className="text-3xl font-bold"> {bookName} </h1>
          <h2 className="italic">By {author} </h2>
          <div className="border-b-2 my-4"></div>
          <h3 className="text-xl font-semibold"> {category} </h3>
          <div className="border-b-2 my-4"></div>
          <p className="my-4">
            {" "}
            <span className="font-bold">Review :</span>{" "}
            <span className="text-gray-500">{review}</span>{" "}
          </p>
          <div className="flex my-2">
            <p className="mr-4 font-bold">Tags : </p>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="py-1 px-2 bg-lime-200 mr-2 rounded-md italic text-sm"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="border-b-2 my-4"></div>
          <div className="flex flex-row">
            <p className="w-1/2 font-semibold text-gray-500">
              Number of Pages :{" "}
            </p>
            <p className="w-1/2 font-semibold">{totalPages}</p>
          </div>
          <div className="flex flex-row">
            <p className="w-1/2 font-semibold text-gray-500">Publisher : </p>
            <p className="w-1/2 font-semibold">{publisher}</p>
          </div>
          <div className="flex flex-row">
            <p className="w-1/2 font-semibold text-gray-500">
              Year of Publishing :{" "}
            </p>
            <p className="w-1/2 font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex flex-row">
            <p className="w-1/2 font-semibold text-gray-500">Rating : </p>
            <p className="w-1/2 font-semibold">{rating}</p>
          </div>
          <div className="my-4">
            <button className="py-2 px-4 border-2 border-lime-400 rounded">
              Read
            </button>
            <button className="py-2 px-4 border-2 border-lime-500 bg-lime-500 ml-6 rounded text-white">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
