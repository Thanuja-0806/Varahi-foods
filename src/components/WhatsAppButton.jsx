import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919000000000?text=Hi%20Varahi%20Foods!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-500 hover:scale-110 transition-all duration-300 flex items-center gap-2 group pulse-glow"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pr-1">
        Order via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
