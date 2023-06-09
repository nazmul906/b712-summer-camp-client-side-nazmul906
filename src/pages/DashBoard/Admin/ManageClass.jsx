import React, { useState } from "react";
import { useEffect } from "react";
const ManageClass = () => {
  const [allclass, setAllclass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => setAllclass(data));
  }, []);

  const handleApproveReq = (item) => {
    console.log(item);

    fetch(`http://localhost:5000/myclass/${item._id}`, {
      method: "PATCH",
      // headers: { "content-type": "application/json" },
      // body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          alert("approved request");
        }
      });
  };
  return (
    <div>
      <h3>manage class</h3>
      {allclass.length}

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
              <th>status</th>
            </tr>
          </thead>
          {allclass.map((item, index) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>{index + 1}</th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <button
                  onClick={() => handleApproveReq(item)}
                  className="btn btn-primary"
                >
                  approved
                </button>
                <button className="btn btn-primary"> deny</button>
                <button className="btn btn-primary">feedback</button>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
