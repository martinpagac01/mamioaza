'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/ui/sections/Hero';
import Features from '@/components/ui/sections/Features';
import Reviews from '@/components/ui/sections/Reviews';
import ActivityCategories from '@/components/pages/activities/ActivityCategories';
import FAQ from '@/components/ui/sections/FAQ';
import CallToAction from '@/components/ui/sections/CallToAction';
import Partners from '@/components/ui/sections/Partners';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#FFF9F2] to-[#FFF4E6] transform-gpu">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 w-[600px] h-[600px] bg-gradient-to-br from-[#F8941C]/5 to-transparent rounded-full blur-3xl transform-gpu will-change-transform"></div>
          <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F8941C]/3 to-transparent rounded-full blur-3xl transform-gpu will-change-transform"></div>
        </div>
        <Hero />
      </div>

      {/* Features Section */}
      <div className="relative bg-[#FFFAF5] transform-gpu">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-32 bg-gradient-to-b from-[#FFF4E6] to-transparent opacity-50 transform-gpu will-change-transform"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 contain-paint" style={{
            backgroundImage: 'radial-gradient(#F8941C 0.5px, transparent 0.5px), radial-gradient(#F8941C 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            opacity: '0.03'
          }}></div>
        </div>
        <Features />
      </div>

      {/* Reviews Section */}
      <div className="relative bg-gradient-to-br from-[#FFF9F2] via-[#FFF6EB] to-[#FFF4E6] transform-gpu">
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating shapes */}
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-gradient-to-r from-[#F8941C]/10 to-transparent rounded-[100px] rotate-45 blur-2xl transform-gpu will-change-transform"></div>
          <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-gradient-to-l from-[#F8941C]/8 to-transparent rounded-[100px] -rotate-45 blur-2xl transform-gpu will-change-transform"></div>
        </div>
        <Reviews />
      </div>

      {/* Activities Section */}
      <div className="relative bg-white transform-gpu">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle texture */}
          <div className="absolute inset-0 contain-paint" style={{
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMiAwYTIgMiAwIDEgMCA0IDBhMiAyIDAwMSAwLTQgMCIgZmlsbD0iI0Y4OTQxQyIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPg==")'
          }}></div>
          {/* Gradient overlays */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent transform-gpu"></div>
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent transform-gpu"></div>
        </div>
        <ActivityCategories />
      </div>

      {/* FAQ Section */}
      <div className="relative bg-gradient-to-b from-[#FFFCF8] to-[#FFF9F2] transform-gpu">
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute right-1/4 top-20 w-64 h-64 bg-gradient-to-br from-[#F8941C]/5 to-transparent rounded-full blur-2xl transform-gpu will-change-transform"></div>
          <div className="absolute left-1/4 bottom-20 w-72 h-72 bg-gradient-to-tr from-[#F8941C]/4 to-transparent rounded-full blur-2xl transform-gpu will-change-transform"></div>
        </div>
        <FAQ />
      </div>

      {/* Partners Section */}
      <div className="relative bg-[#FFF9F2] transform-gpu">
        <Partners />
      </div>

      {/* Call to Action Section */}
      <div className="relative transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8941C] to-[#F9A033]">
          {/* Dynamic background pattern */}
          <div className="absolute inset-0 contain-paint" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
          {/* Glowing orbs */}
          <div className="absolute -left-20 top-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl transform-gpu will-change-transform"></div>
          <div className="absolute -right-20 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl transform-gpu will-change-transform"></div>
        </div>
        <CallToAction />
      </div>
    </main>
  );
}
