import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-xl text-gray-600 mt-4">We are shaping the future of education and technology</p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mb-16">
        <div className="relative">
          <Image
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Our Story"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our Story</h3>
          <p className="text-lg text-gray-600 mt-4">
            We are a team of passionate educators and technologists committed to transforming the learning
            experience. We believe in making education accessible, engaging, and effective through the
            power of technology.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-blue-50 p-10 rounded-lg shadow-lg mb-16">
        <h3 className="text-3xl font-semibold text-blue-600">Our Mission</h3>
        <p className="text-lg text-gray-700 mt-4">
          Our mission is to bridge the gap between technology and education by providing innovative solutions
          that empower both learners and educators. We aim to make learning more engaging, personalized, and
          impactful.
        </p>
      </div>

      {/* Our Vision Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-lg text-gray-600 mt-4">
            We envision a future where technology enhances every aspect of education. Our goal is to create
            tools and platforms that help educators and students achieve their fullest potential, making
            learning more accessible, flexible, and enjoyable.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Our Vision"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <Image
              src="/path-to-team-member1.jpg" // Replace with your image path
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg"
            />
            <p className="text-xl font-semibold text-gray-800 mt-4">John Doe</p>
            <p className="text-gray-600">CEO & Co-founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/path-to-team-member2.jpg" // Replace with your image path
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg"
            />
            <p className="text-xl font-semibold text-gray-800 mt-4">Jane Smith</p>
            <p className="text-gray-600">CTO & Co-founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/path-to-team-member3.jpg" // Replace with your image path
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg"
            />
            <p className="text-xl font-semibold text-gray-800 mt-4">Alice Brown</p>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="text-center">
            <Image
              src="/path-to-team-member4.jpg" // Replace with your image path
              alt="Team Member"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg"
            />
            <p className="text-xl font-semibold text-gray-800 mt-4">Bob White</p>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 p-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-8">We'd love to hear from you. If you have any questions, feel free to reach out!</p>
        <a
          href="mailto:contact@yourdomain.com"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

export default About;
