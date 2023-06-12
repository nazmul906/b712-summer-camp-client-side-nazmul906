import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClass] = useState([]);
  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-omega.vercel.app/myclass?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setClass(data);
      });
  }, []);

  return (
    <div>
      {/* <h5>my class</h5>
      {classes.length} */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>classname</th>
              <th>instructror</th>
              <th>instructorEmail</th>
              <th>available seat</th>
              <th>price</th>
              <th>Feedback</th>
            </tr>
          </thead>
          {classes.map((item, index) => (
            <tbody>
              {/* row 1 */}
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item?.className}</td>
                <td>{item?.instructorName}</td>
                <td>{item?.instructorEmail}</td>
                <td>{item?.availableSeats}</td>
                <td>${item?.price}</td>
                <td>{item?.feedback}</td>
                {/* <Link to={`/payment/${item._id}`}>
                  {" "}
                  <button className="btn btn-primary"> Pay</button>
                </Link> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyClass;
