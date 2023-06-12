// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const Popular = () => {
//   const [mostEnrollmentClasses, setMostEnrollmentClasses] = useState([]);
//   const [axiosSecure] = useAxiosSecure();

//   useEffect(() => {
//     axiosSecure.get("https://b7a12-summer-camp-server-side-omega.vercel.app/myclass").then((res) => {
//       const classesWithEnrollment = res.data.filter(
//         (cls) => cls.paidEnrollment
//       );

//       if (classesWithEnrollment.length > 0) {
//         const maxEnrollmentCount = Math.max(
//           ...classesWithEnrollment.map((cls) => cls.paidEnrollment.length)
//         );

//         const classesWithMaxEnrollment = classesWithEnrollment.filter(
//           (cls) => cls.paidEnrollment.length === maxEnrollmentCount
//         );

//         setMostEnrollmentClasses(classesWithMaxEnrollment);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Most Enrolled Classes</h2>
//       {mostEnrollmentClasses.length > 0 ? (
//         mostEnrollmentClasses.map((cls) => (
//           <div key={cls._id}>
//             <h3>Class Name: {cls.className}</h3>
//             <p>Enrollment Count: {cls.paidEnrollment.length}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Popular;

import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Popular = () => {
  const [mostEnrollmentClasses, setMostEnrollmentClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-omega.vercel.app/myclass")
      .then((res) => {
        const classesWithEnrollment = res.data.filter(
          (cls) => cls.paidEnrollment
        );

        if (classesWithEnrollment.length > 0) {
          const sortedClasses = classesWithEnrollment.sort(
            (a, b) => b.paidEnrollment.length - a.paidEnrollment.length
          );

          const topClasses = sortedClasses.slice(0, 6);

          setMostEnrollmentClasses(topClasses);
        }
      });
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h2 className="text-center font-semibold text-lg">Popular Class</h2>
      </div>

      <div className="grid gap-4 grid-cols-2">
        {mostEnrollmentClasses.length > 0 ? (
          mostEnrollmentClasses.map((cls) => (
            <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={cls.classImage}
                  alt={cls.className}
                  style={{ height: "100px", width: "100px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cls.className}</h2>
                <p>{cls.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
