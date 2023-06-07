import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoad } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(`/users/admin/${user?.email}`);
      console.log("admin check", res);
      return res.json();
    },
  });
  return [isAdmin, isAdminLoad];
};

export default useAdmin;
