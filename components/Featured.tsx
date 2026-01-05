
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, ShoppingBag, Plus } from 'lucide-react';

const categories = ["All", "Sleeping", "Walking", "Dining", "Playing"];

const products = [
  {
    id: 1,
    name: "Velvet Cloud Bed",
    category: "Sleeping",
    price: "$124",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Organic Silk Leash",
    category: "Walking",
    price: "$45",
    image: "https://images.unsplash.com/photo-1591333139264-28414273b532?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Artisan Ceramic Bowl",
    category: "Dining",
    price: "$38",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Natural Wool Toy",
    category: "Playing",
    price: "$18",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Cashmere Pet Wrap",
    category: "Sleeping",
    price: "$210",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Titanium Collar",
    category: "Walking",
    price: "$85",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600"
  }
];

const Featured: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="featured" className="py-32 bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#F4A261] font-semibold tracking-widest text-sm uppercase mb-4 block">Exclusively Ours</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2B1E16] mb-6">The Comfort Collection</h2>
            <p className="text-[#6E625A] text-lg font-light">Meticulously crafted essentials for the discerning pet parent.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#2B1E16] text-white border-[#2B1E16]' 
                    : 'bg-white text-[#6E625A] border-[#F3EBDD] hover:border-[#F4A261]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 border border-[#F3EBDD]/50"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EBDD]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#2B1E16] shadow-sm">
                      Premium
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-white text-[#2B1E16] py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold shadow-2xl hover:bg-[#F4A261] hover:text-white transition-all">
                      <ShoppingBag size={18} />
                      Quick Add
                    </button>
                  </div>

                  <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:text-[#F4A261] transform transition-transform active:scale-90 opacity-0 group-hover:opacity-100 duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#F4A261] uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1.5 text-[#2B1E16]">
                      <Star size={14} className="fill-[#F4A261] text-[#F4A261]" />
                      <span className="text-sm font-bold">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-[#2B1E16] mb-4 group-hover:text-[#F4A261] transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light text-[#2B1E16]">{product.price}</span>
                    <div className="w-10 h-10 rounded-full border border-[#F3EBDD] flex items-center justify-center text-[#2B1E16] group-hover:bg-[#2B1E16] group-hover:text-white transition-all cursor-pointer">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
