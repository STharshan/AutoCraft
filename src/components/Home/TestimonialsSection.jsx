import React from "react";

const testimonials = [
  {
    name: "TARVINDER B",
    text: "Fantastic service. Had my Range Rover serviced by these guys, quick turnaround, good pricing. Will definitely be a repeat customer.",
  },
  {
    name: "EEVAN S",
    text: "Got a starlight headliner done from them and it was done quickly and to a high standard. Would highly recommend.",
  },
  {
    name: "PRIYA D",
    text: "Superb attention to detail and professionalism. My car looks brand new! Thanks to the team.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-xs tracking-wide text-gray-500 uppercase mb-2 flex items-center">
            <span className="w-4 h-[1px] bg-lime-400 mr-2"></span> Raving Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight">
            Thousands of <br /> Happy Drivers
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative">
          <div className="bg-gray-900 p-6 rounded-lg relative overflow-hidden">
            {/* Diagonal Lines (simulating your design) */}
            <div className="absolute w-full h-full top-0 left-0">
              <div className="absolute border-l border-lime-300 rotate-45 w-[200%] h-[1px] top-1/2 left-[-100%]"></div>
              <div className="absolute border-l border-lime-300 rotate-45 w-[200%] h-[1px] top-[70%] left-[-100%]"></div>
            </div>

            {/* Scrollable testimonials */}
            <div className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar py-2 z-10 relative">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[320px] bg-white rounded shadow-md px-6 py-4 flex-shrink-0 relative"
                >
                  {/* Gradient fade left */}
                  <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-black/40 via-white/10 to-transparent rounded-l"></div>

                  <p className="text-sm text-gray-800 mb-4">{item.text}</p>
                  <p className="text-xs font-bold text-gray-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
