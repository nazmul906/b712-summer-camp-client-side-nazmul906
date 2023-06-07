import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import Route from "./Route/Route.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
