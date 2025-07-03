import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const faqs = [
  'Do you work with all makes and models?',
  'What are your opening times?',
  'How quick can you turn my vehicle around?',
  'Do you accept card payments?',
  'Do you offer a breakdown service?',
];

const FAQSection = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <p className="text-sm uppercase text-gray-500 flex items-center gap-2 mb-2">
            <span className="w-3 h-px bg-lime-400"></span> Help
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">FAQ'S</h2>
          <p className="text-gray-600 text-sm mb-8 max-w-sm">
            Find answers to common questions about our services and policies.
          </p>

          <button className="bg-lime-300 text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-lime-400 transition">
            <FaArrowRight className="text-sm" />
            CONTACT US
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-5 py-4 border border-gray-200 rounded transition"
            >
              <span className="text-sm text-gray-800">{faq}</span>
              <FaArrowRight className="text-gray-500 text-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
