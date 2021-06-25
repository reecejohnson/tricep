import React from 'react';
import copy from '../config/copy';
import DoneForYou from './DoneForYou';

function FeaturesZigzag() {
  const { heading, subheading, features } = copy.features;

  const {
    preHeading: featureOnePreHeading,
    heading: featureOneHeading,
    subheading: featureOneSubheading,
    items: featureOneItems,
  } = features[0];
  const {
    preHeading: featureTwoPreHeading,
    heading: featureTwoHeading,
    subheading: featureTwoSubheading,
    items: featureTwoItems,
  } = features[1];
  const {
    preHeading: featureThreePreHeading,
    heading: featureThreeHeading,
    subheading: featureThreeSubheading,
    items: featureThreeItems,
  } = features[2];
  const {
    preHeading: featureFourPreHeading,
    heading: featureFourHeading,
    subheading: featureFourSubheading,
    items: featureFourItems,
  } = features[3];
  const {
    preHeading: featureFivePreHeading,
    heading: featureFiveHeading,
    subheading: featureFiveSubheading,
    items: featureFiveItems,
  } = features[4];

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Features included</div>*/}
            <h2 className="h2 font-red-hat-display mb-4">{heading}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{subheading}</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <DoneForYou />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-semibold text-xl text-white mb-2">
                    <span className="text-teal-500 italic text-lg font-normal">
                      {featureOnePreHeading}
                    </span>
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3">{featureOneHeading}</h3>
                  <p className="text-lg text-gray-400 mb-4">{featureOneSubheading}</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    {featureOneItems.map((item, i) => (
                      <li className="flex items-center mb-2 last:mb-0" key={i}>
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span className="font-semibold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="/images/landing-page.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-semibold text-xl text-white mb-2">
                    <span className="text-teal-500 italic text-lg">{featureTwoPreHeading}</span>
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3">{featureTwoHeading}</h3>
                  <p className="text-lg text-gray-400 mb-4">{featureTwoSubheading}</p>
                  <ul className="text-lg text-gray-400 -mb-2 font-bold text-white">
                    {featureTwoItems.map((item, i) => (
                      <li className="flex items-center mb-2 last:mb-0" key={i}>
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span className="font-semibold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="/images/feature.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-semibold text-xl text-white mb-2">
                    <span className="text-teal-500 italic text-lg">{featureThreePreHeading}</span>
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3">{featureThreeHeading}</h3>
                  <p className="text-lg text-gray-400 mb-4">{featureThreeSubheading}</p>
                  <ul className="text-lg text-gray-400 -mb-2 font-bold text-white">
                    {featureThreeItems.map((item, i) => (
                      <li className="flex items-center mb-2 last:mb-0" key={i}>
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span className="font-semibold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="/images/feature.png"
                  width="540"
                  height="405"
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-semibold text-xl text-white mb-2">
                    <span className="text-teal-500 italic text-lg">{featureFourPreHeading}</span>
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3">{featureFourHeading}</h3>
                  <p className="text-lg text-gray-400 mb-4">{featureFourSubheading}</p>
                  <ul className="text-lg text-gray-400 -mb-2 font-bold text-white">
                    {featureFourItems.map((item, i) => (
                      <li className="flex items-center mb-2 last:mb-0" key={i}>
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span className="font-semibold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src="/images/stripe-dash.png"
                  style={{ height: '450px' }}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-semibold text-xl text-white mb-2">
                    <span className="text-teal-500 italic text-lg">{featureFivePreHeading}</span>
                  </div>
                  <h3 className="h4 font-red-hat-display mb-3">{featureFiveHeading}</h3>
                  <p className="text-lg text-gray-400 mb-4">{featureFiveSubheading}</p>
                  <ul className="text-lg text-gray-400 -mb-2 font-bold text-white">
                    {featureFiveItems.map((item, i) => (
                      <li className="flex items-center mb-2 last:mb-0" key={i}>
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span className="font-semibold text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
