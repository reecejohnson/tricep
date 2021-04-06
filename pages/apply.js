import Layout from "../src/partials/layout/layout";
import Head from "next/head";
import Header from "../src/partials/Header";
import PageIllustration from "../src/partials/PageIllustration";
import CtaContact from "../src/partials/Cta";
import Footer from "../src/partials/Footer";
import {useEffect, useState} from "react";

function Apply({ env }) {
  const [test, setTest] = useState('');
  useEffect(() => {
    const url = env === 'local' ? `http://localhost:3005/posts` : 'https://tricep-api.onrender.com/posts';
    fetch(
      url,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setTest(response[0].content);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Layout>
      <Head>
        <title>Personal Training Ecommerce</title>
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
                  <h1 className="h1 mb-4" data-aos="fade-up">{test}</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">We have custom plans to power your business. Tell us your needs, and we’ll contact you shortly.</p>
                </div>

                {/* Contact form */}
                <form className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                      <input id="first-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your first name" required />
                      {false && <p className="text-red-500 text-sm mt-2">This field is required</p>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                      <input id="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
                      <input id="subject" type="text" className="form-input w-full text-gray-300" placeholder="How can we help you?" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="country">Country</label>
                      <select id="country" className="form-select w-full text-gray-300">
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                      <textarea id="message" rows="4" className="form-textarea w-full text-gray-300" placeholder="Write your message"></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-teal-500 hover:bg-orange-700 w-full">Send</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </section>

          {/*  Bottom CTA */}
          <CtaContact />

        </main>
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { env: process.env.WHERE_WE_AT }
  }
}

export default Apply;
