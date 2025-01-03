'use client';

import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaMoneyBillWave, FaTools, FaClock, FaLightbulb } from 'react-icons/fa';
import TaxDonation from './TaxDonation';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  button?: {
    text: string;
    href: string;
  };
}

function SupportCard({ icon, title, description, color, button }: SupportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl shadow-md p-6 relative overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-${color}`}
    >
      <div className={`text-${color} mb-4 text-2xl`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      {button && (
        <a
          href={button.href}
          className={`inline-flex items-center text-${color} hover:text-${color}-dark font-medium transition-colors`}
        >
          {button.text} →
        </a>
      )}
    </motion.div>
  );
}

export default function SupportPageContent() {
  const supportWays = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Finančná podpora',
      description: 'Vaša finančná podpora nám pomáha udržiavať centrum v chode a rozvíjať nové aktivity pre rodiny.',
      color: 'primary',
      button: {
        text: 'Podporiť finančne',
        href: '#financial-support'
      }
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Dobrovoľníctvo',
      description: 'Staňte sa súčasťou nášho tímu. Hľadáme dobrovoľníkov pre rôzne aktivity a podujatia.',
      color: 'secondary',
      button: {
        text: 'Prihlásiť sa',
        href: '#volunteer'
      }
    },
    {
      icon: <FaTools />,
      title: 'Materiálna pomoc',
      description: 'Prijímame dary v podobe hračiek, kníh, materiálov na tvorenie a vybavenia pre deti.',
      color: 'accent'
    }
  ];

  const currentNeeds = [
    {
      icon: <FaClock />,
      title: 'Pomoc pri organizácii podujatí',
      description: 'Hľadáme dobrovoľníkov na pomoc pri organizácii letného tábora a rodinného festivalu.',
      color: 'primary'
    },
    {
      icon: <FaTools />,
      title: 'Vybavenie pre deti',
      description: 'Momentálne potrebujeme nové športové potreby a hudobné nástroje pre detské aktivity.',
      color: 'secondary'
    },
    {
      icon: <FaLightbulb />,
      title: 'Odborná pomoc',
      description: 'Uvítame pomoc pri tvorbe vzdelávacích programov a aktivít pre deti.',
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-warm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-[#F8941C] uppercase tracking-wider font-medium mb-4"
            >
              POMÔŽTE NÁM
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
            >
              Ako nás môžete podporiť?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-xl max-w-3xl mx-auto"
            >
              Vaša podpora nám pomáha vytvárať lepšie prostredie pre rodiny s deťmi. 
              Každá forma pomoci je pre nás vzácna.
            </motion.p>
          </div>

          {/* Support Ways Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-[#1E293B] text-3xl lg:text-4xl font-bold mb-6">
                Spôsoby podpory
              </h2>
              <p className="text-[#475569] text-xl max-w-3xl mx-auto">
                Vyberte si spôsob, ktorým nám chcete pomôcť.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {supportWays.map((way, index) => (
                <SupportCard key={index} {...way} />
              ))}
            </div>
          </div>

          {/* Tax Donation Section */}
          <TaxDonation />

          {/* Financial Support Section */}
          <div id="financial-support" className="mb-24 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <FaMoneyBillWave className="text-3xl text-primary" />
                <h2 className="text-3xl font-fredoka text-secondary">
                  Finančná podpora
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Vašu finančnú podporu môžete poskytnúť nasledujúcimi spôsobmi:
                </p>
                <ul>
                  <li>
                    <strong>Bankový prevod:</strong>
                    <br />
                    IBAN: SK00 0000 0000 0000 0000 0000
                  </li>
                  <li>
                    <strong>2% z daní:</strong>
                    <br />
                    IČO: 00000000
                    <br />
                    Právna forma: Občianske združenie
                  </li>
                </ul>
                <p>
                  Všetky finančné prostriedky sú použité na prevádzku centra, 
                  organizáciu aktivít a nákup potrebného vybavenia.
                </p>
              </div>
            </div>
          </div>

          {/* Current Needs Section */}
          <div id="current-needs">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-fredoka text-secondary mb-6">
                Aktuálne potreby
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Momentálne najviac potrebujeme pomoc v týchto oblastiach.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentNeeds.map((need, index) => (
                <SupportCard key={index} {...need} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
