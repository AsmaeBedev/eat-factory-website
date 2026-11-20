import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const aniFadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: 'easeOut' as const, delay },
  });

  return (
    <section ref={ref} className="relative min-h-screen bg-[#F5F3F0] overflow-hidden flex items-center">
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#D97706]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text Block */}
          <div className="relative z-10">
            {/* Tagline */}
            <motion.div
              {...aniFadeUp(0)}
              className="inline-flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-[#D97706]" />
              <span className="font-body text-[#D97706] text-xs font-semibold tracking-[0.3em] uppercase">
                Restaurant Moderne — El Jadida
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div style={{ y: textY }}>
              <motion.h1
                {...aniFadeUp(0.1)}
                className="font-display text-[#111110] leading-none tracking-tight"
              >
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-bold">
                  La
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-bold text-[#D97706]">
                  Fabrique
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-bold">
                  du Gout.
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              {...aniFadeUp(0.3)}
              className="mt-6 flex items-center gap-4"
            >
              <div className="w-12 h-px bg-[#D97706]" />
              <p className="font-display text-[#111110] text-lg sm:text-xl tracking-widest font-light">
                La Generosite en Plus.
              </p>
            </motion.div>

            {/* Sub-text */}
            <motion.p
              {...aniFadeUp(0.42)}
              className="font-body text-[#6B7280] text-base sm:text-lg leading-relaxed mt-8 max-w-md font-light"
            >
              Des portions genereuses, des ingredients frais et une ambiance
              conviviale au coeur d'El Jadida.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...aniFadeUp(0.54)}
              className="flex flex-col sm:flex-row gap-4 mt-12"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 bg-[#D97706] text-white font-body text-sm font-semibold tracking-[0.15em] uppercase px-10 py-5 hover:bg-[#B45309] transition-colors duration-200 group"
              >
                Explorer le Menu
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="https://glovoapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#111110] text-[#111110] font-body text-sm font-semibold tracking-[0.15em] uppercase px-10 py-5 hover:bg-[#111110] hover:text-[#F5F3F0] transition-all duration-200"
              >
                Commander sur Glovo
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              {...aniFadeUp(0.66)}
              className="flex gap-10 mt-16 pt-10 border-t border-[#E5E2DC]"
            >
              {[
                { value: '01h00', label: 'Fermeture' },
                { value: 'Drive', label: 'Service Rapide' },
                { value: '100%', label: 'Ingredients Frais' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-[#D97706] text-2xl font-bold tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="font-body text-[#6B7280] text-xs tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="relative lg:h-[680px] h-[400px]"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 overflow-hidden">
              <img
                src="/images/hero-burger.jpg"
                alt="Burger Gourmet EAT FACTORY"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D97706]/20 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
              className="absolute -bottom-6 -left-6 bg-[#111110] text-white p-6 z-10"
            >
              <div className="font-display text-4xl font-bold text-[#D97706] leading-none">EAT</div>
              <div className="font-display text-4xl font-bold text-white leading-none">FACTORY</div>
              <div className="font-body text-[10px] text-[#6B7280] tracking-[0.2em] uppercase mt-2">
                El Jadida, Maroc
              </div>
            </motion.div>

            {/* Decorative frame corners */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#D97706] z-10" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#D97706] z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-[#6B7280] tracking-[0.3em] uppercase">
          Decouvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#D97706] to-transparent"
        />
      </motion.div>
    </section>
  );
}
