import React from 'react';
import { FaInstagram, FaArrowRight } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-700 text-sm py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left - Address */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-black mb-15">Find Us</h3>
          <p>107 frisby road</p>
          <p>Leicester</p>
          <p>le5</p>
          <FaInstagram className="text-xl mt-10" />
        </div>

        {/* Center - Pages */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-black mb-10">Pages</h3>
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/gallery" className=" hover:text-blue-600">Gallery</a>
          <a href="/pricing" className=" hover:text-blue-600">Pricing</a>
          <a href="/services" className=" hover:text-blue-600">Services</a>
          <a href="/contact" className=" hover:text-blue-600">Contact</a>
        </div>

        {/* Right - Contact + Rating */}
        <div className="flex flex-col gap-4">
          {/* Email + Phone */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center border-b pb-1 group cursor-pointer hover:border-yellow-400 transition-all duration-200">
              <span className="group-hover:translate-x-5.5 transition-transform duration-500">Gags@nikitaautocraft.co.uk</span>
              <FaArrowRight className="group-hover:-translate-x-5.5 transition-transform duration-500" />
            </div>
            <div className="flex justify-between items-center border-b pb-1 group cursor-pointer hover:border-yellow-400 transition-all duration-200">
              <span className="group-hover:translate-x-5.5 transition-transform duration-500">0116 251 2277</span>
              <FaArrowRight className="group-hover:-translate-x-5.5 transition-transform duration-500" />
            </div>
          </div>

          {/* Review */}
          <div className="flex flex-nowrap items-center gap-3 border-gray-300 border rounded-full px-6 py-2.5 w-fit self-center md:self-start whitespace-nowrap overflow-x-auto">
            <div className="flex text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span className="text-sm font-semibold text-gray-800">4.3/5 from</span>
            <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">20+ Reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © 2024 Nikita Autocraft. All rights reserved. Partnered with <span className="text-black">Ansely</span>
      </div>
    </footer>
  );
};

export default Footer;
