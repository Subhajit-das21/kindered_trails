
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background parallax movement multiplier
  const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#F3EBDD]">
      {/* Decorative Floating Hearts with Parallax */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-20"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: (i * 15) % 100 + "%", 
              y: (i * 23) % 100 + "%",
              scale: 0.5 + (i * 0.1) % 1
            }}
            animate={{ 
              y: ["0%", "20%"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-[#F4A261]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-accent text-[#6E625A] text-2xl mb-8 block italic">Our Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-medium text-[#2B1E16] mb-12 leading-tight max-w-5xl mx-auto">
            “Every tail wag, every purr, every gentle nudge — <span className="text-[#F4A261]">we care</span> like it’s our own.”
          </h2>
          <div className="w-20 h-1 bg-[#F4A261] mx-auto mb-12 rounded-full"></div>
          <p className="text-[#6E625A] text-xl font-light max-w-3xl mx-auto leading-relaxed">
            At Kindred Tails, we believe that the bond between a human and their pet is one of life's most sacred connections. We've dedicated ourselves to creating a world where that connection is nurtured with premium products and heartfelt care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
