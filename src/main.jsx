import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import Route from "./Route/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {" "}
          <RouterProvider router={Route}></RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
// className="max-w-7xl mx-auto"
