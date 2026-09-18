import React from 'react';
import { Heart, Sparkles, ShieldCheck, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import USPSection from '../components/USPSection';

const AboutPage = () => {
  return (
    <div className="bg-brand-cream-200 min-h-screen py-10 space-y-16">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-maroon-900 rounded-3xl p-8 sm:p-16 text-white text-center relative overflow-hidden shadow-2xl border-4 border-brand-gold-500/40">
          <div className="max-w-3xl mx-auto space-y-4 z-10 relative">
            <span className="text-xs uppercase tracking-widest text-brand-gold-400 font-extrabold bg-brand-maroon-800 px-4 py-1.5 rounded-full border border-brand-gold-500/30">
              TRADITIONAL HERITAGE • HOMEMADE LOVE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Our Story & Promise
            </h1>
            <p className="text-base sm:text-lg text-brand-cream-200 leading-relaxed font-light">
              "Varahi Foods is a demo traditional-food brand created to bring authentic Indian flavours to modern homes."
            </p>
          </div>
        </div>
      </section>

      {/* STORY & PROMISE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-gold-700 bg-brand-gold-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-gold-300">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>Authentic Andhra Culinary Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 leading-tight">
              Preserving Generations of Homemade Traditions
            </h2>

            <p className="text-sm text-brand-charcoal-700 leading-relaxed">
              At Varahi Foods, we believe that real food carries the warmth, soul, and nostalgic comfort of mother's home kitchen. In today's fast-paced world, finding authentic pickles and sweets prepared with natural ingredients without preservatives is rare.
            </p>

            <p className="text-sm text-brand-charcoal-700 leading-relaxed">
              Every jar of our Gongura or Mango Pickle is handcrafted in small batches using traditional stone-grinding techniques, pure unrefined jaggery, cold-pressed sesame oil, and hand-picked spices.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-cream-100 border border-brand-cream-300">
                <span className="font-serif font-bold text-2xl text-brand-maroon-900 block">100%</span>
                <span className="text-xs text-brand-charcoal-700 font-medium">Pure Cow Ghee & Cold-Pressed Oils</span>
              </div>
              <div className="p-4 rounded-2xl bg-brand-cream-100 border border-brand-cream-300">
                <span className="font-serif font-bold text-2xl text-brand-maroon-900 block">Zero</span>
                <span className="text-xs text-brand-charcoal-700 font-medium">Artificial Preservatives or Colors</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-brand-cream-100">
              <img
                src="/images/categories/sweets.jpg"
                alt="Varahi Foods Sweets & Heritage"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/categories/pickels.webp';
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-brand-maroon-900 text-white p-5 rounded-2xl border border-brand-gold-500/40 shadow-xl max-w-xs">
              <span className="text-xs text-brand-gold-400 font-bold block uppercase tracking-wider">Client Customization Note</span>
              <p className="text-[11px] text-brand-cream-200 mt-1">
                This section can be easily customized with the client's official brand story, founder photos, and manufacturing journey.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4 CORE PILLARS */}
      <section className="bg-brand-cream-100 py-16 border-y border-brand-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-extrabold text-brand-maroon-900">
              Our 4 Pillars of Excellence
            </h2>
            <p className="text-xs text-brand-charcoal-700 mt-1">
              What sets Varahi Foods apart in every single jar and packet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-brand-cream-200 rounded-2xl border border-brand-cream-300 space-y-3">
              <BookOpen className="w-8 h-8 text-brand-maroon-800" />
              <h3 className="font-serif font-bold text-lg text-brand-maroon-900">Traditional Recipes</h3>
              <p className="text-xs text-brand-charcoal-700 leading-relaxed">
                Handcrafted using centuries-old recipes passed down through generations in Andhra households.
              </p>
            </div>

            <div className="p-6 bg-brand-cream-200 rounded-2xl border border-brand-cream-300 space-y-3">
              <Sparkles className="w-8 h-8 text-brand-maroon-800" />
              <h3 className="font-serif font-bold text-lg text-brand-maroon-900">Quality Ingredients</h3>
              <p className="text-xs text-brand-charcoal-700 leading-relaxed">
                We source farm-fresh raw mangoes, organic jaggery, Guntur chillies, and pure cow ghee.
              </p>
            </div>

            <div className="p-6 bg-brand-cream-200 rounded-2xl border border-brand-cream-300 space-y-3">
              <ShieldCheck className="w-8 h-8 text-brand-maroon-800" />
              <h3 className="font-serif font-bold text-lg text-brand-maroon-900">Hygienic Preparation</h3>
              <p className="text-xs text-brand-charcoal-700 leading-relaxed">
                Prepared in small batches in a spotless, hygienic facility adhering to top food safety standards.
              </p>
            </div>

            <div className="p-6 bg-brand-cream-200 rounded-2xl border border-brand-cream-300 space-y-3">
              <Heart className="w-8 h-8 text-brand-maroon-800" />
              <h3 className="font-serif font-bold text-lg text-brand-maroon-900">Made with Love</h3>
              <p className="text-xs text-brand-charcoal-700 leading-relaxed">
                Every batch is crafted with genuine passion to deliver unforgettable home flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP REUSE */}
      <USPSection />

    </div>
  );
};

export default AboutPage;
