import { Link } from 'react-router-dom';
import { ArrowRight, Home, FileText, Key, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import ImageReveal from '../components/ui/ImageReveal';

const VerkaufPage = () => {
  const processSteps = [
    {
      title: 'Unterlagen & Analyse',
      description: 'Wir sammeln alle relevanten Unterlagen und analysieren Ihre Immobilie umfassend.',
    },
    {
      title: 'Marktgerechte Bewertung',
      description: 'Professionelle Wertermittlung für einen realistischen und optimalen Verkaufspreis.',
    },
    {
      title: 'Exposé & Vermarktung',
      description: 'Hochwertige Präsentation und zielgerichtete Vermarktung an vorqualifizierte Interessenten.',
    },
    {
      title: 'Besichtigungen & Verhandlungen',
      description: 'Organisation von Besichtigungen und professionelle Verhandlungsführung.',
    },
    {
      title: 'Notartermin & Übergabe',
      description: 'Begleitung zum Notartermin und sichere Übergabe der Immobilie.',
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: 'Bonitätsgeprüfte Interessenten' },
    { icon: <FileText className="w-5 h-5" />, text: 'Hochwertige Exposé-Präsentation' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Lokale Marktkenntnis' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Persönliche Betreuung' },
  ];

  return (
    <div data-testid="verkauf-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Leistungen / Verkauf
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Professioneller Immobilienverkauf
              </h1>
              <p className="text-[#333] text-base md:text-lg leading-relaxed mb-8">
                Ob Haus, Wohnung, Grundstück oder Anlageobjekt – wir sorgen für eine ordentliche und ansprechende Präsentation Ihrer Immobilie und stehen Ihnen mit Rat und Tat zur Seite.
              </p>
              <Link
                to="/kontakt"
                data-testid="verkauf-hero-cta"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
              >
                Kostenlose Beratung
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SlideInLeft>
            
            <SlideInRight delay={0.2}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Immobilienverkauf"
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
              Der Weg zum erfolgreichen Verkauf
            </h2>
          </FadeInView>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <FadeInView key={step.title} delay={index * 0.1}>
                <div className="flex gap-6 md:gap-8 items-start p-6 bg-[#F8F6F2]">
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Bereit für den Verkauf?
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihnen beim Verkauf Ihrer Immobilie helfen können.
            </p>
            <Link
              to="/kontakt"
              data-testid="verkauf-cta"
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

export default VerkaufPage;
