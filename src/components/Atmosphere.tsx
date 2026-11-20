import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Design Industriel Chic',
    desc: 'Metal brut, bois massif et betons cires composent un interieur architecturalement signe.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Ambiance Conviviale',
    desc: 'Un lieu concu pour partager, se retrouver et profiter d instants authentiques en toute convivialite.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Interieur Impeccable',
    desc: 'Proprete rigoureuse et espace immacule — nos clients le soulignent systematiquement dans leurs avis.',
  },
];

export default function Atmosphere() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  return (
    <section ref={sectionRef} id="lieu" className="bg-[#111110] section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div ref={headerRef} className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[#D97706]" />
            <span className="font-body text-[#D97706] text-xs font-semibold tracking-[0.3em] uppercase">
              La Factory
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="font-display text-[#F5F3F0] text-5xl lg:text-7xl font-bold leading-none max-w-xl"
            >
              Un Cadre
              <br />
              <span className="text-[#D97706]">Impeccable.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="font-body text-[#6B7280] text-base leading-relaxed max-w-sm font-light lg:mb-2"
            >
              Prenez place dans un espace moderne, concu pour votre confort.
              Un lieu ou chaque detail a ete pense pour rendre votre experience
              unique et memorable.
            </motion.p>
          </div>
        </div>

        {/* Main Image + Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-3 relative overflow-hidden h-[400px] lg:h-[600px]"
          >
            <motion.img
              src="/images/interior.jpg"
              alt="Interieur EAT FACTORY El Jadida"
              style={{ scale: imgScale }}
              className="w-full h-full object-cover origin-center"
            />
            {/* Amber overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/10 to-transparent" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#D97706]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D97706]" />

            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#111110] to-transparent">
              <blockquote className="font-display text-[#F5F3F0] text-xl font-light italic leading-snug">
                "L interieur est impeccable, l ambiance est top."
              </blockquote>
              <cite className="font-body text-[#D97706] text-xs tracking-[0.2em] uppercase mt-2 block not-italic">
                — Avis Client Verifie
              </cite>
            </div>
          </motion.div>

          {/* Highlights Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.12 }}
                className="border border-[#2A2A28] bg-[#1A1A18] p-8 flex-1 group hover:border-[#D97706] transition-colors duration-300"
              >
                <div className="text-[#D97706] mb-5">{h.icon}</div>
                <h3 className="font-display text-[#F5F3F0] text-xl font-bold mb-3 leading-none">
                  {h.title}
                </h3>
                <p className="font-body text-[#6B7280] text-sm leading-relaxed font-light">
                  {h.desc}
                </p>
                {/* Hover accent */}
                <div className="mt-6 w-0 h-px bg-[#D97706] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="mt-20 overflow-hidden border-t border-[#2A2A28] pt-10">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 whitespace-nowrap"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-16 flex-shrink-0">
                <span className="font-display text-[#2A2A28] text-4xl font-bold tracking-widest">EAT FACTORY</span>
                <div className="w-2 h-2 bg-[#D97706] flex-shrink-0" />
                <span className="font-display text-[#2A2A28] text-4xl font-bold tracking-widest">EL JADIDA</span>
                <div className="w-2 h-2 bg-[#D97706] flex-shrink-0" />
                <span className="font-display text-[#2A2A28] text-4xl font-bold tracking-widest">MAROC</span>
                <div className="w-2 h-2 bg-[#D97706] flex-shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
