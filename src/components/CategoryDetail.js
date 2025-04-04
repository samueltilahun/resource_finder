import React from "react";
import { motion } from "framer-motion";

const CategoryDetail = ({ category }) => {
    console.log(category.heroImage)
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={category.heroImage}
          alt={category.name}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6">{category.name}</h1>
        <p className="text-lg mt-2">{category.description}</p>
        <motion.button
          className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-full shadow-md font-semibold hover:bg-blue-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = category.exploreLink)}
        >
          Explore Courses
        </motion.button>
      </motion.section>

      {/* What You'll Learn */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">What You'll Learn</h2>
        <motion.ul
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category.learningPoints.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={point.icon} alt={point.title} className="w-10 h-10" />
              <span className="text-lg font-semibold">{point.title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Featured Courses */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Featured Courses</h2>
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {category.courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-3">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700">{course.duration}</span>
                <span className="text-blue-600 font-semibold">{course.level}</span>
              </div>
              <motion.button
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={() => (window.location.href = course.link)}
              >
                Start Learning
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose This Category? */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Why Choose {category.name}?</h2>
        <motion.ul
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category.benefits.map((benefit, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
              <img src={benefit.icon} alt={benefit.title} className="w-10 h-10" />
              <span className="text-lg font-semibold">{benefit.title}</span>
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Pricing Options */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Course Pricing</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {category.pricing.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-2xl font-semibold text-blue-600">{plan.price}</p>
              <p className="text-gray-600">{plan.features}</p>
              <motion.button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={() => (window.location.href = plan.link)}
              >
                Start Free Trial
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {category.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">You May Also Like</h2>
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {category.relatedCategories.map((related, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold"><a href={related.link}>{related.title}</a></h3>
              <p className="text-gray-600">{related.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CategoryDetail;
