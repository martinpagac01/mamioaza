'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandHoldingHeart, FaMoneyBillWave, FaHandsHelping, FaUsers, FaHeart, FaBuilding, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200
};

const smoothTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
};

function SupportCard({ icon, title, description, index }: SupportCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          ...smoothTransition,
          delay: index * 0.1
        }
      } : {}}
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { 
          scale: 1, 
          rotate: 0,
          transition: springTransition
        } : {}}
        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
      >
        {icon}
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: {
            ...smoothTransition,
            delay: index * 0.1 + 0.2
          }
        } : {}}
        className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { 
          opacity: 1, 
          y: 0,
          transition: {
            ...smoothTransition,
            delay: index * 0.1 + 0.3
          }
        } : {}}
        className="text-gray-600 leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

function DetailCard({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: smoothTransition
      } : {}}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { 
            scale: 1, 
            rotate: 0,
            transition: springTransition
          } : {}}
          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
        >
          {icon}
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: {
                ...smoothTransition,
                delay: 0.2
              }
            } : {}}
            className="text-xl font-bold text-gray-800 mb-3"
          >
            {title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: {
                ...smoothTransition,
                delay: 0.3
              }
            } : {}}
            className="text-gray-600 space-y-2"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Support() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const supportWays = [
    {
      icon: <FaHandHoldingHeart className="w-8 h-8 text-primary" />,
      title: 'Finančná podpora',
      description: 'Vaše finančné dary nám pomáhajú udržiavať a zlepšovať naše služby pre rodiny s deťmi.',
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-primary" />,
      title: '2% z daní',
      description: 'Darujte nám 2% z vašich daní a podporte tak naše aktivity a rozvoj centra.',
    },
    {
      icon: <FaHandsHelping className="w-8 h-8 text-primary" />,
      title: 'Dobrovoľníctvo',
      description: 'Zapojte sa do našich aktivít ako dobrovoľník a pomôžte nám vytvárať lepšie prostredie.',
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: 'Partnerstvá',
      description: 'Hľadáme partnerov pre dlhodobú spoluprácu a spoločný rozvoj komunity.',
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div ref={headerRef} className="text-center mb-20">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: smoothTransition
                } : {}}
                className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
              >
                PODPORTE NÁS
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    ...smoothTransition,
                    delay: 0.1
                  }
                } : {}}
                className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
              >
                Ako nás môžete podporiť?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    ...smoothTransition,
                    delay: 0.2
                  }
                } : {}}
                className="text-[#475569] text-xl max-w-3xl mx-auto"
              >
                Vaša podpora nám pomáha vytvárať lepšie prostredie pre rodiny s deťmi
              </motion.p>
            </div>

            {/* Support Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {supportWays.map((way, index) => (
                <SupportCard key={index} {...way} index={index} />
              ))}
            </div>

            {/* Bank Account Details */}
            <DetailCard 
              title="Bankové spojenie" 
              icon={<FaMoneyBillWave className="w-6 h-6 text-primary" />}
            >
              <p>IBAN: SK12 0900 0000 0051 1234 5678</p>
              <p>BIC/SWIFT: GIBASKBX</p>
            </DetailCard>

            <div className="h-8" />

            {/* Organization Details */}
            <DetailCard 
              title="Údaje organizácie"
              icon={<FaBuilding className="w-6 h-6 text-primary" />}
            >
              <p><strong>SÍDLO ORGANIZÁCIE:</strong> Materské centrum MAMI – OÁZA, Hviezdoslavova 77, 953 01 Zlaté Moravce</p>
              <p><strong>IČO:</strong> 36 11 38 75</p>
              <p><strong>PRÁVNA FORMA:</strong> občianske združenie</p>
            </DetailCard>

            {/* Heart Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  ...smoothTransition,
                  delay: 0.4
                }
              }}
              className="text-center mt-16"
            >
              <p className="text-primary text-lg flex items-center justify-center gap-2">
                <FaHeart className="w-5 h-5" />
                ĎAKUJEME VÁM A PROSÍME O VAŠU POMOC AJ TENTO ROK
                <FaHeart className="w-5 h-5" />
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
