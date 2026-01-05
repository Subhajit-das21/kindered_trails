
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Bone, PawPrint, Heart, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yIcons = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.1]);

  return (
    <section ref={targetRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FFF8F1]">
      {/* Decorative Parallax Elements */}
      <motion.div style={{ y: yIcons }} className="absolute inset-0 pointer-events-none z-10">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-[#F3EBDD] opacity-40"
        >
          <PawPrint size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] right-[8%] text-[#F3EBDD] opacity-40"
        >
          <Bone size={100} />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#F4A261]"></div>
            <span className="font-accent text-[#F4A261] text-3xl italic">Love in every detail.</span>
            <div className="w-12 h-[1px] bg-[#F4A261]"></div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium text-[#2B1E16] mb-10 leading-[0.9] tracking-tight">
            Elevate Their <br />
            <span className="italic text-[#6E625A] relative">
              World.
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 left-0 h-2 bg-[#F4A261]/20 rounded-full"
              />
            </span>
          </h1>

          <p className="text-[#6E625A] text-xl md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            Luxury care meets radical empathy. We provide a safe, loving sanctuary and curated essentials for your most precious companions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#2B1E16] text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-[#F4A261] transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center gap-3 group">
              Explore Shop
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <Heart size={20} className="fill-current" />
              </motion.div>
            </button>
            <button className="bg-white/80 backdrop-blur-md text-[#2B1E16] border border-[#F3EBDD] px-12 py-5 rounded-full text-lg font-semibold hover:bg-white transition-all duration-500 transform hover:scale-105 flex items-center gap-3">
              <Play size={18} className="fill-current" />
              Watch Story
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Image / Soft Glow with Parallax - Enhanced Visibility */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=90&w=2000" 
          alt="Premium Dog" 
          className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F1] via-[#FFF8F1]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F1]/40 via-transparent to-[#FFF8F1]/40"></div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#2B1E16]/40 cursor-pointer p-4 hover:text-[#F4A261] transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
