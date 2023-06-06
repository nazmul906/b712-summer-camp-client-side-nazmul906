import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* <h3>this is main</h3> */}

      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
