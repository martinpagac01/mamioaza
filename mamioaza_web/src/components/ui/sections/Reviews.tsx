'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookSquare, FaStar } from 'react-icons/fa';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const reviews = [
  {
    id: 1,
    author: "Tatiana Partlová",
    rating: 5,
    text: "Prostredie, prístup, program... Veľmi radi tam chodíme",
    photo: "/reviews/profile1.jpg"
  },
  {
    id: 2,
    author: "Michaela Šutková",
    rating: 5,
    text: "Mami-oáza je to pravé miesto pre vaše detičky. Majú veľkú herňu, plne vybavenú a kopec aktivít a kurzov, na ktoré sa môžete s drobčekmi prihlásiť. Obaji so synčekom máme toto miesto veľmi radi. Ďakujeme Katka a Marianka, čo všetko pre deti robíte ",
    photo: "/reviews/profile2.jpg"
  },
  {
    id: 3,
    author: "Monika Horváthová",
    rating: 5,
    text: "Naše úžasné materské centrum  Ďakujeme Katke a Marianke za skvelé kurzy pre detičky, či už cvičenie na fit loptách alebo kurz deti objavujú svet kam teraz chodíme. Tiež sú super príležitostné predpôrodné kurzy, podporky nosenia či dojčenia detí alebo salsa s miminkami :) Detičky sa vyhrajú aj v peknej herničke. Radi sem vždy chodíme do kolektívu detičiek.",
    photo: "/reviews/profile3.jpg"
  },
  {
    id: 4,
    author: "Monika Sýkorová",
    rating: 5,
    text: "Odporúčam všetkým maminkam s detičkami... Deti sa môžu zahrať, získať nové zručnosti alebo sa viac začleniť do spoločnosti...",
    photo: "/reviews/profile4.jpg"
  },
  {
    id: 5,
    author: "Marianna Hindická",
    rating: 5,
    text: "Materske centrum je vlastne jedine miesto v ZM kde sa mozu prist dedicky zahrat, vela naucit, zabavit sa a tiez mamicky si vymenit svoje skusenosti a navzajom si poradit. A to najdolezitejsie je tam dobre prostredie, vela usmevu a dve uzastne osoby ktore toto centrum robia este krajsim, je to Katka a Marianka....",
    photo: "/reviews/profile5.jpg"
  },
  {
    id: 6,
    author: "Beata Krchnava",
    rating: 5,
    text: "Super prístup ... skvelé prostredie pre deti a hlavne aktivity ktoré centrum ponuka pre detičky ",
    photo: "/reviews/profile6.jpg"
  },
  {
    id: 7,
    author: "Kristína Šabíková",
    rating: 5,
    text: "Skvelé prostredie, super kurzy a aktivity, chodíme sem veľmi radi.",
    photo: "/reviews/profile7.jpg"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-neutral-cool overflow-hidden relative">
      {/* Playful background shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-primary/5 rounded-[200px] transform rotate-6"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-[150px] transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
            >
              REFERENCIE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Čo o nás hovoria
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              Prečítajte si skúsenosti rodičov s naším centrom
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Review Card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-primary/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/10">
                    <Image
                      src={reviews[currentIndex].photo}
                      alt={reviews[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-primary" />
                      ))}
                    </div>
                    <h3 className="font-bold text-[#1E293B] text-lg">
                      {reviews[currentIndex].author}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#475569] text-lg leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
                <button
                  onClick={prevReview}
                  className="transform -translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300 pointer-events-auto border border-primary/10"
                  aria-label="Previous review"
                >
                  <HiOutlineArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="transform translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300 pointer-events-auto border border-primary/10"
                  aria-label="Next review"
                >
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/20'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Facebook Reviews Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center relative"
            >
              <Link 
                href="https://www.facebook.com/mcmamioaza/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-[#1877F2] bg-[#1877F2]/5 hover:bg-[#1877F2]/10 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <FaFacebookSquare className="w-6 h-6" />
                <span>Pozrite si všetky recenzie na Facebooku</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
