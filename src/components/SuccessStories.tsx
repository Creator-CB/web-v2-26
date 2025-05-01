
import React from 'react';
import { ArrowRight, TrendingUp, Award, Briefcase, ChartBar, Star, DollarSign, LineChart, BarChart3, TrendingDown } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories = () => {
  const { t } = useLanguage();
  
  const brokerAchievements = [
    {
      name: 'Michael Thompson',
      title: t('seniorAIStrategist'),
      achievement: t('brokerAchievement1'),
      stats: '842%',
      period: t('over3Years'),
      expertise: t('algorithmicTrading'),
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
      color: 'from-amber-500 to-amber-600'
    },
    {
      name: 'Sarah Johnson',
      title: t('AIInvestmentDirector'),
      achievement: t('brokerAchievement2'),
      stats: '573%',
      period: t('over2Years'),
      expertise: t('predictiveAnalytics'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      name: 'David Chen',
      title: t('quantAnalysisHead'),
      achievement: t('brokerAchievement3'),
      stats: '398%',
      period: t('over18Months'),
      expertise: t('machineLearningSolutions'),
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <Award className="h-6 w-6 text-amber-500" />,
      color: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <section id="broker-achievements" className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute right-1/3 top-1/4 w-20 h-20 border border-amber-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-10 h-10 border border-orange-500/20 rounded-full animate-float"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-3 py-1 mb-4 shadow-sm"
          >
            <span className="text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{t('innovationInInvesting')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent sm:text-5xl mb-4"
          >
            {t('ourAIInvestmentExperts')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('aiExpertsDescription')}
          </motion.p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brokerAchievements.map((broker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={broker.image} 
                  alt={broker.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-bold text-2xl text-white mb-1 group-hover:translate-y-0 translate-y-1 transition-transform duration-300">{broker.name}</h3>
                  <p className="text-white/90 font-medium group-hover:translate-y-0 translate-y-2 transition-transform duration-300 delay-75">{broker.title}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {broker.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="flex items-center cursor-help">
                        <div className={`bg-gradient-to-r ${broker.color} p-2 rounded-lg mr-3 text-white`}>
                          {broker.icon}
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">{broker.expertise}</p>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">{broker.expertise} {t('approach')}</h4>
                        <p className="text-sm text-muted-foreground">{broker.achievement}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  
                  <div className="flex flex-col items-end">
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{broker.stats}</p>
                    <p className="text-gray-500 text-sm">{broker.period}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600">{broker.achievement}</p>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-600" />
                    <span className="text-sm text-gray-600">{t('aiDrivenPortfolios')}</span>
                  </div>
                  <Button 
                    variant="link"
                    className="text-amber-600 hover:text-amber-700 p-0 h-auto flex items-center text-sm font-medium group"
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('learnStrategy')}
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-2xl">
            <div className="relative">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-cyber-gradient opacity-30"></div>
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}></div>
              
              <CardContent className="p-8 sm:p-10 relative">
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <DollarSign className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-amber-500/20 blur animate-pulse-slow"></div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('aiTechnologyAdvantage')}</h3>
                    <p className="text-gray-600 mb-6">{t('aiTechnologyDescription')}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {[
                        { icon: <LineChart className="h-4 w-4" />, text: "Pattern Recognition" },
                        { icon: <TrendingUp className="h-4 w-4" />, text: "Predictive Analysis" },
                        { icon: <TrendingDown className="h-4 w-4" />, text: "Risk Mitigation" },
                      ].map((item, i) => (
                        <div key={i} className="inline-flex items-center text-sm bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-amber-100">
                          {item.icon}
                          <span className="ml-1.5 text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                      onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span className="flex items-center">
                        {t('startAIInvesting')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
