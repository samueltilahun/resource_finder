import React from "react";

const CourseCard = ({ title, description, gradeOrField }) => (
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 transform hover:scale-105 transition duration-500 ease-in-out">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-4 text-center text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg mt-2">{gradeOrField}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
        <a
          href="#"
          className="block  mt-4 py-2 px-6 rounded-lg text-red hover:text-black transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default CourseCard