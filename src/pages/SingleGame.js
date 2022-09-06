import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleGameComponent from "../components/SingleGameComponent";

import SingleGameDetails from "../components/SingleGameDetails";
import Loading from "../components/Loading";
import plc from "../image/plc.jpg";
import LazyImg from "../components/LazyImg";
import fallImg from "../image/fallImg.jpg";
import useFetch from "../Hooks/use-fetch";
const SingleGame = ({ setProgress }) => {
  //set param to get id dynamically
  const params = useParams();

  const { data, isLoading } = useFetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`
  );

  useEffect(() => {
    if (isLoading) {
      setProgress(40);
    } else {
      setProgress(100);
    }
  }, [isLoading, setProgress]);

  // system info and screenshots are nested hence doing this
  let sysInfo = data?.minimum_system_requirements;

  let screenshots = data?.screenshots;

  if (isLoading)
    return (
      <div className="h-screen  flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div className="container pt-28 px-5 mx-auto">
      <div className="md:flex">
        <div className="lg:px-4 moveBottomAnimation">
          <div className="md:ml-auto  mr-6 mb-14 md:max-w-sm w-full overflow-hidden rounded-md shadow-xl duration-200 hover:scale-105 hover:shadow-2xl">
            <LazyImg
              alt={data?.title}
              placeholderSrc={plc}
              src={data?.thumbnail}
              otherClasses="h-auto w-full"
              errorImg={fallImg}
            />
            <div className="p-5 ">
              <h1 className="text-gray-50 text-lg font-bold">{data?.title}</h1>
              <p className="text-medium mb-5 text-gray-400">
                {data?.short_description}
              </p>

              <a
                rel="noreferrer noopener"
                target="_blank"
                href={data?.game_url}
              >
                <button className="w-full rounded-md  bg-teal-800 py-2 text-indigo-100 hover:bg-teal-900 hover:shadow-md duration-75">
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-5">
          <SingleGameComponent
            gameTitle={data?.title}
            gameDescription={data?.description}
          />

          <SingleGameDetails
            os={sysInfo?.os}
            processor={sysInfo?.processor}
            memory={sysInfo?.memory}
            graphics={sysInfo?.graphics}
            storage={sysInfo?.storage}
            gameGenre={data?.genre}
            gamePlatform={data?.platform}
            gamePublisher={data?.publisher}
            gameDeveloper={data?.developer}
            gameReleaseDate={data?.release_date}
          />
        </div>
      </div>

      {/* if screenshots are not available set screenshot div to blank " " else show div */}

      {screenshots?.length === 0 ? (
        ""
      ) : (
        <div className=" md:ml-5">
          <h1 className=" md:text-left md:ml-3   text-center text-gray-300 mb-8 text-3xl font-semibold">
            {data?.title} Screenshots
          </h1>

          {/* maping screenshot img if screenshot img available */}

          <div className="md:grid   md:grid-cols-4 gap-5  pb-5 ">
            {screenshots?.map((img) => {
              return (
                <LazyImg
                  key={img.id}
                  alt={data?.title}
                  placeholderSrc={plc}
                  src={img?.image}
                  otherClasses="w-full    lg:h-52 md:mb-0 mb-6 rounded-md "
                  errorImg={fallImg}
                />
              );
            })}

            {/* some screenshot object have 3 items hence to set 4 image , doing this */}

            {screenshots?.length === 3 ? (
              <LazyImg
                alt={data?.title}
                placeholderSrc={plc}
                src={data?.thumbnail}
                otherClasses=" md:mb-0  mb-6 w-full lg:h-52 rounded-md  "
                errorImg={fallImg}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGame;
