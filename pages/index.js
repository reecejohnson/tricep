import Layout from '../src/partials/layout/layout';
import Head from 'next/head';
import Header from '../src/partials/Header';
import PageIllustration from '../src/partials/PageIllustration';
import HeroHome from '../src/partials/HeroHome';
import Footer from '../src/partials/Footer';
import Stats from '../src/partials/Stats';
import PreviousWork from '../src/partials/PreviousWork';
import Process from '../src/partials/Process';
import Testimonials from '../src/partials/Testimonials';
import PricingTables from '../src/partials/PricingTables';
import React from 'react';
import FeaturesZigzag from '../src/partials/FeaturesZigzag';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Online Coach Stores & Marketing | Tricep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page illustration */}
          <div
            className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
            aria-hidden="true"
          >
            <PageIllustration />
          </div>

          {/*  Page sections */}
          <HeroHome />
          <Stats />
          <FeaturesZigzag />
          <Process />
          <PreviousWork />
          <Testimonials />
          <PricingTables />

        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </Layout>
  );
}
