import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GameListComponent from "../components/GameListComponent";
import LazyImg from "../components/LazyImg";
import Loading from "../components/Loading";
import image from "../image/game.jpg";
import gamePlc from "../image/gamePlc.jpg";
import useFetch from "../Hooks/use-fetch";

const Home = ({ setProgress }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity"
  );
  useEffect(() => {
    if (isLoading) {
      setProgress(40);
    } else {
      setProgress(100);
    }
  }, [setProgress, isLoading]);

  const popularGames = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  if (isLoading)
    return (
      <div className="h-screen  flex justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <div className="container px-5 md:pt-36 pt-24 pb-7   mx-auto ">
      <section className="text-gray-600 body-font">
        <div className=" flex px-5  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <LazyImg
              placeholderSrc={gamePlc}
              src={image}
              otherClasses="object-cover  object-center rounded-xl shadow-2xl"
              errorImg={image}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="  text-2xl lg:text-5xl md:text-4xl mb-6 font-bold text-gray-50">
              FreeGamesGo : A free PC and Web browser-based game collection
              platform
            </h1>
            <p className="mb-6  md:text-lg text-gray-400 leading-relaxed">
              FreeGamesGo provides access to the best free-to-play multiplayer
              games and MMO Games. You can search for any game of your choice
              based on genre, name, and platform. In most of the games, You can
              view minimum system requirements too in order to play a particular
              game. Start exploring now.
            </p>
            <div className="mt-3  flex md:flex-row gap-3 flex-col ">
              <button
                onClick={() => navigate("/allgames")}
                className="   text-white shadow-2xl  bg-slate-600 border-0 py-2  px-6 focus:outline-none hover:bg-slate-700 rounded-md text-sm transition duration-200"
              >
                Start Exploring
              </button>

              <button
                onClick={() => scrollToSection(popularGames)}
                className="  text-slate-800 hover:bg-slate-300 bg-slate-200  shadow-2xl  border-0 py-2 px-6  focus:outline-none  rounded-md text-sm transition-all duration-200"
              >
                Learn More &darr;
              </button>
            </div>
          </div>
        </div>

        <div ref={popularGames} className="md:px-5 md:pt-32 pt-24">
          <h1 className="text-center md:mb-16 mb-10 md:text-5xl text-3xl text-gray-50 font-bold ">
            Most Popular Games
          </h1>

          <div className="flex  flex-wrap mb-8">
            {data?.slice(0, 6)?.map((data) => {
              return (
                <GameListComponent
                  key={data?.id}
                  image={data?.thumbnail}
                  gameId={data?.id}
                  gameTag={data?.genre}
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
          <div className="flex items-center justify-center">
            <button
              className=" text-sm px-6 py-2 hover:bg-slate-700 transition-all duration-300 rounded-md bg-slate-600 text-slate-50"
              onClick={() => navigate("/allgames")}
            >
              View All Games
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
