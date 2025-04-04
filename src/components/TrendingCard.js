import Image from "next/image";
 
const TrendingCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full sm:w-1/2 md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="w-full relative h-32">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full pl-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href={link} className="text-blue-500 mt-4 inline-block">
          Learn More
        </a>
      </div>
    </div>
  );
};