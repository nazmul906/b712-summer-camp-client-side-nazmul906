import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (loading || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isInstructor) return children;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
