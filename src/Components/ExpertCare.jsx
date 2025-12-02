import React from 'react';
import expert1 from '../assets/expert1.jpg';
import expert2 from '../assets/expert2.jpg';
import expert3 from '../assets/expert3.jpg';
import { Link } from 'react-router';

const doctors = [
  { id: 1, name: 'IGNATIUS KWAKU YEBOAH', specialty: 'Optometrist', image: expert1 },
  { id: 2, name: 'IGNATIUS KWAKU YEBOAH', specialty: 'Optometrist', image: expert2 },
  { id: 3, name: 'IGNATIUS KWAKU YEBOAH', specialty: 'Optometrist', image: expert3 },
];

const ExpertCare = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section */}
          <div className="max-w-xl">
            <div className="">
                <p className="text-blue-600 font-medium mb-1">Our Doctors</p>
                <p className="w-10 h-[2px] bg-red-700 rounded"></p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Your Eye Care Experts
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our experienced team of eye care professionals is dedicated to providing
              personalized care using modern diagnostic and treatment technologies.
            </p>
           <Link to="/team">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              Discover More
            </button>
           </Link>
          </div>

          {/* Right Doctor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                {/* Doctor Image */}
                <div className="relative w-full h-72 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                {/* Doctor Info */}
                <div className="bg-gray-900 text-center p-2">
                  <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                    {doctor.name}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpertCare;
