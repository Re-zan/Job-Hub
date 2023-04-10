import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] ">
      <nav className="my_conatiner justify-between items-center  pt-12 pb-10 md:flex">
        <div className="headeing flex justify-between">
          <Link to="/">
            <div className=" text-[#1A1919]  text-3xl md:text-base lg:text-3xl font-bold pl-4 md:pl-0 pb-3 md:pb-0 ">
              <h2>JOB-HUB</h2>
            </div>
          </Link>
          <div
            className="md:hidden mr-3 md:mr-0 z-40"
            onClick={() => setOpen(!open)}
          >
            <span>
              {open === true ? (
                <XMarkIcon className=" h-10 w-8  text-[#9873FF] md:hidden  mr-3" />
              ) : (
                <Bars3Icon className=" h-10 w-8  text-[#9873FF] " />
              )}
            </span>
          </div>
        </div>

        <ul
          className={` md:flex px-6 items-center absolute md:static transition ease-in-out duration-500 ${
            open
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

          <button className={`md:hidde bttn ${open ? " " : " hidden"}`}>
            Start Applying
          </button>
        </ul>
        <button className=" bttn hidden md:block">Start Applying</button>
      </nav>
    </div>
  );
};

export default Header;
