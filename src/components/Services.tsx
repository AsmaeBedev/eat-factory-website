import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: 'drive',
    number: '01',
    title: 'Service Drive',
    badge: 'Option Rare',
    description:
      'Commandez depuis votre vehicule et recuperez votre commande sans attendre. Rapidite et efficacite — c est la promesse de la Factory.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v4h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    highlight: true,
  },
  {
    id: 'livraison',
    number: '02',
    title: 'Livraison Sans Contact',
    badge: 'Glovo',
    description:
      'Vos plats livres directement a votre porte, frais et emballes avec soin. Commandez sur Glovo pour une experience fluide et sans contact.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    highlight: false,
  },
  {
    id: 'place',
    number: '03',
    title: 'Repas sur Place',
    badge: 'Experientiel',
    description:
      'Installez-vous dans notre salle au design soigne et savourez votre repas dans une ambiance conviviale. Ouvert jusqu a 01h00.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2h-9l3 6.5-3 3.5h9v3"/>
      </svg>
    ),
    highlight: false,
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-[#F5F3F0] section-padding">
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
              Nos Services
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="font-display text-[#111110] text-5xl lg:text-7xl font-bold leading-none"
            >
              Services
              <br />
              <span className="text-[#D97706]">Rapides.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="font-body text-[#6B7280] text-base leading-relaxed max-w-sm font-light lg:mb-2"
            >
              Trois facons de profiter de l experience EAT FACTORY.
              Choisissez ce qui correspond a votre mode de vie.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.12 }}
              className={`relative group flex flex-col p-10 border-2 transition-all duration-300 ${
                svc.highlight
                  ? 'bg-[#D97706] border-[#D97706] text-white'
                  : 'bg-white border-[#E5E2DC] hover:border-[#D97706]'
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-6 right-6 font-body text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 ${
                  svc.highlight ? 'bg-white text-[#D97706]' : 'bg-[#111110] text-white'
                }`}
              >
                {svc.badge}
              </div>

              {/* Number */}
              <div
                className={`font-display text-6xl font-bold leading-none mb-8 ${
                  svc.highlight ? 'text-white/20' : 'text-[#E5E2DC]'
                }`}
              >
                {svc.number}
              </div>

              {/* Icon */}
              <div
                className={`mb-6 ${
                  svc.highlight ? 'text-white' : 'text-[#D97706]'
                }`}
              >
                {svc.icon}
              </div>

              {/* Title */}
              <h3
                className={`font-display text-2xl font-bold leading-tight mb-4 ${
                  svc.highlight ? 'text-white' : 'text-[#111110]'
                }`}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                className={`font-body text-sm leading-relaxed flex-1 font-light ${
                  svc.highlight ? 'text-white/80' : 'text-[#6B7280]'
                }`}
              >
                {svc.description}
              </p>

              {/* Bottom line */}
              <div
                className={`mt-8 h-px transition-all duration-500 ${
                  svc.highlight
                    ? 'bg-white/30 w-full'
                    : 'bg-[#D97706] w-0 group-hover:w-full'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 bg-[#111110] grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#2A2A28]"
        >
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              label: 'Adresse',
              value: '01, Res Azizia, RDC, Imm C N31, El Jadida',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.27a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              ),
              label: 'Telephone',
              value: '06 60 47 87 65',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              ),
              label: 'Horaires',
              value: 'Ouvert jusqu a 01h00',
            },
          ].map((info) => (
            <div key={info.label} className="flex items-center gap-5 px-8 py-7">
              <div className="text-[#D97706] flex-shrink-0">{info.icon}</div>
              <div>
                <div className="font-body text-[10px] text-[#6B7280] tracking-[0.25em] uppercase mb-1">
                  {info.label}
                </div>
                <div className="font-body text-[#F5F3F0] text-sm font-medium">{info.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
