import React from "react";
import {
  FaUserMd,
  FaTeeth,
  FaHeartbeat,
  FaDollarSign,
  FaUserFriends,
  FaShieldAlt,
  FaLocationArrow,
  FaTooth,
} from "react-icons/fa";
import bgImage from "../assets/serviceImage.jpg";

const HealthcareFeatures = () => {
  const features = [
    { icon: <FaUserMd size={28} />, title: "Experienced & Certified Professionals" },
    { icon: <FaHeartbeat size={28} />, title: "Advanced Technology & Modern Equipment" },
    { icon: <FaUserFriends size={28} />, title: "Personalized & Compassionate Care" },
    { icon: <FaTooth size={28} />, title: "Painless & Minimally Invasive Treatments" },
    { icon: <FaDollarSign size={28} />, title: "Affordable Pricing & Flexible Payment Plans" },
    { icon: <FaTeeth size={28} />, title: "Emergency Dental & Health Care Services" },
    { icon: <FaShieldAlt size={28} />, title: "Hygiene & Safety Standards" },
    { icon: <FaLocationArrow size={28} />, title: "Prime Location & Easy Accessibility" },
  ];

  return (
    <div
      className="text-white px-6 md:px-12 lg:px-24 py-20 flex flex-col lg:flex-row items-start justify-between gap-16"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 44, 140, 0.85), rgba(14, 44, 140, 0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4 mt-8">
        <h4 className="text-sm tracking-[.8px] text-blue-400 font-semibold uppercase">
          Our Key Features
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
          We Provide Best Healthcare <br /> Services
        </h1>
        <button className="mt-8 border border-gray-500 hover:border-blue-500 text-gray-200 hover:text-blue-400 px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300">
          Our Services →
        </button>
      </div>

      {/* Right Section - Feature Grid */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-800 hover:border-gray-500 rounded-lg transition-all duration-300 group"
          >
            <div className="flex gap-3 items-center">
              <div className="text-blue-600 transition-all duration-300 px-8 border-gray-300 border-r py-8">
                {item.icon}
              </div>
              <p className="text-sm text-gray-950 ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareFeatures;
