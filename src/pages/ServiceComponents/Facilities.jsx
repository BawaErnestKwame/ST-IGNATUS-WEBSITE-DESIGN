import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import facility1 from '../../assets/facilities/facility1.jpg';
import facility2 from '../../assets/facilities/facility2.jpg';
import facility3 from '../../assets/facilities/facility3.jpg';
import facility4 from '../../assets/facilities/facility4.jpg';
import facility5 from '../../assets/facilities/facility5.jpg';
import facility6 from '../../assets/facilities/facility6.jpg';
import facility7 from '../../assets/facilities/facility7.jpg';
import facility8 from '../../assets/facilities/facility8.jpg';
import facility9 from '../../assets/facilities/facility9.jpg';

const Facilities = () => {
  const facilities = [
    { src: facility1, alt: 'Facility view 1' },
    { src: facility2, alt: 'Facility view 2' },
    { src: facility3, alt: 'Facility view 3' },
    { src: facility4, alt: 'Facility view 4' },
    { src: facility5, alt: 'Facility view 5' },
    { src: facility6, alt: 'Facility view 6' },
    { src: facility7, alt: 'Facility view 7' },
    { src: facility8, alt: 'Facility view 8' },
    { src: facility9, alt: 'Facility view 9' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef(null);

  // Auto-scroll effect (smooth LEFT → RIGHT)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Scroll on index change
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const child = container.children[currentIndex];
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? facilities.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === facilities.length - 1 ? 0 : prev + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className='px-4 md:px-8 lg:px-24 py-8'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Our Facilities</h1>

      <div className="relative group">
        {/* Image Slider */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar flex gap-4 pb-4 snap-x snap-mandatory scroll-smooth"
        >
          {facilities.map((facility, index) => (
            <img
              key={index}
              src={facility.src}
              alt={facility.alt}
              className='h-64 md:h-80 w-auto object-cover rounded-lg flex-shrink-0 snap-center shadow-md hover:shadow-xl transition-shadow duration-300'
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          <ChevronLeft className='w-6 h-6 text-gray-800' />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          <ChevronRight className='w-6 h-6 text-gray-800' />
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlayPause}
          className='absolute bottom-4 right-4 bg-red-600 hover:bg-blue-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        >
          {isPlaying ? (
            <Pause className='w-5 h-5 text-gray-100' />
          ) : (
            <Play className='w-5 h-5 text-gray-100' />
          )}
        </button>

        {/* Dots */}
        <div className='flex justify-center gap-2 mt-4'>
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Slide Number */}
        <div className='text-center text-sm text-gray-500 mt-2'>
          {currentIndex + 1} / {facilities.length}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
