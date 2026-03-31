import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service_type: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.');
      setFormData({ name: '', email: '', phone: '', message: '', service_type: '' });
    } catch (error) {
      toast.error('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Königsallee 98, Düsseldorf coordinates
  const position = [51.2247, 6.7841];

  return (
    <div data-testid="kontakt-page" className="pt-24 md:pt-32">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Kontakt
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Sprechen Sie mit uns
            </h1>
            <p className="text-[#333] text-base md:text-lg max-w-2xl leading-relaxed">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für eine unverbindliche Beratung.
            </p>
          </SlideInLeft>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <SlideInLeft>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EBE1] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light mb-2">Adresse</h3>
                    <p className="text-[#7A7A7A]">Immoprofi Fischer GmbH</p>
                    <p className="text-[#7A7A7A]">Königsallee 98</p>
                    <p className="text-[#7A7A7A]">40212 Düsseldorf</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EBE1] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light mb-2">Telefon</h3>
                    <a href="tel:021184361100" data-testid="contact-phone" className="text-[#7A7A7A] hover:text-[#0A0A0A] transition-colors">
                      0211 84361 100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EBE1] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light mb-2">E-Mail</h3>
                    <a href="mailto:anfrage@immoprofi-fischer.de" data-testid="contact-email" className="text-[#7A7A7A] hover:text-[#0A0A0A] transition-colors">
                      anfrage@immoprofi-fischer.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0EBE1] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light mb-2">Erreichbarkeit</h3>
                    <p className="text-[#7A7A7A]">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p className="text-[#7A7A7A]">Termine nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            {/* Contact Form */}
            <SlideInRight delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="floating-label-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    data-testid="input-name"
                  />
                  <label htmlFor="name">Name *</label>
                </div>

                <div className="floating-label-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    data-testid="input-email"
                  />
                  <label htmlFor="email">E-Mail *</label>
                </div>

                <div className="floating-label-group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    data-testid="input-phone"
                  />
                  <label htmlFor="phone">Telefon</label>
                </div>

                <div>
                  <label className="text-xs text-[#7A7A7A] uppercase tracking-wider mb-2 block">
                    Interesse an
                  </label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    data-testid="input-service"
                    className="w-full p-3 border border-[#E5E5E5] bg-transparent text-[#333] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="verkauf">Verkauf</option>
                    <option value="finanzierung">Finanzierung</option>
                    <option value="wertermittlung">Wertermittlung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div className="floating-label-group">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    rows={4}
                    data-testid="input-message"
                  />
                  <label htmlFor="message">Ihre Nachricht *</label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="submit-contact"
                  className="w-full bg-[#0A0A0A] text-white py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </motion.button>

                <p className="text-xs text-[#7A7A7A] text-center">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/datenschutz" className="underline">Datenschutzerklärung</a> zu.
                </p>
              </form>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <FadeInView className="h-full">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full"
            data-testid="contact-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-center">
                  <strong>Immoprofi Fischer GmbH</strong>
                  <br />
                  Königsallee 98
                  <br />
                  40212 Düsseldorf
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </FadeInView>
        
        {/* Map Overlay */}
        <div className="absolute top-8 left-8 bg-white p-6 shadow-lg z-[1000] hidden md:block">
          <h3 className="font-serif text-lg font-light mb-2">Besuchen Sie uns</h3>
          <p className="text-sm text-[#7A7A7A]">Königsallee 98</p>
          <p className="text-sm text-[#7A7A7A]">40212 Düsseldorf</p>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;
