import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/layout/WhatsAppWidget';
import CustomCursor from './components/ui/CustomCursor';
import CookieBanner from './components/ui/CookieBanner';

import HomePage from './pages/HomePage';
import LeistungenPage from './pages/LeistungenPage';
import VerkaufPage from './pages/VerkaufPage';
import FinanzierungPage from './pages/FinanzierungPage';
import WertermittlungPage from './pages/WertermittlungPage';
import UeberUnsPage from './pages/UeberUnsPage';
import ReferenzenPage from './pages/ReferenzenPage';
import KarrierePage from './pages/KarrierePage';
import KontaktPage from './pages/KontaktPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AGBPage from './pages/AGBPage';

import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/leistungen" element={<PageWrapper><LeistungenPage /></PageWrapper>} />
        <Route path="/leistungen/verkauf" element={<PageWrapper><VerkaufPage /></PageWrapper>} />
        <Route path="/leistungen/finanzierung" element={<PageWrapper><FinanzierungPage /></PageWrapper>} />
        <Route path="/leistungen/wertermittlung" element={<PageWrapper><WertermittlungPage /></PageWrapper>} />
        <Route path="/ueber-uns" element={<PageWrapper><UeberUnsPage /></PageWrapper>} />
        <Route path="/referenzen" element={<PageWrapper><ReferenzenPage /></PageWrapper>} />
        <Route path="/karriere" element={<PageWrapper><KarrierePage /></PageWrapper>} />
        <Route path="/kontakt" element={<PageWrapper><KontaktPage /></PageWrapper>} />
        <Route path="/impressum" element={<PageWrapper><ImpressumPage /></PageWrapper>} />
        <Route path="/datenschutz" element={<PageWrapper><DatenschutzPage /></PageWrapper>} />
        <Route path="/agb" element={<PageWrapper><AGBPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App" data-testid="app-container">
      <BrowserRouter>
        <CustomCursor />
        <Navigation />
        <ScrollToTop />
        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
