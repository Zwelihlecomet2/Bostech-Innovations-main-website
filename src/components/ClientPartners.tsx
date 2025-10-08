import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ClientPartners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientPartners = [
    { 
      name: "DVT", 
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Smart People Smart Solutions"
    },
    { 
      name: "Singular Systems", 
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Simplifying Complexity"
    },
    { 
      name: "Cloudsmiths", 
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Cloud Solutions"
    },
    { 
      name: "BBD Software Development", 
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Software Development"
    },
    { 
      name: "Sybrin", 
      logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Technology Solutions"
    },
    { 
      name: "Info Blueprint", 
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Information Solutions"
    },
    { 
      name: "Tech Partner 7", 
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Technology Partner"
    },
    { 
      name: "Tech Partner 8", 
      logo: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Innovation Partner"
    },
    { 
      name: "Tech Partner 9", 
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=150",
      description: "Digital Solutions"
    }
  ];

  const itemsPerSlide = 6; // 2 rows x 3 columns
  const totalSlides = Math.ceil(clientPartners.length / itemsPerSlide);

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
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Curved Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side curved lines - More visible */}
        <svg className="absolute left-0 top-0 w-64 h-full text-gray-300" viewBox="0 0 200 800" fill="none">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M0 50C50 70 100 90 150 110C100 130 50 150 0 170" opacity="0.6"/>
            <path d="M0 100C50 120 100 140 150 160C100 180 50 200 0 220" opacity="0.7"/>
            <path d="M0 150C50 170 100 190 150 210C100 230 50 250 0 270" opacity="0.8"/>
            <path d="M0 200C50 220 100 240 150 260C100 280 50 300 0 320" opacity="0.6"/>
            <path d="M0 250C50 270 100 290 150 310C100 330 50 350 0 370" opacity="0.5"/>
            <path d="M0 300C50 320 100 340 150 360C100 380 50 400 0 420" opacity="0.7"/>
            <path d="M0 350C50 370 100 390 150 410C100 430 50 450 0 470" opacity="0.8"/>
            <path d="M0 400C50 420 100 440 150 460C100 480 50 500 0 520" opacity="0.6"/>
            <path d="M0 450C50 470 100 490 150 510C100 530 50 550 0 570" opacity="0.5"/>
            <path d="M0 500C50 520 100 540 150 560C100 580 50 600 0 620" opacity="0.7"/>
            <path d="M0 550C50 570 100 590 150 610C100 630 50 650 0 670" opacity="0.6"/>
            <path d="M0 600C50 620 100 640 150 660C100 680 50 700 0 720" opacity="0.8"/>
            <path d="M0 650C50 670 100 690 150 710C100 730 50 750 0 770" opacity="0.5"/>
          </g>
        </svg>

        {/* Right side curved lines - More visible */}
        <svg className="absolute right-0 bottom-0 w-64 h-full text-gray-300" viewBox="0 0 200 800" fill="none">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M200 50C150 70 100 90 50 110C100 130 150 150 200 170" opacity="0.6"/>
            <path d="M200 100C150 120 100 140 50 160C100 180 150 200 200 220" opacity="0.7"/>
            <path d="M200 150C150 170 100 190 50 210C100 230 150 250 200 270" opacity="0.5"/>
            <path d="M200 200C150 220 100 240 50 260C100 280 150 300 200 320" opacity="0.8"/>
            <path d="M200 250C150 270 100 290 50 310C100 330 150 350 200 370" opacity="0.6"/>
            <path d="M200 300C150 320 100 340 50 360C100 380 150 400 200 420" opacity="0.5"/>
            <path d="M200 350C150 370 100 390 50 410C100 430 150 450 200 470" opacity="0.7"/>
            <path d="M200 400C150 420 100 440 50 460C100 480 150 500 200 520" opacity="0.8"/>
            <path d="M200 450C150 470 100 490 50 510C100 530 150 550 200 570" opacity="0.5"/>
            <path d="M200 500C150 520 100 540 50 560C100 580 150 600 200 620" opacity="0.7"/>
            <path d="M200 550C150 570 100 590 50 610C100 630 150 650 200 670" opacity="0.8"/>
            <path d="M200 600C150 620 100 640 50 660C100 680 150 700 200 720" opacity="0.6"/>
            <path d="M200 650C150 670 100 690 50 710C100 730 150 750 200 770" opacity="0.5"/>
            <path d="M200 700C150 720 100 740 50 760C100 780 150 800 200 820" opacity="0.7"/>
          </g>
        </svg>

        {/* Center curved lines - More visible */}
        <svg className="absolute left-1/4 top-0 w-48 h-full text-gray-300" viewBox="0 0 150 800" fill="none">
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M0 100C40 120 80 140 120 160C80 180 40 200 0 220" opacity="0.6"/>
            <path d="M0 200C40 220 80 240 120 260C80 280 40 300 0 320" opacity="0.5"/>
            <path d="M0 300C40 320 80 340 120 360C80 380 40 400 0 420" opacity="0.7"/>
            <path d="M0 400C40 420 80 440 120 460C80 480 40 500 0 520" opacity="0.6"/>
            <path d="M0 500C40 520 80 540 120 560C80 580 40 600 0 620" opacity="0.5"/>
          </g>
        </svg>

        <svg className="absolute right-1/4 top-0 w-48 h-full text-gray-300" viewBox="0 0 150 800" fill="none">
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M150 150C110 170 70 190 30 210C70 230 110 250 150 270" opacity="0.6"/>
            <path d="M150 250C110 270 70 290 30 310C70 330 110 350 150 370" opacity="0.7"/>
            <path d="M150 350C110 370 70 390 30 410C70 430 110 450 150 470" opacity="0.5"/>
            <path d="M150 450C110 470 70 490 30 510C70 530 110 550 150 570" opacity="0.6"/>
            <path d="M150 550C110 570 70 590 30 610C70 630 110 650 150 670" opacity="0.7"/>
          </g>
        </svg>

        {/* Top and bottom curved lines - More visible */}
        <svg className="absolute top-0 left-1/3 w-96 h-32 text-gray-300" viewBox="0 0 400 100" fill="none">
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M0 50C100 30 200 70 300 50C350 40 400 60 400 50" opacity="0.6"/>
            <path d="M0 30C100 10 200 50 300 30C350 20 400 40 400 30" opacity="0.5"/>
            <path d="M0 70C100 50 200 90 300 70C350 60 400 80 400 70" opacity="0.7"/>
          </g>
        </svg>

        <svg className="absolute bottom-0 left-1/3 w-96 h-32 text-gray-300" viewBox="0 0 400 100" fill="none">
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M0 50C100 70 200 30 300 50C350 60 400 40 400 50" opacity="0.6"/>
            <path d="M0 30C100 50 200 10 300 30C350 40 400 20 400 30" opacity="0.5"/>
            <path d="M0 70C100 90 200 50 300 70C350 80 400 60 400 70" opacity="0.7"/>
          </g>
        </svg>

        {/* Additional diagonal curved lines */}
        <svg className="absolute left-0 top-1/4 w-full h-64 text-gray-300" viewBox="0 0 800 200" fill="none">
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M0 100C200 80 400 120 600 100C700 90 800 110 800 100" opacity="0.4"/>
            <path d="M0 120C200 100 400 140 600 120C700 110 800 130 800 120" opacity="0.3"/>
            <path d="M0 80C200 60 400 100 600 80C700 70 800 90 800 80" opacity="0.5"/>
          </g>
        </svg>

        <svg className="absolute right-0 bottom-1/4 w-full h-64 text-gray-300" viewBox="0 0 800 200" fill="none">
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M800 100C600 120 400 80 200 100C100 110 0 90 0 100" opacity="0.4"/>
            <path d="M800 80C600 100 400 60 200 80C100 90 0 70 0 80" opacity="0.3"/>
            <path d="M800 120C600 140 400 100 200 120C100 130 0 110 0 120" opacity="0.5"/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Partners Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 p-4 rounded-full transition-all duration-200 shadow-lg z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 p-4 rounded-full transition-all duration-200 shadow-lg z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Create slides with 6 partners each (2 rows x 3 columns) */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 grid-rows-2 gap-8 px-4">
                    {clientPartners.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((partner, index) => (
                      <div
                        key={slideIndex * itemsPerSlide + index}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group min-h-[120px]"
                      >
                        <div className="w-full h-16 flex items-center justify-center mb-3">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 text-center">
                          {partner.name}
                        </h3>
                        <p className="text-xs text-gray-600 text-center mt-1">
                          {partner.description}
                        </p>
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
                  index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPartners;