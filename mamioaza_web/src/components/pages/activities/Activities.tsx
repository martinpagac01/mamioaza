'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MdCalendarToday } from 'react-icons/md';
import { FaBaby, FaUsers, FaFemale, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PageTitle from '@/components/shared/PageTitle';

type Category = 'all' | 'children' | 'mother' | 'family';

const filterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ActivityCardProps {
  title: string;
  description: string;
  ageRange?: string;
  activityType?: 'mother' | 'family';
  color: 'yellow' | 'green' | 'blue' | 'purple' | 'pink';
  category: Category;
}

function ActivityCard({ title, description, ageRange, activityType, color = 'blue', category }: ActivityCardProps) {
  const getBadgeContent = () => {
    if (ageRange) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap bg-white text-[#9747FF]">
          <FaBaby className="w-4 h-4 mr-2" />
          {ageRange}
        </span>
      );
    }
    if (activityType === 'mother') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap bg-white text-[#4C7BF4]">
          <FaHeart className="w-4 h-4 mr-2" />
          Pre mamičky
        </span>
      );
    }
    if (activityType === 'family') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap bg-white text-[#FF6B6B]">
          <FaUsers className="w-4 h-4 mr-2" />
          Pre rodiny
        </span>
      );
    }
    return null;
  };

  const getCardBackground = () => {
    if (activityType === 'mother') return 'bg-[#4C7BF4]/5';
    if (activityType === 'family') return 'bg-[#FF6B6B]/5';
    return 'bg-[#9747FF]/5'; // default for children activities
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`${getCardBackground()} rounded-3xl p-6 h-full`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      {getBadgeContent()}
    </motion.div>
  );
}

export default function Activities() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const initialCategory = searchParams.get('category') as Category;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', name: 'Všetky aktivity', color: '#1E293B', icon: FaHeart },
    { id: 'children', name: 'Pre najmenších', color: '#9747FF', icon: FaBaby },
    { id: 'mother', name: 'Pre mamičky', color: '#4C7BF4', icon: FaFemale },
    { id: 'family', name: 'Pre rodiny', color: '#FF6B6B', icon: FaUsers }
  ];

  const activities: ActivityCardProps[] = [
    {
      title: "Babysalsa",
      description: "Oddychovo-tanečný kurz pre mamičky s najmenšími bábätkami v manduce alebo inom vhodnom nosiči",
      ageRange: "3-12 mesiacov",
      activityType: "mother",
      color: "blue",
      category: "mother"
    },
    {
      title: 'Cvičenie s bábätkami na fitloptách',
      description: 'Kurz zameraný na rozvoj motorických schopností',
      ageRange: '4–36 mesiacov',
      color: 'yellow',
      category: 'children'
    },
    {
      title: 'Deti objavujú svet',
      description: 'Kurz zameraný na rozvoj zmyslového vnímania (hravé a objavovacie aktivity pre deti s rodičmi)',
      ageRange: '10–36 mesiacov',
      color: 'green',
      category: 'children'
    },
    {
      title: 'My sme malí muzikanti',
      description: 'Otvorená aktivita – tancujeme, hráme a spievame pesničky zo Spievankova',
      ageRange: '8 mes. – 5 rokov',
      color: 'purple',
      category: 'children'
    },
    {
      title: 'Montessori hernička',
      description: 'Hravé aktivity podľa princípov Márie Montessori „Pomôž mi, aby som to dokázal sám"',
      ageRange: '8 mes. – 5 rokov',
      color: 'blue',
      category: 'children'
    },
    {
      title: 'Montessori tvorivé dielničky',
      description: 'Jednoduché výtvarné a tvorivé aktivity vhodné aj pre najmenšie deti, výborne stimulujú zmysly a jemnú motoriku dieťaťa',
      ageRange: '1–5 rokov',
      color: 'pink',
      category: 'children'
    },
    {
      title: 'Cvičenie pre deti s Ľudkou',
      description: 'Pohybové aktivity pre zdravý vývoj vášho dieťaťa',
      ageRange: '2–6 rokov',
      color: 'yellow',
      category: 'children'
    },
    {
      title: 'Divadielka pre najmenších',
      description: 'Otvorená aktivita – interaktívne bábkové rozprávky pre najmenších',
      ageRange: '20 mes. – 5 rokov',
      color: 'purple',
      category: 'children'
    },
    {
      title: 'Hráme sa zdravo',
      description: 'Kurz zameraný na komplexný rozvoj osobnosti dieťaťa, vhodný ako príprava na škôlku',
      ageRange: '2–4 roky',
      color: 'green',
      category: 'children'
    },
    {
      title: 'Angličtina pre najmenších',
      description: 'Hravá angličtina pre najmenších formou hier, piesní a pohybových aktivít na rôzne témy zo života',
      ageRange: '2–4 roky',
      color: 'blue',
      category: 'children'
    },
    {
      title: 'Psychoprofylaktický kurz pre tehotné',
      description: 'Kurz s pôrodnou asistentkou zahŕňajúci prednášky, cvičenia na fitloptách a diskusiu mamičiek',
      activityType: 'mother',
      color: 'blue',
      category: 'mother'
    },
    {
      title: 'Cvičenie pre ženy',
      description: 'Posilňovanie a precvičenie svalstva celého tela',
      activityType: 'mother',
      color: 'yellow',
      category: 'mother'
    },
    {
      title: 'Bábätkáreň',
      description: 'Podporná skupinka dojčenia pre mamičky s bábätkami do 1 roka – preberáme bábätkovské témy',
      activityType: 'mother',
      color: 'pink',
      category: 'mother'
    },
    {
      title: 'Prednášky a diskusie s odborníkmi',
      description: 'Stretnutia s odborníkmi z oblasti zdravia, psychológie, výchovy a partnerských vzťahov',
      activityType: 'family',
      color: 'blue',
      category: 'family'
    },
    {
      title: 'Odborná pomoc pri výchove',
      description: 'Sprostredkovanie odbornej pomoci a poradenstva pri výchove detí',
      activityType: 'family',
      color: 'purple',
      category: 'family'
    },
    {
      title: 'Kurz o výchove detí',
      description: 'Akreditovaný kurz „Ako lepšie rozumieť svojim deťom a sebe samému"',
      activityType: 'family',
      color: 'green',
      category: 'family'
    },
    {
      title: 'Kurz prvej pomoci',
      description: 'Praktický kurz prvej pomoci pre rodičov a opatrovateľov',
      activityType: 'family',
      color: 'yellow',
      category: 'family'
    },
    {
      title: 'Angličtina pre mamičky',
      description: 'Jazykový kurz prispôsobený potrebám a časovým možnostiam mamičiek',
      activityType: 'mother',
      color: 'blue',
      category: 'mother'
    },
    {
      title: 'Burzy',
      description: 'Pravidelné burzy detského a materského oblečenia a potrieb',
      activityType: 'family',
      color: 'pink',
      category: 'family'
    },
    {
      title: 'Rodinné podujatia',
      description: 'Karneval pre najmenších, Mikuláš, Míľa pre mamu, Tatkopárty a Medzinárodný deň MC',
      activityType: 'family',
      color: 'purple',
      category: 'family'
    },
    {
      title: 'Kultúrne podujatia',
      description: 'Koncerty Spievankovo a divadelné predstavenia pre celú rodinu',
      activityType: 'family',
      color: 'green',
      category: 'family'
    },
    {
      title: 'Krátkodobé opatrovanie',
      description: 'Flexibilná služba krátkodobého opatrovania detí',
      activityType: 'family',
      color: 'yellow',
      category: 'family'
    }
  ];

  const filteredActivities = activities.filter(activity =>
    selectedCategory === 'all' ? true : activity.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-cream">
      <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
          >
            AKTIVITY PRE KAŽDÉHO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
          >
            Aktivity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Od cvičenia s bábätkami až po rodinné aktivity. Vyberte si z našej pestrej ponuky aktivít pre všetky vekové kategórie.
          </motion.p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <motion.div
            ref={ref}
            variants={filterAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center`}
                style={{
                  color: selectedCategory === category.id ? 'white' : category.color,
                  backgroundColor: selectedCategory === category.id ? category.color : 'white',
                  boxShadow: selectedCategory === category.id
                    ? `0 4px 14px 0 ${category.color}25`
                    : '0 2px 6px 0 rgba(0, 0, 0, 0.05)'
                }}
              >
                <category.icon className="mr-2 w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Activities Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredActivities.map((activity, index) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Schedule Link */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Chcete sa dozvedieť viac o našich aktivitách alebo sa prihlásiť na kurz?
            </p>
            <Link 
              href="/rozvrh" 
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:-translate-y-0.5"
            >
              <MdCalendarToday className="w-5 h-5 mr-2" />
              Pozrite si rozvrh
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
