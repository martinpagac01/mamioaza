'use client';

import { motion } from 'framer-motion';
import Schedule from '@/components/ui/sections/Schedule';

const smoothTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smoothTransition}
              className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
            >
              ROZVRH
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...smoothTransition,
                delay: 0.1
              }}
              className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
            >
              Rozvrh na tento týždeň
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...smoothTransition,
                delay: 0.2
              }}
              className="text-[#475569] text-xl max-w-3xl mx-auto"
            >
              Pozrite si naše aktivity a pridajte sa k nám
            </motion.p>
          </div>

          <Schedule />
        </div>
      </section>
    </main>
  );
}
