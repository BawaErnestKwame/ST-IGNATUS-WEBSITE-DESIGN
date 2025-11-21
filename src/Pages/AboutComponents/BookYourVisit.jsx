import React from 'react';
import { ArrowRight } from 'lucide-react';

const BookYourVisit = () => {
  return (
    <div className=" bg-[#0627c2]  py-8 px-4 sm:px-6 lg:px-8 mb">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl w-[70%] lg:text-4xl font-bold text-white leading-tight">
              Clear Vision Starts Here. Schedule Your Eye Exam Today
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
              <span>Book Your Visit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourVisit;