import React from 'react'
import image from '../../assets/diagnotics.png'
import image2 from '../../assets/glaucomaimg2.jpg'

const Diagnostics = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Ocular Diagnostics<span className='text-blue-600'>(O.C.T, V.F.T, etc.)</span>
          </h1>
    
          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mb-10">
            Ocular Diagnostics involve a series of advanced eye tests used to assess the health and function of the eye. Common procedures include Optical Coherence Tomography (O.C.T), which uses light waves to capture detailed cross-sectional images of the retina, helping detect conditions like glaucoma, macular degeneration, and diabetic eye disease. Another key test is the Visual Field Test (V.F.T), which measures the range and sensitivity of a patient’s peripheral vision to identify issues with the optic nerve or early signs of glaucoma. These diagnostic tools allow eye specialists to detect diseases early, monitor progression, and provide accurate treatment plans for maintaining long-term eye health.
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
              {/* Play Button (Optional like your sample) */}
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

export default Diagnostics