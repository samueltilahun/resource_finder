import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">EthioCourses</h2>
          <p className="mt-3 text-sm">
            Unlock your potential with world-class courses, taught by top instructors in various fields. Learn anytime, anywhere!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="mt-3 text-sm">Subscribe to receive updates on new courses and special offers.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l bg-gray-800 text-gray-200 border-none focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r text-white hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
        </div>
        <p className="text-sm mt-4">&copy; 2024 EduLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
