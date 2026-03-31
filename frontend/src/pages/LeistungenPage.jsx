import { Link } from 'react-router-dom';
import { ArrowRight, Home, TrendingUp, Calculator } from 'lucide-react';
import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';

const LeistungenPage = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Verkauf',
      description: 'Professionelle Vermarktung Ihrer Immobilie mit bonitätsgeprüften Interessenten und persönlicher Betreuung.',
      link: '/leistungen/verkauf',
      features: ['Bonitätsgeprüfte Interessenten', 'Hochwertige Exposés', 'Persönliche Betreuung', 'Lokale Marktkenntnis'],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Finanzierung',
      description: 'Maßgeschneiderte Baufinanzierungslösungen mit attraktiven Konditionen für Ihren Immobilientraum.',
      link: '/leistungen/finanzierung',
      features: ['Top Konditionen', 'Unabhängige Beratung', 'Schnelle Bearbeitung', 'Persönliche Betreuung'],
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Wertermittlung',
      description: 'Marktgerechte Bewertung Ihrer Immobilie durch geprüfte Experten für einen optimalen Verkaufspreis.',
      link: '/leistungen/wertermittlung',
      features: ['Marktgerechte Bewertung', 'Geprüfte Experten', 'Lokale Expertise', 'Kostenlose Erstberatung'],
    },
  ];

  return (
    <div data-testid="leistungen-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Leistungen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Unsere Dienstleistungen
            </h1>
            <p className="text-[#333] text-base md:text-lg max-w-2xl leading-relaxed">
              Kompetent, dynamisch und jederzeit erreichbar. Anstatt "0815" erleben Sie bei uns eine persönliche, kompetente und regionale Beratung.
            </p>
          </SlideInLeft>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeInView key={service.title} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-[#F0EBE1] flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">{service.title}</h2>
                    <p className="text-[#333] leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#7A7A7A]">
                          <span className="w-1.5 h-1.5 bg-[#D9D0C1] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      data-testid={`leistungen-${service.title.toLowerCase()}-link`}
                      className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
                    >
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`bg-[#F0EBE1] aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={
                        index === 0
                          ? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
                          : index === 1
                          ? 'https://images.unsplash.com/photo-1638972691611-69633a3d3127?w=800&q=80'
                          : 'https://images.pexels.com/photos/6957083/pexels-photo-6957083.jpeg?w=800'
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Haben Sie Fragen?
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir helfen Ihnen gerne weiter.
            </p>
            <Link
              to="/kontakt"
              data-testid="leistungen-cta"
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

export default LeistungenPage;
