import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EventHighlight from './components/EventHighlight';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
import FocusSectors from './components/FocusSectors';
import WhyPartner from './components/WhyPartner';
import Contact from './components/Contact';
import AwardNomination from './components/AwardNomination';

function App() {
  const location = useLocation();
  
  // Scroll to top on route change, but not for hash changes
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-highlight" element={<EventHighlight />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/focus-sectors" element={<FocusSectors />} />
          <Route path="/why-partner" element={<WhyPartner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/award-nomination" element={<AwardNomination />} />
        </Routes>
      </main>
    </>
  );
}

export default App;