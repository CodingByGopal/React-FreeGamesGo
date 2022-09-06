import React from "react";
import { useNavigate } from "react-router-dom";
import LazyImg from "./LazyImg";
import plc from "../image/plc.jpg";
import fallImg from "../image/fallImg.jpg";
import useElementOnScreen from "../Hooks/useElementOnScreen";
const GameListComponent = (props) => {
  const navigate = useNavigate();
  const viewDetailsHandler = () => {
    navigate(`/game/${props?.gameId}`);
  };
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0,
  });
  return (
    <div
      onClick={viewDetailsHandler}
      className="p-4 md:w-1/3 w-full  cursor-pointer  hover:scale-105  transition duration-500"
    >
      <div
        ref={containerRef}
        className={`${
          isVisible ? "" : "section--hidden"
        } section h-full  shadow-2xl rounded-lg overflow-hidden`}
      >
        <LazyImg
          placeholderSrc={plc}
          src={props?.image}
          otherClasses="lg:h-60  md:h-36 w-full object-cover object-center"
          errorImg={fallImg}
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-1">
            <h2 className="tracking-widest text-xs  font-medium text-gray-400 ">
              {props?.gameTag}
            </h2>
            <p className="tracking-widest text-xs bg-slate-400 px-1 rounded-full text-slate-800  font-medium  ">
              Free
            </p>
          </div>

          <h1 className=" md:truncate  cursor-pointer hover:text-gray-200 text-base font-medium text-gray-50 mb-3">
            {props?.gameTitle}
          </h1>
          <p className="leading-relaxed text-sm  mb-3 md:truncate text-slate-300">
            {props?.gameDescription}
          </p>
          <div className="flex items-center flex-wrap ">
            <p
              onClick={viewDetailsHandler}
              className="text-gray-400 cursor-pointer hover:text-gray-500  transition duration-200 md:mb-2 lg:mb-0"
            >
              View Details &rarr;
            </p>
            <span className="text-gray-400 cursor-pointer ml-auto text-lg py-1 ">
              {props?.gamePlatform}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListComponent;
