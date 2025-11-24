// import React from 'react';
// import { motion } from 'framer-motion';

// // ICONS
// import LocalDiningIcon from '@mui/icons-material/LocalDining';      // Nutrition
// import BloodtypeIcon from '@mui/icons-material/Bloodtype';          // Phlebotomy
// import BiotechIcon from '@mui/icons-material/Biotech';              // Lab Tech
// import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';    // EKG Tech
// import HearingIcon from '@mui/icons-material/Hearing';              // Audiology
// import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';  // Pharmacy

// const icons = [
//   <LocalDiningIcon className="text-white" />,
//   <BloodtypeIcon className="text-white" />,
//   <BiotechIcon className="text-white" />,
//   <MonitorHeartIcon className="text-white" />,
//   <HearingIcon className="text-white" />,
//   <LocalPharmacyIcon className="text-white" />,
// ];

// const HeroCards = () => {
//   return (
//     <div className="w-full text-center space-y-4 px-4 mb-10">
//       <p className="text-base md:text-lg font-semibold text-white">
//         Learn About Degree and Training Programs
//       </p>

//       <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">

//         {[
//           "Nutrition",
//           "Phlebotomy",
//           "Lab Tech",
//           "EKG Tech",
//           "Audiology",
//           "Pharmacy",
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             whileHover={{ scale: 1.07 }}
//             className="flex flex-col justify-center items-center gap-3 
//                        w-28 h-32 md:w-32 md:h-36 bg-white 
//                        rounded-xl shadow-lg cursor-pointer
//                        hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="bg-gradient-to-br from-indigo-500 to-blue-700 
//                             p-3 md:p-4 rounded-full flex items-center justify-center shadow-md">
//               {icons[index]}
//             </div>

//             <p className="font-semibold text-gray-800 text-sm md:text-base">
//               {item}
//             </p>
//           </motion.div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default HeroCards;
