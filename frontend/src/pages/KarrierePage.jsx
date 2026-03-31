import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const KarrierePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API}/jobs`);
        setJobs(res.data);
      } catch (e) {
        console.error('Error fetching jobs:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div data-testid="karriere-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Karriere
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Werden Sie Teil unseres Teams
            </h1>
            <p className="text-[#333] text-base md:text-lg max-w-2xl leading-relaxed">
              Die Immoprofi Fischer GmbH ist auf Wachstumskurs und sucht engagierte Mitarbeiter/innen für ein dynamisches Team.
            </p>
          </SlideInLeft>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="text-center mb-16">
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Warum wir?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Was Sie erwartet
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Abwechslungsreich',
                description: 'Vielfältige Aufgaben in Immobilienverkauf, Finanzierung und Marketing.',
              },
              {
                title: 'Tolles Team',
                description: 'Arbeiten Sie in einem motivierten Team mit flachen Hierarchien.',
              },
              {
                title: 'Entwicklung',
                description: 'Kontinuierliche Weiterbildung und Karrieremöglichkeiten.',
              },
            ].map((benefit, index) => (
              <FadeInView key={benefit.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-[#F8F6F2]">
                  <h3 className="font-serif text-xl font-light mb-4">{benefit.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInView className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Offene Stellen
            </h2>
          </FadeInView>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse p-6 border border-[#E5E5E5]">
                  <div className="h-5 bg-[#E5E5E5] w-1/3 mb-2" />
                  <div className="h-4 bg-[#E5E5E5] w-1/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <FadeInView key={job.id} delay={index * 0.05}>
                  <motion.div
                    className="group p-6 border border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-xl font-light mb-2">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-[#7A7A7A]">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.employment_type}
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium group-hover:gap-4 transition-all">
                        Details ansehen
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Initiative Application */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Keine passende Stelle dabei?
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto mb-8">
              Wir freuen uns auch über Initiativbewerbungen. Senden Sie uns Ihre Unterlagen und zeigen Sie uns, was Sie auszeichnet.
            </p>
            <a
              href="mailto:karriere@immoprofi-fischer.de"
              data-testid="karriere-cta"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#F8F6F2] transition-colors"
            >
              Initiativbewerbung senden
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default KarrierePage;
