import React from 'react';
import hero from '../assets/hero4.jpg';
import { Link, Outlet } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AboutStatistics from './AboutComponents/AboutStatistics';
import HospitalOverview from './AboutComponents/HospitalOverview';
import HealthyLifeSteps from './AboutComponents/HealthyLifeSteps';
import BookYourVisit from './AboutComponents/BookYourVisit';
import HealthcareServices from '../Components/HealthcareServices';
import ExpertCare from '../Components/ExpertCare';
import Department from '../Components/Department';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] flex items-center px-4 md:px-8 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(to right, #04207AFF 35%,#05207A45), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <h1 className='text-white text-2xl md:text-8xl font-bold'>About Us</h1>
          <div className="flex items-center gap-1 text-white">
            <Link
              to="/"
              className="flex items-center gap-1 hover:underline underline-offset-4 hover:text-orange-500 transition-all duration-500 text-2xl"
              style={{ fontFamily: "Smooch Sans" }}
            >
              Home
            </Link>
            <ArrowForwardIosIcon sx={{ fontSize:"16px", fontWeight:"bold" }} />
            <span className='text-2xl text-orange-400'>About</span>
          </div>
        </div>
      </div>

      {/* About Statistics */}
      <AboutStatistics />

      {/* Hospital Overview with nested routing */}
      <HospitalOverview>
        <Outlet />
      </HospitalOverview>

      {/* Other sections */}
      <HealthcareServices />
      <ExpertCare />
      <Department />
      <HealthyLifeSteps />
      <BookYourVisit />
    </>
  );
};

export default About;
