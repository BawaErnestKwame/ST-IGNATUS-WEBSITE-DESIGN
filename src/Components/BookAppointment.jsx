import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react'
import { useState } from "react";

const BookAppointment = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  })

  const services = [
    'General Consultation',
    'Eye Examination',
    'Contact Lens',
    'Glasses Selection'
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(4)
  }

  const resetForm = () => {
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: ''
    })
    setStep(1)
  }

  // Close popup when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Box */}
          <motion.div
            ref={modalRef}
            className="fixed top-1/2 left-1/2 w-[95%] md:w-[600px] 
                      max-h-[90vh] overflow-y-auto 
                      -translate-x-1/2 -translate-y-1/2 
                      bg-white rounded-2xl shadow-xl p-6 z-50"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            {/* -------- YOUR ORIGINAL FORM STARTS HERE ---------- */}

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Book an Appointment</h1>
              <p className="text-gray-600">Schedule your visit in just a few steps</p>
            </div>

            {/* Progress */}
            <div className="flex justify-between mb-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= num ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-full h-1 mx-2 ${step > num ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Service</h2>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleInputChange('service', service)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        formData.service === service ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <span className="font-medium text-gray-800">{service}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Date & Time</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" /> Select Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border-2 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" /> Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange('time', time)}
                        className={`p-3 rounded-lg border-2 ${
                          formData.time === time ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border-2 rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 py-3 bg-indigo-600 text-white rounded-lg"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h2>

                <div>
                  <label className="block mb-2"><User className="inline w-4 h-4 mr-1" /> Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full p-3 border-2 rounded-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2"><Mail className="inline w-4 h-4 mr-1" /> Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full p-3 border-2 rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2"><Phone className="inline w-4 h-4 mr-1" /> Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="w-full p-3 border-2 rounded-lg"
                    placeholder="+233 000 0000"
                  />
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} type="button" className="flex-1 py-3 border-2 rounded-lg">
                    Back
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-lg">
                    Book Appointment
                  </button>
                </div>
              </form>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="text-center space-y-6">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold">Appointment Confirmed!</h2>

                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>

                <button
                  onClick={resetForm}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg"
                >
                  Book Another Appointment
                </button>
              </div>
            )}

            {/* -------- YOUR ORIGINAL FORM ENDS HERE ---------- */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookAppointment;
