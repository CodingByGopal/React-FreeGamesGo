import React, { useState } from "react";

const SingleGameComponent = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="text-gray-600 body-font">
      <h1 className="moveLeftAnimation md:text-6xl md:px-5 mb-4 md:mb-0  text-gray-50 font-bold text-4xl">
        {props?.gameTitle}
      </h1>

      <div className="moveRightAnimation container md:px-5 py-4 mx-auto md:py-8  md:border-b-0 mb-10 pb-10 md:mb-7 md:pb-0 border-b border-gray-200">
        <h2 className="sm:text-3xl text-2xl font-medium  mb-2 text-gray-300">
          Description
        </h2>
        <p className="leading-relaxed text-base  text-gray-400">
          {readMore
            ? props?.gameDescription
            : `${props?.gameDescription?.substring(0, 1052)}...`}
          <button
            className=" font-light text-gray-50"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default SingleGameComponent;
