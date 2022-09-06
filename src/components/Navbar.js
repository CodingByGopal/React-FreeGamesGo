import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../image/logo.png";

const Navbar = () => {
  const activeClassName = "border-b-2 border-amber-200 ";
  const [open, setOpen] = useState(false);

  const linkList = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Games",
      path: "/allgames",
    },
    {
      name: "Developer",
      path: "/developer",
    },
  ];

  return (
    <div
      className={`  fixed w-full top-0 left-0    z-30 ${
        open ? "opacity-100  " : ""
      }  bg-[#0c1222] py-1 shadow-2xl shadow-[#060911] transition-all duration-150 `}
    >
      <div className=" max-w-screen-2xl mx-auto md:flex  py-1 lg:px-10 px-4 items-center justify-between">
        <Link to="/">
          <div className=" flex  items-center gap-3 py-1">
            <img src={image} alt="logo" className=" md:h-14 h-12 " />
            <p className="font-bold md:text-2xl  text-lg  ">FreeGamesGo</p>
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-xl absolute  right-8 top-5 z-40 cursor-pointer md:hidden text-brown-500 "
        >
          {open ? (
            <i title="close" className="fa-solid fa-xmark"></i>
          ) : (
            <i title="menu" className="fa-solid fa-bars"></i>
          )}
        </div>

        <ul
          className={`flex items-center  flex-col md:flex-row md:pb-0  pb-12 absolute md:static top-0 h-screen md:h-0 md:justify-start justify-center  md:z-auto left-0 w-full md:w-auto transition-all duration-150  ${
            open
              ? " opacity-100 bg-[#0c1222]  transition-all duration-300  "
              : " md:opacity-100 opacity-0 md:translate-x-0 translate-x-full invisible md:visible pointer-events-none md:pointer-events-auto"
          }`}
        >
          {linkList?.map((link) => {
            return (
              <li
                key={link?.name}
                className={` font-semibold px-4 md:px-0 md:py-0 md:rounded-none py-1 rounded-full   
                   lg:ml-8 ml-4 md:my-0 my-5  md:text-brown-500   transition duration-200  ${
                     open ? " text-base md:text-xs lg:text-sm  " : "   text-sm"
                   } `}
              >
                <NavLink
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClassName : " "
                  }
                  to={link?.path}
                >
                  {link?.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
