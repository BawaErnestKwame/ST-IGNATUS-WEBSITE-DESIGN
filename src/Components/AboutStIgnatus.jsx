import React from "react";
import { FaRegHandshake, FaStethoscope,FaPerson } from "react-icons/fa6";
import eye1 from "../assets/eye1.webp";
import eye2 from "../assets/eye2.webp";
import eye3 from "../assets/eye3.webp";
import arrow from "../assets/arrow.png";
import { Link } from "react-router";


const AboutStIgnatus = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-24 py-16 gap-12">
      {/* Right section - text */}
      <div className="lg:w-1/2 space-y-3">
        <div className="">
            <h2 className="text-blue-600 text-2xl lg:text-xl font-semibold tracking-[.5px]">
            ABOUT ST IGNATIUS EYE CENTER</h2>
            <p className="w-10 h-[2px] bg-red-700 rounded"></p>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Excellence Eye Care <br /> <span className="text-blue-600">You Can Trust!</span>
        </h1>
        <p className="text-gray-600">
          At St. Ignatius Eye Centre, we are committed to delivering excellence in eye care you can trust. With advanced technology, skilled professionals, and compassionate service, we ensure every patient receives precise diagnosis, quality treatment, and personalized attention for clearer, healthier vision.”
        </p>
        <p className="text-gray-700 font-medium">
          Need to take care of your family’s health? Call <span className="text-blue-600 font-bold">+233 599 316 218</span>
        </p>

        <div className="flex flex-col gap-6 mt-6">
          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <FaStethoscope size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Experienced Physicians</h3>
              <p className="text-gray-500 text-sm">
                Our doctors have years of experience in providing top-notch healthcare.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <FaRegHandshake size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Immediate Assistance</h3>
              <p className="text-gray-500 text-sm">
                We ensure you get quick and professional help when you need it most.
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <Link to="/about">
        <button className="bg-red-600 text-white px-6 mt-6 py-2 rounded-full transition-all hover:bg-red-700 text-sm cursor-pointer">
        Read More
      </button>
        </Link>
      </div>

      {/* Left section - images */}
      <div className="lg:w-1/2 flex gap-4 items-center justify-center relative">
        <div className="space-y-4">
          {/* image */}
          <img src={arrow} alt="" className=" arrow relative right-20 w-50 "/>
          <div className="w-60 -right-32 rounded h-24 relative top-2 z-10 bg-[#0627c2]
           text-white flex flex-col md:flex-row items-center pl-8 gap-2 shadow-lg">
            <FaPerson size={50}  />


            <div className="">
              <h1 className="text-3xl font-bold ">100%</h1>
            <p className="text-sm">Patients Satisfied</p>

            </div>
          </div>
          <img src={eye3} alt="patient 1" className=" relative -top-10 h-72 object-cover rounded-lg shadow-md -z-10" />
        </div>

        <div className="space-y-4">
          <img src={eye2} alt="patient 2" className="w-100 h-52 object-cover rounded-lg shadow-md" />
          <img src={eye1} alt="patient 3" className="h-52 object-cover rounded-lg shadow-md" />
        </div>

      </div>

      
    </div>
  );
};

export default AboutStIgnatus;
