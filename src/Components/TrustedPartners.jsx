import React from 'react';

// Import images
import medsite from '../assets/partners/medisite.png';
import metropolitan from '../assets/partners/metropolitan.png';
import acacia from '../assets/partners/acacia.png';
import acemedical from '../assets/partners/acemedical.png';
import apex from '../assets/partners/apex.png';
import bankofghana from '../assets/partners/bankofghana.png';
import dvla from '../assets/partners/dvla.png';
import equilty from '../assets/partners/equilty.png';
import ghic from '../assets/partners/ghic.png';
import glica from '../assets/partners/glica.png';
import nationwide from '../assets/partners/nationwide.png';
import premierhealth from '../assets/partners/premierhealth.png';
import stignatus from '../assets/partners/stignatus.png';

export default function TrustedPartners() {
  const partners = [
    { id: 1, image: medsite },
    { id: 2, image: metropolitan },
    { id: 3, image: acacia },
    { id: 4, image: acemedical },
    { id: 5, image: apex },
    { id: 6, image: bankofghana },
    { id: 7, image: dvla },
    { id: 8, image: equilty },
    { id: 9, image: ghic },
    { id: 10, image: glica },
    { id: 11, image: nationwide },
    { id: 12, image: premierhealth },
    { id: 13, image: stignatus },
  ];

  // Duplicate once for seamless scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Title */}
        <div className="flex-shrink-0 lg:w-64">
          <h2 className="text-2xl md:text-3xl font-bold border-r leading-tight">
            Our <span className="text-gray-800">Trusted Partners</span> in <br />
            Your Vision Care
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-10 group flex items-center cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.image}
                  alt="partner logo"
                  className="w-28 h-auto object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Scroll half the container (one set of logos) */
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
