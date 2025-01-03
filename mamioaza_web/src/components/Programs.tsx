'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const programs = [
  {
    title: 'Deti objavujú svet 1',
    ageGroup: '6-9 mesiacov',
    description: 'Kurz zameraný na pohybový vývin a senzorické vnímanie najmenších. Rozvíjame prirodzené pohybové schopnosti dieťaťa.',
    features: [
      'Pohybové aktivity',
      'Senzorické hry',
      'Hudobné prvky',
      'Sociálna interakcia'
    ]
  },
  {
    title: 'Deti objavujú svet 2',
    ageGroup: '9-12 mesiacov',
    description: 'Pokročilejší kurz pre lezúňov a začínajúcich chodcov. Zameriavame sa na rozvoj samostatnosti a objavovanie.',
    features: [
      'Prekážkové dráhy',
      'Motorické cvičenia',
      'Interaktívne hry',
      'Tvorivé aktivity'
    ]
  },
  {
    title: 'My sme malí muzikanti',
    ageGroup: '10 mesiacov - 4 roky',
    description: 'Hudobno-pohybové aktivity pre deti a rodičov. Spievame, tancujeme a hráme na hudobných nástrojoch.',
    features: [
      'Spev a rytmika',
      'Tanečné prvky',
      'Hra na nástrojoch',
      'Pohybové hry'
    ]
  },
  {
    title: 'Hráme sa na farby',
    ageGroup: '1.5 - 4 roky',
    description: 'Kreatívny program zameraný na poznávanie farieb, tvarov a materiálov prostredníctvom hier a tvorivých aktivít.',
    features: [
      'Výtvarné techniky',
      'Farebné experimenty',
      'Senzorické aktivity',
      'Tvorivé dielne'
    ]
  }
];

export default function Programs() {
  return (
    <section className="py-20 bg-neutral-warm relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider font-medium">
            PROGRAMY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2472] mt-2">
            Naše kurzy a aktivity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#0A2472] mb-2">
                    {program.title}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {program.ageGroup}
                  </span>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-bold text-[#0A2472] mb-3">Čo vás čaká:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
