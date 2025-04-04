"use Client"

const Categories = [
  {
    id: "trending-now",
    name: "Trending Now",
    heroImage: "/trendingnow.webp", // Image moved to public folder
    description: "Stay up to date with the most popular topics right now!",
    exploreLink: "/courses/trending",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  },
  {
    id: "school-subjects",
    name: "School Subjects",
    heroImage: "/schoolsubject.jpg", // Image moved to public folder
    description: "Help with core subjects like Math, Science, and Literature.",
    exploreLink: "/courses/school-subjects",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  },
  {
    id: "business-digital-marketing",
    name: "Business & Marketing",
    heroImage: "/smmarketing.jpg", // Image moved to public folder
    description: "Master business strategies, marketing, and growth techniques.",
    exploreLink: "/courses/business-marketing",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  },
  {
    id: "start-youtube-channel",
    name: "Start a YouTube Channel",
    heroImage: "/startyoutube.jpeg", // Image moved to public folder
    description: "Learn how to launch and grow a successful YouTube channel.",
    exploreLink: "/courses/youtube",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  },
  {
    id: "self-improvement",
    name: "Self-Improvement & Productivity",
    heroImage: "/productivity.jpg", // Image moved to public folder
    description: "Boost your productivity and achieve your personal goals.",
    exploreLink: "/courses/self-improvement",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  },
  {
    id: "programming-tech",
    name: "Programming & Tech",
    heroImage: "/programmingtech.png", // Image moved to public folder
    description: "Learn coding, software development, and tech innovations.",
    exploreLink: "/courses/programming-tech",
    learningPoints: [
      { title: "HTML & CSS Basics", icon: "/icons/html-css.png" },
      { title: "JavaScript & ES6", icon: "/icons/js.png" },
      { title: "React & Next.js", icon: "/icons/react.png" }
    ],
    courses: [
      {
        title: "Full-Stack Web Development",
        image: "/images/fullstack.jpg", // Image moved to public folder
        description: "Become a full-stack developer with hands-on projects.",
        duration: "6 Months",
        level: "Beginner to Advanced",
        link: "/courses/fullstack"
      },
      {
        title: "React for Beginners",
        image: "/images/react.jpg", // Image moved to public folder
        description: "Learn the basics of React and build dynamic UIs.",
        duration: "2 Months",
        level: "Beginner",
        link: "/courses/react"
      },
      {
        title: "Machine Learning Basics",
        image: "/images/ml.jpg", // Image moved to public folder
        description: "Get started with machine learning and AI.",
        duration: "3 Months",
        level: "Intermediate",
        link: "/courses/machine-learning"
      }
    ],
    benefits: [
      { title: "High-demand skills", icon: "/icons/demand.png" },
      { title: "Hands-on projects", icon: "/icons/projects.png" }
    ],
    popularTopics: [
      { title: "Responsive Design", link: "/topics/responsive-design" },
      { title: "JavaScript Frameworks", link: "/topics/js-frameworks" }
    ],
    testimonials: [
      {
        name: "John Doe",
        text: "The web development course helped me land my first job!",
        image: "/images/student1.jpg" // Image moved to public folder
      }
    ],
    pricing: [
      {
        name: "Basic Plan",
        price: "$19/month",
        features: "Access to beginner courses",
        link: "/pricing/basic"
      },
      {
        name: "Pro Plan",
        price: "$49/month",
        features: "Access to all courses and live sessions",
        link: "/pricing/pro"
      }
    ],
    faqs: [
      { question: "Do I need prior experience?", answer: "No, the course is beginner-friendly." }
    ],
    relatedCategories: [
      { title: "AI & Machine Learning", description: "Advance in AI technologies.", link: "/categories/ai-ml" }
    ]
  },
  {
    id: "languages-communication",
    name: "Languages & Communication",
    heroImage: "/images/languages.jpg", // Image moved to public folder
    description: "Enhance your communication skills and learn new languages.",
    exploreLink: "/courses/languages-communication",
    learningPoints: [],
    courses: [],
    benefits: [],
    popularTopics: [],
    testimonials: [],
    pricing: [],
    faqs: [],
    relatedCategories: []
  }
];

export default Categories;
