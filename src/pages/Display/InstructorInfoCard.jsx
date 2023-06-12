import React from "react";

const InstructorInfoCard = ({ instructor }) => {
  const { _id, email, name, photoUrl } = instructor;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photoUrl} alt="Instructor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>ID: {_id}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorInfoCard;
