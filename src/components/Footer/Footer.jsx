import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#1A1919] py-32">
      <div className="my_conatiner  pb-10  grid grid-cols-1 md:grid-cols-2 pl-14 lg:pl-0 lg:grid-cols-5  text-white gap-36 ">
        <div>
          <h2 className="text-3xl">JOB-HUB</h2>
          <p className="text-[#ffffffb3] pt-4 text-sm">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Company</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              About US
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Work
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Latest News
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Carrer
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Product</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Prototype
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Plans & Pricing
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Customers
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Integrations
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Support</h2>
          <ul className="pt-4 text-[#ffffffb3]">
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Help Desk
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Sales
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Become a Partner
            </li>
            <li className="py-2 transtion ease-in-out duration-200 hover:translate-x-3 hover:text-purple-400">
              Developers
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Contact</h2>

          <p className="text-sm pt-4 text-[#ffffffb3]"> 524 Broadway , NYC</p>
          <p className="text-sm pt-4 text-[#ffffffb3]"> +1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="my_conatiner text-[#ffffffb3]">
        <hr className=" border-1  "></hr>
        <div className="flex justify-between  pt-8">
          <p>@2023 JOB_HUB. All Rights Reserved</p>
          <p>Powered by JOB_HUB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
