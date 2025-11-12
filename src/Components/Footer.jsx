import React, { useState } from 'react';
import image from '../assets/footerImage2.png';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  MessageCircle,
  ArrowUp,
  Activity
} from 'lucide-react';


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="text-gray-300 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 44, 140, 0.9), rgba(14, 44, 140, 0.95)), url(${image})`,
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">MediLink.</h3>
                <p className="text-xs text-gray-400">CENTRAL HOSPITAL</p>
              </div>
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              We are ipsum dolor sit amet aeaett consectetuer adipiscing elitseder diam nonummy.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">59 Street, 1200 Techpark</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+59888555</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">medilink@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Departments
              <div className="w-12 h-0.5 bg-blue-500 mt-2"></div>
            </h3>
            <ul className="space-y-2">
              {['Dental Care', 'Medicine', 'Orthopedic', 'Emergency', 'Skilled Doctors', 'Certified Clinic'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-blue-400 transition-colors hover:pl-2 inline-block duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Quick Links
              <div className="w-12 h-0.5 bg-blue-500 mt-2"></div>
            </h3>
            <ul className="space-y-2">
              {['About Us', 'What We Do', "Faq's", 'Appointment', 'Contact', '24/7 Support'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-400 transition-colors hover:pl-2 inline-block duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Opening Hours
              <div className="w-12 h-0.5 bg-blue-500 mt-2"></div>
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Tue:</span>
                <span className="text-gray-300">9.00 - 17.00</span>
              </li>
              <li className="flex justify-between">
                <span>Wed - Thur:</span>
                <span className="text-gray-300">9.00 - 16.00</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span className="text-gray-300">9.00 - 12.00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-gray-300">9.00 - 14.00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-blue-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-blue-800 bg-[#0b2470]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Share2, MessageCircle].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium whitespace-nowrap">Stay informed and healthy</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your e-mail"
                  className="px-4 py-2 bg-blue-950/40 border border-blue-700 rounded-md text-sm focus:outline-none focus:border-blue-400 w-48"
                />
                <button
                  onClick={handleSignUp}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                >
                  SIGN UP
                </button>
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-[#091b59]/90 border-t border-blue-900">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} MediLink Central Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
