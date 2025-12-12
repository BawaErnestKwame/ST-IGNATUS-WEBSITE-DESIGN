import React from 'react'
import image from '/ignatus.jpg'
import { motion } from 'framer-motion' // <-- ADDED

const DrIgnatus = () => {
  return (
    <motion.section
      className="px-4 md:px-12 lg:px-24 py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-50 shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-10">

        {/* PROFILE */}
        <motion.div
          className="flex gap-6  md:w-1/3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src={image} 
            alt="Dr Ignatus" 
            className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-gray-200 shadow-md object-cover"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              IGNATIUS KWAKU YEBOAH
            </h1>
            <p className="text-gray-500 font-medium"> (OD, MPH, FAAO, MGOA)

</p>
          </div>
        </motion.div>

        {/* INFORMATION */}
        <motion.div
          className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.18 }}
        >
          {[
            "Dr. Ignatius Yeboah is an action-oriented Optometrist and a Public Health Specialist with proven track record of leadership experience and initiatives, having graduated from Kwame Nkrumah University of Science and Technology with a Doctor of Optometry (OD) degree as well as a Master of Public Health (MPH) degree from the Catholic University of Ghana and currently pursuing a PhD in Public Health.",
            
            "Dr. Yeboah is a Fellow of the American Academy of Optometry, a Member of the World Council of Optometry, a Member of the Ghana Optometric Association and also served as the Chairperson of the African Council of Optometry Public Health Committee (AFCO - PHC).Having served at the Eye Clinic of Sunyani Teaching Hospital , Ignatius is a multiple award winning eye care professional with more than a decade of clinical experience",
            
            "Dr. Yeboah is a self-motivated and hardworking person with unique interest in helping needy and underprivileged or rural communities as well as a very good team worker with great sense of responsibility. He has keen interest in volunteerism, community service, leadership, clinical practice and contributes enormously in any possible endeavour to utilize his skills and ability to improve the visual and general living standards of people."
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}

export default DrIgnatus
