import React from 'react';
import { Instagram } from 'lucide-react';
import { products } from '../data/products';

const InstagramSection = () => {
  // Use 6 product images for instagram grid tiles
  const instagramTiles = products.slice(0, 6);

  return (
    <section className="py-16 bg-brand-cream-100 border-t border-brand-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-brand-maroon-800 bg-brand-maroon-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Instagram className="w-4 h-4 text-brand-maroon-800" />
            <span>@varahifoods.official</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-brand-maroon-900">
            Follow Varahi Foods
          </h2>
          <p className="text-xs text-brand-charcoal-700 mt-1">
            Join our online family for traditional recipes, behind-the-scenes preparation, and culinary inspiration!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramTiles.map((tile, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm border border-brand-cream-300 bg-brand-cream-200"
            >
              <img
                src={tile.image}
                alt={`Instagram Post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/categories/pickels.webp';
                }}
              />
              <div className="absolute inset-0 bg-brand-maroon-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                <Instagram className="w-6 h-6 mb-1 text-brand-gold-400" />
                <span className="text-[10px] font-semibold tracking-wide">#VarahiFoods</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-maroon-800 text-white font-bold text-sm hover:bg-brand-maroon-700 transition-colors shadow-sm"
          >
            <Instagram className="w-4 h-4 text-brand-gold-400" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
