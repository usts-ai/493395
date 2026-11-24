import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const profiles = [
  {
    id: 1,
    name: 'Camille Durand',
    role: 'Product Designer',
    city: 'Lyon',
    match: 96,
    tag: 'Design produit',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    status: 'Disponible',
  },
  {
    id: 2,
    name: 'Thomas Leroy',
    role: 'Developpeur Full-Stack',
    city: 'Paris',
    match: 91,
    tag: 'React / Node',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    status: 'En discussion',
  },
  {
    id: 3,
    name: 'Sofia Martin',
    role: 'Responsable partenariats',
    city: 'Bordeaux',
    match: 88,
    tag: 'Business Dev',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    status: 'Disponible',
  },
  {
    id: 4,
    name: 'Hugo Petit',
    role: 'Expert data',
    city: 'Nantes',
    match: 84,
    tag: 'Analytics',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    status: 'Nouveau',
  },
];

const MatchingShowcase: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = profiles[active];

  return (
    <section id="relations" className="py-20 sm:py-28 bg-[#0A1628] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-[#40E0D0] font-semibold tracking-widest uppercase text-xs mb-3">
              Moteur de matching
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-5">
              Des profils qui s&apos;alignent vraiment
            </h2>
            <p className="text-white/65 text-base sm:text-lg mb-8 leading-relaxed">
              Visualisez le score de compatibilite, envoyez une demande et suivez le statut en direct — du web jusqu&apos;a l&apos;application mobile.
            </p>

            <div className="space-y-3">
              {profiles.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                    active === i
                      ? 'bg-white/10 border border-[#40E0D0]/40'
                      : 'bg-transparent border border-transparent hover:bg-white/5'
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{p.name}</p>
                    <p className="text-sm text-white/55 truncate">{p.role} · {p.city}</p>
                  </div>
                  <span className="font-display font-bold text-[#40E0D0] text-lg">
                    {p.match}%
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#007BFF]/30 to-[#40E0D0]/20 rounded-[2rem] blur-2xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.92, rotateY: 8 }}
                  transition={{ duration: 0.45 }}
                  className="profile-card relative rounded-3xl overflow-hidden bg-[#122038] border border-white/10"
                >
                  <div className="relative h-56 sm:h-72 overflow-hidden">
                    <img
                      src={current.img}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122038] via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-semibold bg-[#40E0D0] text-[#003366]">
                      {current.status}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold">{current.name}</h3>
                        <p className="text-white/60 text-sm">{current.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/50 uppercase tracking-wider">Match</p>
                        <p className="font-display text-3xl font-extrabold text-[#40E0D0]">
                          {current.match}%
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white/80 border border-white/10">
                        {current.tag}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white/80 border border-white/10">
                        {current.city}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-5">
                      <motion.div
                        key={`bar-${current.id}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${current.match}%` }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="stat-bar h-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0]"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="flex-1 py-3 rounded-xl bg-[#007BFF] hover:bg-[#3395ff] font-semibold text-sm transition-colors"
                      >
                        Envoyer une demande
                      </button>
                      <button
                        type="button"
                        className="px-4 py-3 rounded-xl border border-white/20 hover:border-[#40E0D0] text-sm transition-colors"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MatchingShowcase;
