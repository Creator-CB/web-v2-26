
import React from 'react';
import { Star, Award, TrendingUp, Globe, Users, Briefcase, Trophy, Check, BarChart, ArrowRight } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const { t } = useLanguage();
  
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
  
  return (
    <section id="about-us" className="section-padding bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-medium uppercase tracking-wider text-pink-600">{t('aboutUs')}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">{t('europeanInvestmentExcellence')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('platformCombinesAI')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Why Choose Our Platform */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('whyPlatformGeneratesProfits')}</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Trophy className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('marketBeatingReturns')}</h4>
                <p className="text-gray-600">
                  {t('aiSystemsOutperform')}
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">{t('averageReturn')}: 206.4%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('expertBackedStrategies')}</h4>
                <p className="text-gray-600">
                  {t('aiRecommendationsReviewed')}
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">{t('clientSatisfactionRate')}: 98.7%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 text-pink-500">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('diverseAssetClasses')}</h4>
                <p className="text-gray-600">
                  {t('multipleInvestmentOptions')}
                </p>
                <p className="mt-3 text-sm font-medium text-pink-500">{t('investmentCount')}: 2,800+</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">18</div>
            <p className="text-sm text-gray-500">{t('europeanMarkets')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">16.4%</div>
            <p className="text-sm text-gray-500">{t('averageReturns')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">11+</div>
            <p className="text-sm text-gray-500">{t('industryAwards')}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-pink-500 mb-1">98.7%</div>
            <p className="text-sm text-gray-500">{t('clientSatisfaction')}</p>
          </div>
        </div>
        
        {/* Our Experts Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('meetOurExperts')}</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {experts.slice(0, 6).map((expert, index) => (
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
          
          <div className="text-center">
            <Button
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center">
                {t('startInvestingToday')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
