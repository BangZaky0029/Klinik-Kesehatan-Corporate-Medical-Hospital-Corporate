
import React from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../data/dummy';

const Portfolio: React.FC = () => {
  const { portfolio } = dummyData;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-medical-600 font-bold uppercase tracking-widest text-sm mb-4">{portfolio.subtitle}</h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-corporate-dark font-display mb-6">
            {portfolio.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {portfolio.categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-medical-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-slate-100"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/90 via-corporate-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-medical-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
