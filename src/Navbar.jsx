import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "./assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// POPUP COMPONENT
import BookAppointment from "./Components/BookAppointment";

const Navbar = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  const menuVariants = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: {},
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 40 },
  };

  return (
    <header className="w-full shadow flex gap-4 md:gap-8 px-4 md:px-8 border-b border-gray-400 relative z-50">
      <img src={logo} className="lg:w-38 w-24 h-auto object-contain" />
      
    <div className=" w-full lg:border-l lg:border-gray-400 lg:pl-8">
      <ArrowRightIcon className="text-gray-500  hidden md:block relative top-20 right-11"/>
      {/* TOP BAR */}
      <div className="bg-[#f8faff] text-sm flex justify-between items-center py-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap text-gray-600">
          <div className="flex items-center gap-2"
            style={{
               fontFamily:"Montserrat"
            }}
          >
            <MdEmail className="text-blue-600" />
            support@medidoc.com
          </div>
          <div className="flex items-center"
            style={{
               fontFamily:"Montserrat"
            }}
          >
            <FiPhone className="text-blue-600" />
            660-242-3358
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2 text-gray-600">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-600 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between py-4 relative">

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700">

          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
            style={{
               fontFamily:"Montserrat"
            }}
            
            >
              About <ArrowDropDownIcon />
            </span>

            <ul className="absolute left-0 mt-2 bg-white w-32 shadow-md rounded-md opacity-0
                           group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">

              <li><NavLink to="/about" className="block px-4 py-2 hover:text-blue-600">About Us</NavLink></li>
              <li><NavLink to="/drignatus" className="block px-4 py-2 hover:text-blue-600">Dr. Ignatus</NavLink></li>
              <li><NavLink to="/team" className="block px-4 py-2 hover:text-blue-600">Our Team</NavLink></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              style={{
               fontFamily:"Montserrat"
            }} 
            >
              Branches <ArrowDropDownIcon />
            </span>

            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md opacity-0
                           group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <li><NavLink to="/branches" className="block px-4 py-2 hover:text-blue-600">Sunyani</NavLink></li>
              <li><NavLink to="/dormaa" className="block px-4 py-2 hover:text-blue-600">Dormaa</NavLink></li>
              <li><NavLink to="/berekum" className="block px-4 py-2 hover:text-blue-600">Berekum</NavLink></li>
            </ul>
          </div>

          <NavLink to="/blog" className="hover:text-blue-600">Blog</NavLink>
          <NavLink to="/services" className="hover:text-blue-600">Services</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </nav>

        {/* DESKTOP BOOK APPOINTMENT BTN */}
        <button
          onClick={openAppointment}
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md items-center gap-2"
        >
          <FaUserPlus /> Book Appointment
        </button>

        

        {/* MOBILE MENU ICON */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <HiOutlineX className="text-3xl" /> : <HiOutlineMenu className="text-3xl absolute right-0 bottom-14" />}
        </button>
      </div>
    </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-3/4 h-full bg-white p-6 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <img src={logo} className="w-24" />
                <HiOutlineX className="text-3xl" onClick={toggleMobileMenu} />
              </div>

              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-5 text-gray-700"
              >
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/about" },
                  { name: "Dr. Ignatus", link: "/drignatus" },
                  { name: "Our Team", link: "/team" },
                  { name: "Branches", link: "/branches" },
                  { name: "Blog", link: "/blog" },
                  { name: "Services", link: "/services" },
                  { name: "Contact", link: "/contact" },
                ].map((item, i) => (
                  <motion.li key={i} variants={linkVariants}>
                    <NavLink to={item.link} onClick={toggleMobileMenu}>
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Appointment Button */}
                <motion.li variants={linkVariants}>
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      openAppointment();
                    }}
                    className="bg-blue-600 w-full mt-4 text-white py-2 rounded-md flex items-center gap-2 justify-center"
                  >
                    <FaUserPlus /> Book Appointment
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* APPOINTMENT POPUP */}
      <BookAppointment isOpen={isAppointmentOpen} onClose={closeAppointment} />
    </header>
  );
};

export default Navbar;
