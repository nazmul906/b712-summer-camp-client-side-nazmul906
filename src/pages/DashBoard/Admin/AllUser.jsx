import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  // const [user, setUser] = useState([]);

  const [axiosSecure] = useAxiosSecure();
  // todo: fetch user using react query
  // as it is secure for admin verify it with jwt using axiossecurew
  // useEffect(() => {
  //   fetch("https://b7a12-summer-camp-server-side-omega.vercel.app/users", {})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //     });
  // }, []);

  const { data: user = [], refetch } = useQuery(["users"], async () => {
    // with axios interceptor
    const res = await axiosSecure.get("users/");
    // manually
    // const res = await fetch("localhost:5000/users/");
    // return res.json();
    // but in axios res.data
    return res.data;
  });

  const handleAdmin = (item) => {
    // console.log(item);
    fetch(
      `https://b7a12-summer-camp-server-side-omega.vercel.app/users/admin/${item._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch;
          alert("admin role is updated");
        }
      });
  };

  const handleInstructor = (item) => {
    fetch(
      `https://b7a12-summer-camp-server-side-omega.vercel.app/users/instructor/${item._id}`,
      {
        // using patch because we just partially updating the db
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("instructor role is updated");
        }
      });
  };
  return (
    <div>
      {/* <h5>This is all user</h5> */}
      <h5>Total USer: {user.length}</h5>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              {/* <th>Name</th> */}
              <th>Email</th>
              <th> Role</th>
              {/* <th>Instructor Role</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                {/* <td>{item.name}</td> */}
                <td>{item.email}</td>
                <td></td>
                <td>
                  {item.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(item)}
                      className="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {item.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleInstructor(item)}
                      className="btn btn-primary"
                    >
                      Make instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
