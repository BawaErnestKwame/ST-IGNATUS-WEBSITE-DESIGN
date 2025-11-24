import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Framer Motion variants for staggered animation
  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    closed: {},
  };

  const linkVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: 50 },
  };

  return (
    <header className="w-full shadow px-4 md:px-8 border-b border-gray-400 relative z-50">
      {/* Top Bar */}
      <div className="bg-[#f8faff] text-sm flex justify-between items-center py-2 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MdEmail className="text-blue-600" />
            <span>support@medidoc.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FiPhone className="text-blue-600" />
            <span>660-242-3358</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-600 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center">
          <img src={logo} alt="Medidoc Logo" className="w-24" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}>
            Home
          </NavLink>

          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              About <ArrowDropDownIcon />
            </span>
            <ul
              className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[150px]"
            >
              <li>
                <NavLink to="/about" className="block px-4 py-2 hover:text-blue-600">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/drignatus" className="block px-4 py-2 hover:text-blue-600">Dr. Ignatus</NavLink>
              </li>
              <li>
                <NavLink to="/team" className="block px-4 py-2 hover:text-blue-600">Our Team</NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/branches" className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}>
            Branches
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}>Blog</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}>Contact</NavLink>
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MdAccessTime className="text-blue-600 text-lg" />
            <div>
              <p className="font-semibold text-gray-800">OPEN TIME</p>
              <div className="flex items-center gap-2">
                <p>Mon - Fri (8am - 6pm)</p>
                <p className="w-[1px] h-3 bg-gray-400 rounded"></p>
                <p>Saturday (9am - 3pm)</p>
              </div>
            </div>
          </div>
          <Link to="/BookAppointment">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2 font-medium"
            >
              <FaUserPlus /> Book Appointment
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiOutlineX className="text-3xl text-gray-700" /> : <HiOutlineMenu className="text-3xl text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu & Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 p-6 flex flex-col"
            >
              {/* Logo & Close button */}
              <div className="flex items-center justify-between mb-6">
                <img src={logo} alt="Medidoc Logo" className="w-24" />
                <button onClick={toggleMobileMenu}><HiOutlineX className="text-3xl text-gray-700" /></button>
              </div>

              {/* Mobile Links with stagger animation */}
              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-4 text-gray-700 font-medium"
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
                ].map((item, index) => (
                  <motion.li key={index} variants={linkVariants}>
                    <NavLink
                      to={item.link}
                      onClick={toggleMobileMenu}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}

                <motion.li variants={linkVariants}>
                  <Link to="/BookAppointment" onClick={toggleMobileMenu}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2 font-medium w-full mt-4"
                    >
                      <FaUserPlus /> Book Appointment
                    </motion.button>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
