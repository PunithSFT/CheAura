import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100); 
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-500 font-poppins
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent pt-8' 
        }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-14">
          
          {/* Desktop Navigation */}
          <div 
            className={`
              hidden md:flex items-center p-1 rounded-full 
              ${scrolled 
                ? 'bg-black/10'
                : 'bg-black/50' 
              }
            `}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                                      className={`
                                        text-[12px] tracking-widest uppercase px-4 py-2 mx-1 rounded-full 
                                        transition-all duration-300 font-medium
                                        ${
                                          isActive
                                            ? scrolled
                                              ? 'bg-black text-white hover:bg-black'
                                              : 'bg-white text-black hover:bg-white'
                                            : scrolled
                                              ? 'text-black hover:bg-black/10'
                                              : 'text-white hover:bg-white/20'
                                        }
                                      `}                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button - Positioned to trigger the dropdown */}
          <div className="flex items-center md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                inline-flex items-center justify-center p-2 rounded-full 
                focus:outline-none transition-colors duration-200 shadow-lg
                ${scrolled 
                    ? 'text-gray-800 bg-white hover:bg-gray-100'
                    : 'text-white bg-black/70 hover:bg-black/90'
                }
              `}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Menu Panel - NEW SMALL MODERN DROPDOWN */}
            <div
              className={`
                absolute top-full right-0 mt-3 md:hidden 
                w-48 // Set a compact width
                bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-2 
                transition-opacity duration-300 transform 
                ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
              `}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`
                    block text-gray-800 uppercase text-xs tracking-widest py-3 px-3 my-1 
                    rounded-lg transition-colors duration-200 
                    hover:bg-gray-100
                    ${location.pathname === item.path ? 'bg-gray-200 font-semibold' : ''}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;