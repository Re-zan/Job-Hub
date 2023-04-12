const addData = (id) => {
  let jobs = {};

  const storted = localStorage.getItem("applied_jobs");
  if (storted) {
    jobs = JSON.parse(storted);
  }
  jobs[id] = 1;
  localStorage.setItem("applied_jobs", JSON.stringify(jobs));
};

const getData = () => {
  let jobs = {};
  const storted = localStorage.getItem("applied_jobs");
  if (storted) {
    jobs = JSON.parse(storted);
  }
  return jobs;
};

export { addData, getData };
