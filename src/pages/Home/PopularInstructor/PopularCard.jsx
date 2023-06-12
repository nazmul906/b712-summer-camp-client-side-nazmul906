import React from "react";

const PopularCard = ({ instructor }) => {
  const { instructorEmail, instructorName } = instructor;
  console.log(instructor);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{instructorName}</h2>
        <p>Email: {instructorEmail}</p>
      </div>
    </div>
  );
};

export default PopularCard;
