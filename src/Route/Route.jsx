import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import AllClass from "../pages/AllClass/AllClass";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
