'use client'

import { useState, useRef } from 'react'

export default function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

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
          
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group z-10"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 group-hover:bg-primary transition-colors">
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
            )}
            
            <video
              ref={videoRef}
              className="w-full h-full"
              src="/video.mp4"
              controls={isPlaying}
              playsInline
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              poster="/video-thumbnail.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Každý deň prinášame nové zážitky a vytvárame priestor pre radostné detstvo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
