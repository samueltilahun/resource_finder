"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const colorClasses = {
  red: {
    bg: "bg-[var(--category-red)]",
    text: "text-[var(--category-red-text)]",
  },
  yellow: {
    bg: "bg-[var(--category-yellow)]",
    text: "text-[var(--category-yellow-text)]",
  },
  pink: {
    bg: "bg-[var(--category-pink)]",
    text: "text-[var(--category-pink-text)]",
  },
  blue: {
    bg: "bg-[var(--category-blue)]",
    text: "text-[var(--category-blue-text)]",
  },
  black: {
    bg: "bg-[var(--category-black)]",
    text: "text-[var(--category-black-text)]",
  },
};

const CategoryCard = ({ title, description, link, image, bgColor }) => {
  const color = colorClasses[bgColor] || { bg: "bg-gray-200", text: "text-gray-800" };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="h-full"
    >
      <Link href={link}>
        <div
          className={`${color.bg} shadow-lg rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl h-full flex flex-col`}
        >
          {/* Image */}
          <div className="relative h-40 w-full">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Text */}
          <div className={`p-6 text-left flex flex-col flex-grow ${color.text}`}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-lg mt-2 flex-grow">{description}</p>
            <span className="self-start inline-block mt-4 py-2 px-6 rounded-lg border border-gray-300 bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-300">
              Learn More
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
