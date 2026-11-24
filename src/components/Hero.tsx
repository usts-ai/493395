import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Equipe collaborant autour d une table de travail"
          className="w-full h-full object-cover scale-105"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[8%] w-40 h-40 sm:w-64 sm:h-64 rounded-full border border-white/20"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-[5%] w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-[#40E0D0]/15 blur-xl"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 sm:pb-24 sm:pt-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#40E0D0] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4"
        >
          Plateforme de mise en relation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl mb-6"
        >
          Nexora
          <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold text-white/90">
            Connectez les bonnes personnes,{' '}
            <span className="gradient-text">au bon moment</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-white/80 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
        >
          Web, mobile et back-office reunis pour rechercher, valider et suivre chaque mise en relation — avec messagerie et notifications en temps reel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#FF6600] text-white font-semibold text-base hover:bg-[#ff7a26] transition-all duration-300 hover:scale-[1.03]"
          >
            Demarrer maintenant
          </a>
          <a
            href="#fonctionnement"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass text-white font-medium text-base hover:bg-white/20 transition-all duration-300"
          >
            Decouvrir le parcours
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 sm:mt-16 flex items-center gap-6 text-white/70 text-sm"
        >
          <div className="flex -space-x-3">
            {[
              'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-[#003366] object-cover"
              />
            ))}
          </div>
          <p>
            <span className="text-white font-semibold">+12 400</span> mises en relation ce mois-ci
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
