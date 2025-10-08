import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "Skills Gap Analysis",
    "Skills Development Facilitation",
    "Workplace Skills Plan",
    "Employment Equity Submissions"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Empowering Minds, Innovating Futures!
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Transform Your Career Through Comprehensive IT Courses and Learnership Programs
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Dynamic DNA is an ICT training Academy accredited with the MICT SETA, providing Scarce Skills IT training through blended learning (theory and practical) to develop locally-based skilled technology professionals with a specialized focus on the 4IR specialities. Dynamic DNA's purpose is bridging the gap between companies that require expert technology professionals, and young learners with the aptitude and ability to step into these positions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                GET STARTED
              </a>
            </div>
          </div>

          {/* Image with Geometric Elements */}
          <div className="relative">
            {/* Decorative geometric shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 z-0">
              <div className="w-full h-full bg-gradient-to-br from-[#f79630] to-[#e6861c] transform rotate-45 rounded-lg opacity-90"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 z-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 transform rotate-12 rounded-lg opacity-80"></div>
            </div>

            {/* Main image container */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="ICT Training Academy"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#f79630] rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">1000+</div>
                  <div className="text-xs text-gray-700">Graduates</div>
                </div>
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/2 -left-3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 transform -translate-y-1/2"></div>
            <div className="absolute top-1/4 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;