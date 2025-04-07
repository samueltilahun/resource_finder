"use Client"

const Categories = [
  {
    id: "trending-now",
    name: "Trending Now",
    heroImage: "/trendingnow.webp", // Image moved to public folder
    description: "Stay ahead of the curve with the hottest and most in-demand topics trending globally. This category brings you the most relevant and up-to-date courses and resources in technology, business, personal development, and culture. Whether you're looking to explore AI, NFTs, productivity hacks, or viral content creation—this is your go-to hub.",
    exploreLink: "/courses/trending",
    learningPoints: [
      { title: "Understanding Generative AI & ChatGPT", icon: "/icons/ai.png" },
      { title: "Mastering Personal Branding on Social Media", icon: "/icons/personalbranding.png" },
      { title: "Getting Started with NFTs & Web3", icon: "/icons/nft.png" },
      { title: "Learning Remote Work Tools & Productivity Hacks", icon: "/icons/remote.png" },
      { title: "Content Creation: Reels, Shorts, and TikToks", icon: "/icons/content.png" },
      { title: "The Rise of E-commerce & Dropshipping", icon: "/icons/ecommerce.png" }
    ],
    courses: [
      {
        title: "AI for Everyone: Understand & Use ChatGPT",
        instructor: "Andrew Ng",
        platform: "Coursera",
        duration: "6 hours",
        rating: "4.8",
        link: "https://www.coursera.org/learn/ai-for-everyone"
      },
      {
        title: "The Complete TikTok Marketing Masterclass",
        instructor: "Derrick Mitchell",
        platform: "Udemy",
        duration: "3.5 hours",
        rating: "4.6",
        link: "https://www.udemy.com/course/tiktok-marketing/"
      },
      {
        title: "Web3 Fundamentals: Blockchain, NFTs & Crypto",
        instructor: "Tom Anderson",
        platform: "edX",
        duration: "4 weeks",
        rating: "4.7",
        link: "https://www.edx.org/course/introduction-to-web3"
      },
      {
        title: "Dropshipping Business Mastery",
        instructor: "Riley Bennett",
        platform: "Skillshare",
        duration: "2.5 hours",
        rating: "4.5",
        link: "https://www.skillshare.com/classes/dropshipping-mastery"
      }
    ],
    benefits: [
      { title: "Stay Ahead of Industry Trends", icon: "/icons/trends.png" },
      { title: "Learn from Real-World Case Studies", icon: "/icons/casestudy.png" },
      { title: "Boost Your Career Relevance", icon: "/icons/careerboost.png" },
      { title: "Expand Your Digital Skills Quickly", icon: "/icons/digitalskills.png" },
      { title: "Learn from Top Global Experts", icon: "/icons/expert.png" },
      { title: "Access Updated Courses Regularly", icon: "/icons/refresh.png" }
    ],
    popularTopics: [
      { title: "AI Prompt Engineering", link: "/topics/prompt-engineering" },
      { title: "How to Build a Personal Brand Online", link: "/topics/personal-branding" },
      { title: "NFTs Explained Simply", link: "/topics/nfts" },
      { title: "Remote Work: Essential Tools & Setup", link: "/topics/remote-setup" },
      { title: "Viral Content Strategy for Reels and Shorts", link: "/topics/viral-content" },
      { title: "2025 E-commerce Trends & Forecast", link: "/topics/ecommerce-trends" }
    ],
    testimonials: [
      {
        name: "Samira Elmi",
        image: "/images/testimonial-samira.jpg",
        text: "I learned how to use ChatGPT and applied it to my job in customer service—it saved me hours every week. The course recommendations in 'Trending Now' are insanely relevant!"
      },
      {
        name: "Jacob Rivers",
        image: "/images/testimonial-jacob.jpg",
        text: "I took the TikTok Marketing course listed here and within two weeks, I had my first viral video. These trending topics helped me pivot my entire content strategy."
      }
    ],
    pricing: [
      {
        plan: "Starter",
        price: "$0/month",
        features: ["Access free trending courses", "Weekly trend updates", "Newsletter subscription"]
      },
      {
        plan: "Pro",
        price: "$14.99/month",
        features: ["Full access to all trending content", "Live webinars & Q&A", "Early access to new topics", "Certificate of completion"]
      },
      {
        plan: "Elite",
        price: "$39.99/month",
        features: ["Everything in Pro", "1-on-1 mentorship with experts", "Exclusive trend reports", "Community mastermind access"]
      }
    ],
    faqs: [
      {
        question: "Why should I follow trending topics?",
        answer: "Trending topics are relevant and timely, allowing you to gain cutting-edge knowledge and stay competitive in today’s fast-evolving job and digital landscape."
      },
      {
        question: "Are the trending topics beginner-friendly?",
        answer: "Yes! Most topics are covered from the ground up, making them suitable for both beginners and professionals looking to expand their skill set."
      },
      {
        question: "How often is this section updated?",
        answer: "We update the Trending Now section bi-weekly to ensure you always have access to the freshest and most in-demand content."
      },
      {
        question: "Will I receive certifications?",
        answer: "Yes, most paid plans come with a certificate of completion that can be shared on your resume or LinkedIn."
      }
    ],
    relatedCategories: [
      {
        title: "AI & Automation",
        description: "Deep-dive into machine learning, automation, and artificial intelligence.",
        link: "/categories/ai-automation"
      },
      {
        title: "Digital Marketing",
        description: "Master content creation, social media strategy, and growth tactics.",
        link: "/categories/digital-marketing"
      },
      {
        title: "Web3 & Crypto",
        description: "Understand blockchain, decentralized tech, and crypto innovations.",
        link: "/categories/web3"
      }
    ]
  }
  ,{
    id: "school-subjects",
    name: "School Subjects",
    heroImage: "/schoolsubject.jpg", // Image moved to public folder
    description: "Get expert help and improve your understanding in core subjects such as Math, Science, and Literature. This category provides in-depth courses designed to make complex topics easier to understand, from high school to advanced levels. Whether you're struggling with Algebra, fascinated by Chemistry, or looking to improve your reading comprehension skills, we've got you covered.",
    exploreLink: "/courses/school-subjects",
    learningPoints: [
      { title: "Mathematics (Algebra, Geometry, Calculus)", icon: "/icons/math.png" },
      { title: "Physics & Chemistry", icon: "/icons/physics.png" },
      { title: "Biology", icon: "/icons/biology.png" },
      { title: "Literature & English Language", icon: "/icons/literature.png" },
      { title: "History & Geography", icon: "/icons/history.png" },
      { title: "Computer Science", icon: "/icons/computerscience.png" }
    ],
    resources: [
      {
        title: "Books & Study Guides",
        description: "Enhance your understanding with these must-have books and study guides covering a wide range of school subjects.",
        resources: [
          { title: "The Everything Guide to Algebra", link: "https://www.amazon.com/Everything-Guide-Algebra-Everything/dp/1598698956", description: "A comprehensive guide to mastering Algebra, from basic equations to advanced problem-solving techniques." },
          { title: "Chemistry For Dummies", link: "https://www.amazon.com/Chemistry-Dummies-John-Taylor/dp/1118032429", description: "A beginner-friendly book to understand the principles of Chemistry in an easy-to-follow format." },
          { title: "Shakespeare Made Easy", link: "https://www.amazon.com/Shakespeare-Made-Easy-Special/dp/014051228X", description: "Get a deeper understanding of Shakespeare's plays with this simplified version of his works." }
        ]
      },
      {
        title: "YouTube Channels",
        description: "Learn from top educational YouTube channels that break down complex topics into easy-to-understand videos for all levels.",
        resources: [
          { title: "Khan Academy", link: "https://www.youtube.com/user/khanacademy", description: "Offers lessons in a wide range of subjects, from Math to Science and History, with clear explanations and interactive exercises." },
          { title: "CrashCourse", link: "https://www.youtube.com/user/crashcourse", description: "Engaging video lessons on subjects like Biology, History, Literature, and more, delivered with humor and depth." },
          { title: "PatrickJMT", link: "https://www.youtube.com/user/patrickjmt", description: "Detailed Math tutorials on everything from basic arithmetic to advanced calculus, designed for students who want to improve their problem-solving skills." }
        ]
      },
      {
        title: "Online Courses & Tutorials",
        description: "Take your learning further with these well-structured online courses covering all school subjects. Perfect for extra practice and mastery.",
        resources: [
          { title: "Coursera: Introduction to Chemistry", link: "https://www.coursera.org/learn/chemistry", description: "A comprehensive introduction to Chemistry, with a focus on both theory and practical application." },
          { title: "Udemy: High School Algebra", link: "https://www.udemy.com/course/high-school-algebra/", description: "Master Algebra with this detailed course that covers everything from basic equations to advanced topics." },
          { title: "edX: High School English Literature", link: "https://www.edx.org/course/english-literature", description: "A detailed look at English Literature, focusing on classic works and modern interpretations, perfect for high school students." }
        ]
      },
      {
        title: "Podcasts",
        description: "Listen to educational podcasts that explain and break down various school subjects. Perfect for learning on the go.",
        resources: [
          { title: "The EdSurge Podcast", link: "https://www.edsurge.com/podcasts", description: "A podcast that focuses on educational technology, including resources for teaching core subjects." },
          { title: "The Chemistry World Podcast", link: "https://www.rsc.org/podcasts/chemistry-world-podcast", description: "Delve into the latest discoveries in Chemistry and learn more about the subject's key concepts." },
          { title: "The English Teacher Podcast", link: "https://www.teacherstalkpodcast.com/", description: "Learn English literature techniques, writing skills, and language tips with this engaging podcast." }
        ]
      }
    ],
    benefits: [
      { title: "Improve Grades with Expert Help", icon: "/icons/grades.png" },
      { title: "Master Core Subjects with Confidence", icon: "/icons/mastery.png" },
      { title: "Learn at Your Own Pace", icon: "/icons/self-paced.png" },
      { title: "Access to High-Quality Resources", icon: "/icons/resources.png" },
      { title: "Prepare for Exams and Assessments", icon: "/icons/exams.png" },
      { title: "Engaging and Interactive Learning", icon: "/icons/engagement.png" }
    ],
    popularTopics: [
      { title: "Mastering Algebra and Geometry", link: "/topics/algebra-geometry" },
      { title: "Understanding the Human Body", link: "/topics/biology" },
      { title: "Introduction to Physics", link: "/topics/physics" },
      { title: "Shakespeare: His Works and Impact", link: "/topics/shakespeare" },
      { title: "The Rise and Fall of Civilizations", link: "/topics/history" },
      { title: "Introduction to Computer Science", link: "/topics/computerscience" }
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        text: "I struggled with Algebra for years, but after taking the courses in this category, I finally understood the concepts and passed my exams with flying colors!",
        image: "/images/testimonial1.jpg" // Image moved to public folder
      },
      {
        name: "Sarah Lee",
        text: "The resources for Literature are fantastic! The guides helped me understand Shakespeare's works, and the podcast on English literature was a game-changer for my grades.",
        image: "/images/testimonial2.jpg" // Image moved to public folder
      }
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$9.99/month",
        features: ["Access to all core subjects", "Standard support", "Monthly updates"]
      },
      {
        plan: "Advanced",
        price: "$29.99/month",
        features: ["Everything in Basic", "1-on-1 tutoring sessions", "Advanced level courses and quizzes", "Priority support"]
      },
      {
        plan: "Premium",
        price: "$49.99/month",
        features: ["Everything in Advanced", "Expert guidance for exam prep", "Access to exclusive study materials", "Lifetime access to all subjects"]
      }
    ],
    faqs: [
      { question: "How do I improve my grades in Math?", answer: "Start by mastering the basics, practice regularly, and use online resources to clarify difficult concepts." },
      { question: "Do I need a tutor for Science subjects?", answer: "A tutor can be helpful, but with the right resources and dedication, you can self-study and excel in subjects like Physics and Chemistry." },
      { question: "What are the best strategies to prepare for Literature exams?", answer: "Understand key themes, characters, and historical context. Practice essay writing and use study guides to help reinforce your knowledge." },
      { question: "How can I prepare for high school exams?", answer: "Organize your study schedule, practice with past papers, and use resources that break down complex topics into manageable chunks." }
    ],
    relatedCategories: [
      { title: "Advanced Science & Mathematics", description: "Explore advanced topics in Science, Math, and Engineering.", link: "/categories/advanced-science-math" },
      { title: "Test Preparation", description: "Get the best strategies and resources for preparing for your exams.", link: "/categories/test-preparation" }
    ]
  }
,  
{
  id: "business-digital-marketing",
  name: "Business & Marketing",
  heroImage: "/smmarketing.jpg", // Image moved to public folder
  description: "Gain essential business strategies, marketing expertise, and growth techniques that will empower you to build and scale your business effectively. Master digital marketing tools, strategies for business growth, and learn how to navigate the world of modern business practices to thrive in today's competitive environment.",
  exploreLink: "/courses/business-marketing",
  learningPoints: [
    { title: "Business Strategy & Planning", icon: "/icons/strategy.png" },
    { title: "Social Media Marketing", icon: "/icons/smm.png" },
    { title: "SEO & Content Marketing", icon: "/icons/seo.png" },
    { title: "Branding & Positioning", icon: "/icons/branding.png" },
    { title: "Email Marketing & Automation", icon: "/icons/email-marketing.png" },
    { title: "Influencer & Affiliate Marketing", icon: "/icons/influencer.png" }
  ],
  resources: [
    {
      title: "Books",
      description: "Expand your business and marketing knowledge by diving into these top-rated books that cover strategy, growth, and digital marketing principles.",
      resources: [
        { title: "Business Model Generation", link: "https://www.amazon.com/Business-Model-Generation-Venture-Design/dp/0470876417", description: "Learn about creating business models that work with this comprehensive guide." },
        { title: "Influence: The Psychology of Persuasion", link: "https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X", description: "A deep dive into the psychological principles of marketing and business influence." },
        { title: "Jab, Jab, Jab, Right Hook", link: "https://www.amazon.com/Jab-Right-Hook-Content-Marketing/dp/006227306X", description: "Gary Vaynerchuk's guide to content marketing across various social media platforms." }
      ]
    },
    {
      title: "YouTube Channels",
      description: "These popular YouTube channels cover a wide range of business, marketing, and growth strategies, providing you with up-to-date tips and tricks.",
      resources: [
        { title: "HubSpot", link: "https://www.youtube.com/user/HubSpot", description: "HubSpot provides tutorials on inbound marketing, SEO, and business growth." },
        { title: "Neil Patel", link: "https://www.youtube.com/user/neilvkpatel", description: "Neil Patel offers digital marketing strategies, SEO tips, and growth tactics for small businesses." },
        { title: "GaryVee", link: "https://www.youtube.com/user/GaryVaynerchuk", description: "Gary Vaynerchuk shares actionable business advice and strategies to scale a business through social media and branding." }
      ]
    },
    {
      title: "Online Courses & Tutorials",
      description: "Advance your business and marketing skills with these highly-rated online courses from top learning platforms.",
      resources: [
        { title: "Coursera: Digital Marketing Specialization", link: "https://www.coursera.org/specializations/digital-marketing", description: "A comprehensive course by the University of Illinois that covers all aspects of digital marketing." },
        { title: "Udemy: The Complete Digital Marketing Course", link: "https://www.udemy.com/course/digital-marketing-course/", description: "This all-in-one digital marketing course includes SEO, social media, email marketing, and more." },
        { title: "LinkedIn Learning: Business Development & Marketing", link: "https://www.linkedin.com/learning/paths/business-development-marketing", description: "Explore a series of courses on business development and marketing strategies for professionals." }
      ]
    },
    {
      title: "Podcasts",
      description: "Stay updated with the latest marketing trends, business strategies, and growth techniques through these insightful podcasts.",
      resources: [
        { title: "Online Marketing Made Easy", link: "https://onlinemarketingmadeeasy.libsyn.com/", description: "Amy Porterfield shares tips on digital marketing, online business development, and list-building strategies." },
        { title: "Marketing School", link: "https://marketingschool.io/", description: "Neil Patel and Eric Siu discuss daily strategies and tactics in digital marketing." },
        { title: "The Smart Passive Income Podcast", link: "https://www.smartpassiveincome.com/shows/spi/", description: "Pat Flynn provides guidance on building passive income streams and scaling your online business." }
      ]
    }
  ],
  benefits: [
    { title: "Learn Proven Business Strategies", icon: "/icons/business-strategy.png" },
    { title: "Master Social Media Marketing", icon: "/icons/social-media-marketing.png" },
    { title: "Grow Your Business with SEO", icon: "/icons/seo-growth.png" },
    { title: "Understand Brand Positioning", icon: "/icons/brand-positioning.png" },
    { title: "Maximize ROI with Email Marketing", icon: "/icons/email-marketing-growth.png" },
    { title: "Leverage Influencers & Affiliates", icon: "/icons/affiliate-marketing.png" }
  ],
  popularTopics: [
    { title: "Building a Strong Business Strategy", link: "/topics/business-strategy" },
    { title: "Social Media Marketing for Beginners", link: "/topics/social-media-marketing" },
    { title: "Effective Email Marketing Campaigns", link: "/topics/email-marketing" },
    { title: "Search Engine Optimization (SEO) Basics", link: "/topics/seo-basics" },
    { title: "Branding and Positioning Your Business", link: "/topics/business-branding" },
    { title: "Influencer and Affiliate Marketing", link: "/topics/affiliate-marketing" }
  ],
  testimonials: [
    {
      name: "James Foster",
      text: "The strategies I learned in this course helped me grow my business by 300% in just six months. I now have a solid social media presence and a more targeted audience.",
      image: "/images/testimonial1.jpg" // Image moved to public folder
    },
    {
      name: "Emily Clark",
      text: "This course has been a game-changer for my online business. From SEO to email marketing, I’ve implemented everything I’ve learned, and it’s paying off.",
      image: "/images/testimonial2.jpg" // Image moved to public folder
    }
  ],
  pricing: [
    {
      plan: "Basic",
      price: "$19.99/month",
      features: ["Access to all courses", "Monthly updates", "Community support"]
    },
    {
      plan: "Pro",
      price: "$49.99/month",
      features: ["Everything in Basic", "1-on-1 mentorship", "Advanced marketing strategies", "Access to exclusive resources"]
    },
    {
      plan: "Premium",
      price: "$99.99/month",
      features: ["Everything in Pro", "VIP support", "Business consultation sessions", "Lifetime access to all courses"]
    }
  ],
  faqs: [
    { question: "What is the best way to learn digital marketing?", answer: "The best way is through a combination of practical experience and structured learning. Start by implementing strategies on your own projects and then dive into online courses and resources." },
    { question: "How long will it take to see results from digital marketing?", answer: "Results vary depending on the strategy, but it usually takes a few months to start seeing significant improvements, especially in SEO and social media growth." },
    { question: "What tools do I need to use for digital marketing?", answer: "Popular tools include Google Analytics, HubSpot for inbound marketing, Hootsuite or Buffer for social media scheduling, and MailChimp for email marketing." },
    { question: "How do I track the performance of my marketing efforts?", answer: "Use analytics tools such as Google Analytics, social media insights, and email marketing platforms to track your campaigns’ performance." }
  ],
  relatedCategories: [
    { title: "Social Media Marketing", description: "Learn how to leverage platforms like Facebook, Instagram, and LinkedIn to grow your business.", link: "/categories/social-media-marketing" },
    { title: "Entrepreneurship", description: "Dive into entrepreneurship with courses that teach you how to start and scale your own business.", link: "/categories/entrepreneurship" }
  ]
}
,
{
  id: "start-youtube-channel",
  name: "Start a YouTube Channel",
  heroImage: "/startyoutube.jpeg", // Image moved to public folder
  description: "Discover step-by-step guidance on how to start, grow, and monetize a successful YouTube channel. Learn everything from content creation to audience engagement, and build a channel that stands out in a competitive space.",
  exploreLink: "/courses/youtube",
  learningPoints: [
    { title: "Channel Branding & Setup", icon: "/icons/branding.png" },
    { title: "Content Creation Strategies", icon: "/icons/content-creation.png" },
    { title: "YouTube SEO & Algorithm", icon: "/icons/seo.png" },
    { title: "Audience Engagement", icon: "/icons/engagement.png" },
    { title: "Monetization Strategies", icon: "/icons/monetization.png" }
  ],
  resources: [
    {
      title: "Books",
      description: "Get a deep understanding of YouTube channel creation and strategies by reading these top books.",
      resources: [
        { title: "YouTube Secrets", link: "https://www.amazon.com/YouTube-Secrets-Entrepreneurs-Influencers-Video/dp/1642011618", description: "A comprehensive guide on growing your YouTube channel from two experienced YouTube strategists." },
        { title: "YouTube Growth Hacks", link: "https://www.amazon.com/YouTube-Growth-Hacks-Viral-Content/dp/B07Y39Q2SZ", description: "Learn strategies to increase your views and subscribers quickly with these YouTube hacks." },
        { title: "The YouTube Creator's Guide", link: "https://www.amazon.com/YouTube-Creators-Guide-Starting-Influence/dp/B08C7M1YQS", description: "A beginner's guide to starting a YouTube channel and building a community." }
      ]
    },
    {
      title: "YouTube Channels",
      description: "These popular YouTube channels are dedicated to teaching you everything about YouTube channel growth, monetization, and branding.",
      resources: [
        { title: "Think Media", link: "https://www.youtube.com/c/ThinkMedia", description: "Think Media provides tips for creating quality content and growing a successful YouTube channel." },
        { title: "Video Influencers", link: "https://www.youtube.com/c/VideoInfluencers", description: "Learn how to grow and monetize your YouTube channel with strategies from experienced creators." },
        { title: "Roberto Blake", link: "https://www.youtube.com/c/RobertoBlake2", description: "Roberto Blake shares creative advice on how to grow your channel and build a personal brand." }
      ]
    },
    {
      title: "Online Courses & Tutorials",
      description: "Enhance your YouTube channel development skills with these online tutorials and courses.",
      resources: [
        { title: "YouTube Creator Academy", link: "https://www.youtube.com/creators/academy", description: "Free courses offered by YouTube itself, covering topics like video production, YouTube growth, and monetization." },
        { title: "Udemy: YouTube Masterclass", link: "https://www.udemy.com/course/youtube-mastery/", description: "A detailed course on YouTube channel creation and optimization for growth and income." },
        { title: "Skillshare: YouTube Success Course", link: "https://www.skillshare.com/classes/YouTube-Success-A-Step-by-Step-Guide-to-Growing-Your-Channel/1206345179", description: "Skillshare offers a comprehensive course on growing your YouTube channel, complete with expert insights and practical tips." }
      ]
    },
    {
      title: "Podcasts",
      description: "These podcasts will help you stay updated with the latest YouTube trends, tips, and strategies.",
      resources: [
        { title: "The YouTube Creators Podcast", link: "https://www.youtube.com/c/YouTubeCreators", description: "Learn directly from the YouTube team on how to grow your channel and navigate the platform's tools." },
        { title: "Online Marketing Made Easy", link: "https://onlinemarketingmadeeasy.libsyn.com/", description: "This podcast covers a variety of topics, including YouTube growth strategies and video marketing." },
        { title: "The Video Marketing Show", link: "https://www.videomarketingshow.com/podcast", description: "Explore how to market yourself and your content effectively on YouTube and other platforms." }
      ]
    }
  ],
  benefits: [
    { title: "Create a Personal Brand", icon: "/icons/brand.png" },
    { title: "Earn Income Through Monetization", icon: "/icons/earn.png" },
    { title: "Build an Engaged Audience", icon: "/icons/audience.png" },
    { title: "Grow Your Influence", icon: "/icons/influence.png" },
    { title: "Develop New Skills", icon: "/icons/skills.png" }
  ],
  popularTopics: [
    { title: "Creating Engaging Thumbnails", link: "/topics/engaging-thumbnails" },
    { title: "How to Optimize Your YouTube Videos for SEO", link: "/topics/youtube-seo" },
    { title: "Building Your YouTube Content Strategy", link: "/topics/content-strategy" },
    { title: "Monetizing Your YouTube Channel", link: "/topics/youtube-monetization" }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      text: "Starting my YouTube channel seemed daunting at first, but the strategies I learned here helped me gain 10,000 subscribers within just a few months!",
      image: "/images/student1.jpg" // Image moved to public folder
    },
    {
      name: "David Lee",
      text: "The content provided gave me all the tools to effectively grow my channel. I'm now earning income from ads and sponsorships.",
      image: "/images/student2.jpg" // Image moved to public folder
    }
  ],
  faqs: [
    { question: "What is the best way to start a YouTube channel?", answer: "Start by finding a niche you're passionate about, create high-quality content, and be consistent with your uploads." },
    { question: "How do I grow my YouTube channel?", answer: "Focus on creating valuable content, optimize your videos for SEO, engage with your audience, and promote your channel on other platforms." },
    { question: "How can I monetize my YouTube channel?", answer: "You can monetize your channel through ads, sponsorships, merchandise sales, affiliate marketing, and more." },
    { question: "Do I need expensive equipment to start?", answer: "You don't need expensive equipment at first. Start with a good smartphone camera and basic editing software, and upgrade as you grow." }
  ],
  relatedCategories: [
    { title: "Social Media Marketing", description: "Learn how to use social media platforms to promote your content and grow your audience.", link: "/categories/social-media-marketing" },
    { title: "Video Editing & Production", description: "Master video production techniques to make your content look professional and engaging.", link: "/categories/video-editing-production" }
  ]
}
,
{
  id: "self-improvement",
  name: "Self-Improvement & Productivity",
  heroImage: "/productivity.jpg", // Image moved to public folder
  description: "Unlock your full potential and learn strategies to increase your productivity, manage your time efficiently, and achieve personal and professional goals.",
  exploreLink: "/resources/self-improvement",
  learningPoints: [
    { title: "Time Management Strategies", icon: "/icons/time-management.png" },
    { title: "Goal Setting & Achievement", icon: "/icons/goal-setting.png" },
    { title: "Focus and Concentration", icon: "/icons/focus.png" },
    { title: "Overcoming Procrastination", icon: "/icons/procrastination.png" },
    { title: "Personal Growth Mindset", icon: "/icons/growth.png" }
  ],
  resources: [
    {
      title: "Books",
      description: "Books are a great way to dive deep into self-improvement and productivity concepts. Learn from experts in the field with these highly recommended books.",
      resources: [
        { title: "Atomic Habits", link: "https://www.amazon.com/Atomic-Habits-James-Clear/dp/0735211299", description: "A must-read book on building good habits and breaking bad ones." },
        { title: "The Power of Now", link: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808", description: "Learn how to live in the present moment and break free from anxiety." },
        { title: "Deep Work", link: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692", description: "Master the art of focused work and boost your productivity." }
      ]
    },
    {
      title: "YouTube Channels",
      description: "Learn from these popular YouTube channels focused on self-improvement, productivity hacks, and personal development.",
      resources: [
        { title: "Thomas Frank", link: "https://www.youtube.com/c/ThomasFrank", description: "Thomas Frank shares tips on productivity, studying, and self-improvement." },
        { title: "Matt D'Avella", link: "https://www.youtube.com/c/MattDAvella", description: "Minimalism, habits, and productivity from Matt D'Avella." },
        { title: "Ali Abdaal", link: "https://www.youtube.com/c/aliabdaal", description: "Ali Abdaal teaches productivity, life hacks, and self-improvement." }
      ]
    },
    {
      title: "Websites & Blogs",
      description: "Discover valuable articles, resources, and tools from leading websites dedicated to self-improvement and productivity.",
      resources: [
        { title: "Nir Eyal Blog", link: "https://www.nirandfar.com/", description: "Nir Eyal's blog on time management and overcoming distractions." },
        { title: "Zen Habits", link: "https://zenhabits.net/", description: "Zen Habits helps you live a simpler and more productive life." },
        { title: "James Clear Blog", link: "https://jamesclear.com/", description: "James Clear writes about habits, decision-making, and continuous improvement." }
      ]
    },
    {
      title: "Podcasts",
      description: "Listen to these insightful podcasts that explore personal development, productivity, and self-improvement.",
      resources: [
        { title: "The Tim Ferriss Show", link: "https://tim.blog/podcast/", description: "Tim Ferriss interviews top performers from various fields to uncover their productivity secrets." },
        { title: "The Life Coach School Podcast", link: "https://thelifecoachschool.com/podcast/", description: "Brooke Castillo's podcast on personal development and coaching." },
        { title: "The Minimalists Podcast", link: "https://www.theminimalists.com/podcast/", description: "Conversations on living a meaningful life with less." }
      ]
    }
  ],
  benefits: [
    { title: "Increase Productivity", icon: "/icons/productivity.png" },
    { title: "Achieve Your Personal Goals", icon: "/icons/goals.png" },
    { title: "Develop a Growth Mindset", icon: "/icons/growth-mindset.png" },
    { title: "Overcome Procrastination", icon: "/icons/no-procrastination.png" },
    { title: "Master Time Management", icon: "/icons/time-management.png" }
  ],
  popularTopics: [
    { title: "Building Habits for Success", link: "/topics/building-habits" },
    { title: "Mental Clarity and Focus", link: "/topics/mental-clarity" },
    { title: "Effective Time Management", link: "/topics/effective-time-management" },
    { title: "Growth Mindset and Personal Development", link: "/topics/growth-mindset" }
  ],
  testimonials: [
    {
      name: "Jane Smith",
      text: "The personal growth tools shared in this section helped me improve my productivity, and I am now more organized and focused than ever before!",
      image: "/images/student2.jpg" // Image moved to public folder
    },
    {
      name: "Michael Johnson",
      text: "I struggled with procrastination for years, but the strategies I learned here helped me break free and start achieving my goals.",
      image: "/images/student3.jpg" // Image moved to public folder
    }
  ],
  faqs: [
    { question: "How do I get started with self-improvement?", answer: "Start by setting small, achievable goals and gradually introduce habits that will help you achieve them." },
    { question: "What are the best strategies for overcoming procrastination?", answer: "Use techniques such as the Pomodoro Technique, breaking tasks into smaller pieces, and practicing self-compassion." },
    { question: "How do I stay motivated throughout my self-improvement journey?", answer: "Celebrate small wins, track progress, and surround yourself with supportive people." }
  ],
  relatedCategories: [
    { title: "Mental Health & Wellness", description: "Focus on your emotional well-being and build resilience.", link: "/categories/mental-health-wellness" },
    { title: "Entrepreneurship", description: "Learn skills to start and run a successful business.", link: "/categories/entrepreneurship" }
  ]
}
,
  {
    "id": "programming-tech",
    "name": "Programming & Tech",
    "heroImage": "/programmingtech.png",
    "description": "Programming & Tech includes coding, software development, and technology trends. It's one of the most in-demand skill sets globally.",
    "learningPoints": [
      {
        "title": "Learn Programming Languages",
        "description": "Start with HTML, CSS, JavaScript, Python, or any other language depending on your goals."
      },
      {
        "title": "Build Web & Mobile Apps",
        "description": "Master frameworks like React, Angular, or Vue.js to develop web applications."
      }
    ],
    "resources": [
      {
        "title": "FreeCodeCamp",
        "description": "FreeCodeCamp is a great online platform to learn web development, from front-end to back-end.",
        "link": "https://www.freecodecamp.org/",
        "image": "/images/freecodecamp.jpg"
      },
      {
        "title": "The Net Ninja YouTube Channel",
        "description": "The Net Ninja provides high-quality tutorials on web development technologies.",
        "link": "https://www.youtube.com/c/TheNetNinja",
        "image": "/images/netninja.jpg"
      }
    ],
    "faqs": [
      {
        "question": "Do I need any prior knowledge to start learning programming?",
        "answer": "No, you can start from scratch. We suggest beginning with HTML and CSS, then move to JavaScript and other languages."
      }
    ],
    "relatedCategories": [
      {
        "title": "Web Development",
        "description": "Learn the skills required to build interactive websites and apps.",
        "link": "/categories/web-development"
      },
      {
        "title": "Data Science & AI",
        "description": "Learn the foundations of data science and artificial intelligence.",
        "link": "/categories/data-science-ai"
      }
    ]
  }
,  
{
  id: "languages-communication",
  name: "Languages & Communication",
  heroImage: "/images/languages.jpg", // Image moved to public folder
  description: "Enhance your communication skills and master new languages to thrive in a global world. Whether you're preparing for international exams, aiming to improve public speaking, or learning a new language for travel, study, or work, this category provides structured and immersive courses tailored for all levels.",
  exploreLink: "/courses/languages-communication",
  learningPoints: [
    { title: "Learn English for Academic, Business, or Travel", icon: "/icons/english.png" },
    { title: "Master Effective Public Speaking and Presentation Skills", icon: "/icons/speaking.png" },
    { title: "Build Confidence in Verbal & Non-verbal Communication", icon: "/icons/confidence.png" },
    { title: "Understand and Apply Cross-Cultural Communication", icon: "/icons/culture.png" },
    { title: "Improve Grammar, Vocabulary, and Pronunciation", icon: "/icons/grammar.png" },
    { title: "Prepare for Language Proficiency Exams (IELTS, TOEFL, DELF, etc.)", icon: "/icons/exam.png" }
  ],
  resources: [
    {
      title: "English for Career Development",
      instructor: "University of Pennsylvania",
      platform: "Coursera",
      duration: "40 hours",
      rating: "4.9",
      link: "https://www.coursera.org/learn/careerdevelopment"
    },
    {
      title: "The Complete Public Speaking Masterclass for Every Occasion",
      instructor: "TJ Walker",
      platform: "Udemy",
      duration: "31 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/public-speaking/"
    },
    {
      title: "Learn French: The Ultimate Guide for Beginners",
      instructor: "Learn French Academy",
      platform: "Skillshare",
      duration: "5 hours",
      rating: "4.7",
      link: "https://www.skillshare.com/classes/french-beginner"
    },
    {
      title: "IELTS Academic Test Preparation",
      instructor: "University of Queensland",
      platform: "edX",
      duration: "8 weeks",
      rating: "4.8",
      link: "https://www.edx.org/course/ielts-academic-test-preparation"
    }
  ],
  benefits: [
    { title: "Boost Career and Academic Opportunities", icon: "/icons/career.png" },
    { title: "Speak Confidently in Any Language", icon: "/icons/confident.png" },
    { title: "Connect with People Across Cultures", icon: "/icons/connect.png" },
    { title: "Improve Listening, Reading, Writing & Speaking", icon: "/icons/skills.png" },
    { title: "Flexible Self-Paced or Instructor-Led Classes", icon: "/icons/flexible.png" },
    { title: "Practice Real-World Scenarios & Roleplays", icon: "/icons/practice.png" }
  ],
  popularTopics: [
    { title: "Spoken English for Beginners", link: "/topics/spoken-english" },
    { title: "French Grammar Essentials", link: "/topics/french-grammar" },
    { title: "Effective Email & Business Writing", link: "/topics/business-writing" },
    { title: "Mastering Body Language in Presentations", link: "/topics/body-language" },
    { title: "TOEFL Speaking Practice & Techniques", link: "/topics/toefl-speaking" },
    { title: "Cross-Cultural Communication for Professionals", link: "/topics/cultural-communication" }
  ],
  testimonials: [
    {
      name: "Alem Teshome",
      image: "/images/testimonial-alem.jpg",
      text: "I was preparing for the ICAO English test as a pilot trainee. The spoken English and communication drills here were extremely helpful. I gained so much confidence."
    },
    {
      name: "Maria Gonzalez",
      image: "/images/testimonial-maria.jpg",
      text: "The French beginner’s course was excellent! I loved the structured lessons and cultural notes. I now feel prepared for my study abroad semester in Paris."
    }
  ],
  pricing: [
    {
      plan: "Basic",
      price: "$0/month",
      features: [
        "Access to beginner language lessons",
        "Weekly vocabulary lists",
        "Basic communication practice tasks"
      ]
    },
    {
      plan: "Pro",
      price: "$12.99/month",
      features: [
        "Full access to language and communication courses",
        "Live speaking sessions and group practice",
        "Certificate of completion",
        "Pronunciation and fluency tools"
      ]
    },
    {
      plan: "Premium",
      price: "$29.99/month",
      features: [
        "All Pro features",
        "1-on-1 speaking and writing feedback",
        "Mock exam practice (IELTS, TOEFL, etc.)",
        "Accent training & personalized learning paths"
      ]
    }
  ],
  faqs: [
    {
      question: "Do I need to have prior knowledge to join?",
      answer: "No, we offer beginner, intermediate, and advanced levels for all language and communication topics."
    },
    {
      question: "Can I improve my speaking if I don’t have a practice partner?",
      answer: "Yes, with our AI speaking tools, roleplay simulations, and community conversation rooms, you’ll have plenty of speaking practice."
    },
    {
      question: "Are these courses suitable for children or teens?",
      answer: "Yes, we have curated a separate track specifically for school-age learners with age-appropriate content."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, Pro and Premium members receive official certificates upon course completion."
    }
  ],
  relatedCategories: [
    {
      title: "Test Preparation",
      description: "Get ready for IELTS, TOEFL, SATs, and other standardized language tests.",
      link: "/categories/test-preparation"
    },
    {
      title: "Self-Improvement",
      description: "Enhance your confidence, productivity, and soft skills.",
      link: "/categories/self-improvement"
    },
    {
      title: "Career & Workplace Skills",
      description: "Develop business communication, writing, and negotiation skills.",
      link: "/categories/career-skills"
    }
  ]
}

];

export default Categories;
