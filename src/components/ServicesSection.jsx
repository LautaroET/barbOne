import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    { icon: 'content_cut', title: 'Corte Premium', desc: 'Precisión absoluta en cada línea.' },
    { icon: 'face', title: 'Barba Real', desc: 'Ritual clásico con toalla caliente.' },
    { icon: 'payments', title: 'NFC Ready', desc: 'Pagá rápido con tu celular.' },
    { icon: 'stars', title: 'Elite Lounge', desc: 'Un espacio diseñado para vos.' },
  ];

  return (
    <section className="py-32 bg-[#0e0e0e]" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-black text-white italic tracking-tighter">EL ESTÁNDAR <br /> <span className="text-primary">DE ORO</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-[#121212] border border-white/5 rounded-2xl group cursor-default"
            >
              <span className="material-symbols-outlined text-4xl text-primary/30 group-hover:text-primary transition-colors mb-8 block">
                {s.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;