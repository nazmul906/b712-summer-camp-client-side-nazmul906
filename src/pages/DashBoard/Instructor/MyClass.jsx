import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [clasees, setClasess] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myclass?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasess(data);
      });
  }, []);

  return (
    <div>
      <h5>my class</h5>
      {clasees.length}
    </div>
  );
};

export default MyClass;
