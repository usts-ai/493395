import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#007BFF]/85 to-[#003366]/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
        >
          Pret a finaliser votre plateforme de mise en relation ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          Audit de l&apos;existant, finalisation du web, developpement mobile et mise en production — un seul socle, deux applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#top"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FF6600] hover:bg-[#ff7a26] text-white font-semibold transition-all duration-300 hover:scale-[1.03]"
          >
            Lancer le projet
          </a>
          <a
            href="#fonctionnement"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-medium border border-white/25 transition-all duration-300"
          >
            Voir le parcours
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
