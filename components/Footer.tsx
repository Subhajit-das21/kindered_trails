
import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B1E16] text-[#F3EBDD] pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="bg-[#FFF8F1] rounded-[4rem] p-12 md:p-20 mb-24 text-center text-[#2B1E16] relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-[#F4A261] pointer-events-none rounded-full blur-[120px]"
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Give Them The Best.</h2>
            <p className="text-[#6E625A] text-xl font-light mb-12 max-w-2xl mx-auto">
              Ready to elevate your pet's lifestyle? Visit our flagship boutique or book your first grooming session today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#F4A261] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#2B1E16] transition-all duration-300 transform hover:scale-105 shadow-xl">
                Shop The Collection
              </button>
              <button className="bg-transparent text-[#2B1E16] border border-[#2B1E16]/10 px-10 py-4 rounded-full text-lg font-medium hover:bg-[#2B1E16]/5 transition-all">
                Find a Store
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F4A261] flex items-center justify-center">
                <Heart className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">Kindred Tails</span>
            </div>
            <p className="text-[#F3EBDD]/60 text-lg font-light max-w-sm mb-8">
              A premium pet care brand dedicated to luxury, emotional connection, and holistic wellness for our furry family members.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-[#F3EBDD]/10 flex items-center justify-center hover:bg-[#F4A261] hover:border-[#F4A261] transition-all group">
                  <Icon size={20} className="group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-8">Care Services</h4>
            <ul className="space-y-4 text-[#F3EBDD]/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Grooming Spa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Veterinary Clinic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pet Boarding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Academy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[#F3EBDD]/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F3EBDD]/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[#F3EBDD]/40 text-sm">
          <p>© 2024 Kindred Tails. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
