import React from "react";
import { useEffect, useState } from "react";

const AllUser = () => {
  const [user, setUser] = useState([]);
  // todo: fetch user using react query
  useEffect(() => {
    fetch("http://localhost:5000/users", {})
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const handleAdmin = (item) => {
    // console.log(item);
    fetch(`http://localhost:5000/users/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          alert("admin role is updated");
        }
      });
  };

  const handleInstructor = (item) => {
    fetch(`http://localhost:5000/users/instructor/${item._id}`, {
      // using patch because we just partially updating the db
      method: "PATCH",
    })
      .then()
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("instructor role is updated");
        }
      });
  };
  return (
    <div>
      <h5>This is all user</h5>
      <h5>Length {user.length}</h5>
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
