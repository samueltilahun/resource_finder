"use client";
import { motion } from "framer-motion";
import CategoryCard from "./CateogryCard"; // Make sure the filename is correct

const categories = [
  {
    title: "Trending Now",
    description: "Stay up to date with the most popular and trending topics right now.",
    link: "/categories/trending-now",
    image: "/trendingnow.webp", // Direct path from public folder
    bgColor: "red",
    altText: "Trending Now Category Image"
  },
  {
    title: "School Subjects",
    description: "Get help with core school subjects like Math, Science, and Literature.",
    link: "/categories/school-subjects",
    image: "/schoolsubject.jpg", // Direct path from public folder
    bgColor: "blue",
    altText: "School Subjects Category Image"
  },
  {
    title: "Business & Marketing",
    description: "Learn business strategies, marketing techniques, and online growth hacks.",
    link: "/categories/business-digital-marketing",
    image: "/marketing.png", // Direct path from public folder
    bgColor: "green",
    altText: "Business & Marketing Category Image"
  },
  {
    title: "Start a YouTube Channel",
    description: "Step-by-step guidance to build and grow your YouTube presence.",
    link: "/categories/start-youtube-channel",
    image: "/startyoutube.jpeg", // Direct path from public folder
    bgColor: "pink",
    altText: "Start a YouTube Channel Category Image"
  },
  {
    title: "Self-Improvement & Productivity",
    description: "Improve your personal growth, productivity, and achieve your goals.",
    link: "/categories/self-improvement",
    image: "/productivity.jpg", // Direct path from public folder
    bgColor: "yellow",
    altText: "Self-Improvement & Productivity Category Image"
  },
  {
    title: "Programming & Tech",
    description: "Learn coding, software development, and emerging technologies.",
    link: "/categories/programming-tech",
    image: "/programmingtech.png", // Direct path from public folder
    bgColor: "purple",
    altText: "Programming & Tech Category Image"
  },
  {
    title: "Languages & Communication",
    description: "Enhance your communication skills and learn new languages.",
    link: "/categories/languages-communication",
    image: "/languagecommunication.jpg", // Direct path from public folder
    bgColor: "teal",
    altText: "Languages & Communication Category Image"
  }
];

const PopularCategoriesSection = () => {
  return (
    <section id="categories" className="py-16 bg-gray-100">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 font-serif tracking-wide">
          Popular Categories
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore trending categories that will boost your knowledge.
        </p>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                link={category.link}
                image={category.image}
                altText={category.altText}
                bgColor={category.bgColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
