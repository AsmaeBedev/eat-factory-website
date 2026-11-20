import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  light?: boolean;
}

export default function SectionDivider({ light = false }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden ${light ? 'bg-[#F5F3F0]' : 'bg-[#111110]'}`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{ originX: 0, height: '1px' }}
        className="w-full bg-gradient-to-r from-[#D97706] via-[#D97706]/50 to-transparent"
      />
    </div>
  );
}
