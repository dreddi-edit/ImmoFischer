import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';

const DatenschutzPage = () => {
  return (
    <div data-testid="datenschutz-page" className="pt-24 md:pt-32">
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Rechtliches
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-12">
              Datenschutzerklärung
            </h1>
          </SlideInLeft>

          <FadeInView delay={0.2}>
            <div className="prose prose-lg max-w-none text-[#333]">
              <h2 className="font-serif text-2xl font-light mb-4 mt-8">Allgemeiner Hinweis und Pflichtinformationen</h2>
              
              <h3 className="font-serif text-xl font-light mt-8 mb-4">Benennung der verantwortlichen Stelle</h3>
              <p className="mb-6">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mb-6">
                <strong>Immoprofi Fischer GmbH</strong><br />
                Oliver Marc Fischer<br />
                Königsallee 98<br />
                D-40212 Düsseldorf
              </p>
              <p className="mb-6">
                Telefon: 0211 84361 100<br />
                E-Mail: anfrage@immoprofi-fischer.de<br />
                Web: https://immoprofi-fischer.de/
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Sicherheit und Schutz Ihrer personenbezogenen Daten</h3>
              <p className="mb-6">
                Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir äußerste Sorgfalt und modernste Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen Daten zu gewährleisten.
              </p>
              <p className="mb-6">
                Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen Datenschutzgrundverordnung (DSGVO) und den Regelungen des Bundesdatenschutzgesetzes (BDSG).
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Erhebung personenbezogener Daten</h3>
              <p className="mb-6">
                Bei der bloß informatorischen Nutzung der Website erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser und Betriebssystem</li>
              </ul>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Einsatz von Cookies</h3>
              <p className="mb-6">
                Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Ihre Rechte</h3>
              <p className="mb-6">Sie haben folgende Rechte:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Kontaktformular</h3>
              <p className="mb-6">
                Bei einer Kontaktaufnahme mit uns per E-Mail oder über unser Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist.
              </p>

              <h3 className="font-serif text-xl font-light mt-8 mb-4">Auftragsverarbeiter</h3>
              <p className="mb-6">
                Wir arbeiten mit folgenden Dienstleistern zusammen: WordPress, Elementor, Neve, Propstack, Kleinanzeigen, Immoscout24
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default DatenschutzPage;
