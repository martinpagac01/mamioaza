'use client';

import { 
  FaHeart, 
  FaHandHoldingHeart, 
  FaUsers, 
  FaHistory, 
  FaBullseye,
  FaGraduationCap,
  FaChild,
  FaHandsHelping,
  FaBabyCarriage,
  FaCalendarAlt,
  FaHome,
  FaBookReader,
  FaPuzzlePiece,
  FaMusic,
  FaStar,
  FaLightbulb,
  FaCompass,
  FaClock,
  FaSmile,
  FaBuilding
} from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }
        }
      }}
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        variants={{
          hidden: { 
            opacity: 0,
            scale: 0,
            rotate: -180
          },
          visible: { 
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200,
              delay: 0.2
            }
          }
        }}
        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
      >
        {icon}
      </motion.div>
      <motion.h3
        variants={{
          hidden: { 
            opacity: 0,
            x: -20,
            filter: "blur(5px)"
          },
          visible: { 
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300"
      >
        {title}
      </motion.h3>
      <motion.p
        variants={{
          hidden: { 
            opacity: 0,
            x: -20,
            filter: "blur(5px)"
          },
          visible: { 
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="text-gray-600 text-base leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
}

function MissionCard({ icon, title }: MissionCardProps) {
  return (
    <motion.div
      variants={{
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }
        }
      }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <motion.div
        variants={{
          hidden: { 
            opacity: 0,
            scale: 0,
            rotate: -180
          },
          visible: { 
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 200,
              delay: 0.2
            }
          }
        }}
        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
      >
        {icon}
      </motion.div>
      <motion.h4
        variants={{
          hidden: { 
            opacity: 0,
            x: -20,
            filter: "blur(5px)"
          },
          visible: { 
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="text-center font-medium text-gray-800 text-lg"
      >
        {title}
      </motion.h4>
    </motion.div>
  );
}

function TeamMemberCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <motion.div
      variants={{
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }
        }
      }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        variants={{
          hidden: { 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px) grayscale(100%)"
          },
          visible: { 
            opacity: 1,
            scale: 1,
            filter: "blur(0px) grayscale(0%)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="aspect-square relative"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0,
            x: -20,
            filter: "blur(5px)"
          },
          visible: { 
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-base">{role}</p>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: <FaHome className="w-8 h-8 text-primary" />,
      title: 'Bezpečný priestor',
      description: 'Vytvárame príjemné prostredie pre rodiny s deťmi, kde sa môžu rozvíjať, učiť a budovať vzťahy.'
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: 'Komunita',
      description: 'Spájame rodiny a budujeme priateľstvá, znižujeme spoločenskú izoláciu žien počas materskej dovolenky.'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
      title: 'Vzdelávanie',
      description: 'Poskytujeme vzdelávacie aktivity pre rodičov v oblastiach rozvoja a výchovy detí.'
    },
    {
      icon: <FaHandsHelping className="w-8 h-8 text-primary" />,
      title: 'Podpora',
      description: 'Pomáhame matkám počas materskej dovolenky a poskytujeme podporné služby pre mladé rodiny.'
    }
  ];

  const missionPoints = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-primary" />,
      title: 'Vytvárať podnetný priestor pre rodičov s deťmi'
    },
    {
      icon: <FaCompass className="w-6 h-6 text-primary" />,
      title: 'Znižovať spoločenskú izoláciu žien počas MD'
    },
    {
      icon: <FaChild className="w-6 h-6 text-primary" />,
      title: 'Poskytovať aktivity pre celostný rozvoj detí'
    },
    {
      icon: <FaGraduationCap className="w-6 h-6 text-primary" />,
      title: 'Vzdelávať rodičov v oblasti výchovy'
    },
    {
      icon: <FaBabyCarriage className="w-6 h-6 text-primary" />,
      title: 'Podporovať budúcich rodičov'
    }
  ];

  const teamMembers = [
    {
      name: 'Katarína Žarnovičanová',
      role: 'Štatutárka MC',
      image: '/img1.jpg'
    },
    {
      name: 'Milada Řeháčková',
      role: 'Koordinátorka aktivít',
      image: '/img2.jpg'
    },
    {
      name: 'Žaneta Uhrecká',
      role: 'Projektová manažérka',
      image: '/img3.jpg'
    }
  ];

  const springTransition = {
    type: "spring",
    damping: 30,
    stiffness: 200
  };

  const smoothTransition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  };

  const fadeInScale = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: smoothTransition
    }
  };

  const iconAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        ...springTransition,
        delay: 0.2
      }
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

  const textReveal = {
    hidden: { 
      opacity: 0,
      x: -20,
      filter: "blur(5px)"
    },
    visible: { 
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: smoothTransition
    }
  };

  const imageReveal = {
    hidden: { 
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px) grayscale(100%)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px) grayscale(0%)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
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

  return (
    <div className="relative min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-16" ref={heroRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                animate={heroInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                className="inline-block text-primary uppercase tracking-wider font-medium mb-4"
              >
                O CENTRE
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                animate={heroInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6"
              >
                Kto sme? Čo je to materské centrum?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                animate={heroInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, scale: 0.9, y: 20, filter: "blur(5px)" }}
                className="text-[#475569] text-xl max-w-3xl mx-auto"
              >
                Materské centrum MAMI – OÁZA je nezisková organizácia s podpornými službami pre mladé rodiny, hlavne pre matky na materskej dovolenke a pre tehotné.
              </motion.p>
            </div>

            <motion.div
              ref={featuresRef}
              variants={staggerContainer}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white/50" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={fadeInScale}
              >
                <h2 className="text-3xl font-bold text-[#1E293B] mb-6">O nás</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4 text-lg">
                    Od roku 2001 poskytujeme rodičom zo Zlatých Moraviec a širokého okolia priestor pre stretnutia s novými ľuďmi, pre zmysluplné trávenie času spolu s deťmi, vykonávame rôzne druhy vzdelávacích, pohybových a kultúrnych aktivít pre deti i rodičov.
                  </p>
                  <p className="text-lg">
                    MC vypĺňa medzeru v spoločenských kontaktoch matky i rodiny. Mama sa môže občas cítiť na materskej dovolenke osamelo, hlavne v prípade presťahovania sa do nového mesta, keď ešte nemá vybudované nové kontatky a starí rodičia sú ďaleko.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={missionRef}
                initial="hidden"
                animate={missionInView ? "visible" : "hidden"}
                variants={fadeInScale}
              >
                <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Naše poslanie</h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p className="text-lg">
                    Poslaním MC je podpora materstva a snaha o skvalitňovanie obdobia materskej dovolenky pre ženy, ktoré sa ho rozhodli stráviť spolu so svojimi deťmi.
                  </p>
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={missionInView ? "visible" : "hidden"}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {missionPoints.map((point, index) => (
                    <MissionCard key={index} {...point} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Center Image Section */}
      <section className="py-16" ref={imageRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              variants={imageReveal}
              className="relative rounded-3xl overflow-hidden shadow-xl transform-gpu"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="/img5.jpg"
                  alt="Maľba na stene nášho centra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={imageInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, y: 50 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    } : { opacity: 0, x: -20 }}
                    className="text-white text-2xl font-bold mb-2"
                  >
                    Naše centrum
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={imageInView ? { 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    } : { opacity: 0, x: -20 }}
                    className="text-white/90 text-lg"
                  >
                    Vytvárame príjemné a inšpiratívne prostredie pre deti a rodičov
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16" ref={historyRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={historyInView ? "visible" : "hidden"}
              variants={fadeInScale}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4">História v skratke</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Od prvých krokov v roku 2001 až po súčasnosť
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={historyInView ? "visible" : "hidden"}
              variants={fadeInScale}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm"
            >
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6 text-lg">
                  História materských centier na Slovensku siaha do roku 1996, kedy po vzore Českej republiky začali vznikať prvé neformálne skupinky mladých matiek. V roku 2001 vzniklo naše centrum pod vedením Katky Žarnovičanovej, Miladky Řeháčkovej a Žanetky Uhreckej.
                </p>
                <p className="mb-6 text-lg">
                  MC MAMI – OÁZA bolo oficiálne zaregistrované ako občianske združenie dňa 5.6.2001. Slávnostné otvorenie sa konalo 3.12.2001 v mestských priestoroch.
                </p>
                <p className="text-lg">
                  Významná zmena nastala v roku 2004, kedy sa centrum presťahovalo do Kláštora bratov tešiteľov, kde sídli dodnes. MC má k dispozícii krásnu svetlú herňu, samostatnú miestnosť na aktivity, kanceláriu a dvor s malým ihriskom.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/50" ref={teamRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              variants={fadeInScale}
              className="text-center mb-10"
            >
              <h2 className="text-[#1E293B] text-3xl font-bold mb-4">
                Náš tím
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            >
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
