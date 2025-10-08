import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vendorPartners = [
    { 
      name: "Microsoft Gold Partner", 
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "Gold Microsoft Partner"
    },
    { 
      name: "Oracle Partner", 
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "Oracle Partner"
    },
    { 
      name: "QCTO", 
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "Quality Council for Trades & Occupations"
    },
    { 
      name: "MICT SETA", 
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "MICT SETA"
    },
    { 
      name: "CompTIA", 
      logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "CompTIA Partner"
    },
    { 
      name: "Huawei", 
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "Huawei Partner"
    },
    { 
      name: "IBM", 
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "IBM Partner"
    },
    { 
      name: "Pearson VUE", 
      logo: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "Pearson VUE Test Centre"
    },
    { 
      name: "SAS", 
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
      description: "SAS Partner"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(vendorPartners.length / itemsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return vendorPartners.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Vendor Partners</h2>
        </div>

        {/* Partners Slider */}
        <div className="relative max-w-6xl mx-auto">
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
              {/* Create slides with 3 partners each */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {vendorPartners.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((partner, index) => (
                      <div
                        key={slideIndex * itemsPerSlide + index}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="w-full h-32 flex items-center justify-center mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-gray-600 text-center mt-2">
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
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;