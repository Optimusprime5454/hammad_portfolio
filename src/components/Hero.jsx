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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Background Blobs */}
      <div className="blob top-[10%] left-[10%]" />
      <div className="blob bottom-[10%] right-[10%] bg-accent opacity-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm lg:text-base">Welcome to my universe</h2>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            I'm <span className="text-gradient leading-[1.2]">{hero.name}</span>
          </h1>
          <div className="h-10 sm:h-12 mb-8">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300">
              {displayText}
              <span className="animate-pulse ml-1 text-primary">|</span>
            </span>
          </div>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href={hero.cvLink}
              download="Hammad_Khan.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-primary rounded-full font-bold shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-all flex items-center justify-center text-white no-underline text-sm sm:text-base"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 glass rounded-full font-bold border border-white/10 hover:border-white/30 transition-all text-sm sm:text-base"
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center order-first lg:order-last"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-[40%_60%_70%_30%] animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-accent/20 rounded-[60%_40%_30%_70%] animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-6 sm:inset-8 overflow-hidden rounded-full border-4 border-white/10 glass">
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
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10"
            >
              <span className="text-xl sm:text-2xl">Laravel</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10"
            >
              <span className="text-xl sm:text-2xl">PHP</span>
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
