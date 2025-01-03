'use client';

import { IconType } from 'react-icons';
import { MdChildCare, MdSchool, MdFavorite, MdGroups } from 'react-icons/md';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: IconType;
  index: number;
}

function FeatureCard({ title, description, Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Icon container with gradient */}
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: 'Bezpečné prostredie',
      description: 'Priestor špeciálne upravený pre potreby detí, kde sa každý cíti vítaný a chránený.',
      Icon: MdChildCare
    },
    {
      title: 'Kvalifikovaný tím',
      description: 'Náš tím tvoria skúsení pedagógovia a opatrovatelia s láskou k deťom.',
      Icon: MdSchool
    },
    {
      title: 'Rodinná atmosféra',
      description: 'Vytvárame príjemné prostredie, kde sa každý cíti ako doma.',
      Icon: MdFavorite
    },
    {
      title: 'Aktívna komunita',
      description: 'Spájame rodiny a vytvárame priateľstvá, ktoré trvajú roky.',
      Icon: MdGroups
    }
  ]

  return (
    <section className="relative py-16 md:py-24 bg-accent-light overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-[100px] transform -rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-[120px] transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-primary/5 rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
            >
              PREČO SI NÁS VYBRAŤ
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Prečo si vybrať nás?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              V našom centre vytvárame bezpečný priestor pre rozvoj vašich detí
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                Icon={feature.Icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
