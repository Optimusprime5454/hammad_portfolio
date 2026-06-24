import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { hero } = portfolioData;
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = hero.titles[titleIndex];
    const typingSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % hero.titles.length);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
        setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isDeleting, titleIndex, hero.titles]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Blobs */}
      <div className="blob top-[10%] left-[10%]" />
      <div className="blob bottom-[10%] right-[10%] bg-accent opacity-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Welcome to my universe</h2>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            I'm <span className="text-gradient">{hero.name}</span>
          </h1>
          <div className="h-12 mb-8">
            <span className="text-2xl lg:text-3xl font-bold text-gray-300">
              {displayText}
              <span className="animate-pulse ml-1 text-primary">|</span>
            </span>
          </div>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={hero.cvLink}
              download="Hammad_Khan.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary rounded-full font-bold shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-all flex items-center justify-center text-white no-underline"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-bold border border-white/10 hover:border-white/30 transition-all"
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-[40%_60%_70%_30%] animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-accent/20 rounded-[60%_40%_30%_70%] animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-white/10 glass">
              <img
                src={hero.avatar}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl border border-white/10"
            >
              <span className="text-2xl">Laravel</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl border border-white/10"
            >
              <span className="text-2xl">PHP</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
