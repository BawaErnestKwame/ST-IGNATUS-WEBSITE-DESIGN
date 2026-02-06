import React, { useState, useEffect } from 'react';
import image from '../assets/footerImage2.jpg';
import logo from '../assets/logo.png';
import {FaTiktok, FaInstagram } from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Share2,
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  const handleSignUp = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="text-gray-300 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(#082583DD, #06227DE2), url(${image})`,
      }}
    >
      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                <img src={logo} alt="St. Ignatius Eye Centre logo" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-normal">
                  ST. IGNATIUS
                </h3>
                <p className="text-xs text-gray-400">EYE CENTRE</p>
              </div>
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              Our doctors have years of experience in providing top-notch
              healthcare.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm" style={{ fontFamily: 'Montserrat' }}>
                  Abesim Dominase (Ohene Djan)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm" style={{ fontFamily: 'Montserrat' }}>
                  +233 508 249 775
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm" style={{ fontFamily: 'Montserrat' }}>
                  st.ignatiuseyecaregh@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Departments
              <div className="w-12 h-1 bg-red-500 rounded-2xl"></div>
            </h3>
            <ul className="space-y-2 flex flex-col">
              {[
                'Dental Care',
                'Medicine',
                'Orthopedic',
                'Emergency',
                'Skilled Doctors',
                'Certified Clinic',
              ].map((item) => (
                <li key={item} className='text-sm cursor-pointer hover:text-red-500 transition-colors hover:pl-2 inline-block duration-300'>
           
                    {item}
                
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Quick Links
              <div className="w-12 h-1 bg-red-500 rounded-2xl"></div>
            </h3>
            <ul className="space-y-2 flex flex-col">
              {['About Us', 'What We Do', 'Appointment', 'Contact', '24/7 Support'].map(
                (item) => (
                  <li key={item} className="text-sm cursor-pointer hover:text-red-500 transition-colors hover:pl-2 inline-block duration-300">
                    
                  
                      {item}
                    
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Opening Hours
              <div className="w-12 h-1 bg-red-500 rounded-2xl"></div>
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-gray-300">8:00 AM - 18:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-gray-300">9:00 AM - 15:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium p-1 bg-red-700">
                  10:00 AM - 15:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-500 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span
                className="text-sm font-medium"
                style={{ fontFamily: 'Montserrat' }}
              >
                Follow Us:
              </span>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Facebook,
                    link: 'https://www.facebook.com/profile.php?id=100063920837307',
                  },
                  {
                    Icon: FaTiktok,
                    link: 'https://www.tiktok.com/@st.ignatiuseyecentre?_r=1&_d',
                  },
                  {
                    Icon:  FaInstagram ,
                    link: 'https://www.instagram.com/st.ignatiuseyecentre?igsh=aTBka3JoYTE2M3gx',
                  },
                ].map(({ Icon, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full group hover:bg-red-600 bg-blue-600/60 flex items-center justify-center transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Text */}
            <div className="flex items-center gap-3">
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: 'Montserrat' }}
              >
                Stay informed and healthy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 scroll-totop right-6 z-50 w-11 h-11 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
        animate={{
          opacity: showScroll ? 1 : 0,
          y: showScroll ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      {/* Copyright */}
      <div className="text-center py-4 bg-red-700 border-t border-blue-900">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} St. Ignatius Eye Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
