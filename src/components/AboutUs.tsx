
import React from 'react';
import { Star, Award, TrendingUp, Globe, Users, Briefcase, Trophy, Building, Check, BarChart } from "lucide-react";

const AboutUs = () => {
  const experts = [
    {
      name: "Dr. Sophia Lindström",
      role: "Chief Investment Strategist",
      location: "Stockholm",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "Former advisor to the Swedish Central Bank with 15+ years experience in European markets and algorithmic trading systems.",
      specialty: "Nordic market analysis"
    },
    {
      name: "Marco Bianchi",
      role: "AI Research Director",
      location: "Milan",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "PhD in Computational Finance from ETH Zurich with expertise in predictive modeling and pattern recognition in financial markets.",
      specialty: "Quantitative analysis"
    },
    {
      name: "Claire Dubois",
      role: "Portfolio Manager",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "Previously managed €2.8B in assets at BNP Paribas. Specializes in sustainable European investments with consistent above-market returns.",
      specialty: "ESG investments"
    },
    {
      name: "Alexander Müller",
      role: "Risk Assessment Director",
      location: "Frankfurt",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "Former Deutsche Bank executive with expertise in risk modeling and portfolio optimization for volatile market conditions.",
      specialty: "Market volatility"
    },
    {
      name: "Elena Petrova",
      role: "Cryptocurrency Specialist",
      location: "Prague",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "Early blockchain adopter who has guided institutional investors through digital asset integration since 2017. Expert in crypto regulation across EU markets.",
      specialty: "Digital assets"
    },
    {
      name: "Jean-Pierre Laurent",
      role: "Wealth Management Director",
      location: "Geneva",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300&crop=faces&faceindex=1",
      bio: "Over 20 years experience managing private wealth for UHNW clients across Europe. Specializes in tax-efficient investment structures and family office services.",
      specialty: "Private wealth"
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
    {
      quote: "I've tried several investment platforms, but this is the only one that truly understands European markets and regulations. The returns speak for themselves.",
      author: "Kristina Johansson, Retail Investor",
      company: "Gothenburg, Sweden"
    },
    {
      quote: "The AI identified investment opportunities I would have never found on my own. My portfolio has grown by 18.7% in just 6 months.",
      author: "Miguel Hernandez, Restaurant Owner",
      company: "Barcelona, Spain"
    }
  ];

  const partners = [
    {
      name: "Banco Italiano di Investimento",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?auto=format&fit=crop&q=80&w=300&h=200",
      type: "Financial Institution",
      description: "Leading Italian investment bank with €18.4B in assets under management."
    },
    {
      name: "EuroVenture Capital",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300&h=200",
      type: "Venture Capital Fund",
      description: "Premier early-stage investment fund focused on European fintech startups."
    },
    {
      name: "Milan Innovations Group",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300&h=200",
      type: "Technology Incubator",
      description: "Pioneering tech hub that bridges financial expertise with cutting-edge innovation."
    },
    {
      name: "RomeFinance Partners",
      logo: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&q=80&w=300&h=200",
      type: "Investment Consortium",
      description: "Consortium of Italy's leading financial institutions focused on international growth."
    }
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
                  Our AI systems have consistently outperformed traditional investment approaches with up to 24% annual returns for aggressive portfolios.
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">Average return: 16.4%</p>
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
        
        {/* NEW SECTION: Italian Partners */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Italian Investment Partners</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-pink-100/20">
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/50 to-purple-500/50 opacity-80 z-10"></div>
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="flex flex-col items-center">
                      <Building className="h-10 w-10 text-white mb-2" />
                      <h4 className="text-xl font-bold text-white text-center px-4">{partner.name}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-pink-500 text-sm font-medium mb-2">{partner.type}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-pink-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-xl font-bold mb-4 text-gray-800">Italian Investment Partnership Benefits</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10">
                    <Check className="h-4 w-4 text-pink-500" />
                  </div>
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-800 mb-1">Exclusive Access</h5>
                  <p className="text-sm text-gray-600">Direct access to Italian private market opportunities typically reserved for institutional investors</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10">
                    <Check className="h-4 w-4 text-pink-500" />
                  </div>
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-800 mb-1">Reduced Fees</h5>
                  <p className="text-sm text-gray-600">Preferential fee structures and lower commission rates through our institutional partnerships</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10">
                    <Check className="h-4 w-4 text-pink-500" />
                  </div>
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-800 mb-1">Market Intelligence</h5>
                  <p className="text-sm text-gray-600">Proprietary research and insights from Italy's leading financial institutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10">
                    <Check className="h-4 w-4 text-pink-500" />
                  </div>
                </div>
                <div className="ml-3">
                  <h5 className="font-medium text-gray-800 mb-1">Investment Security</h5>
                  <p className="text-sm text-gray-600">Enhanced due diligence and investor protections through our established partner network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Experts */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our European Experts</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
                <p className="text-pink-500 text-sm mb-3">{expert.role}</p>
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
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative group hover:shadow-xl transition-all duration-300">
              <div className="text-pink-500 text-4xl absolute right-6 top-4 opacity-20">"</div>
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
