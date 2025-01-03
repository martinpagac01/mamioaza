'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-50">
      {/* Content */}
      <div className="relative">
        {/* Contact info bar */}
        <div className="border-b border-neutral-200/80">
          <div className="container mx-auto px-4 py-10 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Phone */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 justify-center md:justify-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-600 text-sm md:text-base font-medium mb-1">Zavolajte nám</p>
                  <a href="tel:+421902092905" className="text-primary hover:text-primary-dark transition-colors text-lg md:text-xl font-semibold">
                    +421 902 092 905
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 justify-center md:justify-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-600 text-sm md:text-base font-medium mb-1">Napíšte nám</p>
                  <a href="mailto:mamioazazm@gmail.com" className="text-primary hover:text-primary-dark transition-colors text-lg md:text-xl font-semibold">
                    mamioazazm@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 justify-center md:justify-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-600 text-sm md:text-base font-medium mb-1">Kde nás nájdete</p>
                  <p className="text-primary hover:text-primary-dark transition-colors text-lg md:text-xl font-semibold">
                    Zlaté Moravce
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <Image
                src="/logo.svg"
                alt="Mami-Oáza Logo"
                width={180}
                height={60}
                className="mb-6"
              />
              <p className="text-neutral-600 mb-6">
                Vytvárame bezpečný priestor pre rodičov a deti v Zlatých Moravciach, 
                kde každý deň prináša nové dobrodružstvá a priateľstvá.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Rýchle odkazy</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/o-centre" className="text-neutral-600 hover:text-primary transition-colors">
                    O centre
                  </Link>
                </li>
                <li>
                  <Link href="/aktivity" className="text-neutral-600 hover:text-primary transition-colors">
                    Aktivity
                  </Link>
                </li>
                <li>
                  <Link href="/rozvrh" className="text-neutral-600 hover:text-primary transition-colors">
                    Rozvrh
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-neutral-600 hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Otváracie hodiny</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-neutral-600">Pondelok - Piatok</span>
                  <span className="text-primary font-medium">8:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-600">Sobota</span>
                  <span className="text-primary font-medium">9:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-600">Nedeľa</span>
                  <span className="text-neutral-500 font-medium">Zatvorené</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200/80">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-neutral-600 text-sm">
              &copy; 2008-2025 Materské centrum MAMI - OÁZA. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
