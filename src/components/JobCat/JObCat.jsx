import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCatdata from "../AllCatdata/AllCatdata";

const JObCat = () => {
  const getData = useLoaderData();
  console.log(getData);
  return (
    <div className="my_conatiner my-32">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Job Category List</h2>
        <p className=" text-[#757575] text-base pt-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        {getData.map((data) => (
          <AllCatdata datas={data} key={data.id}></AllCatdata>
        ))}
      </div>
    </div>
  );
};

export default JObCat;
