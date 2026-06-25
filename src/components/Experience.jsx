import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Work <span className="text-gradient">History</span></h2>
          <p className="text-gray-400">My professional journey in the tech world.</p>
        </div>

        <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent md:ml-0" />

          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative mb-12 md:mb-24">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 -translate-x-[7px] md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#6366f1] z-10 md:ml-0" />

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 md:ml-auto'} ml-10 md:ml-0`}
              >
                <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all">
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block px-4 py-1 rounded-full bg-white/5 text-[10px] sm:text-xs text-gray-400 font-bold mb-6 italic">
                    {exp.period}
                  </span>
                  <ul className={`space-y-3 text-gray-400 text-sm ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    {exp.responsibilities.map((res, i) => (
                      <li key={i} className={`flex items-start gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                         <span className="text-primary shrink-0">▹</span>
                         {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
