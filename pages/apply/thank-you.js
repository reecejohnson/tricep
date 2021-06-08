import Layout from "../../src/partials/layout/layout";
import Head from "next/head";
import Header from "../../src/partials/Header";
import PageIllustration from "../../src/partials/PageIllustration";
import CtaContact from "../../src/partials/Cta";
import Footer from "../../src/partials/Footer";
import React from "react";

function ThankYou({ env }) {


  return (
    <Layout>
      <Head>
        <title>Online Stores for Online Coaches | Tricep</title>
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-32">
                  <h1 className="h1 mb-4" data-aos="fade-up">Thanks for applying</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We will get back to you as soon as possible.</p>
                </div>
              </div>
            </div>
          </section>


        </main>
        <Footer />
      </div>
    </Layout>
  )
}

export default ThankYou;
