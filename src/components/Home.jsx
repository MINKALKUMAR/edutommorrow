// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import About from './About';
// import EventHighlight from './EventHighlight';
// import Partners from './Partners';
// import Speakers from './Speakers';
// import FocusSectors from './FocusSectors';
// import WhyPartner from './WhyPartner';
// import Contact from './Contact';
// import logo from "../assets/logo.png";
// const Home = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // Check if there's a hash in the URL and scroll to that section
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]);
//   return (
//     <div className="home-container">
//       <section id="home" className="min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-50px)] home-s flex items-center justify-center relative overflow-hidden pt-16">
//         {/* Background with gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Main Logo with Animation */}
//           <div className="mb-12 animate-logoPopup">
//             <img
//               src={logo}
//               alt="CIO Horizon Logo"
//               className="mx-auto h-32 w-auto mb-8"
//             />
//           </div>

//           {/* Main Heading */}
//           <div className="animate-fadeInUp">
//             <h1 className="text-6xl md:text-8xl font-bold mb-6">
//               <span className="gradient-text">TOMORROW</span>
//             </h1>
//             <div className="w-24 h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mx-auto mb-8 rounded-full"></div>
//           </div>

//           {/* Subtitle */}
//           <div className="animate-slideInFromLeft">
//             <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8 leading-relaxed">
//               Shaping the Future of Technology Leadership
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
//               Join us at CIO Horizon, where industry leaders, innovators, and visionaries come together
//               to explore the transformative power of technology in business.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="animate-fadeInUp flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
//             <button
//               onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
//               className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//             >
//               Discover More
//             </button>
//             <button
//               onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
//               className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
//             >
//               Get In Touch
//             </button>
//           </div>

//         </div> 
//       </section>
//       <section id="about" className="scroll-mt-24"><About/></section>
//       <section id="event-highlight"><EventHighlight/></section>
//       <section id="partners"><Partners/></section>
//       <section id="speakers"><Speakers/></section>
//       <section id="focus-sectors"><FocusSectors/></section>
//       <section id="why-partner"><WhyPartner/></section>
//       <section id="contact"><Contact/></section>
//     </div>
//   );
// };

// // Add global styles for the home container
// document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

// // Update vh unit on window resize
// window.addEventListener('resize', () => {
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
// });

// export default Home;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import EventHighlight from './EventHighlight';
import Partners from './Partners';
import Speakers from './Speakers';
import FocusSectors from './FocusSectors';
import WhyPartner from './WhyPartner';
import Contact from './Contact';
import logo from "../assets/logo.png";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Update vh unit on initial load and window resize
    const updateVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    updateVh();
    window.addEventListener('resize', updateVh);
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, [location]);

  return (
    <div className="home-container">
      <section id="home" className="hero-section">
        {/* Background with gradient */}
        <div className="hero-bg-gradient"></div>

        {/* Animated background elements */}
        <div className="animated-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>

        <div className="hero-content">
          {/* Main Logo with Animation */}
          <div className="logo-container">
            <img
              src={logo}
              alt="CIO Horizon Logo"
              className="main-logo"
            />
          </div>

          {/* Main Heading */}
          <div className="heading-container">
            <h1 className="main-heading">
              <span className="gradient-text">TOMORROW</span>
            </h1>
            <div className="heading-underline"></div>
          </div>

          {/* Subtitle */}
          <div className="subtitle-container">
            <h2 className="subtitle">
              Shaping the Future of Technology Leadership
            </h2>
            <p className="description">
              Join us at CIO Horizon, where industry leaders, innovators, and visionaries come together
              to explore the transformative power of technology in business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-container">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="cta-btn primary"
            >
              Discover More
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="cta-btn secondary"
            >
              Get In Touch
            </button>
          </div>
        </div> 
      </section>
      <section id="about" className="scroll-mt-24"><About/></section>
      <section id="event-highlight"><EventHighlight/></section>
      <section id="partners"><Partners/></section>
      <section id="speakers"><Speakers/></section>
      <section id="focus-sectors"><FocusSectors/></section>
      <section id="why-partner"><WhyPartner/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
};

export default Home;