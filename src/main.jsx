import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Applied from "./components/Applied Jobs/Applied";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "jobdetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/marks.json"),
      },
      {
        path: "applied-jobs",
        element: <Applied></Applied>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
