import React from 'react';

function PricingTables() {
  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">Online coach store and marketing packages</h2>
            <p className="text-xl text-gray-400">We’ll build you a professional online store to your requirements,
              release it, host it, make any changes you want, whenever you want and monitor it 24/7 to ensure it’s
              working for you. You’ll never be left in the dark again.</p>
          </div>

          {/* Pricing tables */}
          <div
            className="max-w-xs mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

            {/* Pricing table 1 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow border-2 border-transparent dark:border-teal-500"
              data-aos="fade-down">
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">Managed Online Store</div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4">£</span>
                  <span className="h3">50</span>
                  <span className="font-medium ml-2">/month</span>
                </div>
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">+ £700/Set Up Fee</span>
                </div>
                <hr className="border-teal-600 my-4"/>
                <div className="text-gray-500 dark:text-gray-400">Get a fully functional online coach store, website
                  content, images and on site SEO. Then we'll host it, secure it, make any revisions and support you
                  each month.
                </div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full" href="#0">Book a Call</a>
              </div>
            </div>

            {/* Pricing table 2 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down"
                 data-aos-delay="150">
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">Online Store + Local Marketing</div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4">£</span>
                  <span className="h3">250</span>
                  <span className="font-medium ml-2">/month</span>
                </div>
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">+ £1000/Set Up Fee</span>
                </div>
                <hr className="border-teal-600 my-4"/>
                <div className="text-gray-500 dark:text-gray-400">Everything in the Managed Website package plus local
                  marketing services so you appear on page one of Google when a client looks for your service in your
                  area.
                </div>

              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full" href="#0">Book a Call</a>
              </div>
            </div>

            {/* Pricing table 3 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down"
                 data-aos-delay="300">
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">Online Store + Niche Marketing </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4">£</span>
                  <span className="h3">500</span>
                  <span className="font-medium ml-2">/month</span>
                </div>
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">+ £1250/Set Up Fee</span>
                </div>
                <hr className="border-teal-600 my-4"/>
                <div className="text-gray-500 dark:text-gray-400">Ideal for online coaches who want to dominate a specific niche. We'll create magazine quality content and SEO your site to attract your ideal clients.
                </div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full" href="#0">Book a Call</a>
              </div>
            </div>

            {/* Pricing features */}
            <div className="sm:order-first">
              <div className="text-right hidden sm:block">
                <svg className="inline-flex -mt-3 mr-5 mb-3" width="86" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-gray-600"
                        d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z"/>
                </svg>
              </div>
              <div className="text-lg font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-gray-100">All packages
                include:
              </div>
              <ul className="text-gray-400 -mb-2 flex-grow">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Free domains</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Unlimited web pages</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Conversion analytics</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Professional stock images</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>SSL/HTTPS security</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Branding</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0" viewBox="0 0 12 12"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                  <span>Technical Updates</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingTables;
