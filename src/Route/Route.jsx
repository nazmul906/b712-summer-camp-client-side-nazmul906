import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import AllClass from "../pages/AllClass/AllClass";
import Home from "../pages/Home/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "class",
        element: <AllClass></AllClass>,
      },
    ],
  },
]);

export default Route;
