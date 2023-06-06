import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Route from "./Route/Route.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>
);
