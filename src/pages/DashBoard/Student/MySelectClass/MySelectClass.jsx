import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const MySelectClass = () => {
  const { user } = useContext(AuthContext);
  //   check this user with the class
  const [myclass, setMyclass] = useState([]);
  //   const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.filter(
          (item) => item.enrollment && item.enrollment.includes(user?.email)
        );
        setMyclass(matched);
      });
  }, [user, myclass]);
  return (
    <div>
      <h5>{myclass.length}</h5>
    </div>
  );
};

export default MySelectClass;

// import React, { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const MySelectClass = () => {
//   const { user } = useContext(AuthContext);
//   const [mySelectedClasses, setMySelectedClasses] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/myclass")
//       .then((res) => res.json())
//       .then((data) => {
//         const matchedClasses = data.filter(
//           (item) => item.enrollment && item.enrollment.includes(user?.email)
//         );
//         setMySelectedClasses(matchedClasses);
//       });
//   }, [user, mySelectedClasses]);

//   return (
//     <div>
//       <h5>{mySelectedClasses.length}</h5>
//     </div>
//   );
// };

// export default MySelectClass;
