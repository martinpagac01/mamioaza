'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MdCalendarToday } from 'react-icons/md';

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  const mainNavLinks = [
    { href: '/o-centre', label: 'O Centre' },
    { href: '/aktivity', label: 'Aktivity' },
    { href: '/pomozte-nam', label: 'Pomôžte nám' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">MAMI-OÁZA</span>
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
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
