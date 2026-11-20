import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const boissons = [
  {
    title: 'Sodas Artisanaux',
    desc: 'Ginger Beer, Limonade Artisanale, Cola Premium',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l1 8a5 5 0 01-10 0z"/>
        <path d="M12 14v6"/>
        <path d="M8 20h8"/>
      </svg>
    ),
  },
  {
    title: 'Jus Frais',
    desc: 'Orange, Citron, Grenade, Avocat, Mangue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 100 16A8 8 0 0012 2z"/>
        <path d="M12 2v16"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    title: 'Eau Minerale',
    desc: 'Sidi Ali, Oulmes, Eau Plate ou Gazeuse',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v12"/>
        <path d="M8 10l4-4 4 4"/>
      </svg>
    ),
  },
  {
    title: 'Smoothies Maison',
    desc: 'Fraise-Banane, Tropical, Vert Detox',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21h10M6 3l-2 9h16L18 3H6z"/>
        <path d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3"/>
      </svg>
    ),
  },
];

export default function BoissonsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-px bg-[#D97706]" />
          <span className="font-body text-[#D97706] text-xs font-semibold tracking-[0.3em] uppercase">
            Nos Boissons
          </span>
          <div className="flex-1 h-px bg-[#E5E2DC]" />
          <span className="font-body text-[#6B7280] text-xs tracking-widest uppercase">
            Sans Alcool — 100% Rafraichissant
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {boissons.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="group border border-[#E5E2DC] p-7 hover:border-[#D97706] transition-colors duration-300"
            >
              <div className="text-[#D97706] mb-5">{b.icon}</div>
              <h4 className="font-display text-[#111110] text-lg font-bold mb-2 leading-tight">
                {b.title}
              </h4>
              <p className="font-body text-[#6B7280] text-xs leading-relaxed font-light">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
