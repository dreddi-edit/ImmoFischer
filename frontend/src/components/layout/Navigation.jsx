import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { 
      name: 'Leistungen', 
      path: '/leistungen',
      children: [
        { name: 'Verkauf', path: '/leistungen/verkauf' },
        { name: 'Finanzierung', path: '/leistungen/finanzierung' },
        { name: 'Wertermittlung', path: '/leistungen/wertermittlung' },
      ]
    },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Referenzen', path: '/referenzen' },
    { name: 'Karriere', path: '/karriere' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <motion.header
        data-testid="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F8F6F2]/90 backdrop-blur-xl shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex-shrink-0">
            <motion.div 
              className="font-serif text-xl md:text-2xl font-light tracking-tight"
              whileHover={{ opacity: 0.7 }}
            >
              <span className="font-medium">Immo</span>Profi Fischer
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button 
                      data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                      className="nav-link flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 bg-white shadow-lg py-4 min-w-[200px]"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              data-testid={`nav-${child.name.toLowerCase()}`}
                              className="block px-6 py-2 text-sm text-[#333] hover:text-[#0A0A0A] hover:bg-[#F8F6F2] transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                    className={`nav-link ${location.pathname === link.path ? 'text-[#0A0A0A]' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            to="/kontakt"
            data-testid="nav-cta-button"
            className="hidden lg:block bg-[#0A0A0A] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
          >
            Beratung anfragen
          </Link>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 bg-[#F8F6F2] z-40 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.children ? (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-serif font-light mb-2">{link.name}</span>
                      <div className="flex flex-col items-center gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            data-testid={`mobile-nav-${child.name.toLowerCase()}`}
                            className="text-sm text-[#7A7A7A] hover:text-[#0A0A0A]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-2xl font-serif font-light hover:text-[#7A7A7A] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link 
                  to="/kontakt"
                  data-testid="mobile-cta-button"
                  className="bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium"
                >
                  Beratung anfragen
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
