
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const Hero: React.FC = () => {
  const { hero } = dummyData;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-medical-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-medical-100 text-medical-700 text-sm font-semibold mb-6">
              {hero.badge}
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-corporate-dark font-display leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="px-8 py-4 bg-medical-600 text-white font-bold rounded-lg shadow-lg shadow-medical-200 hover:bg-medical-700 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                {hero.primaryCTA}
              </button>
              <button className="px-8 py-4 bg-white text-medical-600 font-bold border-2 border-medical-100 rounded-lg hover:border-medical-600 transition-all w-full sm:w-auto">
                {hero.secondaryCTA}
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-medical-200">
              {hero.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-corporate-dark font-display">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1505751172107-573967a4f22f?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Services" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Abstract backgrounds */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-medical-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
