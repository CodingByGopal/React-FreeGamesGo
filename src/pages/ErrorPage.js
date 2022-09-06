import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const ErrorPage = ({ setProgress }) => {
  useEffect(() => {
    setProgress(0);
    setProgress(100);
  }, [setProgress]);

  const navigate = useNavigate();

  // using this fallback image
  const replaceAltImage = (e) => {
    e.currentTarget.src =
      "https://raw.githubusercontent.com/CodingByGopal/imagesAsLink/main/imgFallBack.jpg";
  };

  return (
    <div className=" md:pt-10 pt-40 h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className=" text-7xl text-green-500 font-dark font-extrabold mb-8">
            {" "}
            404
          </div>
          <p className="text-2xl md:text-3xl  font-light leading-normal mb-8">
            Sorry we couldn't find the page you're looking for
          </p>

          <button
            onClick={() => navigate("/")}
            className=" px-5 moveBottomAnimation inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none  duration-300 bg-green-600 hover:bg-green-900"
          >
            Back to homepage
          </button>
        </div>
        <div className=" w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            onError={replaceAltImage}
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
