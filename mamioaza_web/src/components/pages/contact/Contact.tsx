'use client';

import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  index: number;
}

function ContactCard({ icon, title, content, index }: ContactCardProps) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Icon container with gradient */}
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <div className="text-gray-600 leading-relaxed">
        {content}
      </div>
    </div>
  );
}

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-primary" />,
      title: 'Adresa',
      content: (
        <>
          <p>Materské centrum MAMI-OÁZA</p>
          <p>Hviezdoslavova 77</p>
          <p>953 01 Zlaté Moravce</p>
        </>
      )
    },
    {
      icon: <FaPhone className="w-8 h-8 text-primary" />,
      title: 'Telefón',
      content: (
        <>
          <p>0902 092 905</p>
          <p>0903 438 930</p>
        </>
      )
    },
    {
      icon: <FaEnvelope className="w-8 h-8 text-primary" />,
      title: 'Email',
      content: (
        <a
          href="mailto:mamioazazm@gmail.com"
          className="text-primary hover:text-primary-dark transition-colors"
        >
          mamioazazm@gmail.com
        </a>
      )
    },
    {
      icon: <FaClock className="w-8 h-8 text-primary" />,
      title: 'Otváracie hodiny',
      content: (
        <>
          <p>Pondelok - Piatok</p>
          <p>9:00 - 12:00</p>
          <p>15:00 - 18:00</p>
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary uppercase tracking-wider font-medium mb-4">
              KONTAKT
            </span>
            <h1 className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-4">
              Kde nás nájdete?
            </h1>
            <p className="text-[#475569] text-lg">
              Sme tu pre vás každý pracovný deň. Neváhajte nás kontaktovať.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} index={index} />
            ))}
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.8087251905387!2d18.39720231555881!3d48.38511007924502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ebb8e54c961%3A0x44c0add5bb2b1af!2sMaterskC3%A9%20centrum%20MAMI-O%C3%81ZA!5e0!3m2!1sen!2ssk!4v1620297354875!5m2!1sen!2ssk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
