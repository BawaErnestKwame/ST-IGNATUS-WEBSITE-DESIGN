import React from 'react'
import image1 from '../../assets/refraction1.png'   // replace with your image
import image2 from '../../assets/refraction.png'   // replace with your image

const Refraction = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
         About <span className="text-blue-600">Refraction.</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
        Refraction is an eye examination used to determine the correct prescription for glasses or
        contact lenses. It measures how light bends as it enters the eye to identify vision problems
        such as nearsightedness, farsightedness, and astigmatism. During the test, lenses of different
        strengths are placed in front of the eyes to find the combination that provides the clearest vision.
        Refraction helps ensure accurate diagnosis and optimal visual correction.
      </p>

      {/* IMAGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={image1}
          alt="Refraction Eye Test"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />

        <div className="relative">
          <img
            src={image2}
            alt="Refraction Procedure"
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

export default Refraction
