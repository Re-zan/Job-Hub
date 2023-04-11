import React from "react";
import { Link, useNavigate } from "react-router-dom";
import locationP from "../../assets/images/banner/Location Icon.png";

const JobData = (props) => {
  const { id, logo, title, name, location, salary, type, time } = props.data;
  const navigate = useNavigate();
  return (
    <div>
      <div className="rounded-lg border p-10">
        <img src={logo} alt={title} />
        <h2 className=" text-[#474747] font-bold pt-8 pb-2">{title}</h2>
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

        <button
          className="bttn py-3 px-5"
          onClick={() => navigate(`jobdetails/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobData;
