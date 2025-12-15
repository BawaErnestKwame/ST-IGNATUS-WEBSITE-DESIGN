import React from 'react'
import image1 from '../../assets/eyeSurgery1.webp'   // replace with your image
import image2 from '../../assets/eyeSurgery2.webp'   // replace with your image

const EyeSurgeries = () => {
  return (
    <div className="w-full px-6 md:px-20 py-12">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
         About <span className="text-blue-600">Eye Surgeries.</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed mb-10">
        Eye surgeries involve medical procedures that correct vision problems, treat eye diseases,
        or repair eye injuries. Common types include cataract surgery, glaucoma surgery, corneal
        transplants, LASIK for vision correction, and retinal surgery. These procedures help restore
        clarity, reduce eye pressure, and prevent vision loss. Advanced technology and early diagnosis
        have greatly improved success rates and recovery time.
      </p>

      {/* IMAGES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={image1}
          alt="Eye Surgery Image 1"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />

        <div className="relative">
          <img
            src={image2}
            alt="Eye Surgery Image 2"
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />

        </div>
      </div>
    </div>
  )
}

export default EyeSurgeries
