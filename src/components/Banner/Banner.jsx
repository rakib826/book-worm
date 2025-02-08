import React from "react";
import bannerImg from "../../assets/images/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 mr-20">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
