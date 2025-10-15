import React, { useState } from 'react';

const ITCoursesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image - Technology/Circuit Board */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)` }}
        >
          {/* Dark Overlay with Tech Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/80 to-blue-800/85">
            {/* Circuit Board Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none"/>
                    <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5"/>
                    <path d="M0 10 L20 10 M10 0 L10 20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="5" cy="5" r="0.5" fill="currentColor" opacity="0.4"/>
                    <circle cx="15" cy="15" r="0.5" fill="currentColor" opacity="0.4"/>
                    <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#circuit-pattern)" className="text-yellow-400" />
              </svg>
            </div>
            
            {/* Flowing Lines Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute left-0 top-0 w-full h-full text-yellow-400/20" viewBox="0 0 1920 1080" fill="none">
                <g stroke="currentColor" strokeWidth="2">
                  {/* Horizontal flowing lines */}
                  <path d="M0 200C400 180 800 220 1200 200C1400 190 1600 210 1920 200" opacity="0.6">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M0 200C400 180 800 220 1200 200C1400 190 1600 210 1920 200;
                              M0 220C400 200 800 240 1200 220C1400 210 1600 230 1920 220;
                              M0 200C400 180 800 220 1200 200C1400 190 1600 210 1920 200"/>
                  </path>
                  <path d="M0 400C400 380 800 420 1200 400C1400 390 1600 410 1920 400" opacity="0.4">
                    <animate attributeName="d" dur="10s" repeatCount="indefinite"
                      values="M0 400C400 380 800 420 1200 400C1400 390 1600 410 1920 400;
                              M0 420C400 400 800 440 1200 420C1400 410 1600 430 1920 420;
                              M0 400C400 380 800 420 1200 400C1400 390 1600 410 1920 400"/>
                  </path>
                  <path d="M0 600C400 580 800 620 1200 600C1400 590 1600 610 1920 600" opacity="0.5">
                    <animate attributeName="d" dur="12s" repeatCount="indefinite"
                      values="M0 600C400 580 800 620 1200 600C1400 590 1600 610 1920 600;
                              M0 620C400 600 800 640 1200 620C1400 610 1600 630 1920 620;
                              M0 600C400 580 800 620 1200 600C1400 590 1600 610 1920 600"/>
                  </path>
                  <path d="M0 800C400 780 800 820 1200 800C1400 790 1600 810 1920 800" opacity="0.3">
                    <animate attributeName="d" dur="14s" repeatCount="indefinite"
                      values="M0 800C400 780 800 820 1200 800C1400 790 1600 810 1920 800;
                              M0 820C400 800 800 840 1200 820C1400 810 1600 830 1920 820;
                              M0 800C400 780 800 820 1200 800C1400 790 1600 810 1920 800"/>
                  </path>
                </g>
              </svg>
            </div>

            {/* Tech geometric elements */}
            <div className="absolute right-20 top-20 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="5" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="absolute left-20 bottom-20 w-24 h-24 opacity-15">
              <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="30" r="3" fill="currentColor"/>
                <circle cx="30" cy="70" r="3" fill="currentColor"/>
                <circle cx="70" cy="70" r="3" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-yellow-400 animate-fade-in-up">
              Master the Digital World:
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Unlocking the Power of IT Courses
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-400 max-w-3xl">
              In today's ever-evolving digital landscape, staying ahead of the curve is essential. From mastering the latest technological advancements to developing cutting-edge skills, our comprehensive IT courses are designed to empower you with the knowledge and expertise needed to thrive in the digital age.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-600">
              <a href='#it-courses' className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-200 shadow-lg">
                EXPLORE COURSES
              </a>
              <a href='#contact-us-it-courses' className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-200">
                GET STARTED
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Person coding on laptop with coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-70"></div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In today's ever-evolving digital landscape, staying ahead of the curve is 
                  essential. From mastering the latest technological advancements to 
                  harnessing the power of the internet, there's no denying the importance of IT 
                  skills. Whether you're a seasoned professional looking to upskill or a beginner 
                  hoping to break into the industry, IT courses offer a gateway to success in the 
                  digital world.
                </p>
                
                <p>
                  With the right IT courses, you can unlock a world of opportunities. From 
                  programming and cybersecurity to data analysis and web development, 
                  these courses provide the knowledge and skills needed to thrive in the fast-
                  paced world of technology.
                </p>
                
                <p>
                  At Bostech Innovations, we understand the power of IT courses in shaping careers 
                  and helping individuals stay competitive. With our comprehensive range of 
                  courses, taught by industry experts, we strive to empower learners with the 
                  knowledge and practical skills necessary to navigate the digital landscape 
                  with confidence.
                </p>
                
                <p>
                  Join us on a journey of discovery as we delve into the world of IT courses, 
                  exploring the top choices, the latest trends, and the potential career paths 
                  that await those who dare to master the digital world. It's time to unlock your 
                  true potential and embrace the power of IT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Course Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Course Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Programming, Software Development & Cloud Computing */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Programming, Software Development & Cloud Computing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Programming, Software Development & Cloud Computing Learn key programming languages, software engineering, and full-stack development. Master cloud architecture, deployment, and management for scalable IT solutions.
                </p>
              </div>
            </div>

            {/* Data Analysis, Business Intelligence & Database Management */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Data Analysis, Business Intelligence & Database Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dive into data mining, statistical analysis, and database management. Learn to analyse, visualise, and manage data, making you valuable in industries like finance, healthcare, and marketing.
                </p>
              </div>
            </div>

            {/* Cybersecurity & IT Support */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Cybersecurity & IT Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Focus on protecting digital assets with network security, ethical hacking, and incident response courses. Gain expertise in maintaining and troubleshooting IT systems across various environments.
                </p>
              </div>
            </div>

            {/* Project Management & Specialised IT Certifications */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Project Management & Specialised IT Certifications
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Develop the skills to lead IT projects from start to finish. Pursue specialised certifications from leading vendors like Microsoft, CompTIA, and AWS to advance your IT career.
                </p>
              </div>
            </div>
          </div>

          {/* IT Courses Title Section */}
          <div id='it-courses' className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              IT Courses
            </h2>
            <p className="text-xl text-blue-600">
              Choose from our selection of accredited IT Short Courses
            </p>
          </div>

          {/* IT Course Providers Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Microsoft */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-blue-600">
                    <path d="M0 20L100 20M0 40L100 40M0 60L100 60M0 80L100 80" opacity="0.3"/>
                    <path d="M20 0L20 100M40 0L40 100M60 0L60 100M80 0L80 100" opacity="0.3"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Microsoft Logo */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-red-500"></div>
                      <div className="w-3 h-3 bg-green-500"></div>
                      <div className="w-3 h-3 bg-blue-500"></div>
                      <div className="w-3 h-3 bg-yellow-500"></div>
                    </div>
                    <span className="text-2xl font-light text-gray-700">Microsoft</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  We offer comprehensive Microsoft IT Courses that equip learners with essential 
                  skills in Azure, Office 365, and software development. Our training ensures 
                  participants are well-prepared for the demands of today's tech landscape.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* CompTIA */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-red-600">
                    <circle cx="20" cy="20" r="15" fill="none" opacity="0.3"/>
                    <circle cx="80" cy="80" r="15" fill="none" opacity="0.3"/>
                    <path d="M20 80L80 20" opacity="0.2"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* CompTIA Logo */}
                <div className="flex justify-center mb-6">
                  <div className="text-3xl font-bold text-red-600">
                    CompTIA
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  Our CompTIA IT Courses provide a strong foundation in IT concepts such as 
                  networking, security, and system administration. Designed for various skill 
                  levels, these certifications are recognized worldwide.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Huawei */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-red-600">
                    <path d="M50 10C30 10 10 30 10 50C10 70 30 90 50 90C70 90 90 70 90 50C90 30 70 10 50 10Z" fill="none" opacity="0.2"/>
                    <path d="M50 20C35 20 20 35 20 50C20 65 35 80 50 80C65 80 80 65 80 50C80 35 65 20 50 20Z" fill="none" opacity="0.3"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Huawei Logo */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-red-600">HUAWEI</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  Our Huawei IT Courses delve into cutting-edge telecommunications and networking 
                  technologies. We focus on the latest innovations to help professionals stay 
                  competitive in the industry.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* AWS */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-orange-500">
                    <path d="M10 50C10 30 30 10 50 10C70 10 90 30 90 50" fill="none" opacity="0.3"/>
                    <path d="M10 60C10 40 30 20 50 20C70 20 90 40 90 60" fill="none" opacity="0.2"/>
                    <path d="M10 70C10 50 30 30 50 30C70 30 90 50 90 70" fill="none" opacity="0.1"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* AWS Logo */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-800">aws</span>
                    <div className="ml-2">
                      <svg className="w-8 h-6 text-orange-500" viewBox="0 0 32 20" fill="currentColor">
                        <path d="M7.5 15.5c-2.5 1.8-6.1 2.8-9.2 2.8-.4 0-.8 0-1.2-.1 2.2 1.4 4.9 2.2 7.8 2.2 4.7 0 8.9-1.7 12.2-4.6.3-.3.1-.7-.3-.5-3.8 2.2-8.5 3.5-13.5 3.5-2.6 0-5.1-.4-7.5-1.2-.4-.1-.7.2-.5.6.8 1.3 2.1 2.4 3.6 3.1.2.1.5 0 .6-.2.4-.8.7-1.7.7-2.6 0-.3-.1-.6-.2-.9-.1-.2-.4-.2-.5-.1z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  We provide hands-on AWS IT Courses that cover cloud computing fundamentals, 
                  architecture design, and deployment strategies. Master the world's leading 
                  cloud platform with our expert-led training.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Oracle */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-red-600">
                    <rect x="10" y="10" width="80" height="80" rx="10" fill="none" opacity="0.2"/>
                    <rect x="20" y="20" width="60" height="60" rx="5" fill="none" opacity="0.3"/>
                    <rect x="30" y="30" width="40" height="40" rx="3" fill="none" opacity="0.1"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* Oracle Logo */}
                <div className="flex justify-center mb-6">
                  <div className="text-3xl font-bold text-red-600">
                    ORACLE
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  Our Oracle training encompasses database management, enterprise applications, 
                  and cloud solutions. Gain expertise in one of the world's most powerful 
                  database technologies and enterprise software platforms.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* SAS */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" className="text-blue-600">
                    <path d="M20 20L80 20L80 80L20 80Z" fill="none" opacity="0.2"/>
                    <path d="M30 30L70 30L70 70L30 70Z" fill="none" opacity="0.3"/>
                    <circle cx="50" cy="50" r="15" fill="none" opacity="0.1"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* SAS Logo */}
                <div className="flex justify-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">
                    SAS
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  We specialise in SAS training focused on advanced analytics, statistical 
                  modeling, and data science. Learn to harness the power of data with industry-
                  leading analytics software and methodologies.
                </p>
                
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Future Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                  Choose Your Future
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
                  Why develop your skills in IT?
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Choosing IT courses in South Africa is a smart career move, as the country's economy 
                  increasingly relies on technology to innovate and improve efficiency across various 
                  industries. With high demand for professionals skilled in areas like cybersecurity, 
                  cloud computing, data analysis, and software development, taking IT training or 
                  pursuing IT certifications opens up vast opportunities. These skills are not only 
                  relevant for securing jobs within South Africa but also in the global market, making IT 
                  a highly valuable and future-proof career path. Embracing IT courses ensures you're 
                  prepared for the fast-paced, tech-driven economy that's reshaping the country.
                </p>
                
                <p>
                  By enrolling in IT courses in South Africa, you gain access to cutting-edge knowledge 
                  that aligns with global standards, helping you stay competitive in an ever-evolving 
                  industry. The tech sector is one of the fastest-growing job markets, and having 
                  specialized IT skills ensures you stand out to employers both locally and 
                  internationally. With digital transformation impacting all industries, IT professionals 
                  are at the heart of South Africa's future, making now the perfect time to invest in your 
                  IT education.
                </p>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="IT professional working with server infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-70"></div>
              
              {/* Tech badge */}
              <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">IT</div>
                  <div className="text-xs text-gray-200">Future</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            {/* FAQ Items */}
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ITCoursesContactForm />
        </div>
      </section>
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: "What types of IT courses do you offer?",
      answer: {
        type: "list",
        content: "We offer a wide range of IT courses, including but not limited to:",
        items: [
          "Cloud Computing",
          "Networking", 
          "Cybersecurity",
          "Data Science and Analytics",
          "Software Development",
          "DevOps",
          "Artificial Intelligence and Machine Learning",
          "IT Project Management"
        ]
      }
    },
    {
      question: "Are your IT courses certified?",
      answer: {
        type: "text",
        content: "Yes, all our IT courses are accredited and certified by leading industry bodies including Microsoft, CompTIA, AWS, Oracle, Huawei, and SAS. Upon successful completion, you'll receive internationally recognized certifications that are valued by employers worldwide."
      }
    },
    {
      question: "Who are the instructors for these courses?",
      answer: {
        type: "text", 
        content: "Our IT courses are taught by industry experts and certified professionals with extensive real-world experience. All instructors hold relevant certifications and have practical experience in their respective fields, ensuring you receive high-quality, up-to-date training."
      }
    },
    {
      question: "Do you offer online courses?",
      answer: {
        type: "text",
        content: "Yes, we offer flexible learning options including online courses, in-person classes at our Randburg centre, and blended learning approaches. Our virtual training is delivered through Microsoft Teams, allowing you to learn from anywhere while maintaining interactive engagement with instructors and fellow students."
      }
    },
    {
      question: "What is the duration of your courses?",
      answer: {
        type: "text",
        content: "Course duration varies depending on the specific program and level of certification. Our short courses typically range from 1-5 days, while comprehensive certification programs can span several weeks to months. Each course page provides detailed information about duration, schedule, and time commitment required."
      }
    },
    {
      question: "How can I enroll in an IT course?",
      answer: {
        type: "text",
        content: "You can enroll by contacting us directly through our website contact form, calling us at +27 (0) 15 001 2309, or emailing info@bostechtraining.co.za. Our team will guide you through the enrollment process, help you choose the right course for your career goals, and provide information about schedules and pricing."
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
              {faq.answer.type === "list" ? (
                <div>
                  <p className="text-gray-700 mb-3">{faq.answer.content}</p>
                  <ul className="space-y-2">
                    {faq.answer.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed">{faq.answer.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// IT Courses Contact Form Component
const ITCoursesContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    contact: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Using Web3Forms for form submission
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '388d14e6-3676-41bf-a5f0-cb31c11c9ea8');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('surname', formData.surname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'IT Courses Enquiry - Bostech Innovations');
      formDataToSend.append('from_name', `${formData.name} ${formData.surname}`);
      formDataToSend.append('reply_to', formData.email);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          surname: '',
          email: '',
          contact: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit enquiry. Please try again or contact us directly at info@bostechtraining.co.za');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact-us-it-courses' className="max-w-2xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Contact Us
        </h2>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
            <p className="text-green-700">Thank you for your interest in our IT courses. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <svg className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-red-800 font-semibold">Submission Failed</h3>
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Surname Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="Surname"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Contact Number */}
        <div>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Contact number"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={8}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ITCoursesPage;