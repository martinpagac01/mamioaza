import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      src: "/gallery-1.jpg",
      alt: "Children playing in colorful environment",
    },
    {
      src: "/gallery-2.jpg",
      alt: "Learning activities",
    },
    {
      src: "/gallery-3.jpg",
      alt: "Outdoor activities",
    },
    {
      src: "/gallery-4.jpg",
      alt: "Creative time",
    },
  ]

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-8">
          From Our Day Care
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
