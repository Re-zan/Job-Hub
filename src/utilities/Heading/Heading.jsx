import React from "react";

const Heading = (props) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{props.title} </h2>
        <p className=" text-[#757575] text-base pt-6">{props.content}</p>
      </div>
    </div>
  );
};

export default Heading;
