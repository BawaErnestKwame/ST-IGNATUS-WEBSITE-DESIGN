import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    date: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted!');
  };

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-24 mt-10">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left Section */}
          <motion.div
            className="space-y-8 mt-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div>
              <p className="text-blue-500 font-semibold mb-2">Make an Appointment</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-10 mb-4">
                Book Your Visit,<br /> Make an Appointment Now
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Book your visit today and get personalized eye care from our experienced specialists.
              </p>
            </div>

            {/* Contact Information */}
            <motion.div
              className="bg-gray-200 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl contact font-bold text-gray-900 mb-6">
                Contact Us for More Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Center</p>
                    <p className="text-gray-600 text-sm">+233 20 716 4944</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Address</p>
                    <p className="text-gray-600 text-sm">st.ignatiuseyecaregh@gmail.com </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <div>
              <div className="flex items-center mb-3">
                <h4 className="font-montserrat font-bold text-gray-900">Social Media</h4>
                <div className="flex-1 h-px bg-gray-300 ml-4"></div>
              </div>
              <div className="flex space-x-3">
                {[Facebook, Instagram, Twitter, MessageCircle].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            className="bg-blue-100 rounded-2xl p-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              {/* Stagger inputs */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                {/* Name */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                  />
                </motion.div>

                {/* Email + Telephone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white"
                      required
                    />
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Your telephone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white"
                      required
                    />
                  </motion.div>
                </div>

                {/* Date + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white"
                      required
                    />
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Select Your Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Select service</option>
                      <option value="consultation">Consultation</option>
                      <option value="eye-exam">Eye Examination</option>
                      <option value="contact-lens">Contact Lens Fitting</option>
                      <option value="glasses">Glasses Selection</option>
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Add your message here"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none bg-white"
                  ></textarea>
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make an Appointment
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
