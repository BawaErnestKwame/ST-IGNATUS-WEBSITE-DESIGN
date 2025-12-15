import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutStatistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // start animation when 30% visible
  });

  const stats = [
    { value: 3, label: "Branches", suffix: "" },
    { value: 15, label: "Partners", suffix: "+" },
    { value: 10000, label: "Patients Served", suffix: "+" },
    { value: 300, label: "Eye Surgeries Performed", suffix: "+" },
    { value: 30, label: "Specialists & Staff", suffix: "+" },
  ];

  return (
    <div
      ref={ref}
      className="w-full bg-gray-300 py-16 px-4 md:px-8 lg:px-24"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800"
             style={{fontFamily:"Montserrat"}} 
            
            >
              {inView ? (
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                  separator=","
                />
              ) : (
                "0"
              )}
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStatistics;
