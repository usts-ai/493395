import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', path: 'M4 9h4v12H4zm2-6a2 2 0 110 4 2 2 0 010-4zm5 6h4v1.7c.6-1.1 2-1.9 3.6-1.7 3.2.3 4.4 2.4 4.4 5.5V21h-4v-5.2c0-1.5-.3-2.8-2.2-2.8s-2.6 1.5-2.6 3V21h-4V9z' },
    { name: 'X', path: 'M4 4l6.5 8.2L4.3 20H7l5-6.1L16.8 20H20l-6.8-8.5L19.5 4H17l-4.6 5.6L8 4H4z' },
    { name: 'Instagram', path: 'M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5zm8 2H8a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3zm-4 2.5A4.5 4.5 0 1112 16.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.5 7a1 1 0 11-1 1 1 1 0 011-1z' },
  ];

  return (
    <footer className="relative bg-[#003366] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#007BFF] blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-[#40E0D0] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0]">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <span className="font-display text-2xl font-bold">Nexora</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              La plateforme de mise en relation qui connecte les talents, les partenaires et les opportunites en toute simplicite.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Produit</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {['Application web', 'Application mobile', 'Back-office', 'API securisee'].map((item) => (
                <li key={item}>
                  <a href="#fonctionnalites" className="hover:text-[#40E0D0] transition-colors inline-block hover:translate-x-1 duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Ressources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {['Centre d\u2019aide', 'Documentation API', 'Statut systeme', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#top" className="hover:text-[#40E0D0] transition-colors inline-block hover:translate-x-1 duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Reseaux</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href="#top"
                  aria-label={s.name}
                  whileHover={{ y: -4 }}
                  className="social-orb w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/60">
              contact@nexora.app
            </p>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/55">
          <p>© 2026 Nexora. Tous droits reserves.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#top" className="hover:text-[#40E0D0] transition-colors">Mentions legales</a>
            <a href="#top" className="hover:text-[#40E0D0] transition-colors">Politique de confidentialite</a>
            <a href="#top" className="hover:text-[#40E0D0] transition-colors">RGPD</a>
            <a href="#top" className="hover:text-[#40E0D0] transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
