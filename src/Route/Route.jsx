import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import AllClass from "../pages/AllClass/AllClass";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashLayout from "../MainLayout/DashLayout";
import AllUser from "../pages/DashBoard/Admin/AllUser";
import AddClass from "../pages/DashBoard/Instructor/AddClass";

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
  {
    path: "dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      //dhori first e dash e dhukbe authorized admin je shob user dekhebe
      {
        path: "alluser",
        element: <AllUser></AllUser>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);

export default Route;
