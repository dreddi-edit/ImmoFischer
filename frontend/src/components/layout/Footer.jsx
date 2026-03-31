import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-light">
                <span className="font-medium">Immo</span>Profi Fischer
              </span>
            </Link>
            <div className="space-y-4 text-[#999] text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Immoprofi Fischer GmbH</p>
                  <p>Königsallee 98</p>
                  <p>40212 Düsseldorf</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:021184361100" data-testid="footer-phone" className="hover:text-white transition-colors">
                  0211 84361 100
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:anfrage@immoprofi-fischer.de" data-testid="footer-email" className="hover:text-white transition-colors">
                  anfrage@immoprofi-fischer.de
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/immoprofi.fischer" target="_blank" rel="noopener noreferrer" data-testid="social-instagram" className="text-[#999] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Immoprofi-Fischer-102040651840615" target="_blank" rel="noopener noreferrer" data-testid="social-facebook" className="text-[#999] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UC1RYY8E8TW6H6mDk00SuDIg" target="_blank" rel="noopener noreferrer" data-testid="social-youtube" className="text-[#999] hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/immoprofi-fischer-gmbh" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin" className="text-[#999] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#666]">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Startseite', path: '/' },
                { name: 'Verkauf', path: '/leistungen/verkauf' },
                { name: 'Finanzierung', path: '/leistungen/finanzierung' },
                { name: 'Wertermittlung', path: '/leistungen/wertermittlung' },
                { name: 'Über uns', path: '/ueber-uns' },
                { name: 'Referenzen', path: '/referenzen' },
                { name: 'Karriere', path: '/karriere' },
                { name: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-[#999] text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#666]">Rechtliches</h4>
            <ul className="space-y-3">
              {[
                { name: 'Impressum', path: '/impressum' },
                { name: 'Datenschutz', path: '/datenschutz' },
                { name: 'AGB', path: '/agb' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                    className="text-[#999] text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-xs">
            © {currentYear} Immoprofi Fischer GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-[#666] text-xs">
            Geschäftsführer: Oliver Marc Fischer | HRB 92799 | UST-ID: DE330636004
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
