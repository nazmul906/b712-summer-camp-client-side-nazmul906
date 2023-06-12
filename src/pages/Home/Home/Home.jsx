import React from "react";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
const Home = () => {
  return (
    <div>
      {/* <h4>this is home</h4> */}
      <Slider></Slider>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
