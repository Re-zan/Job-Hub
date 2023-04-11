import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCatdata from "../AllCatdata/AllCatdata";
import Heading from "../../utilities/Heading/Heading";

const JObCat = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setGetData(data));
  }, []);

  return (
    <div className="my_conatiner my-32">
      <Heading
        title="Job Category List"
        content=" Explore thousands of job opportunities with all the information you
          need. Its your future"
      ></Heading>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        {getData.map((data) => (
          <AllCatdata datas={data} key={data.id}></AllCatdata>
        ))}
      </div>
    </div>
  );
};

export default JObCat;
