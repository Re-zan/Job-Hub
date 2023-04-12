import React, { useState } from "react";
import Banner from "../../utilities/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ShowAppJob from "../ShowAppliedJob/ShowAppJob";

const Applied = () => {
  const datas = useLoaderData();
  const [jobData, setJobData] = useState(datas);

  const Onsite = () => {
    let data = jobData.filter((ond) => ond.type === "Onsite");
    if (data.length === 0) {
      const again = datas.filter((ond) => ond.type === "Onsite");
      data = again;
    }
    setJobData(data);
  };

  const Remote = () => {
    let data = jobData.filter((ond) => ond.type === "Remote");
    if (data.length === 0) {
      const again = datas.filter((ond) => ond.type === "Remote");
      data = again;
    }

    setJobData(data);
  };

  return (
    <div>
      <Banner title="Applied Jobs Details"></Banner>

      <div className="my_conatiner my-16 ">
        <div className="  lg:flex items-end  justify-end gap-5 mr-0  ml-7 lg:ml-0  lg:mr-32">
          <button className="bttn mr-4" onClick={Onsite}>
            {" "}
            Onsite
          </button>
          <button className="bttn" onClick={Remote}>
            Remote
          </button>
        </div>
        {jobData.map((data) => (
          <ShowAppJob data={data} key={data.id}>
            {" "}
          </ShowAppJob>
        ))}
      </div>
    </div>
  );
};

export default Applied;
