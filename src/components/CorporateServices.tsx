import React from 'react';
import { CheckCircle } from 'lucide-react';

const CorporateServices = () => {
  const features = [
    "Skills Gap Analysis",
    "Skills Development Facilitation",
    "Workplace Skills Plan", 
    "Employment Equity Submissions"
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Curved Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side curved lines */}
        <svg className="absolute left-0 top-0 w-64 h-full text-gray-300" viewBox="0 0 200 800" fill="none">
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M0 100C50 120 100 140 150 160C100 180 50 200 0 220" opacity="0.3"/>
            <path d="M0 150C50 170 100 190 150 210C100 230 50 250 0 270" opacity="0.4"/>
            <path d="M0 200C50 220 100 240 150 260C100 280 50 300 0 320" opacity="0.3"/>
            <path d="M0 250C50 270 100 290 150 310C100 330 50 350 0 370" opacity="0.2"/>
            <path d="M0 300C50 320 100 340 150 360C100 380 50 400 0 420" opacity="0.3"/>
            <path d="M0 350C50 370 100 390 150 410C100 430 50 450 0 470" opacity="0.4"/>
            <path d="M0 400C50 420 100 440 150 460C100 480 50 500 0 520" opacity="0.3"/>
            <path d="M0 450C50 470 100 490 150 510C100 530 50 550 0 570" opacity="0.2"/>
            <path d="M0 50C50 70 100 90 150 110C100 130 50 150 0 170" opacity="0.3"/>
            <path d="M0 500C50 520 100 540 150 560C100 580 50 600 0 620" opacity="0.3"/>
            <path d="M0 550C50 570 100 590 150 610C100 630 50 650 0 670" opacity="0.2"/>
            <path d="M0 600C50 620 100 640 150 660C100 680 50 700 0 720" opacity="0.4"/>
          </g>
        </svg>

        {/* Right side curved lines */}
        <svg className="absolute right-0 bottom-0 w-64 h-full text-gray-300" viewBox="0 0 200 800" fill="none">
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M200 500C150 520 100 540 50 560C100 580 150 600 200 620" opacity="0.3"/>
            <path d="M200 550C150 570 100 590 50 610C100 630 150 650 200 670" opacity="0.4"/>
            <path d="M200 600C150 620 100 640 50 660C100 680 150 700 200 720" opacity="0.3"/>
            <path d="M200 650C150 670 100 690 50 710C100 730 150 750 200 770" opacity="0.2"/>
            <path d="M200 700C150 720 100 740 50 760C100 780 150 800 200 820" opacity="0.3"/>
            <path d="M200 100C150 120 100 140 50 160C100 180 150 200 200 220" opacity="0.3"/>
            <path d="M200 150C150 170 100 190 50 210C100 230 150 250 200 270" opacity="0.2"/>
            <path d="M200 200C150 220 100 240 50 260C100 280 150 300 200 320" opacity="0.4"/>
            <path d="M200 250C150 270 100 290 50 310C100 330 150 350 200 370" opacity="0.3"/>
            <path d="M200 300C150 320 100 340 50 360C100 380 150 400 200 420" opacity="0.2"/>
            <path d="M200 350C150 370 100 390 50 410C100 430 150 450 200 470" opacity="0.3"/>
            <path d="M200 400C150 420 100 440 50 460C100 480 150 500 200 520" opacity="0.4"/>
            <path d="M200 450C150 470 100 490 50 510C100 530 150 550 200 570" opacity="0.2"/>
          </g>
        </svg>

        {/* Additional center curved lines */}
        <svg className="absolute left-1/4 top-0 w-32 h-full text-gray-300" viewBox="0 0 100 800" fill="none">
          <g stroke="currentColor" strokeWidth="0.8" fill="none">
            <path d="M0 200C25 220 50 240 75 260C50 280 25 300 0 320" opacity="0.2"/>
            <path d="M0 350C25 370 50 390 75 410C50 430 25 450 0 470" opacity="0.3"/>
            <path d="M0 500C25 520 50 540 75 560C50 580 25 600 0 620" opacity="0.2"/>
          </g>
        </svg>

        <svg className="absolute right-1/4 top-0 w-32 h-full text-gray-300" viewBox="0 0 100 800" fill="none">
          <g stroke="currentColor" strokeWidth="0.8" fill="none">
            <path d="M100 150C75 170 50 190 25 210C50 230 75 250 100 270" opacity="0.2"/>
            <path d="M100 300C75 320 50 340 25 360C50 380 75 400 100 420" opacity="0.3"/>
            <path d="M100 450C75 470 50 490 25 510C50 530 75 550 100 570" opacity="0.2"/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Left Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=450"
                alt="Corporate Skills Development Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">
              Elevate Your Team's Potential
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              Enhance your workforce's Information, Communication and Technology knowledge and improve skills through corporate short courses offered through an easy to use platform. Let us be your choice of ICT training academy, and together we can empower the future!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#f79630] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-[#f79630] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e6861c] transform hover:scale-105 transition-all duration-200 shadow-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServices;