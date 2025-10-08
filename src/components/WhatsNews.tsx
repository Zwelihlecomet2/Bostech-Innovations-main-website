import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhatsNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      category: "NEWS ARTICLES",
      title: "What are discretionary and mandatory seta grants?",
      date: "2 YEARS AGO",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
    },
    {
      category: "NEWS ARTICLES", 
      title: "ICT is The Answer to South Africa's Youth Unemployment",
      date: "2 YEARS AGO",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
    },
    {
      category: "NEWS ARTICLES",
      title: "MICT SETA DISCRETIONARY GRANT WINDOW FOR 2025/26 IS NOW OPEN",
      date: "1 YEAR AGO", 
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
    },
    {
      category: "NEWS ARTICLES",
      title: "Graduation of 2023!",
      date: "1 YEAR AGO",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
    },
    {
      category: "NEWS ARTICLES",
      title: "3rd Annual Workplace Skills Plan Workshop",
      date: "1 YEAR AGO",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(newsItems.length / 3)) % Math.ceil(newsItems.length / 3));
  };

  // Get current items to display (3 at a time)
  const getCurrentItems = () => {
    const startIndex = currentSlide * 3;
    return newsItems.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="news-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#news-grid)" className="text-white/30" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
        <svg className="absolute -left-20 top-0 w-96 h-full text-white/5" viewBox="0 0 400 800" fill="none">
          <path d="M0 0C100 200 300 300 400 500C300 600 100 700 0 800V0Z" fill="currentColor"/>
        </svg>
        <svg className="absolute -right-20 top-0 w-96 h-full text-white/5" viewBox="0 0 400 800" fill="none">
          <path d="M400 0C300 200 100 300 0 500C100 600 300 700 400 800V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute right-10 top-10 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-white transform rotate-45"></div>
      </div>
      <div className="absolute left-10 bottom-10 w-24 h-24 opacity-10">
        <div className="w-full h-full border-2 border-white transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT'S NEWS
          </h2>
        </div>

        {/* News Cards Container with Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Positioned further apart */}
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

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Create slides with 3 cards each */}
              {Array.from({ length: Math.ceil(newsItems.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {newsItems.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                      <div
                        key={slideIndex * 3 + index}
                        className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="mb-3">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                              {item.category}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight flex-1">
                            {item.title}
                          </h3>
                          
                          <div className="text-sm text-gray-500 font-medium mt-auto">
                            {item.date}
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
            {Array.from({ length: Math.ceil(newsItems.length / 3) }).map((_, index) => (
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
    </section>
  );
};

export default WhatsNews;