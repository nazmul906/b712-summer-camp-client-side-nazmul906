import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h3>this is main</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
