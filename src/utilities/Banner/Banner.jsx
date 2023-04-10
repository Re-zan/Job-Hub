import React from "react";

const Banner = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Banner;
