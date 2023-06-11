import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useUser = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled:
      !isLoading && !!user?.email && !!localStorage.getItem("AccessToken"),

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      console.log("axiod user response", res);
      return res.data.isUser;
    },
  });
  return [isUser, isUserLoading];
};

export default useUser;
