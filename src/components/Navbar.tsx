
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './Logo';
import LanguageSelector, { useLanguage } from './LanguageSelector';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm' : 'bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-invest-purple transition-colors font-medium">
              {t("features")}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-invest-purple transition-colors font-medium">
              {t("howItWorks")}
            </a>
            <a href="#ai-assistant" className="text-gray-700 hover:text-invest-purple transition-colors font-medium">
              {t("aiAssistant")}
            </a>
            <Button 
              className="bg-gradient-to-r from-invest-purple to-invest-blue text-white hover:opacity-90 shadow-md" 
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("getStarted")}
            </Button>
            <LanguageSelector />
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-invest-purple focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-invest-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("features")}
            </a>
            <a
              href="#how-it-works" 
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-invest-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("howItWorks")}
            </a>
            <a
              href="#ai-assistant"
              className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-invest-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("aiAssistant")}
            </a>
            <div className="px-4 py-2">
              <Button 
                className="w-full bg-gradient-to-r from-invest-purple to-invest-blue text-white hover:opacity-90 shadow-md"
                onClick={() => {
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                {t("getStarted")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
