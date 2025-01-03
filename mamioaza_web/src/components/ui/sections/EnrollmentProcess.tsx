export default function Process() {
  const steps = [
    {
      title: "Schedule Tour",
      description: "Book a visit to our facility",
      icon: "📅",
    },
    {
      title: "Get your first visit",
      description: "Meet our team and explore our space",
      icon: "🏠",
    },
    {
      title: "Join our daycare family",
      description: "Begin your child's journey with us",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-16">
          A Smooth Process to Join
          <br />
          Our Daycare Family
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#f8fafc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-[200%] translate-y-8">
                  <svg width="100" height="2" className="text-gray-300">
                    <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
