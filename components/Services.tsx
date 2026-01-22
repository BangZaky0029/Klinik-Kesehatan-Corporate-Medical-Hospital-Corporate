
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const Services: React.FC = () => {
  const { services } = dummyData;

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-medical-600 font-bold uppercase tracking-widest text-sm mb-4">{services.subtitle}</h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-corporate-dark font-display mb-6">
            {services.title}
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-medical-100 transition-all group"
            >
              <div className="w-16 h-16 bg-medical-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4 group-hover:text-medical-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
