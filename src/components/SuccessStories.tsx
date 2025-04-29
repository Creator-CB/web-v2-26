
import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  const { t } = useLanguage();
  
  const stories = [
    {
      name: 'Robert M.',
      initialInvestment: '$500',
      currentValue: '$5,300',
      period: '14 months',
      story: t('successStory1'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      name: 'Laura K.',
      initialInvestment: '$1,000',
      currentValue: '$8,800',
      period: '11 months',
      story: t('successStory2'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    }
  ];

  return (
    <section id="success-stories" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-600">{t('realResults')}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">{t('successStories')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('successStoriesSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold text-xl">{story.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500/10 text-amber-600 rounded-lg px-3 py-1 text-sm font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{t('returnOnInvestment')}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">{t('initial')}</p>
                      <p className="font-semibold text-lg">{story.initialInvestment}</p>
                    </div>
                    <div className="text-2xl text-gray-300 font-light self-center">→</div>
                    <div>
                      <p className="text-gray-500 text-sm">{t('currentValue')}</p>
                      <p className="font-semibold text-lg text-green-600">{story.currentValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{t('period')}</p>
                      <p className="font-semibold text-lg">{story.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{story.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">{t('startYourSuccess')}</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center">
              {t('startMyJourney')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
