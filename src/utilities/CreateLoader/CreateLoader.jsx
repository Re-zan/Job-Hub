import { getData } from "../DataLoclStroe/DataStore";

const createLoad = async () => {
  const jobsGetData = await fetch("/jobs.json");
  const jobData = await jobsGetData.json();

  const storted = getData();
  const saveData = [];
  for (const id in storted) {
    const addData = jobData.filter((jb) => jb.id == id);

    saveData.push(addData[0]);
  }

  return saveData;
};

export { createLoad };
