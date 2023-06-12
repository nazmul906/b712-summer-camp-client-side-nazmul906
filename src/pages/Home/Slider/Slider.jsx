import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper, { Navigation, Pagination } from "swiper";

const Slider = () => {
  useEffect(() => {
    Swiper.use([Navigation, Pagination]);

    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-3xl font-bold mb-4">Learn a New Language Today!</h2>
      <div className="w-2/3 mx-auto">
        <div
          className="swiper-container"
          style={{ maxWidth: "500px", height: "600px" }}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://i.ibb.co/FDqmz1t/download-9.jpg"
                alt="Language 1"
                className=" w-100 h-64 object-cover rounded"
              />
              <div className="bg-white p-4 rounded shadow mt-4">
                <h3 className="text-xl font-bold mb-2">Portugues</h3>
                <p className="text-gray-700">
                  Immerse yourself in the vibrant Spanish culture and learn the
                  language from native speakers.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Learn More
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                src="https://i.ibb.co/FDqmz1t/download-9.jpg"
                alt="Language 2"
                className=" w-100 h-64 object-cover rounded"
              />
              <div className="bg-white p-4 rounded shadow mt-4">
                <h3 className="text-xl font-bold mb-2">
                  French Conversation Classes
                </h3>
                <p className="text-gray-700">
                  Improve your French speaking skills through engaging
                  conversations with experienced tutors.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Learn More
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                src="https://i.ibb.co/cN3GqNt/Hindi-Answer-Sheet.jpg"
                alt="Language 3"
                className="w-100 h-64 object-cover rounded"
              />
              <div className="bg-white p-4 rounded shadow mt-4">
                <h3 className="text-xl font-bold mb-2">Hindi for Beginners</h3>
                <p className="text-gray-700">
                  Start your journey of learning Mandarin Chinese with our
                  comprehensive beginner's course.
                </p>
                <a href="#" className="btn btn-primary mt-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div
            className="swiper-button-next"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <div
            className="swiper-button-prev"
            style={{ width: "10px", height: "10px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
