import React from 'react'
import image from '../../assets/eyecare.png'
import image2 from '../../assets/eyecare2.png'

const Comprehensive = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
             About <span className="text-blue-600">Comprehensive Eye Care</span>
          </h1>
    
          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mb-10">
            Comprehensive Eye Care covers a full range of services designed to protect, maintain, and improve your vision. It includes detailed eye examinations to check visual clarity, screen for eye diseases, and evaluate overall eye health. This type of care also involves diagnosing conditions like refractive errors, cataracts, glaucoma, and retinal problems, followed by personalized treatment or management plans. Whether it’s prescribing glasses, monitoring long-term conditions, or providing preventive care, comprehensive eye care ensures that patients receive complete attention for healthier eyes and better vision at every stage of life.
          </p>
    
          {/* IMAGES SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={image}
              alt="Glaucoma Eye Scan"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
    
            <div className="relative">
              <img
                src={image2}
                alt="Glaucoma Treatment"
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
              
            </div>
          </div>
        </div>
  )
}

export default Comprehensive