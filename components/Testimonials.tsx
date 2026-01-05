
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "Parent of 'Cooper'",
    text: "Kindred Tails isn't just a shop; it's a sanctuary. Cooper is always so calm after his grooming sessions, and the products are simply unmatched in quality.",
    avatar: "https://picsum.photos/id/1027/100/100"
  },
  {
    name: "Julian Brooks",
    role: "Parent of 'Bella'",
    text: "The selection of organic foods and natural toys has truly changed Bella's energy. I trust them implicitly with every aspect of her well-being.",
    avatar: "https://picsum.photos/id/1005/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "Parent of 'Mochi'",
    text: "I was skeptical about premium pet care until I visited their grooming spa. The level of detail and love they put into their work is breathtaking.",
    avatar: "https://picsum.photos/id/1012/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF8F1]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2B1E16] mb-4">Heartfelt Stories</h2>
          <p className="text-[#6E625A] text-lg font-light">Join thousands of happy families in our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm relative border border-[#F3EBDD] hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <Star size={18} className="text-[#F4A261] fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-[#6E625A] text-lg italic mb-8 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-[#2B1E16]">{item.name}</h4>
                  <p className="text-sm text-[#6E625A]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
