
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const CTA: React.FC = () => {
  const { cta } = dummyData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-medical-600 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-display mb-8 leading-tight">
              {cta.title}
            </h2>
            <p className="text-white/80 text-lg mb-12">
              {cta.description}
            </p>
            <button className="px-10 py-5 bg-white text-medical-600 font-bold rounded-xl shadow-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3">
              <span>{cta.buttonText}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
