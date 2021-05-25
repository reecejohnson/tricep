import Layout from "../src/partials/layout/layout";
import Head from "next/head";
import Header from "../src/partials/Header";
import PageIllustration from "../src/partials/PageIllustration";
import HeroHome from "../src/partials/HeroHome";
import Footer from "../src/partials/Footer";
import Stats from "../src/partials/Stats";
import PreviousWork from "../src/partials/PreviousWork";
import Tabs from "../src/partials/Tabs";
import FeaturesHome from "../src/partials/FeaturesHome";
import Process from "../src/partials/Process";
import Testimonials from "../src/partials/Testimonials";
import PricingTables from "../src/partials/PricingTables";
import Cta from "../src/partials/Cta";
import React, {useState} from "react";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    return (
      <>
        <button className={`hamburger active`} aria-controls="mobile-nav" aria-expanded={isModalOpen} onClick={() => setIsModalOpen(false)}>
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" rx="1" />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
          </svg>
        </button>
        <img src="/images/nutreetion-full.png" className="absolute modal-image mx-20 my-16"/>
        <button onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-gray-900 transition-opacity modal h-full w-full"
                aria-hidden="true"/>
      </>
    )
  }

  return (


    <Layout>
      <Head>
        <title>Personal Training Ecommerce</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header/>

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
            <PageIllustration/>
          </div>

          {/*  Page sections */}
          <HeroHome/>
          <Stats/>
          <PreviousWork setIsModalOpen={setIsModalOpen}/>
          <FeaturesHome/>
          {/*<Tabs />*/}
          <Process/>
          <Testimonials/>
          <PricingTables/>
          {/*<TestimonialsBlocks />*/}
          {/*<FeaturesBlocks />*/}
          <Cta/>

        </main>

        {/*  Site footer */}
        <Footer/>

      </div>
    </Layout>
  )
}


