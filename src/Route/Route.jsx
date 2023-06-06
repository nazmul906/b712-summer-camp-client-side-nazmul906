import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
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
    ],
  },
]);

export default Route;
