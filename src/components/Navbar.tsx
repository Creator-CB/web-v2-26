
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChartLine, TrendingUp } from "lucide-react";
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 shadow-sm' : 'bg-slate-900/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => scrollToSection('hero')} className="flex items-center focus:outline-none">
              <Logo />
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
            >
              <TrendingUp className="h-4 w-4" />
              {t("features")}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              {t("howItWorks")}
            </button>
            <button 
              onClick={() => scrollToSection('ai-assistant')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              {t("aiAssistant")}
            </button>
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-90 shadow-md" 
              onClick={() => scrollToSection('register')}
            >
              {t("getStarted")}
            </Button>
            <LanguageSelector />
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-slate-800/60"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-slate-800/60"
            >
              {t("howItWorks")}
            </button>
            <button
              onClick={() => scrollToSection('ai-assistant')}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-slate-800/60"
            >
              {t("aiAssistant")}
            </button>
            <div className="px-4 py-2">
              <Button 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-90 shadow-md"
                onClick={() => scrollToSection('register')}
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
