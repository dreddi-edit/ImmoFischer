import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Shield, Clock, CheckCircle } from 'lucide-react';
import { FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import ImageReveal from '../components/ui/ImageReveal';

const FinanzierungPage = () => {
  const processSteps = [
    {
      title: 'Erstberatung',
      description: 'Persönliches Gespräch zur Analyse Ihrer finanziellen Situation und Wünsche.',
    },
    {
      title: 'Finanzierungsstruktur',
      description: 'Entwicklung eines maßgeschneiderten Finanzierungskonzepts für Ihre Immobilie.',
    },
    {
      title: 'Konditionen & Vergleich',
      description: 'Vergleich verschiedener Angebote für die besten Konditionen am Markt.',
    },
    {
      title: 'Begleitung bis Abschluss',
      description: 'Persönliche Betreuung vom Antrag bis zur Auszahlung und darüber hinaus.',
    },
  ];

  const benefits = [
    { icon: <Calculator className="w-5 h-5" />, text: 'Top Konditionen' },
    { icon: <Shield className="w-5 h-5" />, text: 'Unabhängige Beratung' },
    { icon: <Clock className="w-5 h-5" />, text: 'Schnelle Bearbeitung' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Persönliche Betreuung' },
  ];

  return (
    <div data-testid="finanzierung-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Leistungen / Finanzierung
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Baufinanzierung mit Expertise
              </h1>
              <p className="text-[#333] text-base md:text-lg leading-relaxed mb-8">
                Die Baufinanzierung ist ein enorm wichtiger Schritt zu Ihrer Immobilie. Mit unserer langjährigen Erfahrung bieten wir Ihnen maßgeschneiderte Finanzierungslösungen zu Top-Konditionen.
              </p>
              <Link
                to="/kontakt"
                data-testid="finanzierung-hero-cta"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
              >
                Beratung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideInLeft>
            
            <SlideInRight delay={0.2}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1638972691611-69633a3d3127?w=800&q=80"
                alt="Baufinanzierung"
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

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Unser Prozess
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Der Weg zu Ihrer Finanzierung
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <FadeInView key={step.title} delay={index * 0.1}>
                <div className="flex gap-6 p-6 bg-[#F8F6F2]">
                  <span className="font-serif text-4xl font-light text-[#D9D0C1] flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light mb-2">{step.title}</h3>
                    <p className="text-[#7A7A7A] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-24 md:py-32 bg-[#F0EBE1]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Für wen?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Unsere Zielgruppen
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Privatkäufer', description: 'Finanzierung für Ihr Eigenheim oder Ihre erste Wohnung.' },
              { title: 'Investoren', description: 'Optimale Strukturen für Kapitalanlage-Immobilien.' },
              { title: 'Geschäftskunden', description: 'Gewerbefinanzierung für ausgewählte Projekte.' },
            ].map((group, index) => (
              <FadeInView key={group.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-white">
                  <h3 className="font-serif text-xl font-light mb-4">{group.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{group.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Bereit für Ihre Finanzierung?
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für eine unverbindliche Erstberatung und erfahren Sie, welche Konditionen für Sie möglich sind.
            </p>
            <Link
              to="/kontakt"
              data-testid="finanzierung-cta"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#F8F6F2] transition-colors"
            >
              Jetzt beraten lassen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default FinanzierungPage;
