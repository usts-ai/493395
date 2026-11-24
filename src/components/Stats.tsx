import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 12400, suffix: '+', label: 'Mises en relation', color: '#007BFF' },
  { value: 98, suffix: '%', label: 'Taux de satisfaction', color: '#40E0D0' },
  { value: 3, suffix: '', label: 'Interfaces (web, mobile, admin)', color: '#FF6600' },
  { value: 24, suffix: 'h', label: 'Delai moyen de matching', color: '#003366' },
];

const chartBars = [
  { label: 'Lun', h: 42 },
  { label: 'Mar', h: 58 },
  { label: 'Mer', h: 71 },
  { label: 'Jeu', h: 55 },
  { label: 'Ven', h: 82 },
  { label: 'Sam', h: 64 },
  { label: 'Dim', h: 48 },
];

const AnimatedNumber: React.FC<{ value: number; suffix: string; active: boolean }> = ({
  value,
  suffix,
  active,
}) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 40;
    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span>
      {n.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#F5FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 max-w-2xl"
        >
          <p className="text-[#007BFF] font-semibold tracking-widest uppercase text-xs mb-3">
            Indicateurs
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#003366]">
            La plateforme en chiffres
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#007BFF]/08"
            >
              <p
                className="font-display text-3xl sm:text-4xl font-extrabold mb-2"
                style={{ color: s.color }}
              >
                <AnimatedNumber value={s.value} suffix={s.suffix} active={inView} />
              </p>
              <p className="text-[#5A6A7A] text-xs sm:text-sm leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-5 sm:p-8 border border-[#007BFF]/08"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#003366]">
                Activite hebdomadaire
              </h3>
              <p className="text-[#5A6A7A] text-sm mt-1">Demandes de mise en relation traitees</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#007BFF]">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0]" />
              +18% vs semaine precedente
            </span>
          </div>

          <div className="flex items-end justify-between gap-2 sm:gap-4 h-40 sm:h-52">
            {chartBars.map((bar, i) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-[48px] rounded-t-xl origin-bottom"
                  style={{
                    height: `${bar.h}%`,
                    background: `linear-gradient(180deg, #40E0D0 0%, #007BFF ${100 - bar.h + 20}%)`,
                  }}
                />
                <span className="text-[10px] sm:text-xs text-[#5A6A7A] font-medium">{bar.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
