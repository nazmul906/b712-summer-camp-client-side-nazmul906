import React from "react";
import { useEffect, useState } from "react";

const AllUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {})
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
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
              <th>Admin Role</th>
              <th>Instructor Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                {/* <td>{item.name}</td> */}
                <td>{item.email}</td>
                <td>
                  {<button className="btn btn-primary">Make Admin</button>}
                </td>
                <td>
                  {<button className="btn btn-primary">Make instructor</button>}
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
