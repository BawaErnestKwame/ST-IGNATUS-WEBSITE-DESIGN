import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <header className="w-full flex items-center gap-8 shadow px-4 md:px-8 border-b border-gray-400">
      {/* Logo */}
      <div>
        <img src={logo} alt="Medidoc Logo" className="w-24" />
      </div>

      {/* Top and Bottom Navbar */}
      <div className="relative w-full border-l border-gray-400 pl-10 py-4">
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
        <div className="flex relative items-center justify-between pt-2">
          <p className="absolute -left-12 hidden lg:flex">
            <ArrowRightIcon sx={{ fontSize: "20px", color: "gray" }} />
          </p>

          {/* Menu */}
          <nav>
            <ul className="hidden md:flex items-center gap-16 text-gray-700 font-medium text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* About with Dropdown */}
              <li className="relative group">
                <span className="flex items-center gap-1 cursor-pointer text-gray-700 font-medium text-sm hover:text-blue-600">
                  About <ArrowDropDownIcon />
                </span>

                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[150px]">
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 block px-4 py-2"
                          : "hover:text-blue-600 block px-4 py-2"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/drignatus"
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 block px-4 py-2"
                          : "hover:text-blue-600 block px-4 py-2"
                      }
                    >
                      Dr. Ignatus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 block px-4 py-2"
                          : "hover:text-blue-600 block px-4 py-2"
                      }
                    >
                      Our Team
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/branches"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Branches
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
              <MdAccessTime className="text-blue-600 text-lg" />
              <div>
                <p className="flex items-center font-semibold text-gray-800">OPEN TIME</p>
                <div className="flex items-center gap-2">
                  <p>Mon - Fri (8am - 6pm)</p>
                  <p className="w-[1px] h-3 bg-gray-400 rounded"></p>
                  <p>Saturday (9am - 3pm)</p>
                </div>
              </div>
            </div>

            <Link to="/BookAppointment">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2 font-medium cursor-pointer">
                <FaUserPlus />
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
