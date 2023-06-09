import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AllClassCard = ({ allclass }) => {
  const { _id, languageName, instructorName, price } = allclass;
  console.log(allclass);
  const { user } = useContext(AuthContext);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{languageName}</h2>
        <p>{instructorName}</p>
        {/* todo:Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
Available seats are 0
Logged in as admin/instructor
The class card background will be red if the available seats are 0. */}
        <div className="card-actions justify-end">
          <Link to="/dashboard/selectclass">
            {" "}
            <button
              onClick={() => handleSelectClass(item)}
              className="btn btn-primary"
            >
              Select
            </button>
          </Link>
        </div>
        <div className="card-actions justify-end">
          <Link to="/dashboard/payment">
            {" "}
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
