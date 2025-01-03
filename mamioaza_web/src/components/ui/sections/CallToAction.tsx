'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

export default function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-cream" />
      
      {/* Subtle decorative elements */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -left-64 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-64 w-[800px] h-[800px] bg-secondary/[0.05] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl lg:text-7xl font-bold text-primary-dark mb-8"
          >
            Pridajte sa k našej komunite
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-secondary mb-16 leading-relaxed"
          >
            Vytvárame bezpečný priestor pre vaše deti, kde môžu rásť, učiť sa a zabávať sa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/kontakt"
              className="group inline-flex items-center bg-white text-primary px-12 py-6 rounded-full text-xl font-medium hover:bg-cream transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="mr-3">Kontaktujte nás</span>
              <MdArrowForward className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
