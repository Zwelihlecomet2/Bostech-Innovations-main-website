import React from 'react';
import { Users, Target, Building, Zap, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "B-BEE Level 2",
      description: "Broad-Based Black Economic Empowerment Level 2 contributor status"
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "51% Black",
      description: "Majority black-owned enterprise supporting transformation"
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Encouraging economic",
      description: "Promoting economic growth and development in South Africa"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "A complete administrative",
      description: "Full administrative support and comprehensive services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background with geometric patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-30">
            {/* Left side geometric lines */}
            <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1920 1080" fill="none">
              {/* Diagonal lines pattern */}
              <g stroke="currentColor" strokeWidth="2" className="text-white/20">
                {/* Left diagonal lines */}
                <path d="M0 200L400 0L800 200L1200 0L1600 200L1920 0" />
                <path d="M0 250L400 50L800 250L1200 50L1600 250L1920 50" />
                <path d="M0 300L400 100L800 300L1200 100L1600 300L1920 100" />
                <path d="M0 350L400 150L800 350L1200 150L1600 350L1920 150" />
                <path d="M0 400L400 200L800 400L1200 200L1600 400L1920 200" />
                <path d="M0 450L400 250L800 450L1200 250L1600 450L1920 250" />
                <path d="M0 500L400 300L800 500L1200 300L1600 500L1920 300" />
                <path d="M0 550L400 350L800 550L1200 350L1600 550L1920 350" />
                <path d="M0 600L400 400L800 600L1200 400L1600 600L1920 400" />
                <path d="M0 650L400 450L800 650L1200 450L1600 650L1920 450" />
                <path d="M0 700L400 500L800 700L1200 500L1600 700L1920 500" />
                <path d="M0 750L400 550L800 750L1200 550L1600 750L1920 550" />
                <path d="M0 800L400 600L800 800L1200 600L1600 800L1920 600" />
                <path d="M0 850L400 650L800 850L1200 650L1600 850L1920 650" />
                <path d="M0 900L400 700L800 900L1200 700L1600 900L1920 700" />
                <path d="M0 950L400 750L800 950L1200 750L1600 950L1920 750" />
                <path d="M0 1000L400 800L800 1000L1200 800L1600 1000L1920 800" />
                <path d="M0 1050L400 850L800 1050L1200 850L1600 1050L1920 850" />
              </g>
              
              {/* Right side geometric lines */}
              <g stroke="currentColor" strokeWidth="2" className="text-white/15">
                <path d="M1920 200L1520 0L1120 200L720 0L320 200L0 0" />
                <path d="M1920 250L1520 50L1120 250L720 50L320 250L0 50" />
                <path d="M1920 300L1520 100L1120 300L720 100L320 300L0 100" />
                <path d="M1920 350L1520 150L1120 350L720 150L320 350L0 150" />
                <path d="M1920 400L1520 200L1120 400L720 200L320 400L0 200" />
                <path d="M1920 450L1520 250L1120 450L720 250L320 450L0 250" />
                <path d="M1920 500L1520 300L1120 500L720 300L320 500L0 300" />
                <path d="M1920 550L1520 350L1120 550L720 350L320 550L0 350" />
                <path d="M1920 600L1520 400L1120 600L720 400L320 600L0 400" />
                <path d="M1920 650L1520 450L1120 650L720 450L320 650L0 450" />
                <path d="M1920 700L1520 500L1120 700L720 500L320 700L0 500" />
                <path d="M1920 750L1520 550L1120 750L720 550L320 750L0 550" />
                <path d="M1920 800L1520 600L1120 800L720 600L320 800L0 600" />
                <path d="M1920 850L1520 650L1120 850L720 650L320 850L0 650" />
                <path d="M1920 900L1520 700L1120 900L720 700L320 900L0 700" />
                <path d="M1920 950L1520 750L1120 950L720 750L320 950L0 750" />
                <path d="M1920 1000L1520 800L1120 1000L720 800L320 1000L0 800" />
                <path d="M1920 1050L1520 850L1120 1050L720 850L320 1050L0 850" />
              </g>
            </svg>
          </div>

          {/* Additional geometric shapes */}
          <div className="absolute right-20 top-20 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white">
              <polygon points="100,20 180,180 20,180" fill="currentColor" />
            </svg>
          </div>
          
          <div className="absolute left-20 bottom-20 w-48 h-48 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white">
              <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(45 100 100)" />
            </svg>
          </div>

          {/* Curved overlay on right side */}
          <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
            <svg className="absolute right-0 top-0 w-full h-full text-white/5" viewBox="0 0 800 1080" fill="none">
              <path d="M800 0C600 200 400 300 200 500C400 600 600 700 800 900V0Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white ml-8 md:ml-16 lg:ml-24">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              About Us
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-200">
              Bostech Innovations is a leading training and skills development company that aims to empower Africa's Information Communication Technology industry.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative -mt-20 z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 leading-tight">
              Empowering a Future Fuelled by Skills, Innovation, and Inclusivity
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                At Dynamic DNA, we are passionate about empowering individuals with the skills 
                needed to create a brighter future for generations to come. In today's fast-changing 
                world, education and skills development are the keys to unlocking potential and 
                driving progress. Our mission is to equip people with the knowledge and tools they 
                need to thrive in a rapidly evolving technological landscape.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                We understand the immense value of scarce ICT skills in fostering economic growth, 
                promoting social upliftment, and addressing the unique challenges of South Africa. 
                These skills are not only critical for individual success but are also essential for 
                building stronger communities and ensuring the country's competitiveness on the 
                global stage.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                As the world embraces the Fourth Industrial Revolution (4IR), the demand for digital 
                expertise and innovation is greater than ever. Dynamic DNA is at the forefront of this 
                transformation, preparing individuals to seize opportunities in fields such as data 
                science, artificial intelligence, cybersecurity, and software development. By doing so, 
                we enable businesses and communities to adapt and flourish in this new era.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our commitment goes beyond technical training; we are dedicated to bridging the 
                skills gap and addressing inequalities within the ICT sector. South Africa's economic 
                growth relies on creating a workforce that is not only skilled but also diverse and 
                inclusive. At Dynamic DNA, we work to close both the skills and gender divide, 
                ensuring equal opportunities for all.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                We place a strong emphasis on empowering women and other underrepresented 
                groups in technology. By breaking down barriers and championing inclusivity, we 
                inspire a new generation of leaders who will drive innovation and foster a culture of 
                collaboration. We believe that when everyone has a seat at the table, we build a 
                stronger, more sustainable future for all.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Through our programs, partnerships, and unwavering dedication, Dynamic DNA is 
                shaping a new narrative for South Africa. We are not just teaching skills; we are 
                transforming lives, igniting potential, and helping to build a legacy of growth and 
                resilience. Together, we are paving the way for a future where everyone can thrive in 
                a world powered by technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote and Services Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="quote-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#quote-grid)" className="text-white/30" />
          </svg>
        </div>

        {/* Curved Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 w-full h-full text-white/10" viewBox="0 0 1920 800" fill="none">
            <g stroke="currentColor" strokeWidth="2">
              <path d="M0 100C400 80 800 120 1200 100C1400 90 1600 110 1920 100" opacity="0.6"/>
              <path d="M0 150C400 130 800 170 1200 150C1400 140 1600 160 1920 150" opacity="0.4"/>
              <path d="M0 200C400 180 800 220 1200 200C1400 190 1600 210 1920 200" opacity="0.5"/>
              <path d="M0 250C400 230 800 270 1200 250C1400 240 1600 260 1920 250" opacity="0.3"/>
              <path d="M0 300C400 280 800 320 1200 300C1400 290 1600 310 1920 300" opacity="0.6"/>
              <path d="M0 350C400 330 800 370 1200 350C1400 340 1600 360 1920 350" opacity="0.4"/>
              <path d="M0 400C400 380 800 420 1200 400C1400 390 1600 410 1920 400" opacity="0.5"/>
              <path d="M0 450C400 430 800 470 1200 450C1400 440 1600 460 1920 450" opacity="0.3"/>
              <path d="M0 500C400 480 800 520 1200 500C1400 490 1600 510 1920 500" opacity="0.6"/>
              <path d="M0 550C400 530 800 570 1200 550C1400 540 1600 560 1920 550" opacity="0.4"/>
              <path d="M0 600C400 580 800 620 1200 600C1400 590 1600 610 1920 600" opacity="0.5"/>
              <path d="M0 650C400 630 800 670 1200 650C1400 640 1600 660 1920 650" opacity="0.3"/>
              <path d="M0 700C400 680 800 720 1200 700C1400 690 1600 710 1920 700" opacity="0.6"/>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Quote Section */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
              "Power comes not from knowledge kept, but knowledge shared"
            </blockquote>
            <cite className="text-lg text-white/90">– Bill Gates</cite>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Empower the Student */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold text-[#f79630] mb-2">
                    Empower the Student
                  </h3>
                  <p className="text-white/90 mb-4">
                    Accredited IT & Business Courses
                  </p>
                  <NavLink to='/it-courses' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 self-start">
                    READ MORE
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Develop the Business */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Business development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold text-[#f79630] mb-2">
                    Develop the Business
                  </h3>
                  <p className="text-white/90 mb-4">
                    Corporate Services and Skills Development
                  </p>
                  <NavLink to='/skills-development' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 self-start">
                    READ MORE
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Change the World */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Women empowerment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold text-[#f79630] mb-2">
                    Change the World
                  </h3>
                  <p className="text-white/90 mb-4">
                    Women Empowerment & Equality Projects
                  </p>
                  <NavLink to='/4ir4her' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 self-start">
                    READ MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Meet the Team
            </h2>
          </div>

          {/* Team Slider */}
          <div className="relative max-w-6xl mx-auto">
            <TeamSlider />
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Business Partnership Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#f79630] to-[#e6861c] rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-70"></div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                Become a Partner!
              </h2>
              
              <p className="text-blue-600 font-semibold text-lg leading-relaxed">
                Our partnership initiatives are set up to encourage mutually beneficial relationships between Dynamic DNA and external organisations.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We understand that partnerships increase knowledge, expertise, and the resources available which in turn make us able to fulfil our mission. It is due to the collaboration of our partnership that we can achieve amazing results both as a business as well as for individual success.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We provide a comprehensive offering for transformation related services to best serve companies in SA. To become the preferred transformation and skills development implementation partner with a focus on driving Professional skills, entrepreneurship development and being a hub for job opportunities.
              </p>

              <div className="pt-4">
                <NavLink to='/contact-us' className="bg-[#f79630] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 shadow-lg">
                  LEARN MORE
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* To Develop is to Empower Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                To Develop is to Empower
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                We want our learners to be inspired and we encourage the youth to reach for their dreams, 
                knowing that a better future is possible.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Of course, we could not do this alone, with the assistance of over 45 prominent clients, all 
                driven to enrich the lives of each person that learns and grows through our help, the picture is 
                much bigger with Dynamic DNA as our learner's success is just one small part of our joint 
                success.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Together we can do much more and we have already seen over 1000 young minds ignited 
                from all walks of life (including underprivileged, disadvantaged or people with disabilities), 
                creating problem-solving solutions through entrepreneurship and ultimately gainful 
                employment in the ICT sector.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Dynamic DNA is a part of the Dynamic Technologies group of companies that has 1 200 staff 
                and 12 group companies providing software and digital solutions globally across multiple 
                sectors in the UK, Europe, the U.S.A, South Africa and sub-Saharan Africa.
              </p>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                We are extremely proud of our footprint both locally and internationally and invite you to take 
                the first step of your development journey with us.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                  alt="Team collaboration and development"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#f79630] to-[#e6861c] rounded-full opacity-70"></div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-200">Young Minds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Technologies Group Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Logos Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-12">
              {/* Dynamic Technologies Logo */}
              <div className="flex flex-col items-center">
                <div className="w-80 h-32 flex items-center justify-center mb-4">
                  {/* Dynamic Technologies Logo */}
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-[#f79630] font-bold text-lg">dth</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-light text-gray-800">dynamic</span>
                      <span className="text-2xl font-light text-gray-800">technologies</span>
                      <span className="text-sm text-gray-500 italic">powered by people</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic DNA Logo */}
              <div className="flex flex-col items-center">
                <div className="w-80 h-32 flex items-center justify-center mb-4">
                  {/* Dynamic DNA Logo */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      {/* DNA Helix Icon */}
                      <svg className="w-16 h-16 text-blue-600" viewBox="0 0 64 64" fill="none">
                        <path d="M20 8C20 8 28 16 36 8C44 16 52 8 52 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 24C20 24 28 32 36 24C44 32 52 24 52 24" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 40C20 40 28 48 36 40C44 48 52 40 52 40" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 56C20 56 28 64 36 56C44 64 52 56 52 56" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="8" r="2" fill="#f79630"/>
                        <circle cx="36" cy="8" r="2" fill="#f79630"/>
                        <circle cx="52" cy="8" r="2" fill="#f79630"/>
                        <circle cx="20" cy="24" r="2" fill="#f79630"/>
                        <circle cx="36" cy="24" r="2" fill="#f79630"/>
                        <circle cx="52" cy="24" r="2" fill="#f79630"/>
                        <circle cx="20" cy="40" r="2" fill="#f79630"/>
                        <circle cx="36" cy="40" r="2" fill="#f79630"/>
                        <circle cx="52" cy="40" r="2" fill="#f79630"/>
                        <circle cx="20" cy="56" r="2" fill="#f79630"/>
                        <circle cx="36" cy="56" r="2" fill="#f79630"/>
                        <circle cx="52" cy="56" r="2" fill="#f79630"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-2xl font-bold text-blue-600">DYNAMIC</span>
                        <span className="text-2xl font-bold text-[#f79630]">DNA</span>
                      </div>
                      <span className="text-sm text-gray-600 italic">We develop and empower</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed text-[#f79630] font-medium">
                DynamicDNA is a Dynamic Technologies group company. With 1 500+ staff and 8 group companies operating across multiple sectors in the UK, European, US, UAE, East African and South African markets. Dynamic Technologies provides a range of software and technology solutions, SQA and testing, cloud solutions, CRM, legal enterprise business solutions, skills development, and related core competencies. Our group companies comprise BPC Resourcing, CloudSmiths, DVT, Emerald Consulting, Inspired Testing, Sincera and xSMTHS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="testimonial-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#testimonial-grid)" className="text-white/30" />
          </svg>
        </div>

        {/* Curved Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 w-full h-full text-white/10" viewBox="0 0 1920 800" fill="none">
            <g stroke="currentColor" strokeWidth="2">
              <path d="M0 100C400 80 800 120 1200 100C1400 90 1600 110 1920 100" opacity="0.6"/>
              <path d="M0 150C400 130 800 170 1200 150C1400 140 1600 160 1920 150" opacity="0.4"/>
              <path d="M0 200C400 180 800 220 1200 200C1400 190 1600 210 1920 200" opacity="0.5"/>
              <path d="M0 250C400 230 800 270 1200 250C1400 240 1600 260 1920 250" opacity="0.3"/>
              <path d="M0 300C400 280 800 320 1200 300C1400 290 1600 310 1920 300" opacity="0.6"/>
              <path d="M0 350C400 330 800 370 1200 350C1400 340 1600 360 1920 350" opacity="0.4"/>
              <path d="M0 400C400 380 800 420 1200 400C1400 390 1600 410 1920 400" opacity="0.5"/>
              <path d="M0 450C400 430 800 470 1200 450C1400 440 1600 460 1920 450" opacity="0.3"/>
              <path d="M0 500C400 480 800 520 1200 500C1400 490 1600 510 1920 500" opacity="0.6"/>
              <path d="M0 550C400 530 800 570 1200 550C1400 540 1600 560 1920 550" opacity="0.4"/>
              <path d="M0 600C400 580 800 620 1200 600C1400 590 1600 610 1920 600" opacity="0.5"/>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <TestimonialSlider />
        </div>
      </section>

      {/* Dynamic Technologies Group Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Logos Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-12">
              {/* Dynamic Technologies Logo */}
              <div className="flex flex-col items-center">
                <div className="w-80 h-32 flex items-center justify-center mb-4">
                  {/* Dynamic Technologies Logo */}
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-[#f79630] font-bold text-lg">dth</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-light text-gray-800">dynamic</span>
                      <span className="text-2xl font-light text-gray-800">technologies</span>
                      <span className="text-sm text-gray-500 italic">powered by people</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic DNA Logo */}
              <div className="flex flex-col items-center">
                <div className="w-80 h-32 flex items-center justify-center mb-4">
                  {/* Dynamic DNA Logo */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      {/* DNA Helix Icon */}
                      <svg className="w-16 h-16 text-blue-600" viewBox="0 0 64 64" fill="none">
                        <path d="M20 8C20 8 28 16 36 8C44 16 52 8 52 8" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 24C20 24 28 32 36 24C44 32 52 24 52 24" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 40C20 40 28 48 36 40C44 48 52 40 52 40" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <path d="M20 56C20 56 28 64 36 56C44 64 52 56 52 56" stroke="currentColor" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="8" r="2" fill="#f79630"/>
                        <circle cx="36" cy="8" r="2" fill="#f79630"/>
                        <circle cx="52" cy="8" r="2" fill="#f79630"/>
                        <circle cx="20" cy="24" r="2" fill="#f79630"/>
                        <circle cx="36" cy="24" r="2" fill="#f79630"/>
                        <circle cx="52" cy="24" r="2" fill="#f79630"/>
                        <circle cx="20" cy="40" r="2" fill="#f79630"/>
                        <circle cx="36" cy="40" r="2" fill="#f79630"/>
                        <circle cx="52" cy="40" r="2" fill="#f79630"/>
                        <circle cx="20" cy="56" r="2" fill="#f79630"/>
                        <circle cx="36" cy="56" r="2" fill="#f79630"/>
                        <circle cx="52" cy="56" r="2" fill="#f79630"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-2xl font-bold text-blue-600">DYNAMIC</span>
                        <span className="text-2xl font-bold text-[#f79630]">DNA</span>
                      </div>
                      <span className="text-sm text-gray-600 italic">We develop and empower</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed text-[#f79630] font-medium">
                DynamicDNA is a Dynamic Technologies group company. With 1 500+ staff and 8 group companies operating across multiple sectors in the UK, European, US, UAE, East African and South African markets. Dynamic Technologies provides a range of software and technology solutions, SQA and testing, cloud solutions, CRM, legal enterprise business solutions, skills development, and related core competencies. Our group companies comprise BPC Resourcing, CloudSmiths, DVT, Emerald Consulting, Inspired Testing, Sincera and xSMTHS.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Team Slider Component
const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Teboho Taunyane",
      position: "Exec. Assitant to Managing Director",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    },
    {
      name: "Tendai Sanyamahwe", 
      position: "Business Unit Manager",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    },
    {
      name: "Tinashe Banya",
      position: "Portfolio Manager", 
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    },
    {
      name: "Sarah Johnson",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    },
    {
      name: "Michael Chen",
      position: "UX Designer",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    },
    {
      name: "Lisa Williams",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=500"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-600 p-4 rounded-full transition-all duration-200 shadow-lg z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-600 p-4 rounded-full transition-all duration-200 shadow-lg z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Create slides with 3 team members each */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {teamMembers.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((member, index) => (
                  <div
                    key={slideIndex * itemsPerSlide + index}
                    className="group cursor-pointer"
                  >
                    {/* Team Member Card */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Dynamic DNA Logo Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <div className="text-white text-6xl font-bold transform rotate-12">
                            DNA
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm opacity-90">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </>
  );
};

// Testimonial Slider Component
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "I am fortunate enough to have experienced and learnt a lot, not only about Systems Development but about the workplace - how to conduct yourself in a business environment, how to approach clients. This is truly a unique opportunity and I am grateful to be part of this programme.",
      name: "Bongani Sithole",
      position: "Systems Development Graduate"
    },
    {
      quote: "Dynamic DNA has transformed my career completely. The practical training and mentorship I received prepared me for real-world challenges in the IT industry. I'm now working as a software developer and couldn't be happier.",
      name: "Thandi Mthembu",
      position: "Software Development Graduate"
    },
    {
      quote: "The learnership program at Dynamic DNA gave me the skills and confidence I needed to succeed. The instructors are knowledgeable and supportive, and the curriculum is relevant to industry needs.",
      name: "Michael Ndlovu",
      position: "Network Administration Graduate"
    },
    {
      quote: "What sets Dynamic DNA apart is their commitment to empowering women in technology. As a female graduate, I felt supported throughout my journey and now I'm inspiring other women to join the IT field.",
      name: "Nomsa Khumalo",
      position: "Cybersecurity Graduate"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Student Testimonials
        </h2>
      </div>

      {/* Testimonial Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm z-20 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm z-20 shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Testimonial Content */}
        <div className="text-center text-white px-8">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <Quote className="h-16 w-16 text-white/30" />
          </div>

          {/* Testimonial Text */}
          <div className="mb-8">
            <blockquote className="text-lg md:text-xl leading-relaxed italic mb-8 min-h-[120px] flex items-center justify-center">
              "{testimonials[currentSlide].quote}"
            </blockquote>
            
            {/* Author */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-white/80">
                {testimonials[currentSlide].position}
              </p>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;