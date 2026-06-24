import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030014]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-white">HAMMAD</span>
            <span className="text-primary tracking-widest ml-1">KHAN</span>
          </div>
          
          <div className="flex items-center gap-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xl hover:text-primary transition-all"><FaGithub /></a>
            <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xl hover:text-primary transition-all"><FaLinkedin /></a>
            <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xl hover:text-primary transition-all"><FaFacebook /></a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} Hammad Khan. All Rights Reserved. Designed with ❤️ for Backend Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
