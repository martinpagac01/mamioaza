import Image from 'next/image'

export default function Partners() {
  const partners = [
    {
      name: 'APR - Asociácia poskytovateľov rodičovských centier',
      logo: '/logo-apr.jpg',
      url: 'https://www.aprcr.sk/',
    },
    {
      name: 'KamSDetmi.sk',
      logo: '/logo-kamsdetmi.jpg',
      url: 'https://www.kamsdetmi.sk/',
    },
  ]

  return (
    <section className="py-16 bg-white" id="partneri">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Naši partneri
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-32 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center mt-4 text-gray-600 group-hover:text-primary transition-colors">
                    {partner.name}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>
              Spolupracujeme s organizáciami, ktoré podporujú rodiny a komunitný život.
              Spoločne vytvárame lepšie prostredie pre deti a ich rodičov.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
