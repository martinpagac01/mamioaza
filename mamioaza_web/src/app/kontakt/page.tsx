'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';

const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200
};

const smoothTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}

function ContactItem({ icon, title, children, index }: ContactItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        transition: {
          ...smoothTransition,
          delay: index * 0.1
        }
      } : {}}
      className="flex items-start space-x-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? {
          scale: 1,
          rotate: 0,
          transition: springTransition
        } : {}}
        className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center"
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
              delay: index * 0.1 + 0.2
            }
          } : {}}
          className="text-lg font-semibold text-[#1E293B] mb-2"
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
              delay: index * 0.1 + 0.3
            }
          } : {}}
          className="text-[#475569]"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-20">
        {/* Title Section */}
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
            KONTAKT
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
            Kde nás nájdete?
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
            Radi vás privítame v našom centre. Neváhajte nás kontaktovať.
          </motion.p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={cardInView ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                ...smoothTransition,
                delay: 0.3
              }
            } : {}}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Address Section */}
              <div className="space-y-6">
                <ContactItem icon={<FaMapMarkerAlt className="w-6 h-6 text-primary" />} title="Adresa" index={0}>
                  <p className="leading-relaxed">
                    Materské centrum MAMI - OÁZA<br />
                    Kláštor u bratov Tešiteľov<br />
                    (vchod z Mojmírovej ulice)<br />
                    Hviezdoslavova 77<br />
                    953 01 ZLATÉ MORAVCE
                  </p>
                </ContactItem>

                <ContactItem icon={<HiIdentification className="w-6 h-6 text-primary" />} title="IČO a právna forma" index={1}>
                  <p>
                    IČO: 36 11 38 75<br />
                    PRÁVNA FORMA: občianske združenie
                  </p>
                </ContactItem>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <ContactItem icon={<FaPhone className="w-5 h-5 text-primary" />} title="Telefón" index={2}>
                  <a href="tel:+421903220292" className="hover:text-primary transition-colors">
                    +421 903 220 292
                  </a>
                </ContactItem>

                <ContactItem icon={<FaEnvelope className="w-5 h-5 text-primary" />} title="Email" index={3}>
                  <a href="mailto:info@mamioaza.sk" className="hover:text-primary transition-colors">
                    info@mamioaza.sk
                  </a>
                </ContactItem>

                <ContactItem icon={<FaFacebook className="w-5 h-5 text-primary" />} title="Facebook" index={4}>
                  <a 
                    href="https://www.facebook.com/MCMamiOaza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @MCMamiOaza
                  </a>
                </ContactItem>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? {
              opacity: 1,
              y: 0,
              transition: {
                ...smoothTransition,
                delay: 0.4
              }
            } : {}}
            className="mt-8 rounded-3xl overflow-hidden shadow-xl h-[400px] bg-white/80 backdrop-blur-sm p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.4046485677988!2d18.396595776332043!3d48.38483623799272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee44a182c45%3A0x88c6d1688cb3f048!2sHviezdoslavova%2077%2C%20953%2001%20Zlat%C3%A9%20Moravce!5e0!3m2!1sen!2ssk!4v1704228856811!5m2!1sen!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}