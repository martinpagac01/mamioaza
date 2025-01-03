'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#FFF9F2] to-[#FFF4E6] transform-gpu">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 w-[600px] h-[600px] bg-gradient-to-br from-[#F8941C]/5 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
          <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F8941C]/3 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        </div>
        
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#F8941C] uppercase tracking-wider font-medium mb-4">
              FOTOGRAFIE Z NAŠICH AKTIVÍT
            </span>
            <h1 className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6">
              Galéria
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Pozrite si fotografie z našich aktivít a podujatí
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px", once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={src}
                alt="Aktivity v Mami-Oáze"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-[#FFF9F2] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] font-bold mb-4">
              Viac fotografií
            </h2>
            <p className="text-[#64748B] text-xl mb-12">
              Pozrite si viac fotografií z našich aktivít a podujatí na sociálnych sieťach
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link 
                href="https://www.facebook.com/MamiOazaZM" 
                target="_blank"
                className="flex items-center gap-3 bg-[#F1F5F9] hover:bg-gray-100 text-[#1877F2] px-8 py-4 rounded-[100px]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Aktuálne fotografie na Facebooku
              </Link>
              <Link 
                href="https://mamioaza.rajce.idnes.cz/" 
                target="_blank"
                className="flex items-center gap-3 bg-[#F1F5F9] hover:bg-gray-100 text-primary px-8 py-4 rounded-[100px]"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Staršie fotografie na Rajče.net
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
