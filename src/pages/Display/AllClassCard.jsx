import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from "../../providers/AuthProvider";

const AllClassCard = ({ allclass }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [button, setButton] = useState(false);
  const { _id, className, instructorName, price, availableSeats } = allclass;
  // console.log(allclass);
  const { user } = useContext(AuthContext);
  const handleSelectClass = (_id) => {
    // console.log("selected item", _id);
    // const selected = { user: user.email, selecteditem: item };
    // update as an array
    const enrollment = { enrollment: user?.email };
    // task
    // update the item.. with new enrollment field and array of email;
    fetch(
      `https://b7a12-summer-camp-server-side-omega.vercel.app/myclass/select/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(enrollment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("selected", data);
        if (data.modifiedCount > 0) {
          alert("Class is Selected");
        }
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{instructorName}</p>
        <p>{availableSeats}</p>
        <p>{price}</p>

        {/* todo:Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
Available seats are 0
Logged in as admin/instructor
The class card background will be red if the available seats are 0. */}
        {!isAdmin && !isInstructor && (
          <div className="card-actions justify-end">
            <Link>
              {" "}
              <button
                onClick={() => handleSelectClass(_id)}
                className="btn btn-primary"
              >
                Select
              </button>
            </Link>
          </div>
        )}
        {!isAdmin && !isInstructor && (
          <div className="card-actions justify-end">
            <Link to="/dashboard/payment">
              {" "}
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClassCard;
