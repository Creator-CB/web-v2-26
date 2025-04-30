
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t('testimonialUser1'),
      role: t('testimonialRole1'),
      content: t('testimonialText1'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
      flag: '🇷🇴'
    },
    {
      name: t('testimonialUser2'),
      role: t('testimonialRole2'),
      content: t('testimonialText2'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
      flag: '🇮🇹'
    },
    {
      name: t('testimonialUser3'),
      role: t('testimonialRole3'),
      content: t('testimonialText3'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80',
      flag: '🇬🇧'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-400">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl mb-2 text-gradient">{t('testimonialTitle')}</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('testimonialSubtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl p-8 relative overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-amber-500/20" />
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                  />
                  <span className="absolute -bottom-1 -right-1 text-lg">{testimonial.flag}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400" fill="#FBBF24" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Evaluat ca Excelent pe baza experiențelor clienților</p>
          <div className="flex justify-center items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-amber-400" fill="#FBBF24" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-gray-400 ml-1">(din 700+ recenzii)</span>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/10">
              <p className="text-amber-400 font-semibold">{t('avgProfit')}</p>
              <p className="text-2xl font-bold text-white">+19.4%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/10">
              <p className="text-green-400 font-semibold">{t('profitableClients')}</p>
              <p className="text-2xl font-bold text-white">96.3%</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/10">
              <p className="text-blue-400 font-semibold">{t('avgTimeToProfit')}</p>
              <p className="text-2xl font-bold text-white">12 zile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
