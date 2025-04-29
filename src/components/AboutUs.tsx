
import React from 'react';
import { Star, Award, TrendingUp, Globe } from "lucide-react";

const AboutUs = () => {
  const experts = [
    {
      name: "Dr. Sophia Lindström",
      role: "Chief Investment Strategist",
      location: "Stockholm",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Former advisor to the Swedish Central Bank with 15+ years experience in European markets and algorithmic trading systems.",
      specialty: "Nordic market analysis"
    },
    {
      name: "Marco Bianchi",
      role: "AI Research Director",
      location: "Milan",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "PhD in Computational Finance from ETH Zurich with expertise in predictive modeling and pattern recognition in financial markets.",
      specialty: "Quantitative analysis"
    },
    {
      name: "Claire Dubois",
      role: "Portfolio Manager",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Previously managed €2.8B in assets at BNP Paribas. Specializes in sustainable European investments with consistent above-market returns.",
      specialty: "ESG investments"
    },
    {
      name: "Alexander Müller",
      role: "Risk Assessment Director",
      location: "Frankfurt",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Former Deutsche Bank executive with expertise in risk modeling and portfolio optimization for volatile market conditions.",
      specialty: "Market volatility"
    }
  ];
  
  const testimonials = [
    {
      quote: "The AI-driven insights have transformed our investment approach. We've seen a 21% increase in our portfolio's performance over the past year.",
      author: "Thomas Weber, CEO of EuroFinance Group",
      company: "Frankfurt, Germany"
    },
    {
      quote: "As someone with limited investing experience, the platform's intuitive design and AI guidance have given me confidence to make informed decisions.",
      author: "Elena Rossi, Entrepreneur",
      company: "Milan, Italy"
    },
    {
      quote: "The combination of cutting-edge technology and expert human oversight provides a balanced approach that has consistently outperformed my previous investment strategies.",
      author: "Pierre Laurent, Financial Consultant",
      company: "Lyon, France"
    },
  ];
  
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
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-invest-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-[5%] w-80 h-80 bg-invest-blue/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
    
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/5 px-3 py-1 mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">About Us</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">European Investment Excellence</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines advanced AI technologies with decades of European market expertise
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        {/* Company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-invest-purple/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-invest-purple" />
              </div>
            </div>
            <div className="text-3xl font-bold text-invest-purple mb-1">18</div>
            <p className="text-sm text-gray-500">European Markets</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-invest-purple/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-invest-purple" />
              </div>
            </div>
            <div className="text-3xl font-bold text-invest-purple mb-1">16.4%</div>
            <p className="text-sm text-gray-500">Average Returns</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-invest-purple/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-invest-purple" />
              </div>
            </div>
            <div className="text-3xl font-bold text-invest-purple mb-1">11+</div>
            <p className="text-sm text-gray-500">Industry Awards</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-invest-purple/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-invest-purple" />
              </div>
            </div>
            <div className="text-3xl font-bold text-invest-purple mb-1">98.7%</div>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why European Investors Choose Us</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-invest-purple">European Market Focus</h4>
              <p className="text-gray-600">
                Our AI algorithms are specifically trained on European markets, considering regional regulations, economic patterns, and cultural factors that global platforms often miss.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-invest-purple">Quantum AI Technology</h4>
              <p className="text-gray-600">
                Unlike traditional investment platforms, our proprietary quantum computing algorithms can process vastly more variables to identify opportunities with remarkable precision.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-invest-purple">Human + AI Collaboration</h4>
              <p className="text-gray-600">
                We believe in the power of augmented intelligence—combining the computational power of AI with the nuanced judgment of experienced European market specialists.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Experts */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our European Experts</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm">{expert.location}</p>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800">{expert.name}</h4>
                <p className="text-invest-purple text-sm mb-3">{expert.role}</p>
                <p className="text-gray-600 text-sm mb-3">{expert.bio}</p>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {expert.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="text-invest-purple text-4xl absolute right-6 top-4 opacity-20">"</div>
              <p className="text-gray-600 italic mb-6 relative z-10">{testimonial.quote}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
