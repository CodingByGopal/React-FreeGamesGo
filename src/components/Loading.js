import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Bars color="#9ca3af" height={60} width={60} />
      <p className=" text-xs mt-2 text-slate-300">Loading</p>
    </div>
  );
};

export default Loading;
