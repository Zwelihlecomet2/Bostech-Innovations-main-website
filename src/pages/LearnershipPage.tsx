import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// FAQ Section Component for Learnerships
const LearnershipFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: "What is a Learnership?",
      answer: {
        type: "text",
        content: "A learnership is a structured learning programme that combines theoretical learning with practical workplace experience. It leads to a nationally recognised qualification and provides learners with the skills and knowledge needed to perform effectively in the workplace. Learnerships are designed to address skills shortages and provide career development opportunities."
      }
    },
    {
      question: "How long do learnerships typically last?",
      answer: {
        type: "text",
        content: "The duration of learnerships varies depending on the specific programme and qualification level. Most of our IT and Business learnerships range from 12 to 24 months. This timeframe allows for comprehensive theoretical learning combined with sufficient practical workplace experience to ensure learners are job-ready upon completion."
      }
    },
    {
      question: "What qualifications will I receive upon completion?",
      answer: {
        type: "text",
        content: "Upon successful completion of a learnership, you will receive a nationally recognised qualification registered on the National Qualifications Framework (NQF). This includes both the theoretical component (qualification) and the practical component (skills programme), making you highly employable in your chosen field."
      }
    },
    {
      question: "Are learnerships paid programmes?",
      answer: {
        type: "text",
        content: "Yes, learners typically receive a learnership allowance during their programme. The amount varies depending on the specific learnership and the employer. This allowance helps support learners while they gain valuable skills and experience, making education accessible to those who might not otherwise afford it."
      }
    },
    {
      question: "What are the entry requirements for IT and Business learnerships?",
      answer: {
        type: "text",
        content: "Entry requirements vary by programme, but generally include a minimum of Grade 12 (Matric) or equivalent qualification. Some programmes may have specific subject requirements or prior experience preferences. We also consider motivation, aptitude, and potential for success in the chosen field during our selection process."
      }
    },
    {
      question: "How do I apply for a learnership programme?",
      answer: {
        type: "text",
        content: "You can apply by contacting us directly through our website, calling +27 (0) 15 001 2309, or emailing info@bostechtraining.co.za. Our team will guide you through the application process, help you choose the right programme for your career goals, and provide information about upcoming intake dates and requirements."
      }
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Question Header */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
          >
            <span className={`font-medium ${openFAQ === index ? 'text-orange-500' : 'text-blue-600'}`}>
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                openFAQ === index ? 'transform rotate-180 text-orange-500' : 'text-blue-600'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Answer Content */}
          {openFAQ === index && (
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{faq.answer.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const LearnershipPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              IT & Business
              <br />
              Learnerships
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-200 max-w-xl">
              We offer a versatile approach to up-skilling and empowering prospect students in the IT and Business world.
            </p>
          </div>
        </div>
      </section>

      {/* IT & Business Learnerships Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Blue Box */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-light leading-relaxed">
                Empowering tomorrow's leaders through practical skills and innovative learning.
              </h3>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-blue-600 font-medium">ICT Training</span>
                    <br />
                    <span className="text-gray-600 text-sm">Academy</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                  Let's Empower Your Future!
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                  IT & Business Learnerships
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  IT learnerships in South Africa and business learnerships in South Africa provide 
                  unmatched opportunities to gain valuable skills and industry-recognised 
                  qualifications. At Bostech Innovations, our learnership programs are designed to equip 
                  both businesses and individuals with the tools needed to excel in the fields of IT 
                  and business.
                </p>
                
                <p>
                  Whether you're a young professional seeking learnership opportunities in IT or 
                  business or a company looking to boost your workforce's skills, our comprehensive 
                  IT and business career training in South Africa can help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Learnerships Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              IT Learnerships
            </h2>
            <p className="text-xl text-blue-600">
              Choose from our selection of accredited IT Learnerships
            </p>
          </div>

          {/* Learnerships Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Systems Development Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Systems Development Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Systems Development
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Comprehensive training in software development, programming languages, 
                  and system design principles.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Network Engineering Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Network Engineering Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Network Engineering
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Master network infrastructure, security protocols, and 
                  enterprise networking solutions.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

              {/* Network Engineering Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Network Engineering Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Network Engineering
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Master network infrastructure, security protocols, and 
                  enterprise networking solutions.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Network Engineering Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Network Engineering Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Network Engineering
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Master network infrastructure, security protocols, and 
                  enterprise networking solutions.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

            
            {/* Data Analytics Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Data Analytics Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Data Analytics
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Learn data science, statistical analysis, and business 
                  intelligence tools and techniques.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nelson Mandela Quote Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden">
        {/* Network Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 400" fill="none">
            <g stroke="currentColor" strokeWidth="1" className="text-white">
              {/* Network nodes */}
              <circle cx="200" cy="100" r="4" fill="currentColor" opacity="0.8"/>
              <circle cx="500" cy="150" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="800" cy="80" r="5" fill="currentColor" opacity="0.9"/>
              <circle cx="1200" cy="120" r="3" fill="currentColor" opacity="0.7"/>
              <circle cx="1600" cy="90" r="4" fill="currentColor" opacity="0.8"/>
              <circle cx="300" cy="250" r="3" fill="currentColor" opacity="0.6"/>
              <circle cx="700" cy="280" r="4" fill="currentColor" opacity="0.8"/>
              <circle cx="1100" cy="300" r="3" fill="currentColor" opacity="0.7"/>
              <circle cx="1500" cy="260" r="5" fill="currentColor" opacity="0.9"/>
              
              {/* Connection lines */}
              <path d="M200 100L500 150L800 80L1200 120L1600 90" opacity="0.4"/>
              <path d="M300 250L700 280L1100 300L1500 260" opacity="0.4"/>
              <path d="M200 100L300 250" opacity="0.3"/>
              <path d="M500 150L700 280" opacity="0.3"/>
              <path d="M800 80L1100 300" opacity="0.3"/>
              <path d="M1200 120L1500 260" opacity="0.3"/>
              
              {/* Diagonal connections */}
              <path d="M200 100L700 280" opacity="0.2"/>
              <path d="M500 150L1100 300" opacity="0.2"/>
              <path d="M800 80L300 250" opacity="0.2"/>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <blockquote className="text-2xl md:text-3xl font-light mb-6 italic">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="text-lg font-medium"> - Nelson Mandela</cite>
          </div>
        </div>
      </section>

      {/* Business Learnerships Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Business Learnerships
            </h2>
            <p className="text-xl text-blue-600">
              Choose from our selection of accredited Business Learnerships
            </p>
          </div>

          {/* Business Learnerships Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Business Administration Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Business Administration Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Business Administration
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Comprehensive training in business operations, management principles, 
                  and administrative excellence.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Project Management Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Project Management Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Project Management
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Master project planning, execution, and delivery using 
                  industry-standard methodologies and tools.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

             {/* Project Management Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Project Management Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Project Management
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Master project planning, execution, and delivery using 
                  industry-standard methodologies and tools.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>

            
            {/* Digital Marketing Learnership */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="Digital Marketing Professional"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Learn modern marketing strategies, social media campaigns, 
                  and digital advertising optimization.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our IT & Business Learnership Programs Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-900/70 to-gray-800/80"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="learnership-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#learnership-grid)" className="text-white/20" />
          </svg>
        </div>

        {/* Diagonal Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 w-full h-full text-white/5" viewBox="0 0 1920 800" fill="none">
            <g stroke="currentColor" strokeWidth="1">
              <path d="M0 100L400 0L800 100L1200 0L1600 100L1920 0" opacity="0.6"/>
              <path d="M0 150L400 50L800 150L1200 50L1600 150L1920 50" opacity="0.4"/>
              <path d="M0 200L400 100L800 200L1200 100L1600 200L1920 100" opacity="0.5"/>
              <path d="M0 250L400 150L800 250L1200 150L1600 250L1920 150" opacity="0.3"/>
              <path d="M0 300L400 200L800 300L1200 200L1600 300L1920 200" opacity="0.6"/>
              <path d="M0 350L400 250L800 350L1200 250L1600 350L1920 250" opacity="0.4"/>
              <path d="M0 400L400 300L800 400L1200 300L1600 400L1920 300" opacity="0.5"/>
              <path d="M0 450L400 350L800 450L1200 350L1600 450L1920 350" opacity="0.3"/>
              <path d="M0 500L400 400L800 500L1200 400L1600 500L1920 400" opacity="0.6"/>
              <path d="M0 550L400 450L800 550L1200 450L1600 550L1920 450" opacity="0.4"/>
              <path d="M0 600L400 500L800 600L1200 500L1600 600L1920 500" opacity="0.5"/>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Headings */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                Driving Business Success Through Skills Development:
              </h2>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Transform Your Workforce with IT & Business Learnerships
              </h3>
            </div>

            {/* Right Side - Content */}
            <div className="text-white space-y-6">
              <h4 className="text-xl font-semibold mb-4">
                Why Choose Our IT & Business Learnership Programs?
              </h4>
              
              <p className="leading-relaxed text-white/90">
                Skills development is a vital part of our economic growth and a crucial strategy for reducing unemployment. By equipping individuals with the right skills and knowledge, businesses can contribute to building a stronger, more competitive workforce. At [Your Company], we recognize the importance of developing talent that can adapt to the fast-paced and ever-evolving demands of today's industries.
              </p>
              
              <p className="leading-relaxed text-white/90">
                With our comprehensive IT & Business learnerships, we provide businesses with the opportunity to transform their workforce into valuable, highly skilled assets. These programs combine theoretical learning with practical, on-the-job training, allowing employees to gain industry-relevant expertise while contributing directly to the company's success.
              </p>
              
              <div className="pt-4">
                <NavLink to='/about' className="bg-[#f79630] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f79630] mb-8">
              Student Testimonials
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
                  alt="Bruce Nqabani Dlomo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic max-w-3xl mx-auto">
              "Bostech Innovations has taught me to think "Out-Of-The-Box". I am now able to turn an idea into a viable solution for any specific industry or society and secondly I can maximise my full potential while allowing myself to continue to learn and develop."
            </blockquote>

            {/* Student Name */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900">
                Bruce Nqabani Dlomo
              </h4>
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-200"></button>
              <button className="w-3 h-3 rounded-full bg-blue-600"></button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            {/* FAQ Items */}
            <LearnershipFAQSection />
          </div>
        </div>
      </section>
    </div>
  );
};
export default LearnershipPage;