
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Stethoscope, GraduationCap, Building2 } from 'lucide-react';

const services = [
  {
    title: "Signature Grooming",
    icon: Scissors,
    bg: "#F3EBDD",
    desc: "A spa day designed for comfort. We use organic shampoos and focus on creating a stress-free experience."
  },
  {
    title: "Kindred Vet Care",
    icon: Stethoscope,
    bg: "#A8DADC",
    desc: "Gentle medical consultations by vets who prioritize preventative care and holistic wellness."
  },
  {
    title: "Training Together",
    icon: GraduationCap,
    bg: "#8FB996",
    desc: "Positive reinforcement training that builds a stronger, more loving bond between you and your pet."
  },
  {
    title: "Luxury Boarding",
    icon: Building2,
    bg: "#F4A261",
    desc: "A home away from home. Cozy suites, regular play sessions, and constant supervision."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FFF8F1] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2B1E16] mb-6">World-Class Care</h2>
          <p className="text-[#6E625A] text-lg font-light max-w-2xl mx-auto">
            Our services aren't just about maintenance — they're about enhancing your pet's quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[3rem] shadow-sm hover:shadow-lg transition-all border border-[#F3EBDD] group"
            >
              <div 
                className="w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500"
                style={{ backgroundColor: service.bg + '30' }}
              >
                <service.icon size={40} style={{ color: service.bg }} />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#2B1E16] mb-4 text-center md:text-left">{service.title}</h3>
                <p className="text-[#6E625A] leading-relaxed font-light text-center md:text-left">
                  {service.desc}
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <button className="text-sm font-semibold text-[#2B1E16] flex items-center gap-2 group/btn">
                    Learn More 
                    <span className="w-6 h-0.5 bg-[#F4A261] transition-all group-hover/btn:w-10"></span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
