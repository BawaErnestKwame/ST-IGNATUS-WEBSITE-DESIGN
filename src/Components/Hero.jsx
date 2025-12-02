import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router";

const Hero = () => {
  const heroSlides = [
    {
      title: "The Gift Of Clear Vision",
      description: "Your eyes deserve expert care and attention. We provide trusted solutions to protect, restore, and enhance your sight helping you see the beauty of life with clarity and confidence.",
      image: hero1,
    },
    {
      title: "Comprehensive Eye Care",
      description: "From routine eye check-ups to advanced surgical procedures we offer complete eye care under one roof. Our specialists ensure you receive personalized, effective, and compassionate treatment every time.",
      image: hero2,
    },
    {
      title: "State-Of-The-Art Technology",
      description: "We combine innovation with precision through world-class diagnostic tools and modern surgical equipment. Experience advanced eye care powered by technology designed to deliver accurate results and faster recovery.",
      image: hero3,
    },
    {
      title: "Dedicated To Your Health",
      description: "At St. Ignatius Eye Centre, your well-being comes first. Our team is committed to delivering exceptional care built on trust, empathy, and professional excellence.",
      image: hero4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[70vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100 translate-x-0" : index < currentIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`}
          style={{
            backgroundImage: `linear-gradient(to right, darkblue, rgba(255, 255, 255, 0.1)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-start 
                          px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 
                          py-6 sm:py-8 md:py-10">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl 
                           tracking-tight font-semibold text-white 
                           mb-3 sm:mb-4 md:mb-5 lg:mb-6 
                           w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2
                           leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
                          leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-7 
                          w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2
                          mb-4 sm:mb-5 md:mb-6">
              {slide.description}
            </p>
          <Link to='/about'>
            <button className="mt-2 sm:mt-3 md:mt-4 
                               gap-2 
                               hover:bg-red-500 transition-all duration-500 cursor-pointer 
                               bg-red-700 
                               px-4 sm:px-5 md:px-6 lg:px-8 
                               py-1.5 sm:py-2 md:py-2.5 lg:py-3
                               text-sm sm:text-base md:text-lg
                               text-white rounded-full 
                               flex items-center 
                               shadow-lg hover:shadow-xl
                               transform hover:scale-105">
              Read More
              <ArrowForwardIcon sx={{fontSize: {xs: "14px", sm: "16px", md: "18px"}}}/>
            </button>
          </Link>
          </div>
        </div>
      ))}

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 
                      left-1/2 transform -translate-x-1/2 
                      flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3
                      z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-2 md:h-3
                       rounded-full transition-all duration-300 
                       ${
              index === currentIndex 
                ? "bg-orange-600 w-2.5" 
                : "bg-white bg-opacity-50 hover:bg-opacity-75 w-2.5 "
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;