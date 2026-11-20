import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  {
    id: 'burgers',
    label: '01',
    title: 'Burgers & Tacos',
    subtitle: 'Americain',
    description:
      'Nos burgers sont assembles avec des steaks frais, des sauces maison et des pains brioches toastes. Chaque bouchee est une experience de generosité pure.',
    items: ['Smash Burger Classic', 'Double Cheese Factory', 'Crispy Chicken Taco', 'BBQ Signature'],
    image: '/images/menu-burgers.jpg',
    tag: 'Best-seller',
  },
  {
    id: 'salades',
    label: '02',
    title: 'Salades Fraiches',
    subtitle: 'Fraicheur',
    description:
      'Des compositions vegetales eclatantes de fraicheur. Nos salades sont preparees a la commande avec des legumes de saison et des vinaigrettes maison.',
    items: ['Salade Nicoise', 'Salade Caesar', 'Bowl Poulet Grille', 'Salade du Marche'],
    image: '/images/menu-salads.jpg',
    tag: 'Leger',
  },
  {
    id: 'pizzas',
    label: '03',
    title: 'Pizzas & Pates',
    subtitle: 'Authentique',
    description:
      'Pate maison etalee a la main, mozzarella fondante et garnitures genereusesjusqu aux bords. Nos pates Alfredo sont preparees dans une creme veloutee irresistible.',
    items: ['Pizza Margherita', 'Pizza Quattro Formaggi', 'Penne Alfredo', 'Pasta Arrabiata'],
    image: '/images/menu-pizza.jpg',
    tag: 'Genereux',
  },
  {
    id: 'signature',
    label: '04',
    title: 'Plats Signature',
    subtitle: 'Chef',
    description:
      'L expression ultime du savoir-faire de notre cuisine. L Emince de poulet saute aux herbes fraiches, servi avec ses accompagnements choisis, est notre fierté.',
    items: ['Emince de Poulet', 'Brochettes Mix', 'Poulet Roti Entier', 'Assiette Factory'],
    image: '/images/menu-signature.jpg',
    tag: 'Exclusif',
  },
];

function MenuCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-0 min-h-[520px] ${index > 0 ? 'mt-8' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'} h-72 lg:h-auto`}>
        <motion.img
          src={cat.image}
          alt={cat.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Tag */}
        <div className="absolute top-6 left-6 bg-[#D97706] text-white font-body text-xs font-bold tracking-[0.2em] uppercase px-4 py-2">
          {cat.tag}
        </div>
        {/* Number overlay */}
        <div className="absolute bottom-0 right-0 bg-[#111110] text-[#F5F3F0]/10 font-display text-8xl font-bold leading-none px-4 pb-0 pointer-events-none select-none">
          {cat.label}
        </div>
      </div>

      {/* Content */}
      <div
        className={`bg-white flex flex-col justify-center px-10 py-14 lg:px-16 lg:py-20 ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-[#D97706]" />
          <span className="font-body text-[#D97706] text-xs font-semibold tracking-[0.3em] uppercase">
            {cat.subtitle}
          </span>
        </div>

        <h3 className="font-display text-[#111110] text-4xl lg:text-5xl font-bold leading-none mb-6">
          {cat.title}
        </h3>

        <p className="font-body text-[#6B7280] text-base leading-relaxed mb-10 font-light max-w-sm">
          {cat.description}
        </p>

        {/* Item list */}
        <ul className="space-y-3 mb-10">
          {cat.items.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-[#D97706] flex-shrink-0" />
              <span className="font-body text-[#111110] text-sm font-medium tracking-wide">{item}</span>
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-[#E5E2DC] mb-8" />

        <a
          href="#contact"
          className="inline-flex items-center gap-3 font-body text-[#111110] text-sm font-semibold tracking-[0.15em] uppercase group"
        >
          Commander maintenant
          <svg
            className="group-hover:translate-x-2 transition-transform duration-200"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="bg-[#F5F3F0] section-padding">
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
              Notre Carte
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="font-display text-[#111110] text-5xl lg:text-7xl font-bold leading-none max-w-xl"
            >
              Le Menu
              <br />
              <span className="text-[#D97706]">Urbain.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="font-body text-[#6B7280] text-base leading-relaxed max-w-sm font-light lg:mb-2"
            >
              Une selection culinaire audacieuse, concue pour satisfaire chaque envie.
              Des ingredients de premiere qualite, des saveurs qui marquent.
            </motion.p>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="space-y-8">
          {categories.map((cat, i) => (
            <MenuCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
