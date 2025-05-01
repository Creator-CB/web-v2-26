
import React from 'react';
import { Star, Award, TrendingUp, Globe, Users, Briefcase, Trophy, Building, Check, BarChart, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const experts = [
    {
      name: "Dr. Sophia Lindström",
      role: "Chief Investment Strategist",
      location: "Stockholm",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "Former advisor to the Swedish Central Bank with 15+ years experience in European markets and algorithmic trading systems.",
      specialty: "Nordic market analysis"
    },
    {
      name: "Marco Bianchi",
      role: "AI Research Director",
      location: "Milan",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "PhD in Computational Finance from ETH Zurich with expertise in predictive modeling and pattern recognition in financial markets.",
      specialty: "Quantitative analysis"
    },
    {
      name: "Claire Dubois",
      role: "Portfolio Manager",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "Previously managed €2.8B in assets at BNP Paribas. Specializes in sustainable European investments with consistent above-market returns.",
      specialty: "ESG investments"
    },
    {
      name: "Alexander Müller",
      role: "Risk Assessment Director",
      location: "Frankfurt",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "Former Deutsche Bank executive with expertise in risk modeling and portfolio optimization for volatile market conditions.",
      specialty: "Market volatility"
    },
    {
      name: "Elena Petrova",
      role: "Cryptocurrency Specialist",
      location: "Prague",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "Early blockchain adopter who has guided institutional investors through digital asset integration since 2017. Expert in crypto regulation across EU markets.",
      specialty: "Digital assets"
    },
    {
      name: "Jean-Pierre Laurent",
      role: "Wealth Management Director",
      location: "Geneva",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=90&w=400&h=400&crop=faces&faceindex=1",
      bio: "Over 20 years experience managing private wealth for UHNW clients across Europe. Specializes in tax-efficient investment structures and family office services.",
      specialty: "Private wealth"
    }
  ];
  
  // Removing testimonials section as requested
  
  return (
    <section id="about-us" className="section-padding bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-[5%] w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
    
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1 mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-pink-600">About Us</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">European Investment Excellence</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines advanced AI technologies with decades of European market expertise
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Why Choose Our Platform - NEW SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Our Platform Generates Profits</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Trophy className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Market-Beating Returns</h4>
                <p className="text-gray-600">
                  Our AI systems have consistently outperformed traditional investment approaches with up to 500% annual returns for aggressive portfolios.
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">Average return: 206.4%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Expert-Backed Strategies</h4>
                <p className="text-gray-600">
                  Every AI-generated recommendation is reviewed by our team of European financial experts, combining technology with human insight.
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">98.7% client satisfaction</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Diverse Asset Classes</h4>
                <p className="text-gray-600">
                  From traditional stocks and bonds to cryptocurrencies and alternative investments, our platform provides access to multiple wealth-building opportunities.
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">2,800+ investment options</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">18</div>
            <p className="text-sm text-gray-500">European Markets</p>
          </div>
          
          <div className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">16.4%</div>
            <p className="text-sm text-gray-500">Average Returns</p>
          </div>
          
          <div className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">11+</div>
            <p className="text-sm text-gray-500">Industry Awards</p>
          </div>
          
          <div className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">98.7%</div>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why European Investors Choose Us</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-pink-600">European Market Focus</h4>
              <p className="text-gray-600">
                Our AI algorithms are specifically trained on European markets, considering regional regulations, economic patterns, and cultural factors that global platforms often miss.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-pink-600">Quantum AI Technology</h4>
              <p className="text-gray-600">
                Unlike traditional investment platforms, our proprietary quantum computing algorithms can process vastly more variables to identify opportunities with remarkable precision.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-pink-600">Human + AI Collaboration</h4>
              <p className="text-gray-600">
                We believe in the power of augmented intelligence—combining the computational power of AI with the nuanced judgment of experienced European market specialists.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Experts - with optimized images */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our European Experts</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/80 backdrop-blur-sm text-pink-600 px-3 py-1 text-xs font-medium rounded-full">
                      {expert.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800">{expert.name}</h4>
                <p className="text-pink-500 text-sm mb-3">{expert.role}</p>
                <p className="text-gray-600 text-sm mb-3">{expert.bio}</p>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full shadow-sm">
                    {expert.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
