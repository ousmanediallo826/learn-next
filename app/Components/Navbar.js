"use client";  // Required for Next.js 13+ with client-side components
import Link from 'next/link';
import React, { useState } from 'react';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { ShinyButton } from "../../components/magicui/shiny-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white z-10">
        <div className="text-lg font-bold">
          <h2>GDG on Campus @City Tech</h2>
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-3xl text-white"
          >
            {isMenuOpen ? 'X' : '☰'}  {/* Show X when menu is open */}
          </button>
        </div>

        {/* Links and buttons visible on large screens */}
        <div className={`lg:flex gap-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded-md">About</Link>
            <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded-md">Events</Link>
            <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded-md">Projects</Link>
            <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded-md">Services</Link>
            <Link href="/" className="py-2 px-4 hover:bg-gray-700 rounded-md">Resources</Link>
          </div>

          {/* Icons and Join Us Button */}
          <div className="flex gap-5 items-center">
            <Link href="/" className="flex items-center">
              <FaDiscord className="text-3xl" />
            </Link>
            <Link href="/" className="text-3xl">
              <FaLinkedin />
            </Link>
            <ShinyButton className="hidden lg:block">Join Us</ShinyButton>
          </div>
        </div>
      </div>

      {/* Mobile view: Links, Icons, and Join Us Button */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 py-4`}>
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md w-full text-center">About</Link>
          <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md w-full text-center">Events</Link>
          <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md w-full text-center">Projects</Link>
          <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md w-full text-center">Services</Link>
          <Link href="/" className="py-2 px-4 text-lg hover:bg-gray-700 rounded-md w-full text-center">Resources</Link>

          <div className="flex gap-4 mt-4">
            <Link href="/" className="flex items-center text-3xl">
              <FaDiscord />
            </Link>
            <Link href="/" className="text-3xl">
              <FaLinkedin />
            </Link>
          </div>

          <ShinyButton className="w-full mt-4">Join Us</ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
