
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AIChat from '../components/AIChat';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import TrustSignals from '../components/TrustSignals';
import InvestmentPackages from '../components/InvestmentPackages';
import FAQ from '../components/FAQ';
import BottomCTA from '../components/BottomCTA';
import Partners from '../components/Partners';
import SuccessStories from '../components/SuccessStories';
import { useLanguage } from '../components/LanguageSelector';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageTitleDescription')} />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        {/* Website Title Section - Added at the beginning */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              {t('websiteTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {t('websiteSubtitle')}
            </p>
          </div>
        </div>
        
        <Hero />
        <TrustSignals />
        <HowItWorks />
        <InvestmentPackages />
        <Partners />
        <SuccessStories />
        <Testimonials />
        <FAQ />
        <AIChat />
        <BottomCTA />
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
