import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';

const ImpressumPage = () => {
  return (
    <div data-testid="impressum-page" className="pt-24 md:pt-32">
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-12">
              Impressum
            </h1>
          </SlideInLeft>

          <FadeInView delay={0.2}>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-light mb-4">Immoprofi Fischer GmbH</h2>
              
              <p className="text-[#333] mb-6">
                Telefon: <a href="tel:021184361100" className="underline">0211 84361 100</a><br />
                E-Mail: <a href="mailto:anfrage@immoprofi-fischer.de" className="underline">anfrage@immoprofi-fischer.de</a><br />
                Web: <a href="https://immoprofi-fischer.de/" className="underline">https://immoprofi-fischer.de/</a>
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Weitere Angaben gemäß § 5 TMG:</h3>
              <p className="text-[#333] mb-6">
                Immoprofi Fischer GmbH<br />
                Königsallee 98<br />
                D-40212 Düsseldorf
              </p>
              <p className="text-[#333] mb-6">
                Geschäftsführer: Oliver Marc Fischer<br />
                Handelsregister: HRB 92799<br />
                Amtsgericht Düsseldorf<br />
                UST-ID: DE330636004
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Verantwortlich nach §55 Abs. 2 RStV:</h3>
              <p className="text-[#333] mb-6">
                Oliver Marc Fischer, Anschrift wie oben genannt.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Streitschlichtung</h3>
              <p className="text-[#333] mb-6">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-[#333] mb-6">
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Haftung für Inhalte</h3>
              <p className="text-[#333] mb-6">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-[#333] mb-6">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Haftung für Links</h3>
              <p className="text-[#333] mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Urheberrecht</h3>
              <p className="text-[#333] mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;
