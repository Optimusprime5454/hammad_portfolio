import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400">Some of my most impactful backend and full-stack work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-[2rem] overflow-hidden border border-white/5 group hover:border-primary/20 transition-all flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary-300 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 sm:mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <a href={project.github} className="flex-1 glass py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all font-bold text-sm">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} className="flex-1 bg-primary py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-all font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)] text-sm">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
