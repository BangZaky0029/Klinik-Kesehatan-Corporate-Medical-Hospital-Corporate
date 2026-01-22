
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const Testimonials: React.FC = () => {
  const { testimonials } = dummyData;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-medical-600 font-bold uppercase tracking-widest text-sm mb-4">{testimonials.subtitle}</h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-corporate-dark font-display mb-6">
            {testimonials.title}
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-6">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow">"{item.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-medical-100" />
                <div className="text-left">
                  <h4 className="font-bold text-corporate-dark">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
