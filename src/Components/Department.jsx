import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Pill, Activity, Bone } from 'lucide-react';

const departments = [
  { id: 1, number: '01.', icon: Activity, title: 'Dental Care', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' },
  { id: 2, number: '02.', icon: Pill, title: 'Medicine', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' },
  { id: 3, number: '03.', icon: Heart, title: 'Cardiology', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' },
  { id: 4, number: '04.', icon: Bone, title: 'Orthopedic', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' },
  { id: 5, number: '05.', icon: Activity, title: 'Neurology', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' },
  { id: 6, number: '06.', icon: Pill, title: 'Pharmacy', description: 'Lorem ipsum dummy text printing setting detry bringin eight challenges faced.' }
];

const Department = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < departments.length - itemsPerPage ? prev + 1 : prev
    );
  };

  const visibleDepartments = departments.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
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
              className="w-10 h-10  flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleDepartments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <p className="text-gray-300 text-xl font-light mb-4">
                  {dept.number}
                </p>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dept.description}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors group/btn">
                  READ MORE
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
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
