import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import image from '../../assets/contactimage.webp';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', industry: '', message: '' });
      }, 3000);

    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(240,240,240,0.9), rgba(255,255,255,0.9)), url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
              We're here to help you
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Discuss <br />
              <span>Your Eye</span><br />
              <span>Health Needs</span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Are you looking for top-quality chemical solutions tailored to your needs? Reach out to us.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="text-gray-900 font-semibold">st.ignatiuseyecaregh@gmail.com </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="text-gray-900 font-semibold">+233 20 716 4944</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="research">Research & Development</option>
                  <option value="oil-gas">Oil & Gas</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us your needs..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || submitted}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 px-6 
                rounded-xl flex items-center justify-center gap-2 transition-all 
                hover:scale-[1.02] disabled:opacity-70 shadow-lg shadow-blue-500/30"
              >
                {submitted ? (
                  <span>✓ Sent Successfully!</span>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Get a Solution</span>
                  </>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
