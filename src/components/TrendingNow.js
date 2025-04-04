import React from "react";
import Image from "next/image";

const TrendingNow = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          Trending Now
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Stay up to date with the most popular and trending topics.
        </p>

        {/* Add content for this category */}
        <div className="flex gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="w-1/1 relative h-32">
              <Image
                src="/graphicdesign.jpg" // Direct path from public folder
                alt="Trending Course 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-1/1 pl-6">
              <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">Description of trending course 1.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="w-1/1 relative h-32">
              <Image
                src="/smm.webp" // Direct path from public folder
                alt="Trending Course 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-1/1 pl-6">
              <h3 className="text-xl font-semibold mb-4">Social Media Management</h3>
              <p className="text-gray-600">Description of trending course 2.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="w-1/1 relative h-32">
              <Image
                src="/smmarketing.jpg" // Direct path from public folder
                alt="Trending Course 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-1/1 pl-6">
              <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
              <p className="text-gray-600">Description of trending course 3.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="w-1/1 relative h-32">
              <Image
                src="/upwork.png" // Direct path from public folder
                alt="Trending Course 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-1/1 pl-6">
              <h3 className="text-xl font-semibold mb-4">Upwork</h3>
              <p className="text-gray-600">Description of trending course 4.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
