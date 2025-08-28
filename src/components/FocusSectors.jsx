const FocusSectors = () => {
  const sectors = [
    {
      title: "Universities",
      image: "/university-students-in-graduation-ceremony.png",
    },
    {
      title: "Established Edtech",
      image: "/professionals-in-modern-office-discussing-educatio.png",
    },
    {
      title: "Corporate Catering",
      image: "/business-professionals-in-corporate-training-sessi.png",
    },
    {
      title: "Edutech",
      image: "/tech-professionals-working-on-educational-software.png",
    },
    {
      title: "Edtech Startup",
      image: "/young-entrepreneurs-in-startup-office-with-laptops.png",
    },
    {
      title: "Fashion & Design",
      image: "/fashion-design-students-working-on-creative-projec.png",
    },
    {
      title: "B-School",
      image: "/mba-students-in-business-school-classroom.png",
    },
  ]

  const duplicatedSectors = [...sectors, ...sectors]

  return (
    <section
      className="py-16 px-4 min-h-screen"
      style={{
        background: `linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Focus Sector</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting leaders across diverse educational sectors
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6 md:gap-8">
            {duplicatedSectors.map((sector, index) => (
              <div
                key={`${sector.title}-${index}`}
                className={`
                  relative group cursor-pointer transition-all duration-500 hover:scale-105 hover:z-20 flex-shrink-0
                  ${index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"}
                  ${index % 3 === 0 ? "md:-translate-y-4" : ""}
                  ${index % 3 === 1 ? "md:translate-y-2" : ""}
                  ${index % 3 === 2 ? "md:-translate-y-2" : ""}
                `}
                style={{
                  zIndex: 10,
                }}
              >
                <div className="relative w-72 h-48 md:w-80 md:h-52 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background Image */}
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl md:text-2xl font-bold text-balance">{sector.title}</h3>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Explore All Sectors
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default FocusSectors;
