import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, TrendingUp, Calculator, ChevronDown } from 'lucide-react';
import { AnimatedWords, FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import StatCounter from '../components/ui/StatCounter';
import ImageReveal from '../components/ui/ImageReveal';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const HomePage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${API}/testimonials`);
        setTestimonials(res.data);
      } catch (e) {
        console.error('Error fetching testimonials:', e);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Verkauf',
      description: 'Professionelle Vermarktung Ihrer Immobilie mit bonitätsgeprüften Interessenten und persönlicher Betreuung.',
      link: '/leistungen/verkauf',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Finanzierung',
      description: 'Maßgeschneiderte Baufinanzierungslösungen mit attraktiven Konditionen für Ihren Immobilientraum.',
      link: '/leistungen/finanzierung',
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Wertermittlung',
      description: 'Marktgerechte Bewertung Ihrer Immobilie durch geprüfte Experten für einen optimalen Verkaufspreis.',
      link: '/leistungen/wertermittlung',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Vorbereitung', description: 'Unterlagen, Analyse und marktgerechte Bewertung Ihrer Immobilie.' },
    { step: '02', title: 'Vermarktung', description: 'Professionelles Exposé und zielgerichtete Ansprache passender Interessenten.' },
    { step: '03', title: 'Verhandlung', description: 'Begleitung bei Besichtigungen und Verhandlungen mit Kaufinteressenten.' },
    { step: '04', title: 'Abschluss', description: 'Notartermin, Kaufvertrag und sichere Übergabe der Immobilie.' },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F8F6F2]/85" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase text-xs md:text-sm tracking-[0.2em] font-semibold text-[#7A7A7A] mb-6"
          >
            Immobilien in Düsseldorf
          </motion.p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8">
            <AnimatedWords text="Immobilienverkauf." className="block" delay={0.3} />
            <AnimatedWords text="Finanzierung." className="block" delay={0.5} />
            <AnimatedWords text="Wertermittlung." className="block" delay={0.7} />
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-base md:text-lg text-[#333] max-w-2xl mx-auto mb-12"
          >
            Persönliche Beratung und Premium-Service an der Königsallee in Düsseldorf.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/kontakt"
              data-testid="hero-cta-primary"
              className="bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors inline-flex items-center justify-center gap-2"
            >
              Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/referenzen"
              data-testid="hero-cta-secondary"
              className="border border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              Referenzen ansehen
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-[#7A7A7A]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Über uns
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Der Mensch steht im Vordergrund
              </h2>
              <p className="text-[#333] leading-relaxed mb-6">
                Gute Erreichbarkeit, Empathie, Transparenz und eine starke Vertrauensbasis sind für uns ebenso selbstverständlich wie eine gleichberechtigte Kommunikation.
              </p>
              <p className="text-[#333] leading-relaxed mb-8">
                Ob Eigentümer oder Immobiliensuchender, die Kundenzufriedenheit steht bei uns an erster Stelle. Kompetent, dynamisch und jederzeit erreichbar.
              </p>
              <Link
                to="/ueber-uns"
                data-testid="intro-cta"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium hover:gap-4 transition-all"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideInLeft>
            
            <SlideInRight delay={0.2}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Immobilie"
                className="aspect-[4/3]"
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Unsere Dienstleistungen
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Wie können wir helfen?
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInView key={service.title} delay={index * 0.1}>
                <Link
                  to={service.link}
                  data-testid={`service-${service.title.toLowerCase()}`}
                  className="group block p-8 bg-[#F8F6F2] hover:bg-[#F0EBE1] transition-colors h-full"
                >
                  <div className="w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium group-hover:gap-4 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Unser Prozess
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Der Weg zum erfolgreichen Verkauf
              </h2>
              <p className="text-[#333] leading-relaxed">
                Wir begleiten Sie durch jeden Schritt des Verkaufsprozesses – von der ersten Analyse bis zur finalen Übergabe.
              </p>
            </SlideInLeft>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <SlideInRight key={step.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <span className="font-serif text-4xl font-light text-[#D9D0C1]">{step.step}</span>
                    <div>
                      <h3 className="font-serif text-xl font-light mb-2">{step.title}</h3>
                      <p className="text-[#7A7A7A] text-sm">{step.description}</p>
                    </div>
                  </div>
                </SlideInRight>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#666] mb-4">
              Unsere Erfolge
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
              Zahlen, die überzeugen
            </h2>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <StatCounter end={150} suffix="+" label="Verkaufte Objekte" />
            </div>
            <div className="text-center">
              <StatCounter end={98} suffix="%" label="Zufriedenheit" />
            </div>
            <div className="text-center">
              <StatCounter end={10} suffix="+" label="Jahre Erfahrung" />
            </div>
            <div className="text-center">
              <StatCounter end={50} suffix="M€" label="Transaktionsvolumen" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-24 md:py-32 bg-[#F0EBE1]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <FadeInView className="text-center mb-16">
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Kundenstimmen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
                Was unsere Kunden sagen
              </h2>
            </FadeInView>

            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <span className="font-serif text-8xl text-[#D9D0C1] absolute -top-8 left-1/2 -translate-x-1/2">"</span>
                  <p className="font-serif text-xl md:text-2xl font-light leading-relaxed pt-8 mb-8">
                    {testimonials[currentTestimonial]?.quote}
                  </p>
                </div>
                <p className="font-medium">{testimonials[currentTestimonial]?.author}</p>
                <p className="text-sm text-[#7A7A7A]">{testimonials[currentTestimonial]?.role}</p>
              </motion.div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    data-testid={`testimonial-dot-${index}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-[#0A0A0A]' : 'bg-[#D9D0C1]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Location Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInView>
              <ImageReveal
                src="https://images.pexels.com/photos/28011239/pexels-photo-28011239.jpeg?w=800"
                alt="Düsseldorf Königsallee"
                className="aspect-[4/3]"
              />
            </FadeInView>
            
            <SlideInRight>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Unser Standort
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Im Herzen von Düsseldorf
              </h2>
              <p className="text-[#333] leading-relaxed mb-6">
                Besuchen Sie uns direkt an der Königsallee – einer der renommiertesten Adressen Deutschlands. Unser Büro befindet sich zentral gelegen im Herzen Düsseldorfs.
              </p>
              <div className="space-y-2 mb-8">
                <p className="font-medium">Immoprofi Fischer GmbH</p>
                <p className="text-[#7A7A7A]">Königsallee 98</p>
                <p className="text-[#7A7A7A]">40212 Düsseldorf</p>
              </div>
              <Link
                to="/kontakt"
                data-testid="location-cta"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihr Anliegen.
            </p>
            <Link
              to="/kontakt"
              data-testid="cta-final"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#F8F6F2] transition-colors"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
