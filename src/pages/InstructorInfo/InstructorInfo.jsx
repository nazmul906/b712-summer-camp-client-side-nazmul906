import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const InstructorInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  axiosSecure
    .get("http://localhost:5000/instructors")
    .then((res) => console.log(res.data));
  return (
    <div>
      <h6>Instructor</h6>
    </div>
  );
};

export default InstructorInfo;
