import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto justify-between items-center  pt-12 pb-10 md:flex">
      <Link to="/">
        <div className=" text-[#1A1919]  text-3xl md:text-base lg:text-3xl font-bold pl-4 md:pl-0 pb-3 md:pb-0 flex justify-between">
          <h2>JOB-HUB</h2>
          <div onClick={() => setIsOpen(!isOpen)}>
            <span>
              {isOpen === true ? (
                <XMarkIcon className="h-6 w-6  text-[#9873FF] md:hidden mr-3" />
              ) : (
                <Bars3Icon className="h-6 w-6  text-[#9873FF] md:hidden mr-3" />
              )}
            </span>
          </div>
        </div>
      </Link>

      <ul
        className={` md:flex px-6 items-center absolute md:static transition ease-in-out duration-500 ${
          isOpen
            ? " top-24 z-10  bg-[#acb4e8] text-white text-center  w-full py-7"
            : " -top-56 "
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " md:text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-semibold "
              : " text-[#757575]"
          }
        >
          <li className="py-3 md:px-7 ">Home</li>
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive
              ? " md:text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-semibold "
              : " text-[#757575]"
          }
        >
          <li className="py-3 md:px-7">Statistics</li>
        </NavLink>

        <NavLink
          to="/applied-jobs"
          className={({ isActive }) =>
            isActive
              ? " md:text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-semibold "
              : " text-[#757575]"
          }
        >
          <li className="py-3 md:px-7">Applied Jobs</li>
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? " md:text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base font-semibold"
              : " text-[#757575]"
          }
        >
          <li className="py-3 md:px-7">Blog</li>
        </NavLink>

        <button
          className={`md:hidden bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-5 px-7  rounded-lg ${
            isOpen ? " " : " hidden"
          }`}
        >
          Start Applying
        </button>
      </ul>
      <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-5 px-7  rounded-lg hidden md:block">
        Start Applying
      </button>
    </nav>
  );
};

export default Header;
