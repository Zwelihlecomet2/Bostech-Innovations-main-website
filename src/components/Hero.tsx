import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Uplifting Disabled Women in IT",
      subtitle: "Our campaign for uplifting disabled women in IT, not only to enhance B-BBEE scorecard but also to create meaningful investment in SA's Human Capital.",
      buttonText: "Learn More",
      buttonLink: "/4ir4her",
      backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
    },
    {
      title: "Unlock Your Future",
      subtitle: "Leading IT Courses and IT Learnerships designed to equip you with certified skills and real-world experience for in-demand jobs.",
      buttonText: "Get Started",
      buttonLink: "/learnerships",
      backgroundImage: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
    },
  ];

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-[#f79630]" />,
      title: "Learnerships",
      description: "Pursue a career in IT and Business with our leading learnerships, designed to equip you with certified skills and real-world experience for in-demand jobs.",
      link: "/learnerships"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#f79630]" />,
      title: "Courses",
      description: "Advance your skill set in the world of IT with our selection of comprehensive IT Courses and Soft Skill Courses both online and in person.",
      link: "/soft-skills"
    },
    {
      icon: <Target className="h-12 w-12 text-[#f79630]" />,
      title: "Corporate Services",
      description: "Corporate services tailored to your specific needs, earning maximum points in skills development, and building your BBBEE status.",
      link: "/bbbee-consulting"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative">
      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              {/* Blue Overlay with Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" className="text-white/30" />
                  </svg>
                </div>
                
                {/* Curved Lines */}
                <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
                  <svg className="absolute -left-20 top-0 w-96 h-full text-white/10" viewBox="0 0 400 800" fill="none">
                    <path d="M0 0C100 200 300 300 400 500C300 600 100 700 0 800V0Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white ml-8 md:ml-16 lg:ml-24">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed opacity-90 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <NavLink
                  to={slide.buttonLink}
                  className="inline-block bg-[#f79630] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 animate-fade-in-up animation-delay-400 shadow-lg"
                >
                  {slide.buttonText}
                </NavLink>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
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

      {/* Overlapping Services Cards */}
      <div className="relative -mt-20 z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-orange-50 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <NavLink
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group"
                  >
                    View
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;