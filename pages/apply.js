import Layout from "../src/partials/layout/layout";
import Head from "next/head";
import Header from "../src/partials/Header";
import PageIllustration from "../src/partials/PageIllustration";
import CtaContact from "../src/partials/Cta";
import Footer from "../src/partials/Footer";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {sendEnquiryForm} from "../src/services/applyService";
import {useRouter} from "next/router";

function Apply() {
  const router = useRouter()
  const email = router.query.email;
  console.log(router.query.email)
  const [submitError, setSubmitError] = useState(false);

  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

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
              <div className="pt-32 pb-12 md:pt-40">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="h1 mb-4" data-aos="fade-up">Apply for a Tricep store</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Submit your details to apply for your Tricep store. We will get back to you as soon as possible.</p>
                </div>

                {/* Contact form */}
                <section className="relative">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    {submitError === true &&
                    <div
                      className="flex flex-col items-center justify-center py-6 bg-red-300 text-red-900 my-4 max-w-xl mx-auto -mb-6 md:-mb-12">
                      <p className="font-semibold">Error submitting enquiry</p>
                      <p className="mt-1 text-center">Please try again or email info@tricep.io</p>
                    </div>
                    }
                    <div className="py-12 md:py-20">
                      <Formik
                        initialValues={{
                          firstName: undefined,
                          lastName: undefined,
                          email,
                          message: undefined,
                        }}
                        validationSchema={formSchema}
                        onSubmit={async (values) => {
                          // setSubmitState('LOADING');
                          const response = await sendEnquiryForm(values);
                          console.log(response)
                          if (response) {
                            return await router.push('/apply/thank-you');
                          }
                          setSubmitError(true);
                        }}
                      >
                        {({errors, touched}) => (
                          <Form>
                            <div className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                              <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                  <label className="block text-gray-200 text-sm font-medium mb-1" htmlFor="firstName">First
                                    Name <span className="text-red-600">*</span></label>
                                  <Field id="firstName" name="firstName" className="form-input w-full text-gray-200"
                                         placeholder="Enter your first name" re/>
                                  {errors.firstName && touched.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                  <label className="block text-gray-200 text-sm font-medium mb-1" htmlFor="lastName">Last
                                    Name <span className="text-red-600">*</span></label>
                                  <Field id="lastName" name="lastName" className="form-input w-full text-gray-200"
                                         placeholder="Enter your last name"/>
                                  {errors.lastName && touched.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                  <label className="block text-gray-200 text-sm font-medium mb-1" htmlFor="email">Email <span
                                    className="text-red-600">*</span></label>
                                  <Field id="email" name="email" className="form-input w-full text-gray-200"
                                         placeholder="Enter your email"/>
                                  {errors.email && touched.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                  <label className="block text-gray-200 text-sm font-medium mb-1"
                                         htmlFor="message">Message <span className="text-red-600">*</span></label>
                                  <Field as="textarea" id="message" name="message" className="form-input w-full text-gray-200"
                                         rows="4" placeholder="Why you want a Tricep store"/>
                                  {errors.message && touched.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                              </div>
                              <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                  <button type="submit" className="btn text-white bg-teal-500 hover:bg-teal-600 w-full">Send
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>


                    </div>
                  </div>
                </section>


              </div>
            </div>
          </section>

          {/*  Bottom CTA */}
          {/*<CtaContact />*/}

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
