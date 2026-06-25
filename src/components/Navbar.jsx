import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter cursor-pointer"
        >
          <span className="text-white">HAMMAD</span>
          <span className="text-primary tracking-widest ml-1">KHAN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: '#6366f1' }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center space-x-4 border-l border-gray-700 pl-8">
            <a href="https://github.com/Hammadkhan010?tab=repositories" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hammad-khhan/" target="_blank" rel="noreferrer" className="text-xl text-gray-400 hover:text-white transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="relative z-[60] text-2xl text-white p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { clipPath: "circle(150% at 100% 0%)", opacity: 1 },
          closed: { clipPath: "circle(0% at 100% 0%)", opacity: 0 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed inset-0 lg:hidden bg-[#030014] z-50 flex flex-col items-center justify-center pointer-events-none data-[open=true]:pointer-events-auto"
        data-open={isMobileMenuOpen}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
             className="flex items-center gap-8 pt-8"
          >
            <a href="https://github.com/Hammadkhan010?tab=repositories" target="_blank" rel="noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hammad-khhan/" target="_blank" rel="noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
