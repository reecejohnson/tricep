import React from 'react';
import copy from '../config/copy';

function Testimonials() {
  return (
    <section className="relative">

      {/* Glow illustration */}
      <svg className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block" aria-hidden="true" width="854" height="509" viewBox="0 0 854 509" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__a">
            <stop stopColor="#667EEA" offset="0%" />
            <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
          </radialGradient>
          <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__b">
            <stop stopColor="#9F7AEA" offset="0%" />
            <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
          </radialGradient>
        </defs>
        <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
          <circle fillOpacity=".64" fill="url(#iphonesill__a)" cx="300" cy="300" r="300" />
          <circle fillOpacity=".72" fill="url(#iphonesill__b)" cx="729" cy="384" r="240" />
        </g>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-3 font-red-hat-display">{copy.testimonials.heading}</h2>
            <img className="h-10 md:h-12 mb-4 mx-auto" src="/images/tricep-teal.svg"/>
            <p className="text-xl text-gray-400">{copy.testimonials.subheading}</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {copy.testimonials.testimonials.map(test =>
              <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src="/images/testimonial-01.jpg" width="48" height="48"
                         alt="Testimonial 01"/>
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-500"
                         viewBox="0 0 24 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 flex-grow">— {test.quote}</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{test.name}</cite> - <a
                  className="text-teal-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{test.relationship}</a>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
