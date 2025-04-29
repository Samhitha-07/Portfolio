'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white">
      <nav className="container mx-auto px-4 py-8 flex justify-between items-center">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/logo.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="sm:text-[1.3rem] md:2xl font-semibold text-black">SAMHITHA S</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex space-x-8">
          <a href="#hero" className="text-[1.3rem] font-semibold text-black hover:text-orange-400">Home</a>
          <a href="#about" className="text-[1.3rem] font-semibold text-black hover:text-orange-400">About</a>
          <a href="#projects" className="text-[1.3rem] font-semibold text-black hover:text-orange-400">Projects</a>
          <a
            href="/resume/Samhitha_Resume_latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] font-semibold text-black hover:text-orange-400 transition-colors duration-200"
            title="View Samhitha's Resume"
          >
            Resume
          </a>
          <a
            href="/resume/Samhitha_Resume_latest.pdf"
            download="Samhitha_Resume.pdf"
            className="text-black hover:text-orange-400 transition-colors duration-200 translate-y-2"
            title="Download Resume"
          >
            <FaDownload size={16} />
          </a>
          <a href="#contact" className="text-[1.3rem] font-semibold text-black hover:text-orange-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col space-y-4 backdrop-blur-lg">
          <a href="#hero" className="text-xl font-semibold text-black hover:text-orange-400 pl-2">Home</a>
          <a href="#about" className="text-xl font-semibold text-black hover:text-orange-400 pl-2">About</a>
          <a href="#projects" className="text-xl font-semibold text-black hover:text-orange-400 pl-2">Projects</a>
          <a
            href="/resume/Samhitha_Resume_latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-black hover:text-orange-400 pl-2"
            title="View Samhitha's Resume"
          >
            Resume
          </a>
          <a
            href="/resume/Samhitha_Resume_latest.pdf"
            download="Samhitha_Resume.pdf"
            className="text-xl font-semibold text-black hover:text-orange-400 pl-2 flex items-center gap-2"
            title="Download Resume"
          >
            <FaDownload size={18} />
          </a>
          <a href="#contact" className="text-xl font-semibold text-black hover:text-orange-400 pl-2">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
