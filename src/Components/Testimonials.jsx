import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import bgimage from '../assets/testimonialbg.jpeg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Thomas",
      role: "PRODUCT DESIGNER",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "Fashion design can generally be divided into tiers, and while there exists some overlap and subcategorization, Luxury Fashion.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CREATIVE DIRECTOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "The attention to detail and craftsmanship in every piece is extraordinary. It's a perfect blend of innovation and tradition.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "FASHION BLOGGER",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote: "Absolutely stunning collection! The quality and design philosophy behind each creation speaks volumes about the brand's commitment.",
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
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(229,229,229,0.9), rgba(160,160,160,0.9)), url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl w-full bg-white rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Testimonials</h2>

        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-300 to-pink-400 relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Author Info Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-wider">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-red-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
       
        <button className='flex items-center gap-2 bg-blue-700 text-white
         px-4 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition-colors translate-y-2'>Review More
            <ArrowRightAltIcon/>
          </button>

      </div>
    </div>
  );
}
