
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import AIChat from '../components/AIChat';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import TrustSignals from '../components/TrustSignals';
import InvestmentPackages from '../components/InvestmentPackages';
import SuccessStories from '../components/SuccessStories';
import TrustedPartners from '../components/TrustedPartners';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>NovaTrust Invest | Expert-Curated Cryptocurrency Investment Platform</title>
        <meta name="description" content="Grow your wealth faster with expert-curated crypto investments. Average returns 25% higher than market. Start with just $100 and access AI-powered investment strategies." />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <Features />
        <TrustedPartners />
        <SuccessStories />
        <InvestmentPackages />
        <AboutUs />
        <HowItWorks />
        <Testimonials />
        <AIChat />
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
