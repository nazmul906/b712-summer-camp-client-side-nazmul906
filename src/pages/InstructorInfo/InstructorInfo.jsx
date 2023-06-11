import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorInfoCard from "../Display/InstructorInfoCard";

const InstructorInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("http://localhost:5000/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  return (
    <div>
      <h6>Instructor</h6>
      {instructor.map((item) => (
        <InstructorInfoCard
          key={item._id}
          instructor={item}
        ></InstructorInfoCard>
      ))}
    </div>
  );
};

export default InstructorInfo;
