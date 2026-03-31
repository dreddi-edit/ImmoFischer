import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { FadeInView, SlideInLeft, SlideInRight } from '../components/ui/AnimatedText';
import ImageReveal from '../components/ui/ImageReveal';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const UeberUnsPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(`${API}/team`);
        setTeam(res.data);
      } catch (e) {
        console.error('Error fetching team:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div data-testid="ueber-uns-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
                Über uns
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Persönlich. Kompetent. Lokal.
              </h1>
              <p className="text-[#333] text-base md:text-lg leading-relaxed mb-6">
                Die Immoprofi Fischer GmbH ist ein modernes Düsseldorfer Immobilienunternehmen mit Fokus auf persönliche Beratung und Premium-Service.
              </p>
              <p className="text-[#333] leading-relaxed">
                Mit unserem Sitz an der Königsallee 98 in Düsseldorf verbinden wir lokale Marktkenntnis mit unternehmerischer Kompetenz – für Ihren erfolgreichen Immobilienverkauf oder -kauf.
              </p>
            </SlideInLeft>
            
            <SlideInRight delay={0.2}>
              <ImageReveal
                src="https://images.pexels.com/photos/28011239/pexels-photo-28011239.jpeg?w=800"
                alt="Düsseldorf Königsallee"
                className="aspect-[4/3]"
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Unsere Werte
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Was uns auszeichnet
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Persönliche Betreuung',
                description: 'Ein fester Ansprechpartner begleitet Sie durch den gesamten Prozess – kompetent und zuverlässig.',
              },
              {
                title: 'Lokale Expertise',
                description: 'Tiefe Marktkenntnis in Düsseldorf und Umgebung für realistische Bewertungen und erfolgreiche Vermarktung.',
              },
              {
                title: 'Premium-Service',
                description: 'Hochwertige Präsentation, bonitätsgeprüfte Interessenten und diskrete Abwicklung auf höchstem Niveau.',
              },
            ].map((value, index) => (
              <FadeInView key={value.title} delay={index * 0.1}>
                <div className="text-center p-8">
                  <span className="font-serif text-6xl font-light text-[#D9D0C1]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl font-light mt-4 mb-4">{value.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Unser Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Die Menschen hinter ImmoProfi
            </h2>
          </FadeInView>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse text-center">
                  <div className="w-32 h-32 bg-[#E5E5E5] rounded-full mx-auto" />
                  <div className="mt-4 h-4 bg-[#E5E5E5] w-3/4 mx-auto" />
                  <div className="mt-2 h-3 bg-[#E5E5E5] w-1/2 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <FadeInView key={member.id} delay={index * 0.05}>
                  <motion.div
                    className="text-center group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#F0EBE1]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1772987438485-ac832640c8a5?w=200';
                        }}
                      />
                    </div>
                    <h3 className="font-serif text-lg font-light">{member.name}</h3>
                    <p className="text-xs text-[#7A7A7A] uppercase tracking-wider mb-3">{member.role}</p>
                    
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          data-testid={`team-email-${member.id}`}
                          className="w-8 h-8 bg-[#F0EBE1] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          data-testid={`team-phone-${member.id}`}
                          className="w-8 h-8 bg-[#F0EBE1] flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeInView>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#666] mb-4">
                Unternehmen
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Immoprofi Fischer GmbH
              </h2>
              <div className="space-y-4 text-[#999]">
                <p>Königsallee 98</p>
                <p>40212 Düsseldorf</p>
                <p className="pt-4">Geschäftsführer: Oliver Marc Fischer</p>
                <p>Handelsregister: HRB 92799</p>
                <p>Amtsgericht Düsseldorf</p>
                <p>UST-ID: DE330636004</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#666] mb-4">
                Kontakt
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#666] mb-1">Telefon</p>
                  <a href="tel:021184361100" className="text-2xl font-serif font-light hover:text-[#D9D0C1] transition-colors">
                    0211 84361 100
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">E-Mail</p>
                  <a href="mailto:anfrage@immoprofi-fischer.de" className="text-2xl font-serif font-light hover:text-[#D9D0C1] transition-colors">
                    anfrage@immoprofi-fischer.de
                  </a>
                </div>
                <Link
                  to="/kontakt"
                  data-testid="ueber-uns-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#F8F6F2] transition-colors mt-4"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UeberUnsPage;
