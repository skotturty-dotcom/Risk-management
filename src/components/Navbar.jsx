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
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#06182D] border-b border-[rgba(72,214,201,0.18)] ${
        isScrolled ? 'shadow-lg py-3' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center space-x-3 group shrink-0">
          <img
            src="/logo-dark.png"
            alt="Srajai Tech Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-[#55D9CC] bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.25)]'
                    : 'text-[#B8C4CF] hover:text-[#F5F8FA] hover:bg-[rgba(255,255,255,0.05)]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Theme Switcher Buttons */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#0A2034] border border-[rgba(72,214,201,0.2)] text-[#DDE8EC] hover:text-[#55D9CC] transition-colors"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Bright Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-[#55D9CC]" /> : <Sun className="w-4 h-4 text-[#55D9CC]" />}
          </button>

          <button
            onClick={onOpenAudit}
            className="btn-primary-cta px-4 py-2.5 rounded-lg text-xs xl:text-sm tracking-wide flex items-center space-x-2 shrink-0 group"
          >
            <span>Request Enterprise Audit</span>
            <ArrowRight className="w-4 h-4 text-[#FFFFFF] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#0A2034] border border-[rgba(72,214,201,0.2)] text-[#DDE8EC]"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5 text-[#55D9CC]" /> : <Sun className="w-5 h-5 text-[#55D9CC]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0A2034] border border-[rgba(72,214,201,0.2)] text-[#DDE8EC] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#DDE8EC]" /> : <Menu className="w-6 h-6 text-[#DDE8EC]" />}
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
            className="lg:hidden bg-[#06182D] border-b border-[rgba(72,214,201,0.18)] px-4 pt-3 pb-5 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-semibold tracking-normal transition-colors ${
                      isActive
                        ? 'text-[#55D9CC] bg-[rgba(40,199,183,0.12)] border border-[rgba(72,214,201,0.25)]'
                        : 'text-[#B8C4CF] hover:text-[#F5F8FA] hover:bg-[rgba(255,255,255,0.05)]'
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
                className="btn-primary-cta w-full py-3 rounded-lg text-xs tracking-wide text-center flex items-center justify-center space-x-2"
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
