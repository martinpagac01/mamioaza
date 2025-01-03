'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdCalendarToday } from 'react-icons/md';
import { useState } from 'react';
import VideoModal from '@/components/shared/VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <section className="relative min-h-[100vh] md:min-h-[85vh] flex items-center justify-center bg-primary-light overflow-hidden py-12 md:py-16">
        {/* Background pattern with rounded shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-75 md:opacity-100">
          {/* Mobile-optimized background shapes */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 w-48 md:w-80 h-48 md:h-80 bg-primary/5 rounded-[72px] transform rotate-6 animate-float-slow" style={{"--rotation": "-10deg"} as any}></div>
          <div className="absolute -left-12 top-48 w-32 md:w-64 h-32 md:h-64 bg-primary/8 rounded-full animate-float-slow" style={{"--rotation": "15deg"} as any}></div>
          <div className="absolute -right-8 top-[280px] w-40 md:w-68 h-40 md:h-68 bg-primary/6 rounded-[60px] transform rotate-12 animate-float-slow" style={{"--rotation": "-15deg"} as any}></div>
        </div>

        {/* Main content */}
        <div className="container relative mx-auto px-6 md:px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[180px] sm:w-[200px] md:w-[300px] lg:w-[400px] mx-auto lg:mx-0"
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
                className="text-[#1E293B] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.2] max-w-xl"
              >
                Neseďte doma sami a príďte sa hrať s nami!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#475569] text-base sm:text-lg md:text-lg lg:text-xl max-w-xl leading-relaxed"
              >
                Vytvárame bezpečný priestor pre rodičov a deti v Zlatých Moravciach, 
                kde každý deň prináša nové dobrodružstvá a priateľstvá.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row w-full items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <Link
                  href="/rozvrh"
                  className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center bg-primary hover:bg-primary-dark active:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <MdCalendarToday className="w-5 h-5 mr-2" />
                  Pozrite si rozvrh
                </Link>
                <Link
                  href="/o-nas"
                  className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center bg-white hover:bg-gray-50 active:bg-gray-100 text-[#1E293B] px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg shadow-black/5"
                >
                  Zistite viac o nás
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative grid grid-cols-2 gap-4 p-4 group cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/img1.jpg"
                    alt="Deti hrajúce sa s padákom"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/img3.jpg"
                    alt="Skupinová aktivita s deťmi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/img2.jpg"
                    alt="Dieťa prechádzajúce cez prekážky"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/img4.jpg"
                    alt="Deti pri spoločnej aktivite"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors duration-300">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary shadow-xl shadow-primary/20 text-white flex items-center justify-center transform group-hover:scale-110 group-active:scale-95 transition-all duration-300"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
