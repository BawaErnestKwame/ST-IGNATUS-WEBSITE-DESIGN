import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MdContactEmergency } from "react-icons/md";

const HospitalOverview = () => {
  const links = [
    { path: "/about", label: "Who We Are" },
    { path: "/about/mission", label: "Our Mission" },
    { path: "/about/awards", label: "Awards" },
    { path: "/about/experience", label: "Experience" },
    { path: "/about/success", label: "Success Story" },
  ];

  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-24 gap-10 py-10">
      {/* Left side menu */}
      <div className="w-full lg:w-1/3">
      <div className=" flex flex-col justify-between p-4 shadow">
        <ul className="flex flex-col gap-3 mb-8">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `flex justify-between items-center py-2 px-3 border-b-2 border-gray-300 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "hover:bg-blue-100 text-gray-800"
                }`
              }
            >
              <span>{link.label}</span>
              <ArrowForwardIosIcon
                sx={{ fontSize: "12px", color: "inherit" }}
              />
            </NavLink>
          ))}
        </ul>
        </div>

        {/* Emergency contact box */}
        <div className="mt-2 shadow border flex items-center gap-3 p-4 border-gray-300 rounded-lg bg-gray-100">
          <MdContactEmergency className="text-blue-600 text-4xl" />
          <div>
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-gray-900 font-semibold"
            >
              Emergency Cases
            </h1>
            <p className="text-blue-700 font-medium">2-700-800-620</p>
          </div>
        </div>
        </div>
      

      {/* Right side content area */}
      <div className="w-full lg:w-2/3">
        <Outlet />
      </div>
    </div>
  );
};

export default HospitalOverview;
