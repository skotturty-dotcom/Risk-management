import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenAudit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Risk Framework', path: '/risk-framework' },
    { name: 'Founder', path: '/founder' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm ${
        isScrolled ? 'py-1.5 shadow-md' : 'py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Sleek & Thin Box Height */}
        <NavLink to="/" className="flex items-center space-x-3 group shrink-0 py-0.5">
          <img
            src="/logo-light.png"
            alt="Srajai Tech Logo"
            className="h-8 sm:h-9 md:h-10 lg:h-12 max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </NavLink>

        {/* Desktop Navigation Links - Compact Thin Padding */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold tracking-normal whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-[#008579] bg-teal-50 border border-teal-200/80 font-bold'
                    : 'text-slate-700 hover:text-[#008579] hover:bg-slate-100/80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Theme Switcher Buttons - Thin Height */}
        <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#008579] transition-colors"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Bright Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-[#008579]" /> : <Sun className="w-4 h-4 text-[#008579]" />}
          </button>

          <button
            onClick={onOpenAudit}
            className="btn-primary-cta px-3.5 py-2 rounded-lg text-xs tracking-wide flex items-center space-x-1.5 shrink-0 group"
          >
            <span>Request Enterprise Audit</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-[#008579]" /> : <Sun className="w-4 h-4 text-[#008579]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 rounded-lg text-xs font-extrabold tracking-normal transition-colors ${
                      isActive
                        ? 'text-[#008579] bg-teal-50 border border-teal-200/80'
                        : 'text-[#06182D] hover:text-[#008579] hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="btn-primary-cta w-full py-2.5 rounded-lg text-xs tracking-wide text-center flex items-center justify-center space-x-2"
              >
                <span>Request Enterprise Audit</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
