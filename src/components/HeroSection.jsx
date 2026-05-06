import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0e0e0e] z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Ub8W1zPHAGfxaAbV0Ryly3qC0GA9kKp03sYNmoWg0xNMR6Sz8zLoO6b4B6dkU0zmM_bF2t1yTFdEy8cW7d7AiCR8tyq8fyedYAcIM568LR_vrtMimirmXc5Hhoca4T_oOrd8KcFIiV_GpNIgMdGSQpI8awk7KRMFgZ0JgKFtQj8uuNP8eEj71FPztGKYB9xaMKRipYjHuW3efjqkud4Q2GFIft1FTPVIW4PHtf9m8KPP56qlpuCOeHaLin7Zn0ci7RV5-Nvk69I"
          className="w-full h-full object-cover"
          alt="Barber Background"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block text-primary tracking-[0.5em] uppercase text-xs mb-6 font-black"
        >
          Tradición & Vanguardia
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter"
        >
          BARBER <span className="text-gradient">ONE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light italic leading-relaxed"
        >
          "Mi mundo, Tu lugar."
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a href="#servicios" className="group relative text-white font-bold uppercase tracking-widest text-sm">
            Explorar Experiencia
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <span className="material-symbols-outlined text-4xl font-light">south</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;