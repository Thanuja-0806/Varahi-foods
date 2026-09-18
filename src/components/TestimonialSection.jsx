import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Absolutely loved the traditional taste. The Mango Pickle brought back memories of my grandmother's house in Vijayawada!",
      name: "Lakshmi Narayana",
      location: "Hyderabad",
      rating: 5,
      product: "Mango Pickle"
    },
    {
      id: 2,
      quote: "Beautiful packaging and authentic flavours. The Sunnundalu laddus are rich in pure ghee and melt right in your mouth.",
      name: "Srinivas Rao",
      location: "Bengaluru",
      rating: 5,
      product: "Sunnundalu"
    },
    {
      id: 3,
      quote: "Feels just like homemade food. The Idli Karam podi has the perfect spice kick and garlic aroma. Ordering again!",
      name: "Anjaneyulu M.",
      location: "Visakhapatnam",
      rating: 5,
      product: "Idli Karam"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-brand-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold-600 font-bold">
            Demo Testimonials • Easy to Replace
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
            Loved by Homemade Food Enthusiasts
          </h2>
          <p className="text-sm text-brand-charcoal-700 mt-2">
            Here is what our trial customers say about the authentic taste and warmth of Varahi Foods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-cream-100 rounded-2xl p-6 sm:p-8 border border-brand-cream-300 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-brand-gold-300/40 absolute top-6 right-6 pointer-events-none group-hover:text-brand-gold-400/60 transition-colors" />

              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-brand-charcoal-900 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-cream-300 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-maroon-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-brand-charcoal-700">
                    {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-brand-gold-700 bg-brand-gold-100 px-2.5 py-1 rounded-full border border-brand-gold-300">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="text-[11px] text-brand-charcoal-700/60 italic">
            * Note: These are representative demo reviews provided for presentation layout.
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
