'use client'

import { useState } from 'react'
import VideoModal from './shared/VideoModal'

export default function PromoVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const thumbnailUrl = '/video-thumbnail.jpg'

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Vitajte v Mami-Oáza
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Pozrite si, ako to u nás vyzerá a čo všetko spolu zažívame
          </p>
          
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group touch-none" 
            onClick={() => setIsModalOpen(true)}
            tabIndex={-1}
            role="button"
            aria-label="Play video"
          >
            {/* Custom Thumbnail */}
            <img 
              src={thumbnailUrl} 
              alt="Video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <svg 
                  className="w-10 h-10 text-white ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Každý deň prinášame nové zážitky a vytvárame priestor pre radostné detstvo
            </p>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
