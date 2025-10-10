import React from 'react';
import ContactForm from '../components/ContactForm';

const SETAFacilitationPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/75 to-blue-800/85"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SETA Facilitation Services</h1>
            <p className="text-lg md:text-xl text-yellow-400 mb-6">
              At Dynamic DNA, our goal is to make your SETA applications, documentation, and compliance processes effortless — from grant applications to WSP/ATR facilitation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquire"
                className="inline-block bg-[#f79630] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e6861c] transition"
              >
                ENQUIRE NOW
              </a>
              <a
                href="#book"
                className="inline-block border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                BOOK A MEETING
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Existing two-column section (text left, image right) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2e83] mb-6">
                SETA made easy with our SETA Facilitation Services
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                With our SETA Facilitation Services, our goal is to make your SETA applications, documentation, and compliance processes effortless.
                We understand these can be time-consuming and challenging tasks, and with our expert assistance, we can simplify everything for you.
                We will guide you through the entire process — from gathering the necessary information and filling out the required paperwork to ensuring full compliance with relevant regulations.
                Our team has the experience and deep understanding of SETA requirements to provide high-quality, personalized service and timely delivery.
                With our support, your SETA applications will be submitted accurately and on time, allowing you to focus on your core business operations.
              </p>

              <a
                href="#book"
                className="inline-block bg-[#f79630] text-white px-6 py-3 rounded shadow font-semibold"
              >
                BOOK A MEETING
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              {/* Replace the src below with your local image path if you add the image to the project */}
              <img
                src="https://www.dynamicdna.co.za/wp-content/uploads/2022/02/ddna-laptop-female.jpg"
                alt="Hands typing on laptop"
                className="w-full max-w-md rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Enquire section (uses existing ContactForm component) */}
      <section id="enquire" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#f79630] mb-3">Enquire Now</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us today to chat about how we can assist your business. Call us at <a href="tel:0117595940" className="font-semibold text-[#2d2e83]">011 759 5940</a> or submit your info in the enquiry form below.
          </p>

          <div className="w-full mt-6">
            {/* reuse project's ContactForm component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SETAFacilitationPage;