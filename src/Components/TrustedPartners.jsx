import React from 'react';
import { Shield, Zap, Mic, Diamond, Grid3x3 } from 'lucide-react';

export default function TrustedPartners() {
  const partners = [
    { id: 1, name: 'logoipsum', icon: Grid3x3 },
    { id: 2, name: 'LOGOIPSUM', icon: Zap },
    { id: 3, name: 'LOGOIPSUM', icon: Mic },
    { id: 4, name: 'logoipsum', icon: Diamond },
    { id: 5, name: 'logoipsum', icon: Shield }
  ];


  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto  flex-col md:flex-row md:flex items-center">
        {/* Title and Divider Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
          {/* Title Section */}
          <div className="flex-shrink-0 lg:w-64">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Our <span className="text-gray-300">Trusted Partners</span> in<br />
              Your Vision Care
            </h2>
          </div>
          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-gray-600"></div>
        </div>

        {/* Scrolling Partners Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 mx-8 group cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <div className="flex items-center gap-2 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                    <span className="text-lg font-semibold tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}