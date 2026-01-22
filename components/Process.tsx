
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const Process: React.FC = () => {
  const { process } = dummyData;

  return (
    <section className="py-24 bg-medical-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-800 -skew-x-12 transform translate-x-1/2 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-medical-400 font-bold uppercase tracking-widest text-sm mb-4">{process.subtitle}</h4>
            <h2 className="text-3xl lg:text-4xl font-extrabold font-display mb-6">
              {process.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-medical-700/50 -z-10"></div>
          
          {process.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center lg:text-left"
            >
              <div className="w-16 h-16 bg-medical-600 rounded-full flex items-center justify-center text-2xl font-bold mb-8 mx-auto lg:mx-0 shadow-xl shadow-medical-900/50 border-4 border-medical-800">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-medical-100/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
