import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-testid="cookie-banner"
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] p-6 z-[1001]"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#333]">
                Diese Website benutzt Cookies. Wenn Sie die Website weiter nutzen, gehen wir von Ihrem Einverständnis aus.{' '}
                <Link to="/datenschutz" className="underline hover:text-[#0A0A0A]">
                  Mehr erfahren
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                data-testid="cookie-decline"
                className="px-6 py-2 text-sm border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={handleAccept}
                data-testid="cookie-accept"
                className="px-6 py-2 text-sm bg-[#0A0A0A] text-white hover:bg-[#333] transition-colors"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
