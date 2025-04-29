import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-10"> {/* Reduced py and mt */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6"> {/* Reduced space-y */}

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black/85 text-center">
        Let&apos;s Talk <span className="text-6xl sm:text-7xl md:text-8xl text-orange-400 mb-4">.</span>
        </h2>


        {/* Pill Boxes with Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-6"> {/* Reduced gap */}
          
          {/* Email */}
          <div className="p-2 space-y-6"> {/* Reduced space-y */}
            <div className="flex items-center justify-center gap-4 bg-black text-white font-semibold px-6 py-3 rounded-full text-lg sm:text-[1.1rem]">
              <FaEnvelope size={20} />
              Email
            </div>
            <a
              href="mailto:samhithas04@gmail.com"
              className="block text-base sm:text-[1.2rem] text-orange-600 hover:text-orange-700 transition-colors"
            >
              samhithas04@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-2 space-y-6"> {/* Reduced space-y */}
            <div className="flex items-center justify-center gap-4 bg-black text-white font-semibold px-6 py-3 rounded-full text-lg sm:text-[1.1rem]">
              <FaPhoneAlt size={20} />
              Phone
            </div>
            <p className="text-base sm:text-[1.2rem] text-orange-600">+91 7397750255</p>
          </div>

          {/* GitHub */}
          <div className="p-2 space-y-6">
            <div className="flex items-center justify-center gap-4 bg-black text-white font-semibold px-6 py-3 rounded-full text-lg sm:text-[1.1rem]">
              <FaGithub size={20} />
              GitHub
            </div>
            <a
              href="https://github.com/Samhitha-07"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base sm:text-[1.2rem] text-orange-600 hover:text-orange-700 transition-colors"
            >
              Samhitha-07
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-2 space-y-6">
            <div className="flex items-center justify-center gap-4 bg-black text-white font-semibold px-6 py-3 rounded-full text-lg sm:text-[1.1rem]">
              <FaLinkedin size={20} />
              LinkedIn
            </div>
            <a
              href="https://www.linkedin.com/in/samhitha-s07/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base sm:text-[1.2rem] text-orange-600 hover:text-orange-700 transition-colors"
            >
              samhitha-s07
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
