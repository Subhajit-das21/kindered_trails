
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, MessageCircle, PawPrint } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const CareAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a premium pet care expert at Kindred Tails. A customer asks: "${query}". Provide a short (max 3 sentences), warm, and professional recommendation. Focus on high-end care, nutrition, or grooming. Always mention that our expert team is here to help personally.`,
        config: {
          systemInstruction: "You are Kindred, an AI pet care concierge. You are empathetic, sophisticated, and deeply knowledgeable about dogs and cats.",
        },
      });
      setResponse(result.text || "I'm having a little trouble fetching that advice. Please reach out to our concierge directly!");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("I'm resting my paws at the moment. Please try again in a few minutes.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-[#2B1E16] rounded-[4rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A261]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F4A261] mb-6 border border-white/5">
              <Sparkles size={16} />
              <span className="text-sm font-medium uppercase tracking-widest">AI Concierge</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
              Tailored Advice for Your <span className="italic text-[#F4A261]">Kindred</span> Companion.
            </h2>
            <p className="text-white/70 text-lg font-light mb-10 leading-relaxed max-w-xl">
              Unsure about the best diet for your kitten or the perfect grooming routine for your senior dog? Our AI Care Assistant provides instant, expert guidance.
            </p>
            
            <form onSubmit={handleConsult} className="relative group">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your pet (e.g., 'My dog has a sensitive coat...')"
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 pr-16 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/50 transition-all placeholder:text-white/30 text-white"
              />
              <button 
                disabled={isLoading}
                className="absolute right-2 top-2 w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center text-[#2B1E16] hover:bg-white transition-all transform active:scale-95 disabled:opacity-50"
              >
                {isLoading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <PawPrint size={20} />
                  </motion.div>
                ) : <Send size={20} />}
              </button>
            </form>

            <AnimatePresence>
              {response && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 bg-white/5 border border-white/10 rounded-3xl"
                >
                  <p className="text-[#F4A261] font-accent text-2xl mb-2">Kindred says:</p>
                  <p className="text-white/90 leading-relaxed font-light italic">"{response}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:w-1/2 relative z-10 hidden lg:block">
            <div className="relative">
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Cat" 
                className="rounded-[3rem] w-full h-[500px] object-cover shadow-2xl transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-xl max-w-xs border border-[#F3EBDD]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4A261] flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <span className="font-semibold text-[#2B1E16]">Expert Concierge</span>
                </div>
                <p className="text-[#6E625A] text-sm leading-relaxed">
                  "Our goal is to ensure your companion lives their longest, happiest life by your side."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareAssistant;
