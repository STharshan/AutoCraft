import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-widest mb-2">
            / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 leading-snug">
            FOUR DECADES<br />IN THE GAME
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Receive exceptional service and unparalleled skill with every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-yellow-400 text-black rounded-sm p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-yellow-400 text-black rounded-sm p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-900">
            <FaArrowRight className="text-yellow-400" />
            <span>LEARN MORE</span>
          </button>

          {/* Testimonial */}
          <div className="mt-10 text-sm text-gray-600">
            <p className="italic mb-2">
              "Fast delivery and outstanding results. Thank you!"
            </p>
            <p className="text-black font-medium">Sim B</p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/green.webp"
              alt="Spray Work"
              className="rounded-sm w-full object-cover"
            />
          </div>
          {/* Yellow corner border (bottom-right only) */}
          <div className="absolute bottom-0 right-0 border-b-[12px] border-r-[12px] border-yellow-400 w-32 h-32 z-0"></div>

          {/* Overlapping small image (bottom-left) */}
          <img
            src="/work.avif"
            alt="Detail work"
            className="absolute bottom-0 left-0 w-32 md:w-40 border-4 border-white shadow-md -mb-8 -ml-8 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
