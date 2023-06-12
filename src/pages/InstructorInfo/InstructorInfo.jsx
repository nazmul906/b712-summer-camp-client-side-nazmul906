import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorInfoCard from "../Display/InstructorInfoCard";

const InstructorInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-omega.vercel.app/instructors")
      .then((res) => setInstructor(res.data));
  }, []);
  return (
    <div>
      <h6>Instructor</h6>
      <div className="grid grid-cols-2 gap-4">
        {instructor.map((item) => (
          <InstructorInfoCard
            key={item._id}
            instructor={item}
          ></InstructorInfoCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorInfo;
