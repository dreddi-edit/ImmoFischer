import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import ImageReveal from '../components/ui/ImageReveal';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const WertermittlungPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/contact`, { ...formData, service_type: 'wertermittlung' });
      toast.success('Vielen Dank! Wir melden uns in Kürze bei Ihnen für Ihre Wertermittlung.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: 'Marktgerechte Bewertung' },
    { icon: <Shield className="w-5 h-5" />, text: 'Geprüfte Experten' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Lokale Expertise' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Kostenlose Erstberatung' },
  ];

  return (
    <div data-testid="wertermittlung-page" className="pt-24 md:pt-32">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Leistungen / Wertermittlung
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Professionelle Immobilienbewertung
              </h1>
              <p className="text-[#333] text-base md:text-lg leading-relaxed mb-8">
                Wir stellen mit professionellen Verfahren zuverlässig den tatsächlichen Wert Ihrer Immobilie fest. Je marktgerechter der Verkaufspreis, desto schneller verkaufen Sie.
              </p>
              <Link
                to="#wertermittlung-form"
                data-testid="wertermittlung-hero-cta"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
              >
                Kostenlose Bewertung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideInLeft>
            
            <SlideInRight delay={0.2}>
              <ImageReveal
                src="https://images.pexels.com/photos/6957083/pexels-photo-6957083.jpeg?w=800"
                alt="Wertermittlung"
                className="aspect-[4/3]"
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FadeInView key={benefit.text} delay={index * 0.1}>
                <div className="flex items-center gap-3 p-4 bg-[#F8F6F2]">
                  <div className="text-[#0A0A0A]">{benefit.icon}</div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Valuation */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Vorteile
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Warum eine professionelle Bewertung?
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Realistischer Preis',
                description: 'Vermeiden Sie es, Ihre Immobilie unter Wert zu verkaufen oder potenzielle Käufer durch überhöhte Preise abzuschrecken.',
              },
              {
                title: 'Schnellerer Verkauf',
                description: 'Ein marktgerechter Preis führt zu einer schnelleren Vermarktung und einem erfolgreichen Abschluss.',
              },
              {
                title: 'Fundierte Grundlage',
                description: 'Schaffen Sie eine solide Basis für Verhandlungen mit potenziellen Käufern.',
              },
            ].map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.1}>
                <div className="p-8 bg-[#F8F6F2]">
                  <h3 className="font-serif text-xl font-light mb-4">{item.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="wertermittlung-form" className="py-24 md:py-32 bg-[#F0EBE1]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-12">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Jetzt anfragen
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Kostenlose Wertermittlung
            </h2>
            <p className="text-[#7A7A7A]">
              Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8" data-testid="wertermittlung-form">
              <div className="floating-label-group">
                <input
                  type="text"
                  name="name"
                  id="wert-name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  data-testid="wert-input-name"
                />
                <label htmlFor="wert-name">Name *</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="email"
                  name="email"
                  id="wert-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  data-testid="wert-input-email"
                />
                <label htmlFor="wert-email">E-Mail *</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="tel"
                  name="phone"
                  id="wert-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  data-testid="wert-input-phone"
                />
                <label htmlFor="wert-phone">Telefon</label>
              </div>

              <div className="floating-label-group">
                <textarea
                  name="message"
                  id="wert-message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={4}
                  data-testid="wert-input-message"
                />
                <label htmlFor="wert-message">Beschreiben Sie Ihre Immobilie (Adresse, Größe, Zustand)</label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                data-testid="wert-submit"
                className="w-full bg-[#0A0A0A] text-white py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Wertermittlung anfragen'}
              </motion.button>
            </form>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default WertermittlungPage;
