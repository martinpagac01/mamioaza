'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  href: string;
}

function CategoryCard({ title, description, image, color, textColor, bgColor, href }: CategoryCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`group relative ${bgColor} hover:${bgColor.replace('/5', '/10')} rounded-3xl transition-all duration-300 overflow-hidden`}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-${color} to-transparent opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity`} />
      </div>
      <div className="p-8">
        <Link href={href}>
          <h3 className={`text-2xl font-bold ${textColor} mb-3`}>
            {title}
          </h3>
        </Link>
        <p className="text-neutral-600 mb-6">
          {description}
        </p>
        <Link 
          href={href}
          className={`inline-flex items-center ${textColor} font-medium group/link`}
        >
          <span className="mr-2 group-hover/link:underline">Zistite viac</span>
          <MdArrowForward className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ActivityCategories() {
  const categories = [
    {
      title: 'Aktivity pre deti',
      description: 'Kurzy, cvičenia a hravé aktivity pre deti od 3 mesiacov do 6 rokov. Rozvíjame motoriku, kreativitu a sociálne zručnosti.',
      image: '/img1.jpg',
      color: '#9747FF',
      textColor: 'text-[#9747FF]',
      bgColor: 'bg-[#9747FF]/5',
      borderColor: 'border-[#9747FF]',
      href: '/aktivity?category=children'
    },
    {
      title: 'Aktivity pre mamičky',
      description: 'Cvičenia, kurzy a podporné skupiny pre tehotné mamičky a mamičky s bábätkami.',
      image: '/img2.jpg',
      color: '#4C7BF4',
      textColor: 'text-[#4C7BF4]',
      bgColor: 'bg-[#4C7BF4]/5',
      borderColor: 'border-[#4C7BF4]',
      href: '/aktivity?category=mother'
    },
    {
      title: 'Služby pre rodiny',
      description: 'Prednášky, kurzy, kultúrne podujatia a ďalšie aktivity pre celé rodiny.',
      image: '/img3.jpg',
      color: '#FF6B6B',
      textColor: 'text-[#FF6B6B]',
      bgColor: 'bg-[#FF6B6B]/5',
      borderColor: 'border-[#FF6B6B]',
      href: '/aktivity?category=family'
    }
  ];

  return (
    <section className="py-20 bg-[#fff0f0] relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: true }}
              className="inline-block text-[#F8941C] uppercase tracking-wider font-medium mb-4 will-animate"
            >
              NAŠE AKTIVITY
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-text-dark will-animate"
            >
              Čo u nás nájdete?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl max-w-3xl mx-auto leading-relaxed text-text will-animate font-medium"
            >
              Ponúkame široké spektrum aktivít pre deti aj rodičov.
              Každý si u nás nájde to svoje.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
