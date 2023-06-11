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
import InstructorInfo from "../pages/InstructorInfo/InstructorInfo";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
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
        path: "instructorinfo",
        element: <InstructorInfo></InstructorInfo>,
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
      //dhori first e dash e dhukbe manually authorized admin je shob user dekhebe
      {
        path: "alluser",
        element: (
          <AdminRoute>
            {" "}
            <AllUser></AllUser>,
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>,
          </AdminRoute>
        ),
      },
      // instructor
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>,
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>,
          </InstructorRoute>
        ),
      },
      // user
      {
        path: "selectclass",
        element: (
          <UserRoute>
            <MySelectClass></MySelectClass>
          </UserRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <UserRoute>
            <Payment></Payment>
          </UserRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },
      {
        path: "enrolled",
        element: (
          <UserRoute>
            <MyEnrolledClass></MyEnrolledClass>
          </UserRoute>
        ),
      },
    ],
  },
]);

export default Route;
