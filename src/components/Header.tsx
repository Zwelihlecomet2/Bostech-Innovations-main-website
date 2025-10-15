import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import BostechLogo from "../assets/bostech-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { 
      name: 'COURSES', 
      href: '/soft-skills',
      submenu: [
        { name: 'Soft Skill Courses', href: '/soft-skills' },
        { name: 'IT Courses', href: '/it-courses' }
      ]
    },
    { name: 'LEARNERSHIPS', href: '/learnerships' },
    { 
      name: 'CORPORATE SERVICES', 
      href: '/bbbee-consulting',
      submenu: [
        { name: 'BBBEE Consulting Services', href: '/bbbee-consulting' },
        { name: 'Skills Development', href: '/skills-development' },
        { name: 'Learner Management', href: '/learner-management' },
        { name: 'SETA Facilitation Services', href: '/seta-facilitation' },
        { name: 'WSP/ATR/PIVOTAL PLAN', href: '/pivotal-plan' }
      ]
    },
    { name: '4IR4Youth', href: '/4ir4youth' },
    { name: 'CONTACT US', href: '/contact-us' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={BostechLogo} 
                alt="Bostech Innovations Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.href.startsWith('/') ? (
                  <NavLink
                    to={item.href}
                    className={`font-medium transition-colors duration-200 flex items-center ${
                      location.pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </NavLink>
                )}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.href.startsWith('/') ? (
                    <NavLink
                      to={item.href}
                      className={`block px-4 py-2 transition-colors duration-200 ${
                        location.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;