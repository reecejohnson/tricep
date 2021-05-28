import React from "react";

const DoneForYou = () => {
  return (<div className="max-w-3xl mx-auto">
    <div className="relative flex justify-center items-center overflow-hidden">

      {/* Big circle behind: light layout */}
      <svg className="dark:hidden" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="48.919%" id="prefix__a">
            <stop stopColor="#B2F5EA" stopOpacity=".64" offset="0%" />
            <stop stopColor="#B2F5EA" stopOpacity="0" offset="100%" />
          </radialGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
          <g transform="translate(22 22)" stroke="#1D1D20">
            <circle strokeOpacity=".04" cx="194" cy="194" r="193.5" />
            <circle strokeOpacity=".08" strokeWidth="2" cx="194" cy="194" r="153" />
            <circle strokeOpacity=".16" strokeWidth="2.5" cx="194" cy="194" r="112.75" />
          </g>
        </g>
      </svg>

      {/* Big circle behind: dark layout */}
      <svg className="hidden dark:block" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="circleill_a">
            <stop stopColor="#1D1D21" stopOpacity="0" offset="0%" />
            <stop stopColor="#2E2E33" stopOpacity=".32" offset="100%" />
          </radialGradient>
        </defs>
        <circle cx="216" cy="216" r="216" fill="url(#circleill_a)" fillRule="evenodd" />
      </svg>

      {/* Moving tags */}
      <div className="absolute inset-0">
        <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation mt-28">Copywriting</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-72">Store Design</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">Store Development</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-3 mt-80 top-4">Conversion Optimisation</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-56">Hosting</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4">Custom Domain Name</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-14">Technical Support</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-80 top-4">Email Campaigns</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-40">Store Security</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7">Sales Analytics</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-72">Sales Funnel</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-28">Landing Pages</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-9 mt-80 top-4">Lead Magnets</div>
        <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-10 mt-56">Secure Payments</div>
      </div>

      {/* Inner cricle */}
      <svg className="absolute rounded-full shadow-xl" width="148" height="148" viewBox="0 0 148 148" xmlns="http://www.w3.org/2000/svg">
        <circle cx="74" cy="74" r="74" fill="#2E2E33" fillRule="evenodd" />
      </svg>
      {/* Logo */}
      <img className="absolute h-8" src="/images/tricep-teal.svg"/>
      {/* Side gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900" aria-hidden="true"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>
  </div>)
}

export default DoneForYou;
