import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const items = [
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5N9WkIGrgYtNer4K-Kb630KRQJxwFAuyYK__MqS0UyLQAlGwGwe5EwXIZbVCpvVcTVeTv34HmOFLlDqffQioaR96DwA9_g2YAdb4HLdZ7G2Br4Ez-BbUE09AlIN_CoJ6CeNOYLzHPt0Ky7hzfxdwTcUzAKxyf-gg-sgtaD8e4KeU_9ZcKKhlg_K42fmVsLoo2IMkYn_hwTGzOIRx_wNVZaH1RtjW1A1uHUH6Fw13ISBsXzNaWHpUkRJm1gR0BYRSa7fs4d5tmtWI', 
      label: 'Fade Moderno',
      fallback: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500&auto=format&fit=crop'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz358LiffFm7kAs81VBHxyn4Xati32BZgedIcplJgYAbmOLtqKcKJAaUDgi_GCXJm3H1ifexPC0lzA0gCaJCxtoFYVa4aVCp3EAxxaCSTra-vyoIp-_w_uSwQvwMxCIr04OKgnVyt-C54uci2767O8EfNf62aAu5yCNr2WuR5rh2_mobelPt3U6vZ-ouegMTzNnnLzf95qGeHMVaD645TtOvIdGa4KUeeFzcr9VbsyvaTs5nyylOiOHrhZvJnsjLgATbF1bpUyEpg', 
      label: 'Perfilado Barba',
      fallback: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnRY3ZBY5TSiQ1nF0j6GFryWfdp1goU02i9_6hJmVZ0m7sHBafrBv-HEZBjG6SB1dLIZ_InbS1dTOAJbscT6WqB0JjGez4mfSpNwYkEkHlfzikAWS2BIwGSPdCOxlz5EgzV7PoZM_1HYZG_BeKvCHmiZvBHuSk7Bb4yzjmV8sNNwHCIxnN9mJVCyHcPGdVcEOrSbCdWvYTXl4tFAFi2YzT2RAl2BWWrLwhgNDVJrniNNpIcmdTZmvxNtDKxjTWPujo4cGHM3qf1_Q', 
      label: 'Corte Clásico',
      fallback: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=500&auto=format&fit=crop'
    },
    { 
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWm3Jw0z6p5HYKIJc7nww_a0XcUPvJe6hVLdjuDH1wz8tPczqErX6_JctZWmXjPtmT0l_r4AN2LbjbN_I8HY9YgCB-5d9PJk0-GJSJm_CUkEeGC7M__HB4X0jKbAMhDgtUdey_jY89QpJ4mnh4y-rUA3IN0L__hakYhc8NswpGiDfzhXvKMfMWf3F5QNxZgHL9L2tzxzjpO8D_40z9Jwd-L0279RcqvrQY-Cdn19Lj3va2ehH0sJjqEE-ikxxqz65cbNt6bjTLyoE', 
      label: 'Detalle Élite',
      fallback: 'https://images.unsplash.com/photo-1512690196252-7170ef6928bc?q=80&w=500&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-32 bg-black" id="arte">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-white mb-12 tracking-tighter italic"
        >
          NUESTRO <span className="text-primary">ARTE</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#111] group border border-white/5"
            >
              <img 
                src={item.src} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt={item.label}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; // Previene bucles infinitos
                  e.target.src = item.fallback;
                }}
              />
              
              {/* Overlay de información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-1">Portfolio</p>
                <h4 className="text-white font-bold text-lg leading-none">{item.label}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;