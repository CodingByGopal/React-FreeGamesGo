import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="text-center  bg-slate-900 text-slate-400 m-auto pb-10 pt-10">
      &copy; {fullYear} FreeGamesGo By{" "}
      <Link to={"/developer"}>
        <span className="text-slate-200 hover:underline ">Gopal Ji</span>
      </Link>
    </div>
  );
};

export default Footer;
