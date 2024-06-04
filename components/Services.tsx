import React from 'react';

const Services = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="container space-y-10 py-20 md:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xl font-semibold text-orange-500">Services</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What I Do for Clients
          </h2>
          <span className="text-base text-gray-300">
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="z-10 rounded-lg bg-[#2B2D33] p-10 shadow-lg">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-10">
        <img src="/services-1.png" alt={`Background Icon`} />
      </div>
    </section>
  );
};

export default Services;
