import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const menuRef = useRef(null);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleAbout = () => setAboutOpen((prev) => !prev);
  const toggleBranches = () => setBranchesOpen((prev) => !prev);

  // ✅ FIXED & IMPROVED PROGRESS BAR
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0) {
        const scrollPercent = (scrollTop / docHeight) * 100; // FIXED (was *10)
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  // Reset dropdowns when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setAboutOpen(false);
      setBranchesOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const menuVariants = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: {},
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 40 },
  };

  const dropdownVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600 transition-colors";

  return (
    <>
      {/* SPACER */}
      <div className="h-[100px] lg:h-[120px]" />

      {/* HEADER */}
      <header className="w-full shadow border-b border-gray-400 z-50 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md">

        {/* FIXED & SMOOTH SCROLL PROGRESS BAR */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-[width] duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* MOBILE HEADER */}
        <div className="lg:hidden flex items-center justify-between px-4 gap-2 py-4">
          <Link to="/">
            <img src={logo} className="w-16 h-auto object-contain" alt="Logo" />
          </Link> <div
            className="flex items-center gap-2 text-gray-600 text-xs flex-1 justify-center flex-wrap"
            style={{ fontFamily: "Montserrat" }}
          >
            <div className="flex items-center gap-1">
              <MdEmail className="text-blue-600" />
              <span className="truncate"
              style={{ fontFamily: "Montserrat" }}
              >st.ignatiuseyecaregh@gmail.com</span>
            </div>

            <div className="flex items-center gap-1">
              <FiPhone className="text-blue-600" />
              <span
              style={{ fontFamily: "Montserrat" }}
              >+233 20 716 4944</span>
            </div>
          </div>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiOutlineX className="text-3xl" />
            ) : (
              <HiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex gap-4 md:gap-8 px-4 md:px-8">
          <Link to="/">
            <img
              src={logo}
              className="lg:w-32 w-20 pt-2 lg:pt-4"
              alt="Logo"
            />
          </Link>

          <div className="w-full lg:border-l lg:border-gray-400 lg:pl-8">
            <ArrowRightIcon className="text-gray-500 hidden lg:block absolute top-20 -left-3" />
            {/* TOP CONTACT BAR */}
            <div className="bg-[#f8faff] pt-2 lg:pt-4 py-1 text-xs sm:text-sm flex justify-between items-center text-gray-600">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-blue-600" />
                  <span className="truncate"
                  style={{ fontFamily: "Montserrat" }}
                  
                  >
                    st.ignatiuseyecaregh@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-blue-600" />
                  <span
                  style={{ fontFamily: "Montserrat" }}
                  >+233 20 716 4944</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="hover:text-blue-600 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="flex items-center justify-between py-2">
              <nav className="flex items-center gap-10 text-gray-700">
                <NavLink to="/" className={navLinkStyles}>
                  Home
                </NavLink>

                {/* ABOUT DROPDOWN */}
                <div className="relative group">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
                  style={{ fontFamily: "Montserrat" }}
                  
                  >
                    About <ArrowDropDownIcon />
                  </span>
                  <ul className="absolute left-0 mt-2 bg-white w-32 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          `block border-b border-gray-400 px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }

                        style={{ fontFamily: "Montserrat" }}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/drignatus"
                        className={({ isActive }) =>
                          `block border-b border-gray-400 px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }
                      >
                        Dr. Ignatius
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team"
                        className={({ isActive }) =>
                          `block px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }>
                        Our Team
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* BRANCHES DROPDOWN */}
                <div className="relative group">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
                  style={{ fontFamily: "Montserrat" }}
                  
                  >
                    Branches <ArrowDropDownIcon />
                  </span>
                  <ul className="absolute left-0 mt-2 bg-white shadow-md w-32 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <li>
                      <NavLink
                        to="/branches"
                        className={({ isActive }) =>
                          `block border-b border-gray-400 px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }
                      >
                        Sunyani
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dormaa"
                        className={({ isActive }) =>
                          `block border-b border-gray-400 px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }
                      >
                        Dormaa
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/berekum"
                        className={({ isActive }) =>
                          `block px-4 py-2 ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "hover:text-blue-600"
                          }`
                        }
                      >
                        Berekum
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <NavLink to="/blog" className={navLinkStyles}>
                  Blog
                </NavLink>
                <NavLink to="/services" className={navLinkStyles}>
                  Services
                </NavLink>
                <NavLink to="/contact" className={navLinkStyles}>
                  Contact
                </NavLink>
              </nav>

              {/* BOOK APPOINTMENT BUTTON */}
              <button
                onClick={openAppointment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2"
              >
                <FaUserPlus /> Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-4/5 sm:w-3/5 md:w-2/5 h-full bg-white p-6 z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <img src={logo} className="w-20 sm:w-24" alt="Logo" />
                <HiOutlineX
                  className="text-3xl cursor-pointer"
                  onClick={toggleMobileMenu}
                />
              </div>

              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-5 text-gray-700"
              >
                <motion.li variants={linkVariants} className="border-b pb-2">
                  <NavLink
                    to="/"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `block ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </motion.li>

                {/* ABOUT DROPDOWN MOBILE */}
                <motion.li variants={linkVariants} className="border-b pb-2">
                  <div>
                    <div
                      className="flex items-center justify-between cursor-pointer hover:text-blue-600"
                      onClick={toggleAbout}
                    >
                      <span>About</span>
                      <ArrowRightIcon
                        className={`transition-transform ${
                          aboutOpen ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    <motion.ul
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                      initial="closed"
                      animate={aboutOpen ? "open" : "closed"}
                      variants={dropdownVariants}
                    >
                      <li>
                        <NavLink
                          to="/about"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/drignatus"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          Dr. Ignatus
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/team"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          Our Team
                        </NavLink>
                      </li>
                    </motion.ul>
                  </div>
                </motion.li>

                {/* BRANCHES DROPDOWN MOBILE */}
                <motion.li variants={linkVariants} className="border-b pb-2">
                  <div>
                    <div
                      className="flex items-center justify-between cursor-pointer hover:text-blue-600"
                      onClick={toggleBranches}
                    >
                      <span>Branches</span>
                      <ArrowRightIcon
                        className={`transition-transform ${
                          branchesOpen ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    <motion.ul
                      className="ml-4 mt-2 space-y-2 overflow-hidden"
                      initial="closed"
                      animate={branchesOpen ? "open" : "closed"}
                      variants={dropdownVariants}
                    >
                      <li>
                        <NavLink
                          to="/branches"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          Sunyani
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dormaa"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          Dormaa
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/berekum"
                          onClick={toggleMobileMenu}
                          className={({ isActive }) =>
                            `block py-1 ${
                              isActive
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`
                          }
                        >
                          Berekum
                        </NavLink>
                      </li>
                    </motion.ul>
                  </div>
                </motion.li>

                <motion.li variants={linkVariants} className="border-b pb-2">
                  <NavLink
                    to="/blog"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `block ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`
                    }
                  >
                    Blog
                  </NavLink>
                </motion.li>

                <motion.li variants={linkVariants} className="border-b pb-2">
                  <NavLink
                    to="/services"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `block ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </motion.li>

                <motion.li variants={linkVariants} className="border-b pb-2">
                  <NavLink
                    to="/contact"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `block ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </motion.li>

                {/* MOBILE APPOINTMENT BUTTON */}
                <motion.li variants={linkVariants}>
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      openAppointment();
                    }}
                    className="bg-blue-600 hover:bg-blue-700 w-full mt-4 text-white py-3 rounded-md flex items-center gap-2 justify-center"
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
      <BookAppointment
        isOpen={isAppointmentOpen}
        onClose={closeAppointment}
      />
    </>
  );
};

export default Navbar;
