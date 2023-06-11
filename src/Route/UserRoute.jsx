import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (isInstructorLoading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (!isAdmin && !isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
