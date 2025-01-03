'use client';

import Hero from '@/components/ui/sections/Hero';
import Features from '@/components/ui/sections/Features';
import ActivityCategories from '@/components/pages/activities/ActivityCategories';
import Reviews from '@/components/ui/sections/Reviews';
import FAQ from '@/components/ui/sections/FAQ';
import CallToAction from '@/components/ui/sections/CallToAction';
import HeartDoodle from '@/components/ui/doodles/HeartDoodle';
import SquiggleDoodle from '@/components/ui/doodles/SquiggleDoodle';
import StarDoodle from '@/components/ui/doodles/StarDoodle';
import WavyDoodle from '@/components/ui/doodles/WavyDoodle';
import ArrowDoodle from '@/components/ui/doodles/ArrowDoodle';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero - Soft Orange Background */}
      <div className="bg-[#FFF4E6] relative">
        <Hero />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Arrow pointing to the CTA button */}
          <ArrowDoodle className="absolute bottom-[25%] right-[30%] w-32 h-32 text-[#96CEB4] -rotate-[135deg]" />
          {/* Decorative elements framing the hero content */}
          <HeartDoodle className="absolute bottom-32 right-20 w-28 h-28 text-[#4ECDC4] rotate-12" />
        </div>
        {/* Divider to Features section */}
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* Features - Soft Blue Background */}
      <div className="relative bg-[#F0F7FF]">
        <div className="absolute inset-x-0 -top-8 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,0 1080,16 C1260,24 1350,28 1440,32 L1440,32 L0,32 Z" fill="#F0F7FF"/>
          </svg>
        </div>
        <Features />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Arrow pointing to feature cards */}
          <ArrowDoodle className="absolute top-[15%] left-[10%] w-28 h-28 text-[#96CEB4] rotate-[45deg]" />
          {/* Decorative element near feature title */}
          <StarDoodle className="absolute top-20 right-20 w-20 h-20 text-[#4ECDC4] rotate-12" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="#FFF5E9"/>
          </svg>
        </div>
      </div>
      
      {/* Activities - Soft Blue */}
      <div className="relative bg-[#F0F7FF]">
        <div className="absolute inset-x-0 -top-8 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,0 1080,16 C1260,24 1350,28 1440,32 L1440,32 L0,32 Z" fill="#F0F7FF"/>
          </svg>
        </div>
        <ActivityCategories />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Arrows pointing to activity categories */}
          <ArrowDoodle className="absolute top-[30%] right-[10%] w-32 h-32 text-[#96CEB4] rotate-[225deg]" />
          <ArrowDoodle className="absolute top-[30%] left-[10%] w-32 h-32 text-[#4ECDC4] rotate-[135deg]" />
          {/* Decorative element near title */}
          <SquiggleDoodle className="absolute top-20 left-1/2 w-28 h-28 text-[#FFE66D] -rotate-12" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="#FFF5E9"/>
          </svg>
        </div>
      </div>
      
      {/* Reviews - Warm Cream */}
      <div className="relative bg-[#FFF5E9]">
        <div className="absolute inset-x-0 -top-8 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,0 1080,16 C1260,24 1350,28 1440,32 L1440,32 L0,32 Z" fill="#FFF5E9"/>
          </svg>
        </div>
        <Reviews />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Decorative elements framing reviews */}
          <HeartDoodle className="absolute top-20 left-20 w-24 h-24 text-[#96CEB4] rotate-[-15deg]" />
          <HeartDoodle className="absolute bottom-20 right-20 w-24 h-24 text-[#4ECDC4] rotate-12" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="#F2F9F9"/>
          </svg>
        </div>
      </div>
      
      {/* FAQ - Light Mint */}
      <div className="relative bg-[#F2F9F9]">
        <div className="absolute inset-x-0 -top-8 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,0 1080,16 C1260,24 1350,28 1440,32 L1440,32 L0,32 Z" fill="#F2F9F9"/>
          </svg>
        </div>
        <FAQ />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Arrow pointing to FAQ questions */}
          <ArrowDoodle className="absolute top-[20%] left-[15%] w-28 h-28 text-[#96CEB4] rotate-[45deg]" />
          {/* Decorative element */}
          <StarDoodle className="absolute bottom-20 right-20 w-20 h-20 text-[#4ECDC4] rotate-45" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="#F8941C"/>
          </svg>
        </div>
      </div>

      {/* Call to Action - Deep Orange */}
      <div className="relative bg-primary">
        <div className="absolute inset-x-0 -top-8 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,0 1080,16 C1260,24 1350,28 1440,32 L1440,32 L0,32 Z" fill="#F8941C"/>
          </svg>
        </div>
        <CallToAction />
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Decorative elements */}
          <HeartDoodle className="absolute left-10 top-1/2 w-28 h-28 text-white/80" />
          <StarDoodle className="absolute bottom-20 left-20 w-12 h-12 text-white/80" />
          <SquiggleDoodle className="absolute top-20 right-20 w-24 h-24 text-white/80" />
        </div>
        {/* Footer divider - matches footer's bg-neutral-50 */}
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg className="w-full h-8" viewBox="0 0 1440 32" preserveAspectRatio="none">
            <path d="M0,0 C480,32 960,32 1440,0 L1440,32 L0,32 Z" fill="#fafafa"/>
          </svg>
        </div>
      </div>
    </main>
  );
}
