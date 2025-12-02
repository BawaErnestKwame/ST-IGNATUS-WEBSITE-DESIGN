import React from "react";
import {
  FaEye,
  FaTint,
  FaUserMd,
  FaGlasses,
  FaUsers,
  FaMicroscope,
  FaTools,
} from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { motion } from "framer-motion"; // <-- ADDED
import bgImage from "../assets/serviceImage.jpg";
import { Link } from "react-router";

const HealthcareFeatures = () => {
  const features = [
    { icon: <FaEye size={28} />, title: "Comprehensive Eye Care" },
    { icon: <FaTint size={28} />, title: "Glaucoma Services" },
    { icon: <FaUserMd size={28} />, title: "Eye Surgeries" },
    { icon: <FaGlasses size={28} />, title: "Refraction Services" },
    { icon: <FaUsers size={28} />, title: "Community/Institutional Eye Screening" },
    { icon: <FaMicroscope size={28} />, title: "Ocular Diagnostics (O.C.T, V.F.T, etc.)" },
    { icon: <MdOutlineAssignmentTurnedIn size={28} />, title: "DVLA Eye Tests" },
    { icon: <FaTools size={28} />, title: "Sale & Repair of Spectacles & Contact Lenses" },
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
      <motion.div
        className="lg:w-1/2 space-y-4 mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h4 className="text-2xl tracking-[.8px]  text-white font-semibold uppercase">
          Our Key Features
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold font-heading leading-20">
          We Provide<br/>Best Healthcare<br/>Services
        </h1>
        <Link to='/services'>
        <button className="mt-8 border border-gray-300 hover:border-white text-gray-200 hover:translate-y-2 px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300">
          Our Services →
        </button>
        </Link>
      </motion.div>

      {/* Right Section - Feature Grid */}
      <motion.div
        className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 bg-white border border-gray-800 hover:border-gray-500 rounded-lg transition-all duration-300 group"
          >
            <div className="flex gap-3 items-center p-6">
              <div className="text-blue-600 transition-all duration-300 border-gray-300 border-r pr-4">
                {item.icon}
              </div>
              <p className="text-sm text-gray-950 font-medium">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HealthcareFeatures;
