import Layout from '../src/partials/layout/layout';
import Head from 'next/head';
import Header from '../src/partials/Header';
import PageIllustration from '../src/partials/PageIllustration';
import CtaContact from '../src/partials/Cta';
import Footer from '../src/partials/Footer';
import React, { useEffect, useState } from 'react';
import Checkout from '../src/utils/Checkout';

function SignUp({ env }) {
  const url = env === 'local' ? `http://localhost:3005` : 'https://tricep-api.onrender.com';

  const handleStripeConnect = () => {
    fetch(`${url}/stripe/onboard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          console.log(data);
          window.location = `${data.url}?accountId=${data.accountId}`;
        } else {
          console.log('data', data);
        }
      });
  };

  return (
    <Layout>
      <Head>
        <title>Online Stores for Online Coaches | Tricep</title>
        <link rel="icon" href="/favicon.ico" />
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
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h1 className="h1 mb-4" data-aos="fade-up">
                    Sign Up
                  </h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                    We have custom plans to power your business. Tell us your needs, and we’ll
                    contact you shortly.
                  </p>
                </div>

                {/* Contact form */}
                {/*<form className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">*/}
                <button
                  type="button"
                  onClick={() => handleStripeConnect()}
                  className="stripe-connect"
                >
                  <span>Connect with</span>
                </button>
                {/*</form>*/}

                <Checkout
                  priceId={'price_1IedZSL4te1d25v7AF8NmM7A'}
                  text="Buy"
                  classNames="bg-teal-500"
                  cancelUrl="/signup"
                />
              </div>
            </div>
          </section>

          {/*  Bottom CTA */}
          <CtaContact />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export default SignUp;
