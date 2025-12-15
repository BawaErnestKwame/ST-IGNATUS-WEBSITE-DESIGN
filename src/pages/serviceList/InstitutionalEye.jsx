import React from 'react'
import image1 from '../../assets/institution1.png'   // replace with your image
import image2 from '../../assets/institution2.png'   // replace with your image

const InstitutionalEye = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
        About <span className="text-blue-600">Institutional Eye Screening.</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
        Institutional eye screening involves conducting comprehensive eye examinations for groups within
        institutions such as schools, workplaces, and community organizations. These screenings help detect
        early vision problems, identify refractive errors, and prevent long-term eye diseases. <b> Regular
        institutional screening</b> promotes better eye health, boosts productivity, and ensures that both
        children and adults receive timely eye care and corrective solutions when needed.
      </p>

      {/* IMAGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={image1}
          alt="Institutional Eye Screening Image 1"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />

        <div className="relative">
          <img
            src={image2}
            alt="Institutional Eye Screening Image 2"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default InstitutionalEye
