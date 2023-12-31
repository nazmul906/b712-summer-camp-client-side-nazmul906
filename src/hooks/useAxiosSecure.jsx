import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";
// const axiosSecure = axios.create({
//   baseURL: "https://b7a12-summer-camp-server-side-omega.vercel.app/",
// });
const axiosSecure = axios.create({
  baseURL: "https://b7a12-summer-camp-server-side-omega.vercel.app/",
});
const useAxiosSecure = () => {
  //   const { logout } = useAuth();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
