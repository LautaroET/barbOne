import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-2xl font-black text-primary mb-8 tracking-tighter">
          BARBER ONE
        </div>
        
        <div className="flex gap-8 mb-8 text-sm uppercase font-bold tracking-widest">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">WhatsApp</a>
        </div>

        <p className="text-gray-700 text-xs text-center uppercase tracking-widest">
          © 2026 BARBER ONE. MI MUNDO, TU LUGAR. <br /> Catamarca, Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;