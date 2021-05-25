import React, {useEffect, useState} from 'react';
import copy from '../config/copy';
// Import Swiper
import Swiper, {Autoplay, Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Autoplay, Navigation]);

function PreviousWork({ setIsModalOpen }) {

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  const previousWorkItems = [
    {image: '/images/carousel-item-02.png'},
    {image: '/images/hk-fitness.png'},
    {image: '/images/carousel-item-03.png'},
    {image: '/images/carousel-item-01.png'},
  ]

  return (
    <>


      <div className="fixed pin z-50 overflow-auto bg-black flex h-screen w-full">
      </div>
      <section className="border-t border-transparent dark:border-gray-800">
        <div className="py-12 md:py-20">

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 font-red-hat-display mb-4">{copy.previousWork.heading}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{copy.previousWork.subheading}</p>
            </div>

          </div>

          {/* PreviousWork built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {previousWorkItems.map(item => (
                <div className="swiper-slide max-w-lg">
                  <img className="transition-opacity duration-300" src={item.image} width="540"
                       height="460" alt="Carousel item 01"/>
                  <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">

                    <div className="absolute bottom-0 right-0 p-6">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0">{copy.previousWork.itemButtonText}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mt-12 md:mt-16">
              <button
                className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"/>
                </svg>
              </button>
              <button
                className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
                <span className="sr-only">Next</span>
                <svg
                  className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default PreviousWork;
