import React, { useEffect, useState } from "react";
import Banner from "../../utilities/Banner/Banner";
import { useLoaderData, useParams } from "react-router-dom";
import Frame from "../../assets/images/Icons/Frame.png";
import Frame1 from "../../assets/images/Icons/Frame-1.png";
import Frame2 from "../../assets/images/Icons/Frame-2.png";
import Frame3 from "../../assets/images/Icons/Frame-3.png";
import Frame4 from "../../assets/images/Icons/Location Icon.png";
import { addData, getData } from "../../utilities/DataLoclStroe/DataStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(useLoaderData);

  const data = details.find((job) => job.id == id);

  const applyBtn = (id) => {
    const storted = getData();
    const quantiy = storted[id];
    if (quantiy) {
      toast.error("You are already applied for this job");
    } else {
      addData(id);
      toast("You apply for this job is sucessfully added ");
    }
  };

  return (
    <div>
      <Banner title="Job Details"></Banner>
      <div className="my_conatiner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-36 gap-8">
        <div className="text-base px-5 lg:px-0">
          <p className="text-[#1A1919] font-bold py-6  transition ease-in-out duration-500 hover:bg-[#845df00d]  hover:p-6 hover:text-[14px]">
            Job Description:{" "}
            <span className="text-[#757575] font-normal">{data.desp}</span>
          </p>

          <p className="text-[#1A1919] font-bold py-6 transition ease-in-out duration-500 hover:bg-[#845df00d]  hover:p-6 hover:text-[14px] hover:mb-8">
            Job Responsibility:{" "}
            <span className="text-[#757575] font-normal">
              {data.responsibility}
            </span>
          </p>

          <h3 className="text-[#1A1919] font-bold py-6">
            Educational Requirements:
          </h3>
          <p className="text-[#757575] font-normal">{data.educational}</p>
          <h3 className="text-[#1A1919] font-bold py-4">Experiences:</h3>
          <p className="text-[#757575] font-normal">{data.experiences}</p>
        </div>

        <div className=" ">
          <div className="content bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] p-7">
            <h3 className="text-[#1A1919] font-bold pb-4">Job Details:</h3>
            <hr></hr>
            <p className="text-[#1A1919] font-bold py-6 inline-flex gap-2">
              <img src={Frame} alt="" /> Salary:{" "}
              <span className="text-[#757575] font-normal hover:text-purple-800">
                {data.salary} (Per Month)
              </span>
            </p>
            <br></br>
            <p className="text-[#1A1919] font-bold inline-flex gap-2">
              <img src={Frame1} alt="" /> Job Title:{" "}
              <span className="text-[#757575] font-normal hover:text-purple-800">
                {data.title}
              </span>
            </p>

            <hr className="my-4"></hr>

            <h3 className="text-[#1A1919] font-bold pb-4 my-3">
              Contact Information:
            </h3>
            <hr></hr>
            <p className="text-[#1A1919] font-bold py-6 inline-flex gap-2">
              <img src={Frame2} alt="" /> Phone:{" "}
              <span className="text-[#757575] font-normal hover:text-purple-800">
                {data.phone}
              </span>
            </p>
            <div>
              <p className="text-[#1A1919] font-bold inline-flex gap-2">
                <img src={Frame3} alt="" /> Email:{" "}
                <span className="text-[#757575] font-normal hover:text-purple-800">
                  {data.email}
                </span>
              </p>
            </div>

            <p className="text-[#1A1919] font-bold py-6 inline-flex gap-2">
              <img src={Frame4} alt="" /> Address:{" "}
              <span className="text-[#757575] font-normal hover:text-purple-800">
                {data.add}
              </span>
            </p>

            <hr className="my-4 "></hr>
          </div>

          <button className="bttn w-full my-5" onClick={() => applyBtn(id)}>
            {" "}
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
