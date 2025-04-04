import React, { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search logic here, for example, redirect to a courses page with query params or filter results
    console.log("Search query:", searchQuery);
  };

  return (
    <section className="relative w-full h-[500px] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-semibold mb-4">Unlock Your Future with Our Courses</h1>
          <p className="text-xl mb-6">
            Dive into our extensive library of courses, crafted by industry experts to help you achieve your goals.
          </p>

          {/* Search Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">What do you want to learn today?</h2>
            <form onSubmit={handleSearchSubmit} className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for courses or topics"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-2/3 p-3 rounded-l-full text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-full text-lg transition duration-300"
              >
                Search
              </button>
            </form>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
