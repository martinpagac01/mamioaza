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
  const [[page, direction], setPage] = useState([0, 0]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setPage([page + 1, 1]);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setPage([page - 1, -1]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
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
              className="text-2xl max-w-3xl mx-auto leading-relaxed text-[#475569]"
            >
              Prečítajte si skúsenosti rodičov s naším centrom
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Review card */}
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextReview();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevReview();
                  }
                }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative z-10 cursor-grab active:cursor-grabbing"
              >
                {/* Review content */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image 
                        src={reviews[currentIndex].photo} 
                        alt={reviews[currentIndex].author}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-primary w-5 h-5" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{reviews[currentIndex].author}</h3>
                    <p className="text-gray-600 leading-relaxed">{reviews[currentIndex].text}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Previous review"
                >
                  <HiOutlineArrowLeft className="w-6 h-6 text-primary" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Next review"
                >
                  <HiOutlineArrowRight className="w-6 h-6 text-primary" />
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
