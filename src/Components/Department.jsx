import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Glasses,
  HeartPulse,
  Scan,
  Baby,
  Pill,
  ClipboardList,
  Building2,
} from 'lucide-react';
import image from '../assets/departmentbanner.avif';

const departments = [
  { id: 1, number: '01.', icon: Eye, title: 'Ophthalmology Department', description: 'Provides medical and surgical eye care for conditions like cataracts, glaucoma, and retinal diseases.' },
  { id: 2, number: '02.', icon: Glasses, title: 'Optometry Department', description: 'Focuses on vision testing, eye examinations, and prescription of corrective lenses. Optometrists here provide primary eye care and detect vision problems early.' },
  { id: 3, number: '03.', icon: HeartPulse, title: 'Optical Services Department', description: 'Handles lens fitting, frame selection, and dispensing of eyeglasses and contact lenses.' },
  { id: 4, number: '04.', icon: Scan, title: 'Eye Surgery & Laser Unit', description: 'Performs cataract, LASIK, glaucoma, and other specialized eye surgeries using advanced technology.' },
  { id: 5, number: '05.', icon: ClipboardList, title: 'Diagnostic & Imaging Department', description: 'Conducts eye scans and tests such as OCT, visual field, and retinal imaging for accurate diagnosis.' },
  { id: 6, number: '06.', icon: Baby, title: 'Pediatric & General Eye Care Department', description: 'Focuses on children’s eye health, treating issues like lazy eye, squint, and general vision problems.' },
  { id: 7, number: '07.', icon: Pill, title: 'Pharmacy Department', description: 'Dispenses prescribed eye medications and provides guidance on safe and effective usage.' },
  { id: 8, number: '08.', icon: Building2, title: 'Administration & Patient Support Services', description: 'Manages appointments, billing, and patient records for smooth and efficient clinic operations.' },
];

const Department = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // // Auto-slide effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) =>
  //       prev + 1 >= departments.length ? 0 : prev + 1
  //     );
  //   }, 9000); // slide every 4 seconds
  //   return () => clearInterval(interval);
  // }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= departments.length ? prev : prev + 1));
  };

  const visibleDepartments = [
    ...departments.slice(currentIndex, currentIndex + itemsPerPage),
    ...departments.slice(0, Math.max(0, currentIndex + itemsPerPage - departments.length)),
  ];

  return (
    <div
      className="h-auto md:h-[75vh] py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.75)), url(${image})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Our Departments
            </h1>
            <div className="items-center gap-2">
              <p className="text-gray-600 text-lg">Dedicated Services</p>
              <p className="w-10 h-[2px] bg-red-700 rounded"></p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= departments.length - itemsPerPage}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700">
          {visibleDepartments.slice(0, itemsPerPage).map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <p className="text-gray-300 text-xl font-light mb-4">{dept.number}</p>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <IconComponent
                      className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dept.description}</p>
                </div>
                <button className="flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors group/btn">
                  READ MORE
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Department;
