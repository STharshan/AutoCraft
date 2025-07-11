import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const paintImages = [
  '/green.webp',
  '/work.avif',
  '/bule.avif',
  '/gray.avif',
  '/red.avif',
  '/shine.webp',
];

const PaintWorkSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-20 px-4 text-center relative">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">PAINT WORK</h2>
      <p className="text-gray-500 text-sm sm:text-base max-w-sm mx-auto mb-12 mt-10">
        Restore your vehicle to its original beauty. We pride ourselves on delivering the highest quality paint services
      </p>

      {/* Image Carousel */}
      <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-8"
        >
          {paintImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`paint-${index}`}
              className="w-[600px] h-[450px] object-cover rounded shadow-md flex-shrink-0 hover:scale-105 transition"
            />
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800"
        >
          <FaArrowLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Contact Button */}
      <div className="mt-10">
        <button className="bg-black text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800">
          <span>CONTACT US</span>
          <FaArrowRight className="text-yellow-300" />
        </button>
      </div>
      <div className="absolute left-0 w-full z-10 px-4 mt-20 border-t border-gray-300"></div>
    </section>
  );
};

export default PaintWorkSection;
