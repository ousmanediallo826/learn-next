import React from 'react';
import { HeroVideoDialogDemo } from './HeroVideoDialogDemoTopInBottomOut';

const About = () => {
  return (
    <div className="py-16 px-8 bg-gray-50 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-8 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Learn More About Us</h1>
        <p className="text-base md:text-lg text-gray-600">
          Discover who we are and what we do. We are passionate about technology and innovation. Let’s take a closer look.
        </p>
      </div>

      {/* Hero Video Section */}
      <div className="flex-1 md:w-1/2">
        <HeroVideoDialogDemo />
      </div>
    </div>
  );
}

export default About;
