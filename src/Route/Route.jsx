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
import MyClass from "../pages/DashBoard/Instructor/MyClass";
import ManageClass from "../pages/DashBoard/Admin/ManageClass";
import Payment from "../pages/DashBoard/Student/Payment/Payment";
import MySelectClass from "../pages/DashBoard/Student/MySelectClass/MySelectClass";
import MyEnrolledClass from "../pages/DashBoard/Student/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../pages/DashBoard/Student/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            <AllClass></AllClass>
          </PrivateRoute>
        ),
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
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
      // instructor
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
      // user
      {
        path: "selectclass",
        element: <MySelectClass></MySelectClass>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "enrolled",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
    ],
  },
]);

export default Route;
