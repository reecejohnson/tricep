import React, {useState} from 'react';
import Modal from '../utils/Modal';
import copy from '../config/copy';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 mb-4 font-red-hat-display font-extrabold" data-aos="fade-down"
                  style={{fontSize: '3.8rem', lineHeight: '1'}}>{copy.hero.heading}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down"
                 data-aos-delay="150">{copy.hero.subheading}</p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <input type="tel" className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                         placeholder={copy.hero.placeholderText} aria-label="Email address"/>
                  <a className="btn text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0"
                     href="#0">{copy.hero.buttonText}</a>
                </div>
              </form>
              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                  data-aos="fade-down" data-aos-delay="450">
                {copy.hero.bullets.map(bullet => <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-purple-400 mr-2 flex-shrink-0" viewBox="0 0 12 12"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                    </svg>
                    <span>{bullet}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up"
                 data-aos-delay="450">
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true"
                     width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4"/>
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6"/>
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#667EEA"/>
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01"/>
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#9F7AEA"/>
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01"/>
                    </radialGradient>
                  </defs>
                </svg>
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img className="absolute" src="/images/mockup-image-01.png" width="290" height="624"
                     style={{maxWidth: '84.33%'}} alt="Features illustration"/>
                {/* iPhone mockup */}
                <img className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
                     src="/images/iphone-mockup.png" width="344" height="674" alt="iPhone mockup" aria-hidden="true"/>
                {/* Play button */}
                <a className="absolute group" href="#0" onClick={(e) => {
                  e.preventDefault();
                  setVideoModalOpen(true);
                }} aria-controls="modal">
                  <img src="/images/play-button.svg" width="96" height="96" alt="Play"/>
                </a>
              </div>

              {/* Modal */}
              <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen}
                     handleClose={() => setVideoModalOpen(false)}>
                <div className="relative pb-9/16">
                  <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812"
                          title="Video" allowFullScreen></iframe>
                </div>
              </Modal>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;
