import React from 'react';
import hero from '../assets/team/group.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ExpertCare from '../Components/ExpertCare';
import HealthcareServices from '../Components/HealthcareServices';
import Facilities from './ServiceComponents/Facilities';
import BookYourVisit from './AboutComponents/BookYourVisit';
import { GiSpectacles } from "react-icons/gi";
// ICONS
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy'; 

const Branches = () => {
  // Hero cards data with links
const heroCardsData = [
    { name: "DVLA Test", icon: <DirectionsCarIcon className="text-white" />},
    { name: "Spectacles", icon: <GiSpectacles className="text-white text-3xl"/>  },
    { name: "NHIS", icon: <LocalHospitalIcon className="text-white" />},
    { name: "Pharmacy", icon: <LocalPharmacyIcon className="text-white" />},
];

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="w-full h-[35vh] md:h-[50vh] flex flex-col items-center text-center px-4 md:px-8 lg:px-24 mb-38 lg:mb-20 relative"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AE3 35%, #05207AD0), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mt-10 space-y-4">
          <h1 className="text-5xl md:text-8xl text-white font-semibold leading-tight drop-shadow-lg">
            Sunyani Branch
          </h1>

          <p className="text-white text-sm md:text-lg lg:text-xl leading-relaxed px-2">
           Abesim Dominase (Ohene Djan)
          </p>
        </div>

        {/* HERO CARDS INSIDE BRANCHES */}
        <div className="absolute top-[85%] md:top-[80%] lg:top-[75%] w-full">
          <div className="w-full text-center space-y-4 px-4 mb-10">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {heroCardsData.map((card, index) => (
                <Link to={card.link} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ scale: 1.07 }}
                    className="flex flex-col justify-center items-center gap-3 
                               w-28 h-32 md:w-32 md:h-36 
                               rounded-2xl shadow-lg cursor-pointer
                             bg-white
                               hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-indigo-500 to-blue-700 
                                    p-3 md:p-4 rounded-full flex items-center justify-center shadow-md">
                      {card.icon}
                    </div>

                    <p className="font-semibold text-gray-800 text-sm md:text-base">
                      {card.name}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* SECTIONS */}
      <ExpertCare />
      <HealthcareServices />
      <Facilities />
      <BookYourVisit />
    </>
  );
};

export default Branches;
