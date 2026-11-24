import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Creez votre profil',
    text: 'Inscription, authentification securisee et roles personnalises pour chaque type d\u2019utilisateur.',
  },
  {
    num: '02',
    title: 'Recherchez et demandez',
    text: 'Filtres intelligents, demandes de mise en relation et validation en un parcours fluide.',
  },
  {
    num: '03',
    title: 'Echangez et suivez',
    text: 'Messagerie integree, notifications push et tableau de suivi jusqu a la finalisation.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="fonctionnement" className="relative py-20 sm:py-28 mesh-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14 sm:mb-20"
        >
          <p className="text-[#007BFF] font-semibold tracking-widest uppercase text-xs mb-3">
            Parcours
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#003366] leading-tight">
            Une mise en relation en trois gestes
          </h2>
          <p className="mt-4 text-[#5A6A7A] text-base sm:text-lg">
            De la recherche a la validation, chaque etape est pensee pour etre rapide, claire et engageante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#007BFF] via-[#40E0D0] to-[#007BFF] opacity-40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#007BFF]/10 hover:border-[#40E0D0]/50 transition-colors duration-300"
            >
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#007BFF] to-[#40E0D0]">
                {step.num}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#003366] mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-[#5A6A7A] text-sm sm:text-base leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
