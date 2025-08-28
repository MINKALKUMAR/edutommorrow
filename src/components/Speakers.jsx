import React from 'react';// We'll create this CSS file

const Speakers = () => {
  // Sample guest data (replace with your actual data)
  const guests = [
    {
      id: 1,
      name: "John Smith",
      title: "CEO, Tech Innovations",
      image: "chotu.jpeg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "CTO, FutureTech",
      image: "chotu.jpeg"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Director of AI, NextGen Labs",
      image: "chotu.jpeg"
    },
    {
      id: 4,
      name: "Emily Williams",
      title: "VP of Product, Disruptive Tech",
      image: "chotu.jpeg"
    },
    {
      id: 5,
      name: "David Brown",
      title: "Founder, InnovateX",
      image:"chotu.jpeg"
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      title: "Chief Data Scientist, AnalyticsCo",
      image: "chotu.jpeg"
    },
    {
      id: 7,
      name: "Robert Taylor",
      title: "Head of Blockchain, CryptoFuture",
      image: "chotu.jpeg"
    },
    {
      id: 8,
      name: "Jennifer Lee",
      title: "Managing Partner, VentureFund",
      image: "chotu.jpeg"
    }
  ];

  return (
    <section className="confirmed-guests-section">
      <div className="container">
      <h2 style={{textAlign:"center"}} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Speakers
          </h2>
        <div className="guests-grid">
          {guests.map(guest => (
            <div key={guest.id} className="guest-card">
              <div className="guest-image-container">
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className="guest-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="guest-info">
                <h3 className="guest-name">{guest.name}</h3>
                <p className="guest-title">{guest.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;