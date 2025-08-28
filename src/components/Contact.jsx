// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to join CIO Horizon? Get in touch with our team for registration, 
//             partnership opportunities, or any questions about the conference.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Conference Venue</h4>
//                     <p className="text-gray-600">Grand Convention Center<br />123 Technology Boulevard<br />Innovation District, CA 90210</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
//                     <p className="text-gray-600">Registration: +1 (555) 123-4567<br />Partnerships: +1 (555) 123-4568<br />General Inquiry: +1 (555) 123-4569</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Email Addresses</h4>
//                     <p className="text-gray-600">info@ciohorizon.com<br />partnerships@ciohorizon.com<br />speakers@ciohorizon.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Conference Dates</h4>
//                     <p className="text-gray-600">March 15-16, 2024<br />Registration opens: January 1, 2024<br />Early bird deadline: February 15, 2024</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-2xl shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="John"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <input 
//                   type="email" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="john.doe@company.com"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
//                 <input 
//                   type="text" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Your Company"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                 <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                   <option>General Inquiry</option>
//                   <option>Registration</option>
//                   <option>Partnership Opportunities</option>
//                   <option>Speaking Opportunities</option>
//                   <option>Media Inquiry</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea 
//                   rows="4" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Tell us how we can help you..."
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit"
//                 className="w-full gradient-bg text-white py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map or Additional Info */}
//         <div className="mt-16 text-center">
//           <div className="bg-white p-8 rounded-2xl shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Conference Location</h3>
//             <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
//               <div className="text-center">
//                 <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <p className="text-gray-600">Interactive Map Coming Soon</p>
//                 <p className="text-sm text-gray-500 mt-2">Grand Convention Center, Innovation District</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

export default function Contact() {
  const gradientBg = {
    background:
      "linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)",
  };

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
      style={gradientBg}
    >
      <div className="contact-container">
        <header className="contact-header">
        <h2 id="why-partner-title" className="wpwu__title">
            Contact <span className="wpwu__titleAccent"> Information</span>
          </h2>
          <p className="subtitle">
            Reach the right person directly for partnerships, speaking, awards,
            or delegate inquiries.
          </p>
        </header>

        <div className="cards">
          <ContactCard
            title="For Sponsorship & Exhibition"
            name="Priyansh Saharawat"
            email="priyansh@fintrexmedia.com"
            phone="7011499056"
            photoSrc="chotu.jpeg"
          />
          <ContactCard
            title="For Speaking & Award Nomination"
            name="Priyanshi Choudhary"
            email="priyanshi@fintrexmedia.com"
            phone="8755676010"
            photoSrc="chotu.jpeg"
          />
          <ContactCard
            title="For Delegate Opportunity"
            name="Basant Sharma"
            email="basant@fintrexmedia.com"
            phone="7505024107"
            photoSrc="chotu.jpeg"
          />
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding: 64px 16px;
          color: var(--color-black, #1A1A1A);
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .title {
          margin: 10px 0 6px 0;
          font-size: 28px;
          line-height: 1.25;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
        }

        .subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.7);
          max-width: 680px;
          margin: 0 auto;
        }

        .cards {
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 720px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        .card {
          background: var(--color-white, #FFFFFF);
          border-radius: 14px;
          padding: 18px;
          box-shadow:
            0 1px 1px rgba(0,0,0,0.03),
            0 8px 24px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 12px 30px rgba(0, 0, 0, 0.22);
        }

        .cardTitle {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
          margin: 0 0 14px 0;
        }

        .person {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-blue-medium-bg, #D6EFFF);
          background: var(--color-blue-medium-bg, #D6EFFF);
          flex: 0 0 72px;
        }

        .name {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
          margin: 0;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }

        .item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .icon {
          width: 18px;
          height: 18px;
          color: var(--color-blue-medium, #0071CE);
          flex: 0 0 18px;
          margin-top: 2px;
        }

        .value {
          color: var(--color-black, #1A1A1A);
          word-break: break-word;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
}

function ContactCard({ title, name, email, phone, photoSrc }) {
  return (
    <article className="card" role="group" aria-label={title}>
      <h3 className="cardTitle">{title}</h3>

      <div className="person">
        <img
          className="avatar"
          src={photoSrc || "/placeholder.svg"}
          alt={`${name} portrait`}
          width={72}
          height={72}
          loading="lazy"
        />
        <p className="name">{name}</p>
      </div>

      <ul className="list">
        <li className="item">
          <MailIcon className="icon" aria-hidden="true" />
          <span className="value">
            <span className="visually-hidden">Email: </span>
            {email}
          </span>
        </li>
        <li className="item">
          <PhoneIcon className="icon" aria-hidden="true" />
          <span className="value">
            <span className="visually-hidden">Phone: </span>
            {formatPhone(phone)}
          </span>
        </li>
      </ul>
    </article>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      />
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22 8-10 6L2 8"
      />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.66-3.07A19.5 19.5 0 0 1 3.15 12.84 19.9 19.9 0 0 1 .08 4.18 2 2 0 0 1 2.06 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L5.6 9.6a16 16 0 0 0 8.8 8.8l1.16-1.64a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function formatPhone(num = "") {
  const digits = String(num).replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return digits;
}