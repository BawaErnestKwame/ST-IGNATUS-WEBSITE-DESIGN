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
import { motion } from "framer-motion";   // <-- Added
import image from '../assets/departmentbanner.avif';

const departments = [
  { id: 1, number: '01.', icon: Eye, title: 'Ophthalmology Department', description: 'Provides medical and surgical eye care for conditions like cataracts, glaucoma, and retinal diseases.' },
  { id: 2, number: '02.', icon:HeartPulse, title: 'Optometry Department', description: 'Focuses on vision testing, eye examinations, and prescription of corrective lenses. Optometrists here provide primary eye care and detect vision problems early.' },
  { id: 3, number: '03.', icon:  Glasses, title: 'Optical Services Department', description: 'Handles lens fitting, frame selection, and dispensing of eyeglasses and contact lenses.' },
  { id: 4, number: '04.', icon: Scan, title: ' Laser Unit', description: 'Performs cataract, glaucoma, and other specialized eye surgeries using advanced technology.' },
  { id: 5, number: '05.', icon: ClipboardList, title: 'Diagnostic & Imaging Departmenretinal imaging for accurate diagnosis.' },
  { id: 6, number: '06.', icon: Baby, title: 'Pediatric & General Eye Ct', description: 'Conducts eye scans and tests such as OCT, visual field, and are Department', description: 'Focuses on children’s eye health, treating issues like lazy eye, squint, and general vision problems.' },
  { id: 7, number: '07.', icon: Pill, title: 'Pharmacy Department', description: 'Dispenses prescribed eye medications and provides guidance on safe and effective usage.' },
  { id: 8, number: '08.', icon: Building2, title: 'Administration & Patient Support Services', description: 'Manages appointments, billing, and patient records for smooth and efficient clinic operations.' },
];

const Department = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="h-auto md:h-[75vh] py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.75)), url(${image})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="flex justify-between items-start mb-8"
        >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex gap-2"
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-red-600 hover:bg-blue-600 text-white hover:border-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= departments.length - itemsPerPage}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-red-600 hover:bg-blue-600 text-white hover:border-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700">
          {visibleDepartments.slice(0, itemsPerPage).map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <p className="text-gray-300 text-xl font-light mb-4">{dept.number}</p>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <IconComponent
                      className="w-8 h-8 text-red-600 group-hover:text-white transition-colors"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Department;
