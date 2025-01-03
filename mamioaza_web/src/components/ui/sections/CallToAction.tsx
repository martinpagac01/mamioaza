'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

export default function CallToAction() {
  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-white/20 rounded-[180px] transform rotate-12"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-white/20 rounded-[200px] transform -rotate-12"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ margin: "100px" }}
            transition={{ duration: 0.6 }}
            style={{ willChange: 'transform, opacity' }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Pridajte sa k našej komunite
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Vytvárame bezpečný priestor pre vaše deti, kde môžu rásť, učiť sa a zabávať sa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Link 
              href="/kontakt" 
              className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Kontaktujte nás
              <MdArrowForward className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
