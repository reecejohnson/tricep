import React from 'react';
import copy from '../config/copy';

function Stats() {
  return (
    <section className="relative">
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4 text-center"
            data-aos-id-stats
          >
            {copy.hero.stats.map((stat) => (
              <div
                className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <div className="font-red-hat-display text-2xl md:text-4xl font-extrabold tracking-tighter mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-lg">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
