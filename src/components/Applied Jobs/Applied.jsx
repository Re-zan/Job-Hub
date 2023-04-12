import React from "react";
import Banner from "../../utilities/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ShowAppJob from "../ShowAppliedJob/ShowAppJob";

const Applied = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Banner title="Applied Jobs Details"></Banner>

      <div className="my_conatiner my-16">
        {datas.map((data) => (
          <ShowAppJob data={data} key={data.id}>
            {" "}
          </ShowAppJob>
        ))}
      </div>
    </div>
  );
};

export default Applied;
