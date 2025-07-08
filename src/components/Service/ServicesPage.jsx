import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "PAINT SERVICES",
    desc: "Restore your vehicle to its original beauty. We pride ourselves on delivering the highest quality paint services",
    img: "/carpaint.avif",
  },
  {
    title: "AC SERVICE",
    desc: "Keeping you comfortable all year round. We pride our selves on our expertise, attention to detail, and commitment to quality.",
    img: "/bule.avif",
  },
  {
    title: "MOT",
    desc: "We make your MOT test simple and stress-free",
    img: "/paint.webp",
  },
  {
    title: "MECHANICAL",
    desc: "Ensure your vehicle is in top-notch condition. No job is too big for us.",
    img: "/carmechanic.avif",
  },
  {
    title: "SMART REPAIRS",
    desc: "Cost-effective solution for fixing minor damages. Without the need for extensive replacement or repainting.",
    img: "/gray.avif",
  },
  {
    title: "SERVICE",
    desc: "Dependable and thorough servicing - We do more than just routine maintenance.",
    img: "/shine.webp",
  },
  {
    title: "DIAGNOSTICS",
    desc: "Comprehensive diagnostics - Address the root cause of the issue for a lasting solution.",
    img: "/homepaint.avif",
  },
  {
    title: "DENTS/SCRATCHES",
    desc: "Restore Your Car’s Perfect Finish. Professional dent removal for a flawless vehicle surface.",
    img: "/work.avif",
  },
];

const ServicesPage = () => {
  return (
    <div className=" text-white">

      {/* Services Title */}
      <section className="text-center py-12 px-4 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          OUR SERVICES
        </h2>
        <p className="text-gray-600 mt-10 text-xl max-w-xs mx-auto">
          From minor fixes to major repairs, we’ve got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl h-400 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-60 object-cover grayscale group-hover:grayscale-0 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-blue-500 font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white mb-4">{service.desc}</p>
              <button className="flex items-center space-x-1 px-4 py-1 border border-lime-400 rounded-full text-lime-400 text-xs hover:bg-lime-400 hover:text-black transition duration-200">
                <FaArrowRight size={12} />
                <span>EXPLORE</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
