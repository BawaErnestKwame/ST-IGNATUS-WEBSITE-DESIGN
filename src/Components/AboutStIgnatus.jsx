import React from "react";
import { FaRegHandshake, FaStethoscope, FaPerson } from "react-icons/fa6";
import eye1 from "../assets/eye1.jpg";
import eye2 from "../assets/eye2.jpg";
import eye3 from "../assets/eye3.jpg";
import arrow from "../assets/arrow.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AboutStIgnatus = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-24 py-16 gap-12">

      {/* Right section - text */}
      <motion.div
        className="lg:w-1/2 space-y-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-blue-600 text-2xl lg:text-xl font-semibold tracking-[.5px]">
            ABOUT ST.IGNATIUS EYE CENTRE
          </h2>
          <p className="w-10 h-[2px] bg-red-700 rounded"></p>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Excellence In Eye Care <br />{" "}
        </h1>

        <p className="text-gray-600">
          Headquartered in Abesim, St. Ignatius Eye Centre extends its services through two additional branches located in Dormaa and Berekum, making quality eye care accessible to a wider community. We are a dedicated eye health facility committed to delivering excellence in eye care you can trust.

          At St. Ignatius Eye Centre, we combine advanced diagnostic technology with the expertise of skilled eye care professionals to provide accurate diagnosis, effective treatment, and personalized patient care. Our services range from routine eye examinations and vision correction to the management of various eye conditions, all delivered with compassion and professionalism.
        </p>

        <p className="text-gray-700 font-medium">
          Need to take care of your family’s health? Call{" "}
          <span className="text-red-600 font-bold">+233 508 249 775</span>
        </p>

        <motion.div
          className="flex flex-col gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Card 1 */}
          <motion.div
            className="flex items-start gap-4"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <FaStethoscope size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Experienced Professionals</h3>
              <p className="text-gray-500 text-sm">
                Our doctors have years of experience in providing top-notch
                healthcare.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex items-start gap-4"
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <FaRegHandshake size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Immediate Assistance</h3>
              <p className="text-gray-500 text-sm">
                We ensure you get quick and professional help when you need it
                most.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <Link to="/about">
          <button className="bg-red-600 text-white px-6 mt-6 py-2 rounded-full transition-all hover:bg-red-700 text-sm cursor-pointer">
            Read More
          </button>
        </Link>
      </motion.div>

      {/* Left section - images */}
      <motion.div
        className="lg:w-1/2 flex gap-4 items-center justify-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <img src={arrow} alt="" className="arrow relative right-20 w-50" />

          <motion.div
            className="w-60 -right-32 rounded h-24 relative top-2 z-10 bg-red-600
            text-white flex flex-col md:flex-row items-center pl-8 gap-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FaPerson size={50} />
            <div>
              <h1 className="text-3xl font-bold">100%</h1>
              <p className="text-sm">Patients Satisfied</p>
            </div>
          </motion.div>

          <motion.img
            src={eye3}
            alt="patient 1"
            className="relative -top-10 h-72 object-cover rounded-lg shadow-md -z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="space-y-4">
          <motion.img
            src={eye2}
            alt="patient 2"
            className="w-100 h-52 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          />

          <motion.img
            src={eye1}
            alt="patient 3"
            className="h-52 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutStIgnatus;
