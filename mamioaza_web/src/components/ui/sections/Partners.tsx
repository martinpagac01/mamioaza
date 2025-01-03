import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
  const partners = [
    {
      name: 'Akadémia rodičovstva',
      logo: '/logo-apr.jpg',
      url: 'https://www.akademiarodicovstva.sk'
    },
    {
      name: 'Kam s deťmi',
      logo: '/logo-kamsdetmi.jpg',
      url: 'https://www.kamstdetmi.sk'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          Spolupracujeme s týmito partnerskými webmi
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity hover:opacity-80"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="object-contain"
                style={{ height: 'auto' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
