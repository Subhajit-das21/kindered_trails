
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, HeartHandshake, Truck } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Vet Approved",
    desc: "Every product in our shop is hand-picked and approved by top veterinary experts.",
    color: "#8FB996"
  },
  {
    icon: Leaf,
    title: "Purely Natural",
    desc: "We prioritize organic, sustainable, and non-toxic ingredients for health and longevity.",
    color: "#A8DADC"
  },
  {
    icon: HeartHandshake,
    title: "Loved by Many",
    desc: "Over 10,000+ happy tails and satisfied parents trust Kindred Tails every day.",
    color: "#F4A261"
  },
  {
    icon: Truck,
    title: "Caring Delivery",
    desc: "Fast, gentle, and eco-friendly delivery right to your doorstep, with a personal touch.",
    color: "#6E625A"
  }
];

const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF8F1]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F3EBDD] hover:shadow-xl hover:shadow-[#F4A261]/5 transition-all duration-500 group"
            >
              <div 
                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon size={32} style={{ color: item.color }} />
              </div>
              <h3 className="text-xl font-medium text-[#2B1E16] mb-3">{item.title}</h3>
              <p className="text-[#6E625A] leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
