import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const heroSlides = [
    {
      title: "The Gift Of Clear Vision",
      description: "Your eyes deserve expert care and attention. We provide trusted solutions to protect, restore, and enhance your sight helping you see the beauty of life with clarity and confidence.",
      image: hero1,
    },
    {
      title: "Comprehensive Eye Care Service",
      description: "From routine eye check-ups to advanced surgical procedures we offer complete eye care under one roof. Our specialists ensure you receive personalized, effective, and compassionate treatment every time.",
      image: hero2,
    },
    {
      title: "State-Of-The-Art Technology",
      description: "We combine innovation with precision through world-class diagnostic tools and modern surgical equipment. Experience advanced eye care powered by technology designed to deliver accurate results and faster recovery.",
      image: hero3,
    },
    {
      title: "Dedicated To Your Health",
      description: "At St. Ignatius Eye Centre, your well-being comes first. Our team is committed to delivering exceptional care built on trust, empathy, and professional excellence.",
      image: hero4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);


  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out transform 
            ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          style={{
            backgroundImage: `linear-gradient(to right, darkblue, rgba(255, 255, 255, 0.1)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-16 lg:px-24">
            <h1 className="text-3xl md:text-7xl tracking-tight font-semibold text-white mb-2 w-full md:w-1/2">
              {slide.title}
            </h1>
            <p className="text-white text-xl leading-7 lg:w-1/2 ">
              {slide.description}
            </p>
            <button className="mt-4 gap-2 hover:bg-red-500 transition-all duration-500 cursor-pointer bg-red-700 px-4 py-1 text-white rounded-full flex items-center">
            
              Read More
               <ArrowForwardIcon sx={{fontSize:"14px"}}/>
              </button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Hero;
