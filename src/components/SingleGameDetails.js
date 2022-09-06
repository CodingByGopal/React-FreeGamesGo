import React from "react";

const SingleGameDetails = (props) => {
  return (
    <div className="lg:flex md:px-5 moveBottomAnimation ">
      <div className="md:mb-4  mb-6">
        <h2 className="title-font font-semibold text-gray-50 tracking-wider text-sm mb-3">
          Minimum System Requirement
        </h2>
        <ul className="text-gray-400">
          <li>
            Os :{" "}
            {!props?.os || props?.os === "?"
              ? "Details Not Available"
              : props?.os}
          </li>
          <li>
            Processor :{" "}
            {!props?.processor || props?.processor === "?"
              ? "Details Not Available"
              : props?.processor}
          </li>
          <li>
            Memory :{" "}
            {!props?.memory || props?.memory === "?"
              ? "Details Not Available"
              : props?.memory}
          </li>
          <li>
            Graphics :{" "}
            {!props?.graphics || props?.graphics === "?"
              ? "Details Not Available"
              : props?.graphics}
          </li>
          <li>
            Storage :{" "}
            {props?.storage === "?" || !props?.storage
              ? "Details Not Available"
              : props?.storage}
          </li>
        </ul>
      </div>

      <div className="md:ml-auto">
        <h2 className="title-font font-semibold text-gray-50 tracking-wider text-sm mb-3">
          Other Deatils
        </h2>
        <ul className="  text-gray-400 ">
          <li>Genre : {props?.gameGenre}</li>
          <li>Platform : {props?.gamePlatform} </li>
          <li>Publisher : {props?.gamePublisher}</li>
          <li>Developer : {props?.gameDeveloper}</li>
          <li>Release Date : {props?.gameReleaseDate} </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleGameDetails;
