import React from "react";
import bannerImg from "../../assets/images/books.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero min-h-screen bg-gradient-to-r from-sky-50 to-blue-00 text-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:g5p-16 px-6 lg:px-12">
          {/* Banner Image with Hover Effect */}
          <img
            src={bannerImg}
            className="w-[420px] h-[320px] rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            alt="Books"
          />
          {/* Banner Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              Explore the <span className="text-lime-500">World of Books</span>
            </h1>
            <p className="py-4 text-lg font-medium opacity-90">
              Dive into the best stories and knowledge with our curated
              collection. Your next favorite book awaits!
            </p>
            <button className="btn bg-lime-400 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-lime-500 hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
