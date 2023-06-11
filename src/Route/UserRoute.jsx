import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UserRoute = () => {
  const { user, loading } = useContext(AuthContext);

  return <div></div>;
};

export default UserRoute;
