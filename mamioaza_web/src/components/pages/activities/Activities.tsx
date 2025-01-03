'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MdCalendarToday } from 'react-icons/md';
import { FaBaby, FaUsers, FaFemale, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const { ref: filterRef, inView: filterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { id: 'all', name: 'Všetky aktivity', color: '#1E293B' },
    { id: 'children', name: 'Pre najmenších', color: '#9747FF' },
    { id: 'mother', name: 'Pre mamičky', color: '#4C7BF4' },
    { id: 'family', name: 'Pre rodiny', color: '#FF6B6B' }
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

  const titleRef = useRef(null);
  const activitiesRef = useRef(null);
  const titleInView = useInView(titleRef, { triggerOnce: true, threshold: 0.1 });
  const activitiesInView = useInView(activitiesRef, { triggerOnce: true, threshold: 0.1 });

  const springTransition = {
    type: "spring",
    damping: 30,
    stiffness: 200
  };

  const smoothTransition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  };

  const titleAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: smoothTransition
    }
  };

  const cardAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ...smoothTransition,
        delay: 0.1
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Category colors matching badge colors exactly
  const categoryColors = {
    all: '#EAB308', // primary yellow
    children: '#9747FF', // purple from children badges
    mother: '#4C7BF4', // blue from mother badges
    family: '#FF6B6B', // red from family badges,
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Title Section */}
      <section ref={titleRef} className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={titleInView ? { 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: smoothTransition
              } : { opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
            >
              AKTIVITY
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={titleInView ? { 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: {
                  ...smoothTransition,
                  delay: 0.1
                }
              } : { opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
            >
              Naše aktivity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={titleInView ? { 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: {
                  ...smoothTransition,
                  delay: 0.2
                }
              } : { opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              className="text-[#475569] text-xl max-w-3xl mx-auto"
            >
              Objavte širokú škálu aktivít pre deti, mamičky a celé rodiny
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Filter Section */}
        <motion.div
          ref={filterRef}
          variants={filterAnimation}
          initial="hidden"
          animate={filterInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center`}
            style={{
              color: selectedCategory === 'all' ? 'white' : categoryColors.all,
              backgroundColor: selectedCategory === 'all' ? categoryColors.all : 'white',
              boxShadow: selectedCategory === 'all'
                ? `0 4px 14px 0 ${categoryColors.all}25`
                : '0 2px 6px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <FaHeart className="mr-2 w-4 h-4" />
            Všetky aktivity
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('children')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center`}
            style={{
              color: selectedCategory === 'children' ? 'white' : categoryColors.children,
              backgroundColor: selectedCategory === 'children' ? categoryColors.children : 'white',
              boxShadow: selectedCategory === 'children'
                ? `0 4px 14px 0 ${categoryColors.children}25`
                : '0 2px 6px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <FaBaby className="mr-2 w-4 h-4" />
            Pre najmenších
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('mother')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center`}
            style={{
              color: selectedCategory === 'mother' ? 'white' : categoryColors.mother,
              backgroundColor: selectedCategory === 'mother' ? categoryColors.mother : 'white',
              boxShadow: selectedCategory === 'mother'
                ? `0 4px 14px 0 ${categoryColors.mother}25`
                : '0 2px 6px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <FaHeart className="mr-2 w-4 h-4" />
            Pre mamičky
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('family')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center`}
            style={{
              color: selectedCategory === 'family' ? 'white' : categoryColors.family,
              backgroundColor: selectedCategory === 'family' ? categoryColors.family : 'white',
              boxShadow: selectedCategory === 'family'
                ? `0 4px 14px 0 ${categoryColors.family}25`
                : '0 2px 6px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <FaUsers className="mr-2 w-4 h-4" />
            Pre rodiny
          </motion.button>
        </motion.div>

        {/* Activities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
              >
                <ActivityCard {...activity} />
              </motion.div>
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
  );
}
