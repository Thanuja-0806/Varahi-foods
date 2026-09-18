import React from 'react';
import { Leaf, BookOpen, ShieldCheck, Heart } from 'lucide-react';

const USPSection = () => {
  const usps = [
    {
      icon: Leaf,
      title: "Authentic Ingredients",
      description: "Hand-picked spices, cold-pressed oils, and farm-fresh ingredients with no artificial preservatives."
    },
    {
      icon: BookOpen,
      title: "Traditional Recipes",
      description: "Generations-old Andhra family recipes preserved and crafted to perfection."
    },
    {
      icon: ShieldCheck,
      title: "Hygienically Prepared",
      description: "Prepared in small batches under strict food safety and supreme hygienic standards."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every jar carries the warmth, rich aroma, and nostalgic comfort of mother's home kitchen."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-brand-cream-100 border-y border-brand-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-cream-200/60 border border-brand-cream-300 hover:border-brand-gold-400 hover:shadow-warm transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-maroon-900 transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-maroon-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-charcoal-700 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
