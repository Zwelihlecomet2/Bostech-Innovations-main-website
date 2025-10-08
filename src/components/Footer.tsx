import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/dynamicdna.co.za/", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/dynamic_dna", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/channel/UCpOm5563bW18hBRc-O7w0rg", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/11288873/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[#f79630]">About Us</h4>
            <p className="text-gray-300 leading-relaxed">
              Dynamic DNA is an ICT training Academy accredited with the MICT SETA, providing Scarce Skills IT training through blended learning (theory and practical) to develop locally-based skilled technology professionals with a specialized focus on the 4IR specialities.
            </p>
            <a
              href="#about"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Partner Logos */}
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=306&h=140"
                alt="Pearson Vue Test Centre"
                className="mx-auto h-16 object-contain"
              />
              <p className="text-gray-400 text-sm">
                We are an accredited<br />Pearson Vue Test Centre
              </p>
            </div>
            
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=500&h=203"
                alt="Dynamic Technologies"
                className="mx-auto h-16 object-contain"
              />
              <p className="text-gray-400 text-sm">
                A Dynamic Technologies company.<br />
                Diversity by Inclusion
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#f79630] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone:</p>
                  <a href="tel:+27117595940" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    +27 (0) 11 759 5940
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#f79630] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <a href="mailto:enquiries@dynamicdna.co.za" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    enquiries@dynamicdna.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f79630] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Randburg Address:</p>
                  <p className="text-gray-300">271 Surrey Avenue, Ferndale, Randburg, Johannesburg, 2194</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f79630] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Rustenburg Address:</p>
                  <p className="text-gray-300">98 Thabo Mbeki Drive, Rustenburg</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#f79630] hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © Copyright 2024 Dynamic DNA. | All Rights Reserved. 
            <a href="#privacy" className="text-gray-400 hover:text-[#f79630] transition-colors duration-200 ml-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;