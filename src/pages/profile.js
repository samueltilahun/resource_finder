import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <div className="flex items-center space-x-6">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-teal-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
            <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-teal-500 rounded-full">
              Premium Member
            </span>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">About</h3>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate developer and aviation enthusiast. Currently training to become a professional pilot. I love working with React, Firebase, and exploring new tech.
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Phone:</strong> +251 912 345 678</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
            <li><strong>Website:</strong> <a href="#" className="text-teal-600 hover:underline">johndoe.dev</a></li>
          </ul>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full shadow transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
