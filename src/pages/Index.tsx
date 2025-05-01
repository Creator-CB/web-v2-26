
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
import MeetOurBrokers from '../components/MeetOurBrokers';
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
        <Hero />
        <TrustSignals />
        <HowItWorks />
        <InvestmentPackages />
        <Partners />
        <SuccessStories />
        <MeetOurBrokers />
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
