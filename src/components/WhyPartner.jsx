// const WhyPartner = () => {
//   const benefits = [
//     {
//       icon: "🎯",
//       title: "Targeted Audience",
//       description: "Connect directly with C-level executives, technology leaders, and decision-makers from top organizations worldwide."
//     },
//     {
//       icon: "🌟",
//       title: "Brand Visibility",
//       description: "Enhance your brand presence through premium positioning across all conference materials and digital platforms."
//     },
//     {
//       icon: "🤝",
//       title: "Networking Opportunities",
//       description: "Access exclusive networking events, private dinners, and one-on-one meetings with key prospects and partners."
//     },
//     {
//       icon: "💡",
//       title: "Thought Leadership",
//       description: "Position your organization as an industry thought leader through speaking opportunities and expert panels."
//     },
//     {
//       icon: "📈",
//       title: "Lead Generation",
//       description: "Generate high-quality leads through targeted marketing, exhibition opportunities, and attendee engagement activities."
//     },
//     {
//       icon: "🏆",
//       title: "Industry Recognition",
//       description: "Gain recognition as an innovator and leader in your sector through awards and recognition programs."
//     }
//   ];

//   const partnershipTiers = [
//     {
//       tier: "Platinum",
//       price: "$50,000",
//       color: "from-gray-400 to-gray-600",
//       benefits: [
//         "Prime exhibition space",
//         "4 keynote speaking slots",
//         "Logo on all materials",
//         "50 complimentary passes",
//         "Exclusive networking dinner",
//         "Custom sponsored session"
//       ]
//     },
//     {
//       tier: "Gold",
//       price: "$30,000",
//       color: "from-yellow-400 to-yellow-600",
//       benefits: [
//         "Premium exhibition space",
//         "2 speaking opportunities",
//         "Logo on key materials",
//         "30 complimentary passes",
//         "VIP networking access",
//         "Digital marketing inclusion"
//       ]
//     },
//     {
//       tier: "Silver",
//       price: "$15,000",
//       color: "from-gray-300 to-gray-500",
//       benefits: [
//         "Standard exhibition space",
//         "1 speaking opportunity",
//         "Logo placement",
//         "15 complimentary passes",
//         "Networking access",
//         "Event directory listing"
//       ]
//     }
//   ];

//   return (
//     <section id="why-partner" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
//             Why Partner With Us
//           </h2>
//           <div className="w-24 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Join an exclusive community of technology leaders and position your organization 
//             at the forefront of digital transformation and innovation.
//           </p>
//         </div>

//         {/* Benefits Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="card-hover bg-gray-50 p-6 rounded-xl shadow-lg text-center">
//               <div className="text-4xl mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Partnership Tiers */}
//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-center gradient-text mb-12">Partnership Packages</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {partnershipTiers.map((tier, index) => (
//               <div key={index} className="card-hover bg-white border-2 border-gray-200 rounded-2xl p-8 text-center relative overflow-hidden">
//                 <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
//                 <h4 className="text-2xl font-bold text-gray-800 mb-2">{tier.tier}</h4>
//                 <div className="text-4xl font-bold gradient-text mb-6">{tier.price}</div>
//                 <ul className="space-y-3 mb-8">
//                   {tier.benefits.map((benefit, benefitIndex) => (
//                     <li key={benefitIndex} className="flex items-center text-gray-600">
//                       <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="w-full gradient-bg text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
//                   Choose {tier.tier}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Success Stories */}
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
//           <h3 className="text-3xl font-bold text-center gradient-text mb-8">Partner Success Stories</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="text-3xl mr-4">🏢</div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">TechCorp Solutions</h4>
//                   <p className="text-sm text-gray-600">Platinum Partner 2023</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "CIO Horizon provided us with unprecedented access to decision-makers. 
//                 We generated over 200 qualified leads and secured 15 new enterprise clients."
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <div className="text-3xl mr-4">🚀</div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">InnovateNow</h4>
//                   <p className="text-sm text-gray-600">Gold Partner 2023</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "The networking opportunities were exceptional. We established strategic 
//                 partnerships that have transformed our business growth trajectory."
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
//             <h3 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Partner With Us?
//             </h3>
//             <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//               Join industry leaders and position your organization at the center of 
//               technology innovation and digital transformation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 Request Partnership Kit
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
//                 Schedule a Call
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react"

/*
  Palette (5 colors total via your theme):
  - var(--color-blue-light-bg)
  - var(--color-white)
  - var(--color-blue-medium-bg)
  - var(--color-black)
  - var(--color-blue-medium)
*/

export default function WhyPartner() {
  const items = [
    {
      title: "Industry Influence",
      desc:
        "Position your brand where decisions are made. Reach senior leaders who set enterprise priorities and budgets.",
    },
    {
      title: "Innovative Exposure",
      desc:
        "Showcase cutting‑edge solutions through demos and content moments that highlight measurable business impact.",
    },
    {
      title: "Exclusive Networking",
      desc:
        "Build authentic relationships in curated roundtables and invite‑only sessions for CXO‑level engagement.",
    },
    {
      title: "Maximise Visibility",
      desc:
        "Amplify presence across stage time, hosted sessions, and branded touchpoints that keep your message top‑of‑mind.",
    },
    {
      title: "Through Leadership",
      desc:
        "Lead conversations with insights and perspectives that elevate credibility and accelerate partner opportunities.",
    },
  ]

  return (
    <section
      aria-labelledby="why-partner-title"
      role="region"
      className="wpwu"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)",
        color: "var(--color-black)",
      }}
    >
      <div className="wpwu__container">
        <header className="wpwu__header">
          <p className="wpwu__eyebrow">Partner Benefits</p>
          <h2 id="why-partner-title" className="wpwu__title">
            Why <span className="wpwu__titleAccent">Partner With Us</span>
          </h2>
          <span className="wpwu__bar" aria-hidden="true" />
          <p className="wpwu__subtitle">
            Engage decision‑makers, showcase innovation, and create meaningful
            executive connections.
          </p>
        </header>

        <ul className="wpwu__grid" aria-label="Benefits">
          {items.map((it, i) => (
            <li key={i} className="wpwu__card" tabIndex={0}>
              <h3 className="wpwu__cardTitle">{it.title}</h3>
              <p className="wpwu__cardDesc">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .wpwu { padding: 64px 20px; }
        .wpwu__container { max-width: 1100px; margin: 0 auto; }

        /* Header */
        .wpwu__header { text-align: center; max-width: 820px; margin: 0 auto 32px; }
        .wpwu__eyebrow {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-blue-medium);
          font-weight: 600;
        }
        .wpwu__title { margin: 6px 0 8px; font-size: 32px; line-height: 1.15; font-weight: 700; color: var(--color-black); }
        .wpwu__titleAccent { color: var(--color-blue-medium); }
        .wpwu__bar { display: inline-block; width: 96px; height: 4px; border-radius: 999px; background: var(--color-blue-medium); }
        .wpwu__subtitle { margin: 12px auto 0; font-size: 16px; line-height: 1.55; color: var(--color-black); opacity: 0.85; }

        /* Grid */
        .wpwu__grid {
          list-style: none;
          margin: 28px 0 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        /* Cards */
        .wpwu__card {
          background: var(--color-white);
          border: 2px solid var(--color-blue-medium);
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 6px 22px rgba(0,0,0,0.08);
          outline: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .wpwu__card:focus,
        .wpwu__card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.12); }
        .wpwu__cardTitle { margin: 0 0 8px; font-size: 18px; line-height: 1.35; font-weight: 700; color: var(--color-blue-medium); }
        .wpwu__cardDesc { margin: 0; font-size: 15px; line-height: 1.6; color: var(--color-black); opacity: 0.9; }

        /* Responsive */
        @media (min-width: 768px) {
          .wpwu { padding: 84px 24px; }
          .wpwu__title { font-size: 42px; }
          .wpwu__grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .wpwu__card { padding: 22px; }
          .wpwu__cardTitle { font-size: 20px; }
        }
      `}</style>
    </section>
  )
}