import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import bgimage from '../assets/testimonialbg.jpeg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from 'framer-motion';
import testimonialimg1 from '../assets/testimonial1.jpg'
import testimonialimg2 from '../assets/testimonial2.jpg'
import testimonialimg3 from '../assets/testimonial3.jpg'

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "IGNATIUS KWAKU YEBOAH",
      role: "PRODUCT DESIGNER",
      image: testimonialimg1,
      quote: "What impressed me most was their patience and willingness to explain every detail. You can tell they genuinely care about their clients.",
      rating: 5
    },
    {
      id: 2,
      name: "IGNATIUS KWAKU YEBOAH",
      role: "CREATIVE DIRECTOR",
      image: testimonialimg2,
      quote: "They exceeded my expectations in every way. From communication to execution, everything was top-tier. I felt confident and supported throughout.",
      rating: 5
    },
    {
      id: 3,
      name: "IGNATIUS KWAKU YEBOAH",
      role: "FASHION BLOGGER",
      image: testimonialimg3,
      quote: "I can confidently say this is one of the best decisions I’ve made. The quality, expertise, and customer care are on another level.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      className="flex items-center justify-center p-4 flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(229,229,229,0.9), rgba(160,160,160,0.9)), url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Testimonials
      </motion.h2>

      <motion.div
        className="max-w-5xl w-full bg-white rounded-3xl p-8 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false}}
      >
        <div className="relative">
          <motion.div
            key={currentIndex}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Section */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-44 h-60 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-300 to-pink-400 relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2">
                <Quote className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-gray-700 text-lg leading-relaxed mb-2">
                  {testimonials[currentIndex].quote}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Author Info Card */}
              <motion.div
                className="bg-red-600 text-white rounded-2xl p-4 flex items-center justify-between"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1"
                  style={{
                    fontFamily:"Montserrat"
                  }}
                  >
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-200 text-sm tracking-wider">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900 font-bold" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 font-bold text-gray-900" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-2 bg-red-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
