import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Client <span className="text-gradient">Feedback</span></h2>
          <p className="text-gray-400">What people say about my work and dedication.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {portfolioData.testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 max-w-md relative"
            >
              <div className="absolute top-8 right-10 text-6xl text-primary/10 font-serif leading-none">"</div>
              <div className="flex items-center gap-4 mb-8">
                <img src={testi.image} alt={testi.name} className="w-14 h-14 rounded-full border-2 border-primary/20 p-1" />
                <div>
                  <h4 className="font-bold text-lg">{testi.name}</h4>
                  <p className="text-sm text-primary">{testi.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed relative z-10">"{testi.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
