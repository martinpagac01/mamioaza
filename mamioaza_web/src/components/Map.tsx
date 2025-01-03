'use client';

export default function Map() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.4382584510897!2d18.39720687673971!3d48.38512667131373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee427719c5d%3A0x2e6743f7ea4a07f0!2sMami%20O%C3%A1za!5e0!3m2!1sen!2ssk!4v1704199712824!5m2!1sen!2ssk"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
