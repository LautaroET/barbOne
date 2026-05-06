import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#0e0e0e]" id="ubicacion">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-[#161616] p-8 md:p-12 border border-white/5 rounded-3xl overflow-hidden">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Donde encontrarnos</h2>
              <p className="text-gray-400 max-w-sm">Estamos ubicados en el corazón de Catamarca para brindarte el mejor servicio.</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: 'location_on', title: 'Dirección', detail: 'Pje. Argentino, K4700, Catamarca' },
                { icon: 'schedule', title: 'Horarios', detail: 'Lunes a Sábado: 10:00 - 20:00' },
                { icon: 'phone_iphone', title: 'WhatsApp', detail: '0383 495-3696' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQaIvPwDMSpulMrmUn5IqG2TSmGN4cfRDxMo6OlLE18zl9_1Cbz5c6JoYgn5hAivZE8jKhdN00cMujRIE9vPvyZS40AD04waZvqti6NJY0ZKt5P7tJ4VLqmlVOlxNWA88rTbnigCbVaop73rR6m1w5f2dI2-nb_-7NkqQtObo5R2Vw51Md-04iipUJN5HJpBlF3CFvYSryOZe2rZ6G3jHnKTcuWXmKLny2FSg9QcQG3pg4OqXH1igrR3bXQwpioGIgZVmjjOa84_0"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Mapa Ubicación"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black p-3 rounded-full animate-pulse shadow-[0_0_20px_rgba(242,202,80,0.5)]">
              <span className="material-symbols-outlined">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;