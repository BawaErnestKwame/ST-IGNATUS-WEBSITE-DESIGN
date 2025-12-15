import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MdContactEmergency } from 'react-icons/md';

const Servistlist = () => {
  const links = [
    { path: '', label: 'Glaucoma Services', end: true }, // Index route
    { path: '/services/eyeSurgeries', label: 'Eye Surgeries' },
    { path: '/services/refraction', label: 'Refraction' },
    { path: '/services/dvlEyeTeste', label: 'DVLA Eye Test' },
    { path: '/services/institutionalEye', label: 'Institutional Eye Screening' },
    { path: '/services/comprehensive', label: 'Comprehensive Eye Care' },
    { path: '/services/diagnostics', label: 'Ocular Diagnostics (O.C.T, V.F.T, etc.)' },
    { path: '/services/contactLenses', label: 'Sale & Repair of Spectacles & Contact Lenses' },
  ];

  return (
    <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-24 gap-10 py-10">
      
      {/* LEFT SIDE: Menu */}
      <div className="w-full mt-14 lg:w-1/3 flex flex-col gap-6">
      <h1 className='text-2xl font-semibold text-red-600 md:text-4xl'>Select Service</h1>
        <div className="flex flex-col justify-start p-4 shadow rounded-lg bg-white">
          
          <ul className="flex flex-col gap-3 mb-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                end={link.end || false}
                className={({ isActive }) =>
                  `flex justify-between items-center py-2 px-3 border-b-2 border-gray-300 rounded transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow'
                      : 'hover:bg-blue-100 text-gray-800'
                  }`
                }
              >
                <span className="truncate">{link.label}</span>
                <ArrowForwardIosIcon sx={{ fontSize: '12px', color: 'inherit' }} />
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Emergency Box */}
        <div className="mt-2 shadow border flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 border-gray-300 rounded-lg bg-gray-100">
          <MdContactEmergency className="text-blue-600 text-4xl flex-shrink-0" />
          <div>
            <h1
              className="text-gray-900 font-semibold"
              style={{ fontFamily: 'Montserrat' }}
            >
              Emergency
            </h1>
            <p className="text-blue-700 font-medium">+233 20 716 4944</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Content */}
      <div className="w-full lg:w-2/3">
        <Outlet />
      </div>

    </div>
  );
};

export default Servistlist;
