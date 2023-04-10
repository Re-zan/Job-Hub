import React from "react";
import Vector1 from "../../assets/images/banner/Vector-1.png";
import Vector2 from "../../assets/images/banner/Vector.png";

const Banner = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
      <div className="my_conatiner text-center  py-28">
        <img
          src={Vector1}
          alt={props.title}
          className=" absolute top-0 end-0 w-40 "
        />
        <h2 className="text-[#1A1919] text-3xl font-bold">{props.title}</h2>
      </div>
      <img src={Vector2} alt={props.title} className="w-44" />
    </div>
  );
};

export default Banner;
