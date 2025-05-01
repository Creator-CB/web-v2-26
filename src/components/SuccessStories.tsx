
import React from 'react';
import { ArrowRight, TrendingUp, Award, Briefcase, ChartBar, Star, DollarSign } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      icon: <ChartBar className="h-6 w-6 text-amber-500" />
    },
    {
      name: 'Sarah Johnson',
      title: t('AIInvestmentDirector'),
      achievement: t('brokerAchievement2'),
      stats: '573%',
      period: t('over2Years'),
      expertise: t('predictiveAnalytics'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <TrendingUp className="h-6 w-6 text-amber-500" />
    },
    {
      name: 'David Chen',
      title: t('quantAnalysisHead'),
      achievement: t('brokerAchievement3'),
      stats: '398%',
      period: t('over18Months'),
      expertise: t('machineLearningSolutions'),
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      icon: <Award className="h-6 w-6 text-amber-500" />
    }
  ];

  return (
    <section id="broker-achievements" className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-600">{t('innovationInInvesting')}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-5xl mb-4">{t('ourAIInvestmentExperts')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aiExpertsDescription')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brokerAchievements.map((broker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56">
                <img 
                  src={broker.image} 
                  alt={broker.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-bold text-2xl text-white mb-1">{broker.name}</h3>
                  <p className="text-white/90 font-medium">{broker.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-amber-500/10 p-2 rounded-lg mr-3">
                      {broker.icon}
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{broker.expertise}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-3xl font-bold text-green-600">{broker.stats}</p>
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
                    className="text-amber-600 hover:text-amber-700 p-0 h-auto flex items-center text-sm font-medium"
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('learnStrategy')}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-100 rounded-xl p-8 shadow-md">
            <div className="inline-block p-3 bg-amber-500/10 rounded-full mb-4">
              <DollarSign className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('aiTechnologyAdvantage')}</h3>
            <p className="text-gray-600 mb-6">{t('aiTechnologyDescription')}</p>
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  {t('startAIInvesting')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
