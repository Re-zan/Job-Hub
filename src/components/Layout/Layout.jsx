import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollStop from "../../ScrollStop";

const Layout = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "JOB-HUB-Home";
    } else {
      document.title = `JOB-HUB ${loc.pathname.replace("/", "-")}`;
    }
    if (loc.state) {
      document.title = `JOB-HUB-${loc.state}`;
    }
  }, [loc.pathname]);

  return (
    <div>
      <ScrollStop></ScrollStop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
