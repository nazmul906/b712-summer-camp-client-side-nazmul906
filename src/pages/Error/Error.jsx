import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      {/* <h1>This is an error page </h1> */}
      <div className="mx-auto">
        <img
          className="w-full"
          src="  https://i.ibb.co/pL4Tg5k/download-10.jpg"
        />
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
