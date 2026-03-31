import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';

const AGBPage = () => {
  return (
    <div data-testid="agb-page" className="pt-24 md:pt-32">
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-12">
              Allgemeine Geschäftsbedingungen
            </h1>
          </SlideInLeft>

          <FadeInView delay={0.2}>
            <div className="prose prose-lg max-w-none text-[#333]">
              <h2 className="font-serif text-2xl font-light mb-4 mt-8">Der Immoprofi Fischer GmbH</h2>
              
              <h3 className="font-serif text-xl font-light mt-8 mb-4">1. Geltungsbereich</h3>
              <p className="mb-4"><strong>1.1 Anwendungsbereich</strong></p>
              <p className="mb-6">
                Die nachstehenden allgemeinen Geschäftsbedingungen inklusive Gebührentabelle gelten für Verträge zwischen der Immoprofi Fischer GmbH und der Partei, mit der der Vertrag zustande kommt.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">2. Zustandekommen des Vertrages</h3>
              <p className="mb-6">
                Der Vertrag kommt zustande, indem der Kunde einen Antrag abgibt, der durch die Immoprofi Fischer GmbH angenommen wird. Die Annahme erfolgt durch eine Bestätigung.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">3. Vertragsleistungen und Preise</h3>
              <p className="mb-6">
                Die Immoprofi Fischer GmbH ist verpflichtet, die vereinbarten Leistungen nach Maßgabe dieser Allgemeinen Geschäftsbedingungen zu erbringen. Die vereinbarten Preise schließen die jeweilige gesetzliche Mehrwertsteuer ein.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">4. Rücktritt durch den Kunden</h3>
              <p className="mb-6">
                Die Immoprofi Fischer GmbH räumt dem Kunden ein Rücktrittsrecht ein. Im Einzelfall sind abweichende Regelungen zu Rücktrittsbedingungen möglich, die dem Kunden vor der Buchung angezeigt werden.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">5. Haftung</h3>
              <p className="mb-6">
                Die Immoprofi Fischer GmbH haftet in Fällen des Vorsatzes oder der groben Fahrlässigkeit nach den gesetzlichen Bestimmungen. Für leichte Fahrlässigkeit haftet die Immoprofi Fischer GmbH ausschließlich wegen der Verletzung des Lebens, des Körpers oder der Gesundheit oder wegen der Verletzung wesentlicher Vertragspflichten.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">6. Datenschutz</h3>
              <p className="mb-6">
                Die Datenschutzbestimmungen sind unter{' '}
                <a href="/datenschutz" className="underline">www.immoprofi-fischer.de/datenschutz</a> zu finden.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">7. Schlussbestimmungen</h3>
              <p className="mb-6">
                Es gilt das Recht der Bundesrepublik Deutschland. Im Falle des Vorliegens von unterschiedlichen Versionen dieser AGB in verschiedenen Sprachen gilt im Zweifelsfall die deutschsprachige Version.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">8. Salvatorische Klausel</h3>
              <p className="mb-6">
                Sollten eine oder mehrere Bestimmungen dieser AGB unwirksam werden, so wird hiervon die Wirksamkeit der übrigen Bestimmungen nicht berührt.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default AGBPage;
