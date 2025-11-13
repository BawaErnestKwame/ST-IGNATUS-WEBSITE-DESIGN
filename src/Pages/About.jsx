import React from 'react';
import hero from '../assets/hero4.jpg';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AboutStatistics from './AboutComponents/AboutStatistics';
import HospitalOverview from './AboutComponents/HospitalOverview';
import HealthyLifeSteps from './AboutComponents/HealthyLifeSteps';
import BookYourVisit from './AboutComponents/BookYourVisit';
import HealthcareServices from '../Components/HealthcareServices'



const About = () => {
  return (
    <>
    <div
      className="w-full h-[50vh] flex items-center px-4 md:px-8 lg:px-24"
      style={{
        backgroundImage: `linear-gradient(to right, #04207AFF 35%,#05207A45), url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="">
        <h1 className='text-white text-2xl md:text-6xl'>About Us</h1>
      {/* style={{fontFamily:"Montserrat"}} */}
      <div className="flex items-center gap-1 text-white">
        
        <Link to="/" className="flex items-center gap-1 hover:underline underline-offset-4 hover:text-orange-500 transition-all duration-500 text-2xl"
        >
          Home
        </Link>
         <ArrowForwardIosIcon sx={{fontSize:"16px", fontWeight:"bold"}} />
        <span className='text-2xl'
        >About</span>
      </div>
    </div>
    </div>
    <AboutStatistics/>
    <HospitalOverview/>
    <HealthyLifeSteps/>
     <HealthcareServices/>

    <BookYourVisit/>
    </>
  );
};

export default About;
