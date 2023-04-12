import React from "react";
import locationP from "../../assets/images/banner/Location Icon.png";
import { Link } from "react-router-dom";

const ShowAppJob = (props) => {
  const { id, logo, title, name, time, type, location, salary } = props.data;
  return (
    <div>
      <div className="flex my-7 border p-8  items-center w-10/12 mx-auto rounded-lg">
        <img
          src={logo}
          alt={title}
          className="bg-[#F4F4F4] py-24 px-12 mx-auto object-cover w-52 rounded-lg"
        />

        <div className="text_cont flex-grow ml-7">
          <h2 className=" text-[#474747] font-bold pt-8 pb-2 text-2xl">
            {title}
          </h2>
          <p className=" text-[#757575] text-base pb-6">{name}</p>
          <div className=" inline-flex gap-3 mb-4">
            <button className="text_color rounded-lg border py-2 px-5  font-semibold ">
              {type}
            </button>{" "}
            <button className="text_color rounded-lg border py-2 px-5  font-semibold ">
              {time}
            </button>
          </div>
          <div className="flex gap-4 text-[#757575] text-base mb-6">
            <p className="inline-flex ">
              <img src={locationP} alt={title} /> {location}
            </p>
            <p>$ Salary: {salary}</p>
          </div>
        </div>
        <Link to={`jobdetails/${id}`} state={title}>
          <button className="bttn py-3 px-5">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowAppJob;
