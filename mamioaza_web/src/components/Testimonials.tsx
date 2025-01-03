import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FFF7ED]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-4">
            Čo o nás hovoria
          </h2>
          <p className="text-[#475569] text-xl mb-6">
            Prečítajte si recenzie od našich návštevníkov
          </p>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F97316]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Všetky recenzie na Facebooku</span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <span className="text-[#F97316] text-2xl">&lt;</span>
          </button>
          
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/avatar-1.jpg"
                alt="Tatiana Partlová"
                width={64}
                height={64}
                className="rounded-full"
              />
              <h3 className="font-semibold text-xl">Tatiana Partlová</h3>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#475569] text-lg">
              "Prostredie, prístup, program... Veľmi radi tam chodíme"
            </p>
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <span className="text-[#F97316] text-2xl">&gt;</span>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#F97316]' : 'bg-[#CBD5E1]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
