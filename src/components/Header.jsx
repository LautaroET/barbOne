import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Asumiendo que usas lucide-react para los iconos

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Servicios', 'Arte', 'Ubicación'];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-4xl mx-auto glass-effect rounded-full px-6 md:px-10 py-4 flex items-center justify-between border border-white/10 shadow-2xl relative">
        
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-primary">
          BARBER<span className="text-white">ONE</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
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

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 glass-effect rounded-3xl p-6 border border-white/10 flex flex-col items-center gap-6 md:hidden shadow-2xl"
            >
              {menuItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('ó', 'o')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-gray-300 uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
