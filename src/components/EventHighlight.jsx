import { useEffect, useRef, useState } from 'react';

const EventHighlight = () => {
  const statistics = [
    { number: 150, title: "Delegates" },
    { number: 35, title: "Speaker" },
    { number: 20, title: "Exhibitor" },
    { number: 9, title: "Hours of Exclusive Networking" }
  ];

  const [counts, setCounts] = useState(statistics.map(() => 0));
  const sectionRef = useRef(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countedRef.current) {
            countedRef.current = true;
            
            statistics.forEach((stat, index) => {
              const target = stat.number;
              const duration = 2000; // 2 seconds
              const steps = 60; // 60 steps for smooth animation
              const increment = target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [statistics]);

  return (
    <section 
      id="event-highlight" 
      ref={sectionRef}
      className="py-20 event-highlight-section"
      style={{
        background: "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[var(--gradient-bar)] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a curated selection of high-impact sessions, networking opportunities, 
            and innovative showcases designed for technology leaders.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-blue-dark)] mb-2">
                {counts[index]}+
              </div>
              <div className="text-lg font-medium text-[var(--color-black)]">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: var(--gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default EventHighlight;