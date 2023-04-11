import React, { useEffect, useState } from "react";
import Heading from "../../utilities/Heading/Heading";
import { Link, useLoaderData } from "react-router-dom";
import JobData from "../JobData/JobData";

const Featuer = () => {
  const datas = useLoaderData();
  const [all, setAll] = useState(true);
  return (
    <div className="my_conatiner mb-32 ">
      <Heading
        title="Featured Jobs"
        content="Explore thousands of job opportunities with all the information you need. Its your future"
      ></Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 pt-8 mb-14">
        {all ? (
          <>
            {datas.slice(0, 4).map((data) => (
              <JobData data={data} key={data.id}></JobData>
            ))}
          </>
        ) : (
          <>
            {datas.map((data) => (
              <JobData data={data} key={data.id}></JobData>
            ))}
          </>
        )}
      </div>
      <div className={`text-center ${all ? "" : " hidden"}`}>
        <button className="bttn" onClick={() => setAll(!all)}>
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default Featuer;
