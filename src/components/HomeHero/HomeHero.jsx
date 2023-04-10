import React from "react";
import Lottie from "lottie-react";
import hunt from "../../assets/hunt.json";
const HomeHero = () => {
  return (
    <div className=" bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
      <div className="my_conatiner grid md:grid-cols-2 lg:grid-cols-2 gap-14">
        <div className=" py-8 md:py-6 lg:py-32 text-center md:text-left">
          <h2 className=" text-[#1A1919] font-extrabold text-5xl lg:text-7xl leading-[90px]">
            One Step <br></br> Closer To Your <br></br>{" "}
            <span className="text_color">Dream Job</span>
          </h2>

          <p className="text-[#757575] py-8 mr-0 lg:mr-36 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bttn"> Get Started</button>
        </div>
        <div className="con">
          <div>
            <Lottie animationData={hunt} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
