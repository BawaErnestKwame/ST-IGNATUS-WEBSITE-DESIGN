import React from 'react'
import image1 from '../../assets/dvla1.png'   // replace with your image
import image2 from '../../assets/dvla.png'   // replace with your image

const DvlEyeTeste = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
       Driver and Vehicle Licensing Authority Eye Test.
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
       The Driver and Vehicle Licensing Authority (DVLA) Eye Test is a mandatory vision screening conducted to ensure that every driver meets the required visual standards for safe driving in Ghana. This test assesses crucial aspects of eyesight, including visual acuity, peripheral vision, depth perception, and the ability to recognize road signs and colors accurately. It helps detect conditions such as refractive errors, cataracts, and other eye problems that may impair a driver's performance on the road. By performing this test, the DVLA promotes road safety and ensures that all licensed drivers have the visual capability needed to operate a vehicle responsibly.
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
