import React from 'react';
import { Calendar, Stethoscope, Heart, ArrowRight } from 'lucide-react';
import cycle from '../../assets/lifecycleimage.webp';
import cycle1 from '../../assets/lifecycleimage1.webp';
import cycle2 from '../../assets/lifecycleimage2.webp'; // fixed duplicate

const HealthyLifeSteps = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      icon: Calendar,
      title: 'Get Appointment',
      description:
        "Get appointment easily by booking your visit with our professionals.",
      image: cycle,
    },
    {
      id: 2,
      number: '02',
      icon: Stethoscope,
      title: 'Start Check-Up',
      description:
        'Begin your eye check-up with our professionals to check your vision and eye health.',
      image: cycle1,
    },
    {
      id: 3,
      number: '03',
      icon: Heart,
      title: 'Enjoy Healthy Life',
      description: 'Good eye care helps you see better and live healthier every day.',
      image: cycle2,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Health Process
          </h2>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Keep Healthy
          </h2> */}
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Dotted Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line
                x1="20%"
                y1="0"
                x2="80%"
                y2="0"
                stroke="#F25D00FF"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Mobile/Tablet Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <ArrowRight className="w-8 h-8 text-red-600" />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center group">
                    {/* Circle with Image/Icon */}
                    <div className="relative mb-6">
                      {/* Dotted Border Circle */}
                      <div
                        className="absolute inset-0 rounded-full border-8 border-dashed border-red-600
                       animate-[spin_20s_linear_infinite]"
                      ></div>

                      {/* Main Circle */}
                      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        {/* Image inside circle */}
                        <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="object-cover w-full h-full rounded-full"
                          />
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute number -top-2 -left-2 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyLifeSteps;
