'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ() {
  const faqs = [
    {
      question: "Ako začať chodiť do materského centra?",
      answer: "Môžete prísť kedykoľvek počas otváracích hodín. Ideálne je prísť najskôr len do herne a nie hneď na aktivity. S novým prostredím a ľuďmi sa tak zoznámite bez zbytočného stresu. Pri dverách vľavo hore je zvonček, zazvoňte a otvoríme vám."
    },
    {
      question: "Čo si priniesť so sebou?",
      answer: "V centre sa všetci prezúvame, preto si prineste vlastné prezuvky (máme aj náhradné). Do MC si môžete priniesť aj svoje jedlo, v kuchynke je k dispozícii mikrovlnka."
    },
    {
      question: "Kto môže navštevovať centrum?",
      answer: "V MC sú vítaní rodičia, starí rodičia spolu so svojimi deťmi/vnúčatami, ale aj budúci rodičia či ďalší rodinní príslušníci. Snažíme sa, aby ste sa cítili všetci príjemne."
    },
    {
      question: "Aké sú výhody pre deti?",
      answer: "Deti sa zahrajú s inými hračkami ako majú doma, získavajú cenné sociálne zručnosti pre budúci nástup do materskej školy. Učia sa dodržiavať pravidlá, stanovovať si vlastné hranice a rešpektovať hranice iných detí. Čím menšie dieťa začne chodiť do MC, tým prirodzenejšie si naň zvykne."
    },
    {
      question: "Ako sa prihlásiť na kurz?",
      answer: "Napíšte nám mail s menom a priezviskom vás aj dieťaťa, vekom dieťaťa a telefónnym číslom. Poznačíme si vás a navrhneme kurz vhodný pre vaše dieťa s ohľadom na aktuálne možnosti MC."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-24 bg-neutral-cool overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-primary/5 rounded-[200px] transform rotate-6"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-[150px] transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary/5 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
            >
              ČASTÉ OTÁZKY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Často kladené otázky
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Odpovede na najčastejšie otázky o našom materskom centre
            </motion.p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-[#1E293B] group-hover:text-primary transition-colors duration-300">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform text-primary ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#475569]">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
