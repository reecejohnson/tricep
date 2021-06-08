import React, { useState, useRef, useEffect } from 'react';
import Dropdown from '../utils/Dropdown';
import Transition from '../utils/Transition.js';
import Link from "next/link";

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });


  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            {/* Logo */}
            <a href="/" className="block" aria-label="Cruip">
              <img className="h-8" src="/images/tricep-teal.svg"/>
              {/*<svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <defs>*/}
              {/*    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">*/}
              {/*      <stop stopColor="#3ABAB4" offset="0%" />*/}
              {/*      <stop stopColor="#7F9CF5" offset="100%" />*/}
              {/*    </linearGradient>*/}
              {/*    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">*/}
              {/*      <stop stopColor="#3ABAB4" offset="0%" />*/}
              {/*      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />*/}
              {/*    </linearGradient>*/}
              {/*  </defs>*/}
              {/*  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />*/}
              {/*  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />*/}
              {/*</svg>*/}
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">

            {/* Desktop menu links */}
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              {/*<li>*/}
              {/*  <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">About</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="/testimonials" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Testimonials</a>*/}
              {/*</li>*/}
              {/*/!* 1st level: hover *!/*/}
              {/*<Dropdown title="Resources">*/}
              {/*  /!* 2nd level: hover *!/*/}
              {/*  <li>*/}
              {/*    <a href="/help" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight">Help center</a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a href="/404" className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight">404</a>*/}
              {/*  </li>*/}
              {/*</Dropdown>*/}
            </ul>

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <a href="/apply" className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">Apply now</a>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">

            {/* Hamburger button */}
            <button className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav id="mobile-nav" ref={mobileNav} className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg">
                <div className="py-6 pr-4 pl-20">
                  {/* Links */}
                  {/*<ul>*/}
                  {/*  <li>*/}
                  {/*    <a href="/about" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">About</a>*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    <a href="/blog" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">Blog</a>*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    <a href="/testimonials" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">Testimonials</a>*/}
                  {/*  </li>*/}
                  {/*  <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">*/}
                  {/*    <span className="flex text-gray-600 dark:text-gray-400 py-2">Resources</span>*/}
                  {/*    <ul className="pl-4">*/}
                  {/*      <li>*/}
                  {/*        <a href="/help" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">Help center</a>*/}
                  {/*      </li>*/}
                  {/*      <li>*/}
                  {/*        <a href="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">404</a>*/}
                  {/*      </li>*/}
                  {/*    </ul>*/}
                  {/*  </li>*/}
                  {/*  <li>*/}
                  {/*    <a href="/contact" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">Request code</a>*/}
                  {/*  </li>*/}
                  {/*</ul>*/}
                </div>
              </nav>
            </Transition>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
