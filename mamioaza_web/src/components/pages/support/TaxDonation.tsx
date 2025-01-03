'use client';

import { motion } from 'framer-motion';
import { FaPercent, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';

interface StepCardProps {
  title: string;
  deadline: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

function StepCard({ title, deadline, content, icon }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-8 relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-4 text-[#F8941C]">
        {icon}
        <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
      </div>
      <div className="flex items-center gap-2 text-[#475569] mb-4">
        <FaCalendarAlt className="flex-shrink-0" />
        <span className="font-medium">{deadline}</span>
      </div>
      <div className="text-[#475569]">
        {content}
      </div>
    </motion.div>
  );
}

export default function TaxDonation() {
  const steps = [
    {
      title: "Pre zamestnancov",
      deadline: "Do 30.4.2025",
      content: (
        <>
          <ol className="list-decimal list-inside space-y-2">
            <li>Do 15.2.2025 požiadajte zamestnávateľa o vykonanie ročného zúčtovania</li>
            <li>Získajte tlačivo "Potvrdenie o zaplatení dane"</li>
            <li>Do 30.4.2025 podajte Vyhlásenie o poukázaní 2% na daňový úrad alebo do MC</li>
          </ol>
        </>
      ),
      icon: <FaFileAlt className="w-6 h-6" />
    },
    {
      title: "Pre fyzické osoby s daňovým priznaním",
      deadline: "Do 31.3.2025",
      content: (
        <>
          <p>V rámci daňového priznania poukážte 2% z dane. Do daňového priznania vpíšte údaje o MC.</p>
          <p className="mt-2">Minimálna hodnota: 3€</p>
        </>
      ),
      icon: <FaFileAlt className="w-6 h-6" />
    },
    {
      title: "Pre právnické osoby",
      deadline: "Do 31.3.2025",
      content: (
        <>
          <p>Právnické osoby poukazujú % zo zaplatenej dane priamo prostredníctvom daňového priznania.</p>
          <p className="mt-2">Minimálna hodnota na jedného prijímateľa: 8€</p>
        </>
      ),
      icon: <FaFileAlt className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-[#F8941C] uppercase tracking-wider font-medium mb-4"
            >
              PODPORTE NÁS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
            >
              Vaše 2% pre Mami-Oázu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-xl max-w-3xl mx-auto mb-8"
            >
              2% sú pre materské centrum stále najdôležitejším zdrojom príjmu. Pomôžte nám existovať.
            </motion.p>
          </div>

          {/* Organization info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-cream rounded-2xl p-8 mb-16 max-w-2xl mx-auto"
          >
            <h3 className="text-[#1E293B] font-bold text-xl mb-4">Údaje potrebné pre poukázanie 2%:</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-[#475569] font-medium">Názov organizácie:</dt>
                <dd className="text-[#1E293B]">Materské centrum MAMI – OÁZA</dd>
              </div>
              <div>
                <dt className="text-[#475569] font-medium">Sídlo:</dt>
                <dd className="text-[#1E293B]">Hviezdoslavova 77, 953 01 Zlaté Moravce</dd>
              </div>
              <div>
                <dt className="text-[#475569] font-medium">IČO:</dt>
                <dd className="text-[#1E293B]">36 11 38 75</dd>
              </div>
              <div>
                <dt className="text-[#475569] font-medium">Právna forma:</dt>
                <dd className="text-[#1E293B]">Občianske združenie</dd>
              </div>
            </dl>
          </motion.div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <p className="text-[#475569] mb-4">
              Podrobnejšie informácie nájdete na{' '}
              <a
                href="https://www.rozhodni.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8941C] hover:text-[#E68019] transition-colors"
              >
                www.rozhodni.sk
              </a>
            </p>
            <div className="text-[#F8941C] font-medium">
              ♥ ĎAKUJEME VÁM A PROSÍME O VAŠU POMOC AJ TENTO ROK ♥
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
