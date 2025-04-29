
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
import MeetOurBrokers from '../components/MeetOurBrokers';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>NovaTrust Invest | Expert-Curated Cryptocurrency Investment Platform with Personal Brokers</title>
        <meta name="description" content="Grow your wealth with dedicated personal broker assistance. Expert-curated crypto investments with average returns 25% higher than market. Start with just $100." />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <Features />
        <MeetOurBrokers />
        <HowItWorks />
        <SuccessStories />
        <InvestmentPackages />
        <TrustedPartners />
        <AboutUs />
        <Testimonials />
        <AIChat />
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
