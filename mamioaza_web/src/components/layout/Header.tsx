'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCalendarToday } from 'react-icons/md';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;
  
  const mainNavLinks = [
    { href: '/o-centre', label: 'O Centre' },
    { href: '/aktivity', label: 'Aktivity' },
    { href: '/pomozte-nam', label: 'Pomôžte nám' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-primary/5"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center relative">
              <span className="text-2xl font-bold text-primary">MAMI-OÁZA</span>
              <span className="absolute -top-3 -right-16 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                Zlaté Moravce
              </span>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all group ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full
                    ${isActive(link.href) ? 'w-full' : 'w-0'}`} 
                  />
                </Link>
              ))}
            </nav>

            {/* Right-aligned Schedule Link */}
            <Link
              href="/rozvrh"
              className={`hidden md:flex items-center space-x-2 font-medium px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                isActive('/rozvrh')
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              <MdCalendarToday className="w-5 h-5" />
              <span>Rozvrh na tento týždeň</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="w-6 h-6 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-semibold text-primary">Menu</span>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className={`block px-6 py-3 font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Schedule Link */}
                <div className="p-4 border-t">
                  <Link
                    href="/rozvrh"
                    onClick={toggleMobileMenu}
                    className="flex items-center justify-center space-x-2 font-medium px-6 py-3 rounded-full bg-primary text-white transition-all hover:bg-primary-dark"
                  >
                    <MdCalendarToday className="w-5 h-5" />
                    <span>Rozvrh na tento týždeň</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
