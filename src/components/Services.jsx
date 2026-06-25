import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-[#05001c]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Professional <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400">High-quality backend solutions tailored for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl sm:text-3xl mx-auto mb-6 sm:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <service.icon />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert solutions in {service.title.toLowerCase()} focusing on performance, security, and scalability.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
