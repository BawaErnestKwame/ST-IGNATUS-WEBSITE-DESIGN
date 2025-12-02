import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import teamImage from '../assets/teamimg.webp';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All Team');

  const specialists = [
    { name: 'Dr. Brian Adam', specialty: 'Cardiologist', category: 'Cardiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop' },
    { name: 'Dr. Jessica Brown', specialty: 'Endocrinologist', category: 'Endocrinology', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop' },
    { name: 'Dr. Lauren Brown', specialty: 'Neurologist', category: 'Neurology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop' },
    { name: 'Dr. Norman Walker', specialty: 'Pediatrician', category: 'Pediatric', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop' },
    { name: 'Dr. Daniel Brown', specialty: 'Endocrinologist', category: 'Endocrinology', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop' },
    { name: 'Dr. Sophia Lee', specialty: 'Neurologist', category: 'Neurology', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Dr. Edwin Brown', specialty: 'Neurologist', category: 'Neurology', image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=400&h=400&fit=crop' },
    { name: 'Dr. Hannah Smith', specialty: 'Dentist', category: 'Dental', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop' }
  ];

  const filters = ['All Team', 'Cardiology', 'Dental', 'Neurology'];

  const filteredSpecialists =
    activeFilter === 'All Team'
      ? specialists
      : specialists.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="w-full h-[55vh] flex flex-col justify-center items-center text-center px-6 mb-16 relative"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AE3 35%, #05207AD0), url(${teamImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-4xl md:text-8xl font-extrabold mb-2">
          Meet Our Team
        </h1>
        <p className="text-gray-200 text-sm mt-2">Home / Team</p>
      </div>

      {/* FILTER + GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSpecialists.map((specialist, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative p-4 pb-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

              
              </div>

              {/* INFO */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {specialist.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {specialist.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
