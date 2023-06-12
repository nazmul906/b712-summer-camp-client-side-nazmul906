import React from "react";
import { useState, useEffect } from "react";
import AllClassCard from "../Display/AllClassCard";
const AllClass = () => {
  const [allclass, setaAllclass] = useState([]);

  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-omega.vercel.app/approveclass")
      .then((res) => res.json())
      .then((data) => setaAllclass(data));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-2">
      {allclass.map((item) => (
        <AllClassCard key={item.id} allclass={item}></AllClassCard>
      ))}
    </div>
  );
};

export default AllClass;
