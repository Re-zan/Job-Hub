import React from "react";

const AllCatdata = (props) => {
  const { logo, jobs, name } = props.datas;
  return (
    <div>
      <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] p-14 rounded-lg transition ease-in-out duration-500  hover:-translate-y-4 hover:shadow-2xl">
        <img src={logo} alt="" />
        <h2 className=" font-bold pb-4 pt-8">{name}</h2>
        <p className="text-[#A3A3A3] text-base">{jobs} Jobs Available</p>
      </div>
    </div>
  );
};

export default AllCatdata;
