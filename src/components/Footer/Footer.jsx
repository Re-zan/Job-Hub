import React from "react";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/insta_.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#1A1919]  py-8 md:py-16 lg:py-32">
      <div className="my_conatiner   pb-10  grid grid-cols-1 md:grid-cols-2 pl-14 lg:pl-0 lg:grid-cols-7  text-white gap-10 lg:gap-28 ">
        <div className="  col-span-1 lg:col-span-2 ">
          <h2 className="text-3xl">JOB-HUB</h2>
          <p className="text-[#ffffffb3] pt-4  pr-3 text-sm">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className=" pt-6 flex">
            <Link to="https://www.facebook.com/">
              <img
                src={fb}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>
            <Link to="https://twitter.com/">
              <img
                src={twitter}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>

            <Link to="https://www.instagram.com/">
              {" "}
              <img
                src={insta}
                alt="facebook"
                className="object-cover w-12 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">Company</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              About US
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Work
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400  text-sm">
              Latest News
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400  text-sm">
              Carrer
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Product</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Prototype
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Plans & Pricing
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Customers
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Integrations
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Support</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Help Desk
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Sales
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Become a Partner
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400 text-sm">
              Developers
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl">Contact</h2>

          <p className="text-sm pt-4 text-[#ffffffb3]"> 524 Broadway , NYC</p>
          <p className="text-sm pt-4 text-[#ffffffb3]"> +1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="my_conatiner text-[#ffffffb3]">
        <hr className=" border-1  "></hr>
        <div className="flex justify-between  pt-8 px-5 lg:px-0">
          <p>@2023 JOB_HUB. All Rights Reserved</p>
          <p>Powered by JOB_HUB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
