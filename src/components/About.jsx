import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:text-left text-center"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl hidden lg:block" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8">
              Crafting <span className="text-gradient">Backend Excellence</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
              {about.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {about.stats.map((stat, idx) => (
                <div key={idx} className="glass p-4 sm:p-6 rounded-2xl border border-white/5 text-center transition-transform hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-black text-primary mb-1">{stat.value}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                  🚀
                </div>
                <h4 className="text-xl font-bold mb-2">Scalability</h4>
                <p className="text-sm text-gray-400">Building systems that grow with your business needs.</p>
              </div>
              <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all sm:translate-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-2xl mb-6">
                  🔒
                </div>
                <h4 className="text-xl font-bold mb-2">Security</h4>
                <p className="text-sm text-gray-400">Implementing top-tier auth and data protection.</p>
              </div>
            </div>
            <div className="space-y-6 sm:pt-12">
              <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-2xl mb-6">
                  ⚡
                </div>
                <h4 className="text-xl font-bold mb-2">Speed</h4>
                <p className="text-sm text-gray-400">Optimized queries and performance tuning.</p>
              </div>
              <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all sm:translate-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 text-2xl mb-6">
                  🛠️
                </div>
                <h4 className="text-xl font-bold mb-2">Maintenance</h4>
                <p className="text-sm text-gray-400">Clean, documented code for easy updates.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
