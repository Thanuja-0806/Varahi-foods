import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-maroon-900 text-brand-cream-100 pt-16 pb-8 border-t-4 border-brand-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-maroon-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-brand-gold-500 flex items-center justify-center text-brand-maroon-900 font-serif font-bold text-xl shadow-md">
                V
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  VARAHI FOODS
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-brand-gold-400 font-semibold -mt-1">
                  Authentic Taste • Homemade Love
                </p>
              </div>
            </div>

            <p className="text-xs text-brand-cream-300/80 leading-relaxed">
              Varahi Foods is dedicated to reviving authentic Andhra recipes. Handcrafted in small batches using pure ingredients, traditional stone grinding, and zero artificial preservatives.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-maroon-800 flex items-center justify-center text-brand-gold-400 hover:bg-brand-gold-500 hover:text-brand-maroon-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-maroon-800 flex items-center justify-center text-brand-gold-400 hover:bg-brand-gold-500 hover:text-brand-maroon-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-maroon-800 flex items-center justify-center text-brand-gold-400 hover:bg-brand-gold-500 hover:text-brand-maroon-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-maroon-800 flex items-center justify-center text-brand-gold-400 hover:bg-brand-gold-500 hover:text-brand-maroon-900 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4 border-b border-brand-maroon-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Shop All Products</span>
                </Link>
              </li>
              <li>
                <Link to="/category/pickles" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Traditional Pickles</span>
                </Link>
              </li>
              <li>
                <Link to="/category/sweets" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Festival Sweets</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Our Story & Promise</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors flex items-center gap-1">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4 border-b border-brand-maroon-800 pb-2 inline-block">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#shipping" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  Shipping & Delivery Info
                </a>
              </li>
              <li>
                <a href="#returns" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  Returns & Refund Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <Link to="/cart" className="text-brand-cream-200/90 hover:text-brand-gold-400 transition-colors">
                  My Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Demo Note */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4 border-b border-brand-maroon-800 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-brand-cream-200/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a href="tel:+919000000000" className="hover:text-brand-gold-400 transition-colors">
                  +91 90000 00000 (Demo)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a href="mailto:hello@varahifoods.com" className="hover:text-brand-gold-400 transition-colors">
                  hello@varahifoods.com
                </a>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-brand-maroon-800/80 border border-brand-gold-500/30">
                <p className="text-[11px] font-semibold text-brand-gold-300">
                  Notice for Client Review:
                </p>
                <p className="text-[10px] text-brand-cream-300/80 mt-1">
                  This website is a trial DEMO implementation. All content, products, prices, and contact details can be customized upon backend integration.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream-300/70">
          <p>© 2026 Varahi Foods. Demo Website. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-gold-400 fill-current" />
            <span>for Authentic Taste</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
