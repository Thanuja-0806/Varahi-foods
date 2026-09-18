import React from 'react';
import { Sparkles, Truck } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-brand-maroon-900 text-brand-gold-300 text-xs sm:text-sm py-2 px-4 font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <Truck className="w-4 h-4 text-brand-gold-400 shrink-0 hidden sm:inline-block" />
        <span>Free Shipping on Orders Above ₹999</span>
        <span className="opacity-40 font-normal">|</span>
        <Sparkles className="w-3.5 h-3.5 text-brand-gold-400 shrink-0" />
        <span>Freshly Prepared with Love</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
