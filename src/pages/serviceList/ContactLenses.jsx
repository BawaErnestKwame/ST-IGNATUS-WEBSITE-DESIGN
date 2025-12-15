import React from 'react'
import image from '../../assets/lence.png'
import image2 from '../../assets/sales.png'

const ContactLenses = () => {
  return (
   <div className="w-full px-6 md:px-20 py-12">
         {/* TITLE */}
         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
           Sale & Repair of Spectacles & Contact Lenses
         </h1>
   
         {/* DESCRIPTION */}
         <p className="text-gray-600 leading-relaxed mb-10">
           Sale & Repair of Spectacles & Contact Lenses involves providing customers with high-quality vision correction products and ensuring they remain in good condition. This service includes offering a wide range of eyeglass frames, prescription lenses, and contact lenses tailored to individual vision needs and lifestyle preferences. It also covers professional repairs such as adjusting frames, fixing hinges, replacing broken parts, and maintaining proper lens alignment for comfort and clear vision. By combining expert guidance, product variety, and reliable repairs, this service ensures customers receive both optimal vision and long-lasting eyewear support.
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

export default ContactLenses