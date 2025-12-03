import React from 'react'
import image from '../../assets/glaucomaimg1.jpg'
import image2 from '../../assets/glaucomaimg2.jpg'

const Glaucoma = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
         About <span className="text-blue-600">Glaucoma.</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
        Glaucoma is an eye disease that damages the optic nerve, often caused by increased eye pressure.
        It develops slowly and may not show symptoms early, making regular eye check-ups important.
        If untreated, <b>glaucoma </b>can lead to gradual loss of peripheral vision, blurred vision, and in
        severe cases, blindness. Treatment includes eye drops, laser therapy, or surgery to reduce the
        pressure within the eye.
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

export default Glaucoma
