import React from 'react';
import ContactForm from '../components/ContactForm';

const SoftSkillsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)` }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-700/80">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="soft-skills-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#soft-skills-grid)" className="text-white/30" />
              </svg>
            </div>
            
            {/* Curved Lines */}
            <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
              <svg className="absolute -left-20 top-0 w-96 h-full text-white/5" viewBox="0 0 400 800" fill="none">
                <path d="M0 0C100 200 300 300 400 500C300 600 100 700 0 800V0Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Right side geometric elements */}
            <div className="absolute right-10 top-20 w-32 h-32 opacity-10">
              <div className="w-full h-full border-2 border-white transform rotate-45"></div>
            </div>
            <div className="absolute right-32 bottom-32 w-24 h-24 opacity-10">
              <div className="w-full h-full border-2 border-white transform rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Soft Skill Courses
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-200 max-w-2xl">
              Looking to enhance your professional skills? Look no further than our soft skill courses, designed to help you refine and master your abilities in the workplace. With our comprehensive curriculum and expert instructors, you'll be on your way to success in no time.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-400">
              <button className="bg-[#f79630] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 shadow-lg">
                VIEW COURSES
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Professional women collaborating in workplace"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#f79630] to-[#e6861c] rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-70"></div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Enhance the Skills of Your Employees
                </h2>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Our training courses focus on developing soft skills that are essential for effective 
                  communication and building strong relationships in a professional setting. By 
                  participating in these workshops, your staff will learn valuable techniques, habits, 
                  and mindsets that can improve both their interpersonal connections and overall 
                  business performance. Moreover, these courses aim to create a more fulfilling 
                  experience in both work and personal life.
                </p>
              </div>

              {/* Maximise Tax Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-600">
                  Maximise Tax Benefits
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In addition to the <span className="text-blue-600 font-medium">skill development</span> aspect, our workshops also offer various tax 
                  breaks and benefits. The extent of these benefits depends on the size of your 
                  business and its compliance with BBBEE requirements. By investing in your 
                  employees' growth through our training programs, you can not only enhance their 
                  abilities but also take advantage of these tax incentives.
                </p>
              </div>

              {/* Contribute to Company Growth */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-600">
                  Contribute to Company Growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By equipping your staff with the necessary soft skills, you enable them to actively 
                  contribute to the growth and success of your company. This not only benefits the 
                  organisation as a whole but also fosters a positive and productive working 
                  environment. Knowing how to navigate and thrive in such a setting is crucial for 
                  professional development.
                </p>
              </div>

              {/* Enquire Button */}
              <div className="pt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach & Methodology Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="training-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#training-grid)" className="text-white/30" />
          </svg>
        </div>

        {/* Diagonal Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 w-full h-full text-white/10" viewBox="0 0 1920 800" fill="none">
            <g stroke="currentColor" strokeWidth="2">
              {/* Left diagonal lines */}
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
              <path d="M0 650L400 550L800 650L1200 550L1600 650L1920 550" opacity="0.3"/>
              <path d="M0 700L400 600L800 700L1200 600L1600 700L1920 600" opacity="0.6"/>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Training Approach & Methodology - Left Side */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f79630] mb-6">
                TRAINING APPROACH & METHODOLOGY
              </h2>
              
              <div className="space-y-6">
                <p className="text-white font-semibold text-lg">
                  Blended training approach which covers in-person and virtual training:
                </p>
                
                <p className="text-white/90 leading-relaxed">
                  Dynamic DNA can schedule closed onsite (at client premises), virtual, and in-person classes at our Randburg centre which will require a minimum number of students, or students can join our existing scheduled short courses, should you have the requirement to train only one or two students at a time. Our virtual delivered training is presented through Microsoft Teams as the Virtual Platform.
                </p>
              </div>
            </div>

            {/* Proposed Course Start Dates - Right Side */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f79630] mb-6">
                PROPOSED COURSE START DATES:
              </h2>
              
              <p className="text-white/90 leading-relaxed">
                The below proposed date require a minimum of 6 delegates to be confirmed, Dynamic DNA may only move the training date once in a case we could not meet the required number of delegates to run the course. All communication regarding the rescheduling of classes will be communicated at least 8 working days before the class start date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skill Short Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Soft Skill Short Courses
            </h2>
            <p className="text-xl text-blue-600 mb-8">
              Choose from our selection of accredited Soft Skill Short Courses
            </p>
            <p className="text-lg text-blue-600 font-medium">
              Enquire Below
            </p>
          </div>

          {/* Courses Table */}
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full bg-white">
                {/* Table Header */}
                <thead>
                  <tr className="bg-gradient-to-r from-blue-800 to-blue-700 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Course</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Duration</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Start Date</th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Assertiveness Skills</td>
                    <td className="px-6 py-4 text-center text-gray-700">1 day</td>
                    <td className="px-6 py-4 text-center text-gray-700">10 April 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Better Communication: Speak, write and Present more Effectively</td>
                    <td className="px-6 py-4 text-center text-gray-700">1 day</td>
                    <td className="px-6 py-4 text-center text-gray-700">24 April 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Business Etiquette and Ethics</td>
                    <td className="px-6 py-4 text-center text-gray-700">2 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">06 May 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Business Writing Skills</td>
                    <td className="px-6 py-4 text-center text-gray-700">2 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">14 May 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Career Paths & Succession planning</td>
                    <td className="px-6 py-4 text-center text-gray-700">1 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">20 May 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Change Management</td>
                    <td className="px-6 py-4 text-center text-gray-700">1 day</td>
                    <td className="px-6 py-4 text-center text-gray-700">28 May 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Chairing Disciplinary Hearings</td>
                    <td className="px-6 py-4 text-center text-gray-700">2 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">04 June 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Coaching and Mentoring</td>
                    <td className="px-6 py-4 text-center text-gray-700">2 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">06 June 2025</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-900 font-medium">Communication Skills & Interpersonal Skills</td>
                    <td className="px-6 py-4 text-center text-gray-700">1 days</td>
                    <td className="px-6 py-4 text-center text-gray-700">10 June 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Enquiry Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default SoftSkillsPage;