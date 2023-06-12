import React, { useEffect, useState } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularCard from "./PopularCard";
const PopularInstructor = () => {
  const [topInstructors, setTopInstructors] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-omega.vercel.app/myclass")
      .then((res) => {
        const instructorsWithEnrollment = res.data.filter(
          (instructor) =>
            instructor.paidEnrollment && instructor.paidEnrollment.length > 0
        );

        const sortedInstructors = instructorsWithEnrollment.sort(
          (a, b) => b.paidEnrollment.length - a.paidEnrollment.length
        );

        setTopInstructors(sortedInstructors.slice(0, 6));
      });
  }, []);

  return (
    <div>
      {" "}
      <div>
        {" "}
        <h2 className="text-center font-semibold text-lg">
          Popular Instructor
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {topInstructors.map((item) => (
          <PopularCard key={item._id} instructor={item}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
