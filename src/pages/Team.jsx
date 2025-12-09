import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import teamImage from '../assets/teamimg.webp';
import testimonialimg1 from '../assets/testimonial1.jpg'
import testimonialimg2 from '../assets/testimonial2.jpg'
import testimonialimg3 from '../assets/testimonial3.jpg'
import testimonialimg4 from '../assets/testimonial4.jpg'
import testimonialimg5 from '../assets/testimonial5.jpg'
import testimonialimg6 from '../assets/testimonial6.jpg'
import testimonialimg7 from '../assets/testimonial7.jpg'
import testimonialimg8 from '../assets/testimonial8.jpg'
import { Link } from 'react-router';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All Team');

  const specialists = [
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Cardiologist',
       category: 'Cardiology', 
       image: testimonialimg1
       },
    { name: 'IGNATIUS KWAKU YEBOAH ',
       specialty: 'Endocrinologist', 
       category: 'Endocrinology', 
       image: testimonialimg2 },
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Neurologist', 
      category: 'Neurology', 
      image: testimonialimg3 },
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Pediatrician', 
      category: 'Pediatric', 
      image: testimonialimg4 },
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Endocrinologist', 
      category: 'Endocrinology', 
      image: testimonialimg5 },
    { name: 'IGNATIUS KWAKU YEBOAH ',
       specialty: 'Neurologist', 
       category: 'Neurology', 
       image: testimonialimg6 },
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Neurologist', 
      category: 'Neurology',
       image: testimonialimg7 },
    { name: 'IGNATIUS KWAKU YEBOAH ', 
      specialty: 'Eye Doctor',
      category: 'Dental',
      image: testimonialimg8}
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
        className="w-full h-[35vh] md:h-[55vh] flex flex-col justify-center items-center text-center px-6 mb-16 relative"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AE3 35%, #05207AD0), url(${teamImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-4xl md:text-8xl font-bold mb-2">
          Meet Our Team
        </h1>
      <div className=" flex items-center gap-2 tex-2xl md:text-3xl text-white">
         <Link to="/">
          <span className='cursor-pointer tex-2xl md:text-2xl hover:text-orange-400 hover:underline transition-colors'>Home</span>
         </Link>
        <span>/</span>
        <span> Team</span>
      </div>
       
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
