import React from 'react'
import image from '../../assets/glaucoma2.png'
import image2 from '../../assets/glaucoma1.png'

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
        </div>
      </div>
    </div>
  )
}

export default Glaucoma
