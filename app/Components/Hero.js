import Link from 'next/link';
import React from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { FiTerminal } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero flex flex-col justify-center items-center text-center space-y-4 px-4 min-h-screen pt-20 mt-40">
      <Link href="/" className="border-b-2 text-blue-500 text-2xl">
        Join GDG on Campus
      </Link>
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          “Empowering Students to Learn, Build, and Connect”
        </h1>
        <p className="max-w-2xl mx-auto text-center mt-2 py-3 text-gray-400 text-lg sm:text-xl">
          GDG City Tech is a student-led tech community at CUNY City Tech, dedicated to inspiring innovation, collaboration, and career growth through hands-on workshops, speaker events, and project-based learning.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-5 gap-5">
          <RainbowButton className="w-full sm:w-auto">🔹 Explore Events</RainbowButton>
          <RainbowButton className="w-full sm:w-auto" variant="white">🔹 Join Our Community</RainbowButton>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mt-7">
          <FiTerminal className="text-blue-500" />
          <span>🔹 Follow Us @gdg_citytech</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
