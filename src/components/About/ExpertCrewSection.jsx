import React from 'react';

const teamMembers = [
  { name: "Alex Smith", role: "Lead Technician", image: "/back.png" },
  { name: "Rachel Lee", role: "Paint Specialist", image: "/back.png" },
  { name: "Marcus Green", role: "Service Advisor", image: "/back.png" },
  { name: "Nina Patel", role: "Engine Expert", image: "/back.png" },
  { name: "Jordan Clark", role: "Wheel Specialist", image: "/back.png" },
];

const ExpertCrewSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Scrollable Row */}
      <div className="overflow-hidden relative">
        <div className="flex w-[200%] animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div
              key={i}
              className="relative w-[200px] sm:w-[250px] h-[250px] mx-2 flex-shrink-0 group overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
              />
              {/* Hover overlay: Name + Role */}
              <div className="absolute top-2 left-2 text-left text-black group-hover:opacity-100 opacity-0 transition duration-300">
                <div className="text-sm font-semibold text-white">{member.name}</div>
                <div className="text-xs text-gray-200">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Info Card */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg p-8 text-center z-10 w-[90%] max-w-md">
        <h3 className="text-xl font-bold mb-2">EXPERT CREW</h3>
        <p className="text-gray-600 text-sm">Meet the professionals behind our exceptional service.</p>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-300 translate-x-3 translate-y-3 -z-10"></div>
      </div>
    </section>
  );
};

export default ExpertCrewSection;
