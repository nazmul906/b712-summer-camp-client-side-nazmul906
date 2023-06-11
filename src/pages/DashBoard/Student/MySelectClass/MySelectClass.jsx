import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";

const MySelectClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  //   check this user with the class
  const [myclass, setMyclass] = useState([]);
  //   const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.filter(
          (item) => item.enrollment && item.enrollment.includes(user?.email)
        );
        setMyclass(matched);
      });
  }, [user, myclass]);
  const handleDeleteClick = (item) => {
    // actually we just have to update the myclass
    // console.log("delete", item._id);
    axiosSecure
      .patch(`/myclass/delete/${item._id}`, { emailToDelete: user?.email })
      .then((res) => {
        console.log("deleted res", res.data);
        if (res.data.modifiedCount > 0) {
          // Update the UI or perform any necessary actions
          alert("deleted");
        }
      });
  };

  return (
    <div>
      {/* <h5>Myclasses:{myclass.length}</h5> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Classname</th>
              <th>Instructror</th>
              <th>InstructorEmail</th>
              <th>Available seat</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {myclass.map((item, index) => (
            <tbody>
              {/* row 1 */}
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                {/* <Link to={`/payment/${item._id}`}>
                  {" "}
                  <button className="btn btn-primary"> Pay</button>
                </Link> */}
                <Link
                  to={{
                    pathname: `/dashboard/payment/${item._id}`,
                    state: { item: item },
                  }}
                >
                  <button className="btn btn-primary">Pay</button>
                </Link>
                <Link>
                  <button
                    onClick={() => handleDeleteClick(item)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </Link>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MySelectClass;
