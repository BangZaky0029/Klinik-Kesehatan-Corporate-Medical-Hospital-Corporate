
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const About: React.FC = () => {
  const { about } = dummyData;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <img 
                src={about.image} 
                alt="About MedicaCorp" 
                className="rounded-3xl shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-medical-600 text-white p-8 rounded-2xl shadow-lg z-20 hidden md:block">
                <p className="text-4xl font-bold font-display">15+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Tahun Berpengalaman</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h4 className="text-medical-600 font-bold uppercase tracking-widest text-sm mb-4">{about.subtitle}</h4>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-corporate-dark font-display mb-6 leading-tight">
              {about.title}
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {about.description}
            </p>
            <ul className="space-y-4 mb-10">
              {about.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-medical-100 text-medical-600 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <button className="px-8 py-3 bg-corporate-dark text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
