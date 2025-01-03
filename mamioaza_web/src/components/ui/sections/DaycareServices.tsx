export default function Services() {
  const services = [
    {
      title: "Early Play",
      description: "Engaging activities that promote learning through play",
      icon: "🎨",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
    },
    {
      title: "Safety First",
      description: "Secure environment with trained professionals",
      icon: "🛡️",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Creative Development",
      description: "Activities that nurture imagination and creativity",
      icon: "🎯",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ]

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
            Tailored Care, Big Smiles,
            <br />
            and Lifelong Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-6 rounded-xl transition-transform hover:-translate-y-1`}
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
