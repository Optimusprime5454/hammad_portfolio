import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-[#05001c]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Academic <span className="text-gradient">Background</span></h2>
          <p className="text-gray-400">My educational qualifications and learning path.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 hover:border-accent/20 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl sm:text-3xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-accent font-medium mb-4 text-sm sm:text-base">{edu.school}</p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-gray-500 font-bold tracking-widest bg-white/5 px-4 sm:px-6 py-2 rounded-full italic">
                <span>{edu.period}</span>
                <span className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full" />
                <span>GPA: {edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
