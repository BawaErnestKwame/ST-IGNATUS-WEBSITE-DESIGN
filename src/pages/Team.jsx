import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import teamImage from '../assets/team/group.jpg';
// import testimonialimg1 from '../assets/team/picture1.jpg'
// import testimonialimg2 from '../assets/team/picture2.jpg'
// import testimonialimg3 from '../assets/team/picture3.jpg'
import testimonialimg4 from '../assets/team/picture4.jpg'
import testimonialimg5 from '../assets/team/picture6.jpg'
import testimonialimg6 from '../assets/team/picture7.jpg'
import testimonialimg7 from '../assets/team/picture8.jpg'
import testimonialimg8 from '../assets/team/picture9.jpg'
import testimonialimg9 from '../assets/team/picture10.jpg'
import testimonialimg10 from '../assets/team/picture11.jpg'
import testimonialimg11 from '../assets/team/picture12.jpg'
import testimonialimg12 from '../assets/team/picture5.jpg'
import { Link } from 'react-router';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All Team');

  const specialists = [
    // { name: 'IGNATIUS KWAKU YEBOAH ', 
    //   specialty: 'Cardiologist',
    //    category: 'Sunyani', 
    //    image: testimonialimg1
    //    },
    // { name: 'IGNATIUS KWAKU YEBOAH ',
    //    specialty: 'Endocrinologist', 
    //    category: 'Dormaa', 
    //    image: testimonialimg2 },
    // { name: 'IGNATIUS KWAKU YEBOAH ', 
    //   specialty: 'Neurologist', 
    //   category: 'Berekum', 
    //   image: testimonialimg3 },
    { name: 'ROBERT DANSO', 
      specialty: 'ADMINISTRATIVE ASSISTANT', 
      category: 'Dormaa', 
      image: testimonialimg4 },
    { name: 'DR. DANIEL ADU SAKYI', 
      specialty: 'OPTOMETRIST', 
      category: 'Sunyani', 
      image: testimonialimg5 },
      
    { name: 'AKUA ASUAMAH TAWIAH',
       specialty: 'PRACTICE MANAGER', 
       category: 'Berekum', 
       image: testimonialimg6 },
    { name: 'JOYCELYN NKETIAH ', 
      specialty: 'ADMINISTRATIVE ASSISTANT', 
      category: 'Berekum',
       image: testimonialimg7 }
       ,

    { name: 'ISAAC ADOMAH', 
      specialty: 'ADMINISTRATOR',
      category: 'Dormaa',
      image: testimonialimg8
    }
       ,

    { name: 'BERNICE OWUSUAA OPPONG ', 
      specialty: 'PRACTICE MANAGER',
      category: 'Dormaa',
      image: testimonialimg9
    }
       ,

    { name: 'DESMOND TSITU ', 
      specialty: 'OPTICAL TECHNICIAN',
      category: 'Dormaa',
      image: testimonialimg10
    }
       ,

    { name: 'DR. KYEI BAFFOUR NTIAMOAH', 
      specialty: 'OPTOMETRIST',
      category: 'Dormaa',
      image: testimonialimg11
    }
       ,

    { name: 'DR. AGNES BEMA APPIAGYEI', 
      specialty: 'OPTOMETRIST',
      category: 'Dormaa',
      image: testimonialimg12
    }
  ];

  const filters = ['All Team', 'Sunyani', 'Dormaa', 'Berekum'];

  const filteredSpecialists =
    activeFilter === 'All Team'
      ? specialists
      : specialists.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="w-full h-[35vh] md:h-[55vh] lg:h-[60vh] flex flex-col justify-center items-center text-center px-6 mb-16 relative"
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
