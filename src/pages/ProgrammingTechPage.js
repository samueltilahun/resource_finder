import React from "react";
import CategoryDetail from "@/components/CategoryDetail";

const programmingCategory = {
  name: "Programming & Tech",
  heroImage: "path_to_hero_image.jpg",
  description: "Learn coding, software development, and emerging technologies...",
  exploreLink: "/categories/programming-tech",
  learningPoints: [
    { title: "Web Development: HTML, CSS, JavaScript", icon: "icon-html.png" },
    { title: "Master Python for Data Science", icon: "icon-python.png" },
    { title: "Build Mobile Apps with React Native", icon: "icon-mobile-app.png" },
    { title: "Artificial Intelligence and Machine Learning", icon: "icon-ai.png" },
  ],
  courses: [
    {
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript...",
      duration: "3 hours",
      level: "Beginner",
      image: "course1.jpg",
      link: "/courses/javascript-fundamentals",
    },
    {
      title: "Python for Data Science",
      description: "Learn Python for data analysis and visualization...",
      duration: "6 weeks",
      level: "Intermediate",
      image: "course2.jpg",
      link: "/courses/python-data-science",
    },
  ],
  benefits: [
    { title: "Comprehensive Curriculum", icon: "icon-comprehensive.png" },
    { title: "Expert Instructors", icon: "icon-expert.png" },
    { title: "Career Opportunities", icon: "icon-career.png" },
    { title: "Flexible Learning", icon: "icon-flexible.png" },
  ],
  popularTopics: [
    { title: "React.js Basics", link: "/categories/programming-tech/reactjs" },
    { title: "Python for Data Science", link: "/categories/programming-tech/python" },
  ],
  testimonials: [
    {
      name: "Sarah T., Web Developer",
      text: "I took the Web Development course, and now I’m building my own websites...",
      image: "student1.jpg",
    },
  ],
  pricing: [
    {
      name: "Basic Plan",
      price: "$19.99 per month",
      features: "Access to all beginner-level courses",
      link: "/subscribe/basic",
    },
    {
      name: "Premium Plan",
      price: "$49.99 per month",
      features: "Access to all courses, including advanced content",
      link: "/subscribe/premium",
    },
  ],
  resources: [
    {
      title: "Free Coding Bootcamp",
      description: "Join our free bootcamp to kickstart your coding journey.",
      image: "bootcamp.jpg",
      link: "/resources/free-bootcamp",
    },
    {
      title: "Web Development Blog",
      description: "Stay updated with the latest trends in web development.",
      image: "blog.jpg",
      link: "/resources/web-dev-blog",
    },
    {
      title: "AI & Machine Learning Guide",
      description: "A comprehensive guide to AI and machine learning.",
      image: "ai-guide.jpg",
      link: "/resources/ai-guide",
    },
  ],
  faqs: [
    { question: "Is this course suitable for beginners?", answer: "Yes, we have courses for all levels." },
    { question: "Can I get a certificate?", answer: "Yes, certificates are available after course completion." },
  ],
  relatedCategories: [
    { title: "Design & UX", description: "Learn UI/UX design.", link: "/categories/design" },
    { title: "Data Science & AI", description: "Master data analysis.", link: "/categories/data-science" },
  ],
};

const ProgrammingTechPage = () => {
  return <CategoryDetail category={programmingCategory} />;
};

export default ProgrammingTechPage;
