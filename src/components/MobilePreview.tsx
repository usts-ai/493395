import React from 'react';
import { motion } from 'framer-motion';

const screens = [
  {
    title: 'Decouverte',
    desc: 'Fil d actualite des profils compatibles',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Matching',
    desc: 'Demandes et validations en un geste',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Messages',
    desc: 'Conversation securisee post-relation',
    img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=600&q=80',
  },
];

const MobilePreview: React.FC = () => {
  return (
    <section id="application" className="py-20 sm:py-28 mesh-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#007BFF] font-semibold tracking-widest uppercase text-xs mb-3">
              Application mobile
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#003366] leading-tight mb-5">
              Fidele a la maquette, pensee pour iOS et Android
            </h2>
            <p className="text-[#5A6A7A] text-base sm:text-lg leading-relaxed mb-8">
              Developpement multiplateforme (Flutter ou React Native) branche a la meme API REST et au meme modele de donnees que le web.
            </p>

            <ul className="space-y-4">
              {[
                'Interface mobile fidele a la maquette graphique',
                'Notifications push et messagerie temps reel',
                'Authentification securisee et conformite RGPD',
                'Publication App Store et Google Play',
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#40E0D0] flex items-center justify-center">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white">
                      <path d="M4.5 9.5L1 6l1.2-1.2L4.5 7.1 9.8 1.8 11 3z" />
                    </svg>
                  </span>
                  <span className="text-[#003366] font-medium text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="relative flex justify-center items-end gap-3 sm:gap-5 min-h-[380px] sm:min-h-[480px]">
            {screens.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`mobile-frame relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border-[6px] sm:border-[8px] border-[#0A1628] bg-[#0A1628] ${
                  i === 1
                    ? 'w-[48%] sm:w-[38%] z-20 -mb-2 sm:-mb-4 float-anim'
                    : 'w-[26%] sm:w-[28%] z-10 opacity-90'
                } ${i === 0 ? 'translate-y-6 sm:translate-y-12' : ''} ${i === 2 ? 'translate-y-6 sm:translate-y-12' : ''}`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-[#0A1628] rounded-b-xl z-10" />
                <div className="aspect-[9/19] relative">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="font-display font-bold text-white text-xs sm:text-sm">{s.title}</p>
                    <p className="text-white/70 text-[10px] sm:text-xs leading-snug mt-0.5 hidden sm:block">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
