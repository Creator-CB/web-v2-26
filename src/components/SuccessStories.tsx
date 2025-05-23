
import React from 'react';
import { ArrowRight, TrendingUp, Award, Briefcase, ChartBar } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories = () => {
  const { t } = useLanguage();
  
  const brokerAchievements = [
    {
      name: 'Michael Thompson',
      title: t('seniorAIStrategist'),
      achievement: t('brokerAchievement1'),
      stats: '842%',
      expertise: t('algorithmicTrading'),
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <ChartBar className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
    },
    {
      name: 'Sarah Johnson',
      title: t('AIInvestmentDirector'),
      achievement: t('brokerAchievement2'),
      stats: '573%',
      expertise: t('predictiveAnalytics'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
    },
    {
      name: 'David Chen',
      title: t('quantAnalysisHead'),
      achievement: t('brokerAchievement3'),
      stats: '398%',
      expertise: t('machineLearningSolutions'),
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
    }
  ];

  return (
    <section id="broker-achievements" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="success-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#success-grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 sm:mb-6 shadow-sm border border-amber-500/20">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-amber-400">{t('innovationInInvesting')}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 text-gradient px-2"
          >
            {t('ourAIInvestmentExperts')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2"
          >
            {t('aiExpertsDescription')}
          </motion.p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {brokerAchievements.map((broker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-amber-500/10 transition-all duration-300">
                <div className="relative h-48 sm:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-orange-500/40 mix-blend-overlay"></div>
                  <img 
                    src={broker.image} 
                    alt={broker.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white mb-1">{broker.name}</h3>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{broker.title}</p>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center cursor-pointer">
                          <div className="bg-amber-500/10 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3 border border-amber-500/20">
                            {broker.icon}
                          </div>
                          <div>
                            <p className="text-gray-300 text-xs sm:text-sm">{broker.expertise}</p>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-slate-800 border-amber-500/30 text-white">
                        <div className="text-sm">
                          <p className="font-semibold mb-1">{broker.expertise}</p>
                          <p className="text-gray-300">{t('hoverCardExpertiseDesc')}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    
                    <div className="flex flex-col items-end">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-30 rounded-full blur-sm"></div>
                        <p className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">{broker.stats}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-3 sm:pt-4">
                    <p className="text-gray-300 text-sm sm:text-base">{broker.achievement}</p>
                  </div>
                  
                  <div className="mt-4 sm:mt-6">
                    <div className="flex items-start">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-1 flex-shrink-0" />
                      <p className="ml-2 sm:ml-3 text-gray-300 text-sm sm:text-base">
                        {index === 0 && "Pioneered algorithmic trading strategies that consistently outperform traditional market approaches"}
                        {index === 1 && "Developed predictive models that identified major market shifts weeks before they occurred"}
                        {index === 2 && "Created machine learning systems that adapt to changing market conditions in real-time"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
