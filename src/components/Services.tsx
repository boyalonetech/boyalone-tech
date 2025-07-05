import React from "react";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const ServicesCard = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web apps built with modern technologies like React, Next.js, and Tailwind.",
      icon: <FaLaptopCode size={32} className="text-blue-600" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Clean and intuitive interfaces that enhance user experience and drive engagement.",
      icon: <FaPaintBrush size={32} className="text-pink-500" />,
    },
    {
      title: "Mobile App Design",
      description:
        "Responsive and accessible mobile designs for Android and iOS using Figma and modern tools.",
      icon: <FaMobileAlt size={32} className="text-green-500" />,
    },
  ];

  return (
    <div className="px-6 py-12 bg-[#f5f8ff] mt-12">
      <h2 className="text-2xl font-bold text-center mb-10">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-200 group"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
