import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative bg-brand-cream-100 rounded-2xl border border-brand-cream-300 overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[4/3] w-full bg-brand-cream-300 overflow-hidden relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/categories/pickels.webp';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {category.badge && (
          <span className="absolute top-3 left-3 bg-brand-gold-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-sm">
            {category.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-brand-cream-100 to-brand-cream-200">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-serif font-bold text-xl text-brand-maroon-900 group-hover:text-brand-maroon-700 transition-colors">
              {category.name}
            </h3>
            <span className="text-xs text-brand-gold-700 font-semibold bg-brand-gold-100 px-2.5 py-0.5 rounded-full border border-brand-gold-300">
              {category.itemCount} Items
            </span>
          </div>
          <p className="text-xs text-brand-charcoal-700/80 leading-relaxed mb-4">
            {category.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-brand-maroon-800 group-hover:text-brand-gold-700 transition-colors pt-2">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
