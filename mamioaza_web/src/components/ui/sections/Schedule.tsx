'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBaby, FaHeart, FaUsers } from 'react-icons/fa';

const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200
};

const smoothTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
};

// Activity categories and their colors
const activityCategories: { [key: string]: { color: string; bgColor: string; icon: React.ReactNode } } = {
  'Deti objavujú svet': { color: '#9747FF', bgColor: 'bg-[#9747FF]/5', icon: <FaBaby /> },
  'Cvičenie na fitloptách': { color: '#4C7BF4', bgColor: 'bg-[#4C7BF4]/5', icon: <FaHeart /> },
  'My sme malí muzikanti': { color: '#FF6B6B', bgColor: 'bg-[#FF6B6B]/5', icon: <FaUsers /> },
  'Hráme sa na farby': { color: '#EAB308', bgColor: 'bg-[#EAB308]/5', icon: <FaBaby /> },
  'Hrátky malej Agatky': { color: '#9747FF', bgColor: 'bg-[#9747FF]/5', icon: <FaBaby /> },
};

// Age ranges for activities
const activityAgeRanges: { [key: string]: string } = {
  'Deti objavujú svet 1': '10-36 mesiacov',
  'Deti objavujú svet 2': '10-36 mesiacov',
  'Deti objavujú svet NULTÁCI': '11-14 mesiacov',
  'Cvičenie na fitloptách s lezúňmi': '8-9 mesiacov',
  'Cvičenie na fitloptách s bábätkami': '3-7 mesiacov',
  'My sme malí muzikanti': '10 mes. - 4 roky',
  'Hráme sa na farby': '1-4 roky',
  'Hrátky malej Agatky': '1-3 roky'
};

interface AgeBadgeProps {
  ageRange: string;
  color: string;
  icon: React.ReactNode;
}

const AgeBadge = ({ ageRange, color, icon }: AgeBadgeProps) => (
  <motion.span 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={springTransition}
    className="inline-flex items-center px-3 py-1.5 rounded-full text-base font-medium whitespace-nowrap bg-white/80 backdrop-blur-sm"
    style={{ color }}
  >
    <span className="w-5 h-5 mr-2">
      {icon}
    </span>
    {ageRange}
  </motion.span>
);

const scheduleData = {
  'Pondelok - 16.12.': [
    {
      time: '9:00',
      activity: 'Deti objavujú svet 1',
      description: ''
    },
    {
      time: '10:15',
      activity: 'Cvičenie na fitloptách s lezúňmi',
      description: 'Pre deti vo veku cca 8-9 mesiacov'
    }
  ],
  'Utorok - 17.12.': [
    {
      time: '9:00',
      activity: 'Deti objavujú svet 2',
      description: ''
    },
    {
      time: '10:15',
      activity: 'Deti objavujú svet NULTÁCI',
      description: 'Kurz je vhodný pre deti vo veku 11-14 mesiacov. 2 miesta sú v skupinke voľné, môžete sa pridať.'
    }
  ],
  'Streda - 18.12.': [
    {
      time: '9:00',
      activity: 'My sme malí muzikanti',
      description: 'Pre deti od 10 mesiacov do 4 rokov. Aktivita je OTVORENÁ, nie je to uzatvorený kurz. Spolu spievame, hráme na hudobných nástrojoch, tancujeme, trénujeme ukazovačky, hráme sa s padákom, lozíme cez prekážkové dráhy. Na Muzikantov je potrebné nahlásiť sa do utorka 14:00 mailom alebo SMS.'
    },
    {
      time: '10:15',
      activity: 'Cvičenie na fitloptách s bábätkami',
      description: 'Pre deti vo veku cca 3-7 mesiacov'
    }
  ],
  'Štvrtok - 19.12.': [
    {
      time: '9:00',
      activity: 'Hráme sa na farby - skupinka A',
      description: 'Záverečné stretnutie'
    },
    {
      time: '10:15',
      activity: 'Hráme sa na farby - skupinka B',
      description: 'Záverečné stretnutie'
    }
  ],
  'Piatok - 20.12.': [
    {
      time: '9:00',
      activity: 'Deti objavujú svet 2',
      description: 'Záverečné stretnutie'
    },
    {
      time: '10:15',
      activity: 'Hrátky malej Agatky - nultáci',
      description: ''
    }
  ]
};

interface ActivityCardProps {
  time: string;
  activity: string;
  description: string;
  index: number;
}

function ActivityCard({ time, activity, description, index }: ActivityCardProps) {
  const getActivityCategory = (activityName: string) => {
    return Object.entries(activityCategories).find(([key]) => activityName.startsWith(key));
  };

  const getAgeRange = (activityName: string) => {
    const baseActivity = activityName.split(' - ')[0];
    return activityAgeRanges[baseActivity] || '';
  };

  const category = getActivityCategory(activity);
  const categoryStyle = category ? category[1] : activityCategories['Deti objavujú svet'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        ...smoothTransition,
        delay: index * 0.1
      }}
      className={`rounded-xl p-8 shadow-sm backdrop-blur-sm ${categoryStyle.bgColor}`}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ...smoothTransition,
            delay: index * 0.1 + 0.1
          }}
          className="text-primary text-lg font-semibold md:w-24"
        >
          {time}
        </motion.span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...smoothTransition,
                delay: index * 0.1 + 0.2
              }}
              className="text-xl font-semibold"
              style={{ color: categoryStyle.color }}
            >
              {activity}
            </motion.h4>
            {getAgeRange(activity) && (
              <AgeBadge 
                ageRange={getAgeRange(activity)} 
                color={categoryStyle.color}
                icon={categoryStyle.icon}
              />
            )}
          </div>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...smoothTransition,
                delay: index * 0.1 + 0.3
              }}
              className="text-gray-600 text-base leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Schedule() {
  return (
    <div className="max-w-6xl mx-auto">
      {Object.entries(scheduleData).map(([day, activities], dayIndex) => (
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...smoothTransition,
            delay: dayIndex * 0.1
          }}
          className="mb-8"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ...smoothTransition,
              delay: dayIndex * 0.1 + 0.1
            }}
            className="text-xl font-semibold text-[#1E293B] mb-4"
          >
            {day}
          </motion.h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityCard
                key={`${activity.time}-${activity.activity}`}
                time={activity.time}
                activity={activity.activity}
                description={activity.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
