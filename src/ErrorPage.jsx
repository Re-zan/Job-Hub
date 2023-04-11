import React from "react";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errodesign from "../src/assets/errodesign.json";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <Lottie
        animationData={errodesign}
        loop={true}
        className=" mx-auto w-7/12"
      />
      <Link to="/">
        <button className="bttn">Go back to the home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
