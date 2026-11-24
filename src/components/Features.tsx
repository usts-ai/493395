import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Gestion des comptes',
    text: 'Inscription, authentification JWT/OAuth, profils detailles et gestion fine des roles.',
    accent: '#007BFF',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mise en relation',
    text: 'Recherche avancee, demandes, validation et suivi complet du cycle de matching.',
    accent: '#40E0D0',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Messagerie & alertes',
    text: 'Notifications push, e-mails transactionnels et echanges entre parties connectees.',
    accent: '#FF6600',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Back-office admin',
    text: 'Moderation, statistiques, gestion des donnees et pilotage de la plateforme.',
    accent: '#003366',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
];

const Features: React.FC = () => {
  return (
    <section id="fonctionnalites" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <p className="text-[#007BFF] font-semibold tracking-widest uppercase text-xs mb-3">
            Fonctionnalites
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#003366]">
            Tout le parcours, une seule plateforme
          </h2>
          <p className="mt-4 text-[#5A6A7A] text-base sm:text-lg">
            Application web de gestion, mobile et API partagee sur une base de donnees commune.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="feature-tile group relative overflow-hidden rounded-2xl bg-[#F5FBFF] border border-[#007BFF]/08"
            >
              <div className="aspect-[16/9] sm:aspect-[2/1] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-[#003366]/20 to-transparent opacity-80 sm:opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <span
                  className="inline-block w-10 h-1 rounded-full mb-3"
                  style={{ background: f.accent }}
                />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                  {f.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
