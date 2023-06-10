import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyEnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [enrolled, setEnrolled] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Payment data:", data);
        setEnrolled(data);
        const itemIds = data.map((payment) => payment.cartItems);
        // console.log("Item IDs:", itemIds);
        fetch("http://localhost:5000/myclass")
          .then((res) => res.json())
          .then((myClassData) => {
            console.log("MyClass data:", myClassData);
            const enrolledClassesData = myClassData.filter((item) =>
              itemIds.includes(item._id)
            );
            console.log("Enrolled Classes:", enrolledClassesData);
            // setEnrolledClasses(enrolledClassesData);
          });
      });
  }, [user?.email]);

  return (
    <div>
      <h5>Load payment data by id from payment</h5>
      <h6>{enrolledClasses.length}</h6>
    </div>
  );
};

export default MyEnrolledClass;
