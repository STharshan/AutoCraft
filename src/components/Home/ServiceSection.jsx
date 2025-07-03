import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const services = [
  {
    title: "DENTS/SCRATCHES",
    desc: "Restore your car’s perfect finish. Professional dent removal for a flawless vehicle surface.",
    image: "/dents.jpg",
  },
  {
    title: "SMART REPAIR",
    desc: "Cost-effective solution for fixing minor damage. Without the need for extensive replacement or repainting.",
    image: "/smart.jpg",
  },
  {
    title: "DIAGNOSTICS",
    desc: "Consultive diagnostics – address the root cause of the issue for a lasting solution.",
    image: "/diagnostics.jpg",
  },
  {
    title: "ENGINE TUNING",
    desc: "Enhance performance and fuel efficiency with expert engine tuning and diagnostics.",
    image: "/tuning.jpg",
  },
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') current.scrollBy({ left: -300, behavior: 'smooth' });
    if (direction === 'right') current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-600 mb-2 uppercase">
          Our Services
        </h2>
        <p className="text-center text-gray-500 mb-8">
          From minor fixes to major repairs, we’ve got you covered.
        </p>

        {/* Scrollable Container with Buttons on Edges */}
        <div className="relative">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-yellow-400 text-black p-2 rounded-full shadow-lg"
          >
            <FaArrowLeft />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-yellow-400 text-black p-2 rounded-full shadow-lg"
          >
            <FaArrowRight />
          </button>

          {/* Scrollable Card Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[350px] h-[420px] rounded shadow-md overflow-hidden group flex-shrink-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition"></div>
                <div className="absolute bottom-0 p-5 z-10 text-white">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
                  <button className="mt-auto px-4 py-2 text-xs border border-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">
                    <FaArrowRight className="inline mr-2 text-yellow-400" />
                    EXPLORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
