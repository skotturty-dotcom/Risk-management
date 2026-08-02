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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#06152B]/95 backdrop-blur-md border-b border-slate-200 dark:border-teal-500/20 shadow-sm py-3'
          : 'bg-white/90 dark:bg-[#06152B]/90 backdrop-blur-sm border-b border-slate-200/50 dark:border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Elegant Corporate Styling */}
        <NavLink to="/" className="flex items-center space-x-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-xl bg-[#0F3161] dark:bg-[#0F2342] border border-[#008579] flex items-center justify-center group-hover:border-[#FFB340] transition-colors shadow-sm shrink-0">
            <Shield className="w-5 h-5 text-[#46A095] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-xl font-bold tracking-tight text-[#0F3161] dark:text-white group-hover:text-[#008579] dark:group-hover:text-[#46A095] transition-colors leading-none">
              Srajai Tech
            </span>
            <span className="text-[11px] font-sans font-semibold tracking-wider text-[#008579] dark:text-[#46A095] block mt-1 whitespace-nowrap">
              Risk Advisory
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links - Refined Corporate Typography */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-[#008579] dark:text-[#46A095] bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30'
                    : 'text-slate-700 dark:text-gray-200 hover:text-[#0F3161] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
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
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#0F2342] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:text-[#008579] dark:hover:text-[#46A095] transition-colors"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Bright Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-[#0F3161]" /> : <Sun className="w-4 h-4 text-[#46A095]" />}
          </button>

          <button
            onClick={onOpenAudit}
            className="px-4 py-2.5 rounded-lg bg-[#008579] hover:bg-[#00685E] text-white text-xs xl:text-sm font-bold tracking-wide transition-all shadow-md flex items-center space-x-2 shrink-0 group"
          >
            <span>Request Enterprise Audit</span>
            <ArrowRight className="w-4 h-4 text-[#FFB340] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#0F2342] border border-slate-200 dark:border-teal-500/20 text-slate-700 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5 text-[#0F3161]" /> : <Sun className="w-5 h-5 text-[#46A095]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#0F2342] border border-slate-200 dark:border-teal-500/20 text-slate-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-white/95 dark:bg-[#06152B]/95 backdrop-blur-xl border-b border-slate-200 dark:border-teal-500/20 px-4 pt-3 pb-5 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-semibold tracking-normal transition-colors ${
                      isActive
                        ? 'text-[#008579] dark:text-[#46A095] bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30'
                        : 'text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
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
                className="w-full py-3 rounded-lg bg-[#008579] hover:bg-[#00685E] text-white text-xs font-bold tracking-wide text-center flex items-center justify-center space-x-2"
              >
                <span>Request Enterprise Audit</span>
                <ArrowRight className="w-4 h-4 text-[#FFB340]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
