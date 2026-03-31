import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { FadeInView, SlideInLeft } from '../components/ui/AnimatedText';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ReferenzenPage = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${API}/properties`);
        setProperties(res.data);
      } catch (e) {
        console.error('Error fetching properties:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.property_type.toLowerCase().includes(filter.toLowerCase()));

  const propertyTypes = ['all', 'Wohnung', 'Haus', 'Gewerbe', 'Mehrfamilienhaus'];

  return (
    <div data-testid="referenzen-page" className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SlideInLeft>
            <p className="uppercase text-xs tracking-[0.2em] font-semibold text-[#7A7A7A] mb-4">
              Referenzen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Unsere Immobilien
            </h1>
            <p className="text-[#333] text-base md:text-lg max-w-2xl leading-relaxed">
              Entdecken Sie eine Auswahl unserer aktuellen und verkauften Immobilien in Düsseldorf und Umgebung.
            </p>
          </SlideInLeft>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-4 h-4 text-[#7A7A7A]" />
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                data-testid={`filter-${type.toLowerCase()}`}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  filter === type
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-[#F0EBE1] text-[#333] hover:bg-[#E5E0D6]'
                }`}
              >
                {type === 'all' ? 'Alle' : type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-[#E5E5E5]" />
                  <div className="mt-4 h-4 bg-[#E5E5E5] w-3/4" />
                  <div className="mt-2 h-3 bg-[#E5E5E5] w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <FadeInView key={property.id} delay={index * 0.05}>
                  <motion.div
                    className="property-card group cursor-hover"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="property-image w-full h-full object-cover"
                      />
                      {property.status === 'Verkauft' && (
                        <div className="absolute top-4 left-4 bg-[#0A0A0A] text-white px-3 py-1 text-xs uppercase tracking-wider">
                          Verkauft
                        </div>
                      )}
                    </div>
                    <div className="pt-4">
                      <p className="text-xs text-[#7A7A7A] uppercase tracking-wider mb-1">
                        {property.property_type} • {property.location}
                      </p>
                      <h3 className="font-serif text-xl font-light mb-2">{property.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-[#333]">
                        {property.price && <span className="font-medium">{property.price}</span>}
                        {property.rent && <span className="font-medium">{property.rent} / Monat</span>}
                        {property.area && <span>{property.area}</span>}
                        {property.rooms && <span>{property.rooms} Zimmer</span>}
                      </div>
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#F0EBE1]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeInView>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Sie möchten Ihre Immobilie verkaufen?
            </h2>
            <p className="text-[#7A7A7A] max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihnen helfen können.
            </p>
            <Link
              to="/kontakt"
              data-testid="referenzen-cta"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors"
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

export default ReferenzenPage;
