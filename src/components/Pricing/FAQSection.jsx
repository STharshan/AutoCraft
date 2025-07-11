import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you work with all makes and models?',
    answer: 'No job is too big or small for us. We have over 4 decades of experience and seen it all. '
  },
  {
    question: 'What are your opening times?',
    answer: 'Monday- Friday 8:30-17:00 Saturday: appointments only  Sunday: closed.'
  },
  {
    question: 'How quick can you turn my vehicle around?',
    answer: 'Each job will differ based on complexity and availability of parts. We will quote you a time well in advance. '
  },
  {
    question: 'Do you accept card payments?',
    answer: 'We accept Cash, Card and Bank transfers. There maybe additional charges depending on the card used. '
  },
  {
    question: 'Do you offer a breakdown service?',
    answer: 'We don’t have this in house. However, we can arrange collection/delivery with our trusted partners. '
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="mb-4 flex space-x-2">
            <span className="w-6 h-px bg-yellow-500 rotate-135 mt-2"></span>
            <span className="uppercase text-sm tracking-widest font-bold text-gray-400">Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">FAQ'S</h2>
          <p className="text-gray-600 text-sm mb-8 max-w-xs">
            Find answers to common questions about our services and policies.
          </p>

          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-lime-400 transition">
            <FaArrowRight className="text-sm" />
            CONTACT US
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-3 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-5 py-4 text-left cursor-pointer  "
              >
                <span className="text-sm text-gray-800 font-medium hover:translate-x-5.5 transition-transform duration-500">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-500 text-sm" />
                ) : (
                  <FaChevronDown className="text-gray-500 text-sm" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 py-3 text-gray-600 text-sm bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;