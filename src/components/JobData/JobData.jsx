import React from "react";
import { Link, useNavigate } from "react-router-dom";
import locationP from "../../assets/images/banner/Location Icon.png";

const JobData = (props) => {
  const { id, logo, title, name, location, salary, type, time } = props.data;

  return (
    <div>
      <div className="rounded-lg border p-10 transition duration-300 transform  hover:border-purple-400  hover:shadow-lg  ">
        <img
          src={logo}
          alt={title}
          className=" bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] p-8 object-cover w-52 rounded-lg"
        />
        <h2 className=" text-[#474747] font-bold pt-8 pb-2">{title}</h2>
        <p className=" text-[#757575] text-base pb-6">{name}</p>
        <div className=" inline-flex gap-3 mb-4">
          <button className="text_color rounded-lg border-purple-500 border py-2 px-5  font-semibold ">
            {type}
          </button>{" "}
          <button className="text_color rounded-lg border-purple-500 border py-2 px-5  font-semibold ">
            {time}
          </button>
        </div>
        <div className="flex gap-4 text-[#757575] text-base mb-6">
          <p className="inline-flex ">
            <img src={locationP} alt={title} /> {location}
          </p>
          <p>$ Salary: {salary}</p>
        </div>

        <Link to={`jobdetails/${id}`} state={title}>
          <button className="bttn py-3 px-5 ">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobData;
