import React from "react";

const testimonials = [
  {
    quote:
      "Got a starlight headliner done from them and it was done quickly and to a high standard. Would highly recommend",
    author: "EEVAN S",
  },
  {
    quote:
      "Toni and his team are lovely. Very friendly and worked well within the timeframe agreed and were very cost-effective. Absolutely recommend this team 👍.",
    author: "RENOL K",
  },
  {
    quote:
      "Exceptional service! My car looks as good as new. Highly recommend!",
    author: "KIRK S",
  },
  {
    quote:
      "Fantastic service. Had my Range Rover serviced by these guys, quick turn around good pricing. Will definitely be a repeat customer",
    author: "TARVINDER B",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-bold text-gray-500 mb-2 flex items-center">
            <span className="inline-block w-2 h-px -rotate-45 bg-yellow-400 mr-2 "></span> RAVING REVIEWS
          </p>
          <h2 className="text-3xl font-bold text-blue-600 leading-tight mt-15 tracking-widest">
            THOUSANDS OF <br /> HAPPY DRIVERS
          </h2>
        </div>

        {/* Right */}
        <div className="relative bg-black overflow-hidden p-4 h-180">
           <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-yellow-400"></div>

            {/* Bottom half border */}

          {/* diagonal yellow line */}
          <div className="absolute border border-yellow-400 transform rotate-315 w-full h-0 top-1/2 left-0"></div>
          
          {/* testimonials */}
          <div className="flex space-x-4 scrollbar-hide relative z-10 mt-70 slider-track">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white text-gray-800 p-4 min-w-[500px] shadow"
              >
                {/* left gradient */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-black/70 to-transparent"></div>
                {/* right gradient */}
                <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-black/70 to-transparent"></div>

                <p className="text-sm mb-2">"{t.quote}"</p>
                <p className="text-xs font-bold uppercase text-gray-600">{t.author}</p>
              </div>
            ))}
          </div>

          {/* yellow bottom border */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
