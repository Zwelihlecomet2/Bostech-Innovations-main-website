import React, { useState } from 'react';
import BBBEEEnquiryForm from '../components/BBBEE';

const BBBEEConsultingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)` }}
        >
          {/* Purple/Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/75 to-purple-800/80">
            {/* Additional subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="bbbee-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#bbbee-grid)" className="text-white/20" />
              </svg>
            </div>
            {/* Geometric elements */}
            <div className="absolute right-20 top-20 w-32 h-32 opacity-10">
              <div className="w-full h-full border-2 border-white transform rotate-45"></div>
            </div>
            <div className="absolute left-20 bottom-20 w-24 h-24 opacity-10">
              <div className="w-full h-full border-2 border-white transform rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in-up">
              BBBEE Consulting Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-200 max-w-3xl text-[#f79630] font-medium">
              With our help, you can be sure that your organisation's BBBEE compliance is in good hands, giving you the peace of mind to focus on your core business activities.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* BBBEE Consulting Services Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content - Left Side */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight">
                We help you grow with our BBBEE Consulting Services
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our BBBEE consulting services are designed to assist your business in achieving compliance with 
                  the Broad-Based Black Economic Empowerment (BBBEE) Act. We provide a comprehensive range 
                  of services that include BBBEE strategy development, BBBEE scorecard assessments, and advice 
                  on policy implementation. Our team of experienced consultants is committed to helping your 
                  business achieve its BBBEE objectives in the most efficient and effective manner possible.
                </p>
                <p>
                  We understand that BBBEE compliance can be a complex and challenging process, which is why 
                  we work closely with you to identify your specific needs and develop a tailored solution that meets 
                  your business requirements. With our BBBEE consulting services, you can be confident that your 
                  business is on the right track to achieving its BBBEE goals and objectives.
                </p>
              </div>
              <div className="pt-4">
                <a href='#bbbee-booking' className="bg-[#f79630] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 shadow-lg">
                  BOOK A MEETING
                </a>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Professional business meeting - BBBEE consulting discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#f79630] to-[#e6861c] rounded-full opacity-70"></div>
              {/* BBBEE badge */}
              <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">BBBEE</div>
                  <div className="text-xs text-gray-200">Consulting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d2e83] mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <FAQItem
                question="What is Broad Based Black Economic Empowerment?"
                answer="BBBEE is designed to promote and facilitate the economic transformation of South Africa by empowering previously disadvantaged people through ownership, management, employment, and skills development. The goal is to achieve a more equitable distribution of wealth and economic opportunities across the country’s population. Companies are required to comply with B-BBEE legislation, which includes various elements such as ownership, management control, skills development, enterprise and supplier development, and socio-economic development. B-BBEE is seen as a critical component of South Africa’s transformation and development agenda, as it seeks to correct the imbalances of the past and promote a more inclusive economy that benefits all South Africans."
                defaultOpen
              />
              <FAQItem
                question="What is BBBEE Consulting"
                answer="BBBEE consulting involves providing expert advice and support to businesses to help them understand, implement, and maintain compliance with BBBEE legislation. Consultants assist with strategy, scorecard assessments, policy implementation, and ongoing compliance management."
              />
              <FAQItem
                question="Does my business need to be BBBEE Compliant?"
                answer="If your business operates in South Africa and wants to participate in government tenders, secure contracts with large corporates, or access certain incentives, BBBEE compliance is highly recommended. It can also enhance your company’s reputation and open up new business opportunities."
              />
            </div>
            {/* Column 2 */}
            <div className="space-y-6">
              <FAQItem
                question="What is a BBBEE Certificate?"
                answer="A BBBEE certificate is a document that proves a company’s compliance with the South African government’s BBBEE policies. The certificate is issued by an accredited verification agency and serves as evidence that the company is actively contributing to the upliftment and empowerment of previously disadvantaged groups in society."
                defaultOpen
              />
              <FAQItem
                question="What are the benefits of being BBBEE Compliant?"
                answer="Benefits include access to new markets, eligibility for government contracts, improved brand reputation, and contributing to the country’s economic transformation and social development."
              />
              <FAQItem
                question="How do I get started?"
                answer="Contact our team for a consultation. We’ll assess your current status, explain the requirements, and help you develop a tailored BBBEE strategy for your business."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquire Now Section */}
      <section id='bbbee-booking' className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f79630] mb-4">Enquire Now</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to chat about how we can assist your business. Call us at <a href="tel:+27 15 001 2309" className="text-[#2d2e83] font-semibold hover:underline">+27 15 001 2309</a> or submit your info in the enquiry form below.
          </p>

          {/* --- Web3Forms-powered form --- */}
          <BBBEEEnquiryForm />
        </div>
      </section>
    </div>
  );
};

// FAQItem component
type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div>
      <button
        className={`w-full text-left px-4 py-3 font-semibold text-base md:text-lg rounded-none focus:outline-none transition-colors duration-200 ${open ? 'bg-[#f79630] text-white' : 'bg-[#ffe3b3] text-[#2d2e83]'}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="mr-2 text-xl align-middle">{open ? '−' : '+'}</span>
        {question}
      </button>
      {open && (
        <div className="bg-white px-4 pb-4 pt-2 text-gray-700 text-sm md:text-base border border-t-0 border-[#f79630] rounded-b">
          {answer}
        </div>
      )}
    </div>
  );
};

export default BBBEEConsultingPage;