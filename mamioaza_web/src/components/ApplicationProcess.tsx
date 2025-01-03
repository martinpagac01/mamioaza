'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-neutral-warm relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider font-medium">
            POSTUP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2472] mt-2">
            Jednoduchý proces pripojenia sa k nám
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 animate-pulse">
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mb-6 transform transition-transform group-hover:scale-105">
              <span className="text-4xl font-bold text-[#0A2472]">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A2472] mb-4">
              Dohodnite si prehliadku
            </h3>
            <p className="text-gray-600 text-center">
              Navštívte Mami-Oázu, spoznajte naše priestory, náš tím a dozveďte sa viac o našich programoch.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6 transform transition-transform group-hover:scale-105">
              <span className="text-4xl font-bold text-[#0A2472]">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A2472] mb-4">
              Vyplňte prihlášku
            </h3>
            <p className="text-gray-600 text-center">
              Vyplňte prihlasovací formulár s dôležitými informáciami o potrebách a rozvrhu vášho dieťaťa.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-6 transform transition-transform group-hover:scale-105">
              <span className="text-4xl font-bold text-[#0A2472]">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A2472] mb-4">
              Dokončite zápis
            </h3>
            <p className="text-gray-600 text-center">
              Stretnite sa s našim tímom pre finalizáciu detailov a stanovenie dátumu začiatku pre vaše dieťa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
