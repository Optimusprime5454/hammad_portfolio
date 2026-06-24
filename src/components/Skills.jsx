import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  // Duplicate skills to create a seamless loop
  const skillsRow1 = [...portfolioData.skills, ...portfolioData.skills];
  const skillsRow2 = [...portfolioData.skills].reverse();
  const doubleRow2 = [...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 mb-16">
        <div className="text-center" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A continuous flow of modern tools and technologies I use to build high-performance web solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="flex flex-col gap-8 select-none">
        {/* First Row: Moving Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            {skillsRow1.map((skill, idx) => (
              <div 
                key={`${skill.name}-row1-${idx}`}
                className="flex items-center gap-4 px-8 py-5 glass rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 min-w-max group/item hover:bg-white/5"
              >
                <div className="text-3xl text-primary group-hover/item:scale-110 transition-transform duration-300">
                  <skill.icon />
                </div>
                <span className="text-xl font-medium text-gray-200 group-hover/item:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row: Moving Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            {doubleRow2.map((skill, idx) => (
              <div 
                key={`${skill.name}-row2-${idx}`}
                className="flex items-center gap-4 px-8 py-5 glass rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 min-w-max group/item hover:bg-white/5"
              >
                <div className="text-3xl text-accent group-hover/item:scale-110 transition-transform duration-300">
                  <skill.icon />
                </div>
                <span className="text-xl font-medium text-gray-200 group-hover/item:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Skills;
