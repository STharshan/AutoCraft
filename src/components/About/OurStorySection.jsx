import React from 'react';

const OurStorySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center">
      {/* Tagline */}
      <div className="mb-4 flex justify-center items-center space-x-2">
        <span className="w-6 h-px bg-lime-400"></span>
        <span className="text-gray-500 uppercase text-sm tracking-widest">Our Story</span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 leading-tight max-w-4xl mx-auto mb-8">
        DELIVERING EXCELLENCE IN AUTO REPAIR FOR OVER FOUR DECADES.
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
        We’re a family-owned business fueled by two generations of car enthusiasts dedicated to providing exceptional service.
        With a team of highly skilled professionals and state-of-the-art equipment, we ensure your car receives the precision care it deserves.
        When you trust us with your vehicle, you’re not just a customer—you’re part of the family.
      </p>
    </section>
  );
};

export default OurStorySection;
