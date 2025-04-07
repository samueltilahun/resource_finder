import React from "react";
import { motion } from "framer-motion";

const CategoryDetail = ({ category }) => {
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
      </motion.section>

      {/* What You'll Learn */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Why Learn {category.name}?</h2>
        <motion.ul
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.li
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg font-semibold">{category.learningPoints[0].title}</span>
            <p>{category.learningPoints[0].description}</p>
          </motion.li>
        </motion.ul>
      </section>

      {/* Featured Resources */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">Featured Resources</h2>
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {category.resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
              <a
                href={resource.link}
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 block text-center"
              >
                Visit Resource
              </a>
            </motion.div>
          ))}
        </motion.div>
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
              <h3 className="text-xl font-semibold">
                <a href={related.link}>{related.title}</a>
              </h3>
              <p className="text-gray-600">{related.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CategoryDetail;
