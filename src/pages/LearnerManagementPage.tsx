import React from 'react';

const LearnerManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&fit=crop&w=1500&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2d2e83]/70" />
        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 pt-8 md:pt-0">
            Accredited Learnership Programs & Learner Management
          </h1>
        </div>
      </section>

      {/* Empowering Your Workforce Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&fit=crop&w=600&q=80"
              alt="Computer lab for learnerships"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">Empowering Your Workforce: Investing in Accredited Learnership Programs</h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              At Dynamic DNA, we understand the importance of ongoing skills development in the workplace. That’s why we offer customised, accredited learnership programs to help your employees gain the knowledge and experience they need to excel in their roles or fill open positions. Our programs align with the Skills Development Act, ensuring compliance and relevance for your business.
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              Our IT and Business learnership programs are designed to be flexible, allowing participants to learn on the job and continue to work while they learn. We offer support and guidance throughout the program, ensuring that participants gain valuable skills that they can apply to their everyday work. Our goal is to help your business build a skilled and motivated workforce, while improving productivity and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Learner Sourcing & Placement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">
              Learner Sourcing & Placement helps businesses identify candidates for upskilling and internal placement. As a result, brands can address their internal workforce shortages while enriching the lives of B-BBEE-aligned candidates.
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-3">
              Learner Sourcing & Placement refers to the act of sourcing B-BBEE aligned, unemployed candidates, both abled and disabled.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-3">
              Regardless of economic circumstance, we inspire and encourage learners to achieve their dreams by providing them with a platform for development of potential.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-3">
              Level 4 and 5 requirements AKM must be IKM also not sure if we must include those % requirements as it’s very hard finding those people and based on background. We look at mostly drive, logical, analytical and problem solving skills
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-3">
              At the end of the Learnership, the Dynamic DNA strives to assist companies with the absorption of their learners in sustainable and suitable positions. It is paramount to this service for our learners to achieve full-time employment.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Together we empower young dynamic people to become the technology leaders of tomorrow.
            </p>
            <button className="bg-[#f79630] text-white font-bold px-8 py-3 rounded transition-colors hover:bg-[#e6861c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">
              BOOK A MEETING
            </button>
          </div>
          {/* Image */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
            <img
              src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&fit=crop&w=600&q=80"
              alt="Learner sourcing and placement"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Enquire Now Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f79630] mb-4">Enquire Now</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to chat about how we can assist your business. Call us at <a href="tel:0117595940" className="text-[#2d2e83] font-semibold hover:underline">011 759 5940</a> or submit your info in the enquiry form below.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="text" placeholder="Surname" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Contact Number" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Company Name" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="text" placeholder="Position at Company" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630] resize-none" />
            <div className="flex justify-center pt-2">
              <button type="submit" className="bg-[#2d2e83] text-white font-bold px-12 py-3 rounded transition-colors hover:bg-[#23245c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LearnerManagementPage;
