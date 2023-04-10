import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:container sm:conatiner mx-auto justify-between items-center md:flex pt-12 pb-10">
      <Link to="/">
        <div className=" text-[#1A1919]  text-4xl md:text-base lg:text-3xl font-bold pl-4 md:pl-0 pb-3 md:pb-0">
          JOB-HUB
        </div>
      </Link>

      <ul className="md:flex px-6 items-center ">
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
      </ul>
      <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white py-5 px-7 rounded-lg">
        Start Applying
      </button>
    </nav>
  );
};

export default Header;
