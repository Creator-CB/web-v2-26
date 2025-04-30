
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

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>NovaTrust Invest | Expert-Curated Cryptocurrency Investment Platform with Personal Brokers</title>
        <meta name="description" content="Investi cu încredere. Broker personal + AI = profit rapid. Începe cu doar 270€ și beneficiază de strategii AI personalizate." />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustSignals />
        <HowItWorks />
        <InvestmentPackages />
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
