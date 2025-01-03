'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdCalendarToday } from 'react-icons/md';
import { useState } from 'react';
import VideoModal from '@/components/shared/VideoModal';
import HeartDoodle from '@/components/ui/doodles/HeartDoodle';
import SquiggleDoodle from '@/components/ui/doodles/SquiggleDoodle';
import StarDoodle from '@/components/ui/doodles/StarDoodle';
import ArrowDoodle from '@/components/ui/doodles/ArrowDoodle';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <section className="relative min-h-[85vh] flex items-center justify-center">
        {/* Main content */}
        <div className="container relative mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[250px] md:w-[300px] lg:w-[400px] mx-auto lg:mx-0"
              >
                <Image 
                  src="/logo.svg" 
                  alt="Mamioaza Logo" 
                  width={600} 
                  height={300} 
                  priority
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#1E293B] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Neseďte doma sami a príďte sa hrať s nami!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#475569] text-base md:text-lg lg:text-xl max-w-xl"
              >
                Vytvárame bezpečný priestor pre rodičov a deti v Zlatých Moravciach, 
                kde každý deň prináša nové dobrodružstvá a priateľstvá.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/rozvrh"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <MdCalendarToday className="w-5 h-5 mr-2" />
                  Pozrite si rozvrh
                </Link>
                <Link
                  href="/o-centre"
                  className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Zistite viac o nás
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative grid grid-cols-2 gap-4 group cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <div className="space-y-4">
                <div className="relative h-32 md:h-40 lg:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/img1.jpg"
                    alt="Detské aktivity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
                </div>
                <div className="relative h-40 md:h-52 lg:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/img3.jpg"
                    alt="Vzdelávanie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-40 md:h-52 lg:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/img2.jpg"
                    alt="Hry a zábava"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
                </div>
                <div className="relative h-32 md:h-40 lg:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/img4.jpg"
                    alt="Spoločné aktivity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
                </div>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 hover:bg-primary">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative doodles */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Arrow pointing to the main CTA button */}
          <ArrowDoodle className="absolute bottom-[25%] right-[30%] w-32 h-32 text-[#96CEB4] -rotate-[135deg]" />
        </div>
      </section>
    </>
  );
}
