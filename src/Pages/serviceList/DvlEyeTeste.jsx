import React from 'react'
import image1 from '../../assets/dvl1.webp'   // replace with your image
import image2 from '../../assets/dvl2.webp'   // replace with your image

const DvlEyeTeste = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
        Let's Know Short Story About <span className="text-blue-600">Developmental Eye Test.</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
        Developmental eye tests are specialized examinations that assess how well a child’s visual
        system is growing and functioning. These tests detect issues like focusing problems, eye
        coordination difficulties, lazy eye, or visual processing delays. Early detection helps ensure
        proper visual development, improves learning abilities, and prevents long-term vision problems.
        These tests are essential for infants, toddlers, and school-age children to support healthy eye growth.
      </p>

      {/* IMAGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={image1}
          alt="Developmental Eye Test Image 1"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />

        <div className="relative">
          <img
            src={image2}
            alt="Developmental Eye Test Image 2"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-l-blue-600 border-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DvlEyeTeste
