
// export default Partners
const Partners = () => {
  const partners = [
    { name: "Microsoft", category: "Technology Partner", logo: "/microsoft-logo.png" },
    { name: "Amazon Web Services", category: "Cloud Partner", logo: "/aws-amazon-web-services-logo.png" },
    { name: "Google Cloud", category: "Infrastructure Partner", logo: "/images/partners/google-cloud-logo.png" },
    { name: "IBM", category: "AI Partner", logo: "/ibm-logo.png" },
    { name: "Oracle", category: "Database Partner", logo: "/oracle-logo.png" },
    { name: "Salesforce", category: "CRM Partner", logo: "/salesforce-logo.png" },
    { name: "SAP", category: "Enterprise Partner", logo: "/sap-logo.png" },
    { name: "Adobe", category: "Digital Experience Partner", logo: "/adobe-logo.png" },
    { name: "Cisco", category: "Network Partner", logo: "/cisco-logo.png" },
    { name: "VMware", category: "Virtualization Partner", logo: "/vmware-logo.png" },
    { name: "Accenture", category: "Consulting Partner", logo: "/accenture-logo.png" },
    { name: "Deloitte", category: "Advisory Partner", logo: "/deloitte-logo.png" },
  ]

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)",
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 transform translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional experiences and cutting-edge solutions for our
            community.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-md text-center border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-blue-600">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners