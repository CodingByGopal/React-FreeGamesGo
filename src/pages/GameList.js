import React, { useState, useEffect } from "react";

import GameListComponent from "../components/GameListComponent";
import debounce from "lodash.debounce";
import Loading from "../components/Loading";
import useFetch from "../Hooks/use-fetch";

const GameList = ({ setProgress }) => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  useEffect(() => {
    if (isLoading) {
      setProgress(40);
    } else {
      setProgress(100);
    }
  }, [setProgress, isLoading]);

  const optimizeSearch = (e) => setSearch(e?.target?.value.toLowerCase());
  const debouncedOnChange = debounce(optimizeSearch, 500);

  const fullYear = new Date().getFullYear();

  const ScrollToTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filterData = data?.filter((data) => {
    return (
      data?.title?.toLowerCase()?.includes(search) ||
      data?.genre?.toLowerCase()?.includes(search) ||
      data?.platform?.toLowerCase()?.includes(search) ||
      data?.short_description?.toLowerCase()?.includes(search)
    );
  });

  if (isLoading)
    return (
      <div className="h-screen  flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <div className="container relative pt-28 px-5 mx-auto xl:px-28">
      <button
        onClick={ScrollToTopBtn}
        className="fixed text-3xl  opacity-10 md:right-8 bottom-6 sm:right-2 right-1"
      >
        <i title="Scoll To Top" className="fa-solid fa-circle-arrow-up "></i>
      </button>
      <div className="px-5 mb-4">
        <h1 className=" text-4xl text-slate-200 font-bold mb-6">
          Best Free Games for PC and Browser In {fullYear}!
        </h1>
        <p className=" md:text-base text-sm text-slate-300">
          Get yourself the best experience with FreeGamesGo where you can find
          multiple games as per your taste. You can search the game based on
          name, genre (MMORPG, Strategy, Shooter, Sports, Moba, Fighting, Card
          Game, Battle Royale, Racing, Social, Fantasy), and platforms like PC
          and Web Browser.
        </p>
        <p className="mb-10 text-slate-300 moveRightAnimation"></p>
        <div className="flex flex-col mb-10 ">
          <input
            id="text"
            onChange={debouncedOnChange}
            type="text"
            placeholder="Search..."
            className=" outline-none focus:outline-none shadow-2xl bg-slate-800 placeholder:text-gray-300 py-2 px-8 rounded-full md:w-1/4  text-gray-50 "
          />
        </div>
      </div>

      {filterData?.length > 0 && (
        <div className="flex flex-wrap ">
          {filterData?.map((data) => {
            return (
              <GameListComponent
                key={data?.id}
                image={data?.thumbnail}
                gameId={data?.id}
                gameTag={data?.genre?.toUpperCase()}
                gameTitle={data?.title}
                gameDescription={data?.short_description}
                gamePlatform={
                  data?.platform === "Web Browser" ? (
                    <i
                      title={data?.platform}
                      className="fa-brands fa-chrome"
                    ></i>
                  ) : (
                    <i
                      title={data?.platform}
                      className="fa-brands fa-windows"
                    ></i>
                  )
                }
              />
            );
          })}
        </div>
      )}

      {filterData?.length === 0 && (
        <div className=" flex justify-center p-5">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default GameList;
