import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">How Simple works</h1>
            <p className="text-xl text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16">
            <img src="/images/process-grey.png" width="1104" height="325" alt="Features top" />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 mt-20">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 font-red-hat-display  mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition ease-in-out mb-3 ${tab !== 1 ? 'bg-gray-900 shadow-md border-gray-800 hover:shadow-lg' : 'bg-gray-800 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                    <div className="text-gray-400">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 text-teal-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition ease-in-out mb-3 ${tab !== 2 ? 'bg-gray-900 shadow-md border-gray-800 hover:shadow-lg' : 'bg-gray-800 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                    <div className="text-gray-400">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 text-teal-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition  ease-in-out mb-3 ${tab !== 3 ? 'bg-gray-900 shadow-md border-gray-800 hover:shadow-lg' : 'bg-gray-800 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                    <div className="text-gray-400">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 text-teal-500 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"  fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src="/images/stripe-dash.png" alt="Features bg" style={{ maxHeight: '600px'}} />
                    <div className="absolute"  data-aos="fade-up" data-aos-delay="300" style={{ left: '-7%', top: '30%', width: '425px' }}>
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/payment-notifcation.png" alt="Element 01"  />
                    </div>
                    <div className="absolute" data-aos="fade-up" data-aos-delay="600" style={{ left: '-7%', top: '45%', width: '425px' }}>
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/payment-notifcation.png" alt="Element 01"  />
                    </div>
                    <div className="absolute" data-aos="fade-up" data-aos-delay="900"  style={{ left: '-7%', top: '60%', width: '425px' }}>
                      <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/payment-notifcation.png" alt="Element 01" />
                    </div>
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/jd-fitness.png" alt="Element 01" style={{ top: '-5%', left: '60%', width: '225px' }} />
                    {/*<img className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src="/images/features-home-element-02.png" width="500" height="158" alt="Element 02" style={{ top: '39%' }} />*/}
                    {/*<img className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src="/images/features-home-element-03.png" width="500" height="167" alt="Element 03" style={{ top: '77%' }} />*/}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src="/images/checkout.png" alt="Features bg" style={{ maxHeight: '600px'}} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/stripe-invoice.png" alt="Element 01" style={{ left: '55%', top: '-10%', width: '425px' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/gym.png" alt="Element 01" style={{ bottom: '-10%', left: '30%', width: '325px' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mt-40 mx-auto rounded" src="/images/subscriptions.png" alt="Features bg" style={{ maxHeight: '400px'}} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/stripe.png" alt="Element 01" style={{ left: '65%', top: '50%', width: '225px' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src="/images/gym.png" alt="Element 01" style={{ top: '5%', left: '0%', width: '325px' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default FeaturesHome;
