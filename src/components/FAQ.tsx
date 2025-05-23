
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from './LanguageSelector';

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq1Q'),
      answer: t('faq1A')
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A')
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A')
    },
    {
      question: t('faq4Q'),
      answer: t('faq4A')
    },
    {
      question: t('faq5Q'),
      answer: t('faq5A')
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-amber-400">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gradient px-2">{t('faqTitle')}</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            {t('faqSubtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 sm:p-6 shadow-lg">
          <Accordion type="single" collapsible className="w-full text-white">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left font-medium text-base sm:text-lg py-3 sm:py-4 hover:text-amber-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-3 sm:pb-4 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 sm:p-6 border border-amber-500/20 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('moreQuestions')}</h3>
          <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{t('customPackageDesc')}</p>
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
            >
              {t('talkToBroker')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
