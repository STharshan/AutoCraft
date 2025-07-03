import React from 'react';
import { FaStar, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaStar className="text-black text-xl" />,
    title: 'EXPERT TEAM',
    description:
      'Our skilled technicians leverage years of expertise and certified excellence to ensure every repair meets the highest standards.',
    action: 'MEET THE TEAM',
  },
  {
    icon: <FaBolt className="text-black text-xl" />,
    title: 'FAST SERVICE',
    description:
      'Experience prompt and efficient service, carefully tailored to ensure exceptional quality and meticulous attention to every detail, every time.',
    action: 'VIEW PRICING',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">WHY CHOOSE US</h2>
      <p className="text-gray-500 text-sm sm:text-base mb-12 max-w-xl mx-auto">
        Discover the top reasons to <br className="sm:hidden" />
        choose our expert services.
      </p>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 p-8 w-full max-w-md mx-auto rounded-sm hover:shadow-lg transition"
          >
            {/* Corner borders */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-300"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400"></div>

            {/* Icon */}
            <div className="inline-block bg-gradient-to-b from-yellow-100 to-yellow-300 p-3 rounded mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-black mb-3">{feature.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

            {/* Action */}
            <button className="text-sm font-semibold text-black border-t border-gray-400 pt-2">
              {feature.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
