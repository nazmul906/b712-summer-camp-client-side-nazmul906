import React from "react";
import { useState, useEffect } from "react";
import AllClassCard from "../Display/AllClassCard";
const AllClass = () => {
  const [allclass, setaAllclass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/approveclass")
      .then((res) => res.json())
      .then((data) => setaAllclass(data));
  }, []);

  return (
    <div>
      <h4>Avaialble classes</h4>
      {allclass.map((item) => (
        <AllClassCard key={item.id} allclass={item}></AllClassCard>
      ))}
    </div>
  );
};

export default AllClass;
