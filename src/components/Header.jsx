import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-4xl mx-auto glass-effect rounded-full px-10 py-4 flex items-center justify-between border border-white/10 shadow-2xl">
        <div className="text-xl font-black tracking-tighter text-primary">
          BARBER<span className="text-white">ONE</span>
        </div>
        
        <nav className="flex items-center gap-6 md:gap-10">
          {['Servicios', 'Arte', 'Ubicación'].map((item) => (
            <motion.a 
              whileHover={{ scale: 1.1, color: '#f2ca50' }}
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`}
              className="text-xs font-bold text-gray-400 transition-colors uppercase tracking-[0.2em]"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;