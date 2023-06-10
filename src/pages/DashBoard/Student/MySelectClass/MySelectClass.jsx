import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const MySelectClass = () => {
  const { user } = useContext(AuthContext);
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
  return (
    <div>
      <h5>Myclasses:{myclass.length}</h5>
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
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MySelectClass;
