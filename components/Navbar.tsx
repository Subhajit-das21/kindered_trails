
import React, { useState, useEffect } from 'react';
import { Heart, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Philosophy", href: "#story" },
    { name: "Boutique", href: "#featured" },
    { name: "Care Services", href: "#services" },
    { name: "Reviews", href: "#testimonials" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 md:px-12 py-4 ${
          isScrolled ? 'pt-6' : 'pt-10'
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-[2.5rem] transition-all duration-700 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-2xl shadow-2xl shadow-[#2B1E16]/5 border border-white/40' 
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-12 h-12 rounded-2xl bg-[#2B1E16] flex items-center justify-center shadow-lg transition-transform"
            >
              <Heart className="text-[#F4A261] w-6 h-6 fill-current" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[#2B1E16] text-2xl font-bold tracking-tight leading-none">Kindred</span>
              <span className="text-[#F4A261] text-xs font-bold uppercase tracking-[0.2em] leading-none mt-1">Tails</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#6E625A] text-sm font-semibold hover:text-[#2B1E16] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F4A261] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-3 text-[#2B1E16] hover:bg-[#F4A261]/10 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="p-3 text-[#2B1E16] hover:bg-[#F4A261]/10 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-2 right-2 w-4 h-4 bg-[#F4A261] text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 text-[#2B1E16] hover:bg-[#F4A261]/10 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
            <button className="hidden lg:block bg-[#2B1E16] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#F4A261] transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-[#2B1E16]/10">
              Book Concierge
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[100] bg-white lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <Heart className="text-[#F4A261] w-8 h-8 fill-current" />
                <span className="text-2xl font-bold">Kindred Tails</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-3">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-4xl font-medium text-[#2B1E16]">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <button className="w-full bg-[#2B1E16] text-white py-6 rounded-3xl text-xl font-bold shadow-2xl">
                Book Concierge
              </button>
              <p className="text-center mt-6 text-[#6E625A]">Contact our flagship boutique</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
