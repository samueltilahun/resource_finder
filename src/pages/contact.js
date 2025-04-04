import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="w-full py-16 px-8 bg-gray-50">
      {/* Contact Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch with Us</h2>
        <p className="text-xl text-gray-600 mt-4">We'd love to hear from you. Feel free to reach out using the contact form below or through our other channels.</p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contact Form</h3>

        <form className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="p-3 border border-gray-300 rounded-lg mt-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="p-3 border border-gray-300 rounded-lg mt-2"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows="6"
              className="p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg mt-6 shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-between"
      >
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
          <p className="text-lg text-gray-600 mt-4">
            1234 Street Name, City, Country
            <br />
            <span className="text-blue-600">Phone: (123) 456-7890</span>
            <br />
            <span className="text-blue-600">Email: contact@company.com</span>
          </p>
        </div>

        {/* Office Image */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/path-to-office-image.jpg" // Replace with your image path
            alt="Our Office"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Find Us Here</h3>
        <div className="relative w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2291289754016!2d-122.4012707846818!3d37.79343737975539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809debd62b61%3A0x94593d1c8a312317!2s1234+Street+Name%2C+San+Francisco%2C+CA+94107!5e0!3m2!1sen!2sus!4v1662614955416!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
