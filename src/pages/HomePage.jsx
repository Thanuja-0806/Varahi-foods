import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import USPSection from '../components/USPSection';
import TestimonialSection from '../components/TestimonialSection';
import InstagramSection from '../components/InstagramSection';

const HomePage = () => {
  // Get 8 best sellers
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 8);
  if (bestsellerProducts.length < 8) {
    const remaining = products.filter(p => !p.bestseller).slice(0, 8 - bestsellerProducts.length);
    bestsellerProducts.push(...remaining);
  }

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-cream-100 via-brand-cream-200 to-brand-cream-300 pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-brand-gold-100 border border-brand-gold-300 text-brand-gold-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold-600" />
                <span>TRADITIONAL FLAVOURS • MODERN EXPERIENCE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-maroon-900 leading-[1.15] tracking-tight">
                Authentic Taste, <br className="hidden sm:inline" />
                <span className="text-brand-gold-600 italic font-serif font-normal">Made with Love</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Discover the rich flavours of traditional Indian homemade foods, crafted with carefully selected ingredients, sun-ripened spices, and pure cow ghee.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-maroon-800 text-white font-bold text-base hover:bg-brand-maroon-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#categories"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-cream-100 text-brand-maroon-900 font-bold text-base border-2 border-brand-cream-400 hover:border-brand-maroon-800 hover:bg-brand-cream-200 transition-all flex items-center justify-center"
                >
                  Explore Categories
                </a>
              </div>

              {/* Highlights strip */}
              <div className="pt-6 border-t border-brand-cream-300/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="block font-serif font-bold text-2xl text-brand-maroon-900">100%</span>
                  <span className="text-xs text-brand-charcoal-700">Homemade Recipe</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl text-brand-maroon-900">Fresh</span>
                  <span className="text-xs text-brand-charcoal-700">Small Batch Craft</span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl text-brand-maroon-900">Zero</span>
                  <span className="text-xs text-brand-charcoal-700">Chemical Preservatives</span>
                </div>
              </div>
            </div>

            {/* Right Column Hero Food Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-brand-gold-500/20 rounded-3xl transform rotate-3 scale-105 blur-sm" />

                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-brand-cream-100 aspect-square">
                  <img
                    src="/images/categories/pickels.webp"
                    alt="Varahi Authentic Andhra Pickles & Sweets"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/products/mango-pickel.jpg';
                    }}
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-cream-100/90 backdrop-blur-md p-4 rounded-2xl border border-brand-cream-300 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-sm text-brand-maroon-900 block">Varahi Guarantee</span>
                        <span className="text-[11px] text-brand-charcoal-700">Pure Ghee & Cold-Pressed Oils</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-gold-700 bg-brand-gold-100 px-2.5 py-1 rounded-full border border-brand-gold-300">
                      ★ 4.9 Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section id="categories" className="py-16 sm:py-24 bg-brand-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gold-600 font-bold">
              Traditional Favourites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
              Shop by Category
            </h2>
            <p className="text-sm text-brand-charcoal-700 mt-2">
              Explore our collection of traditional favourites handcrafted with authentic recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. USP SECTION */}
      <USPSection />

      {/* 4. BEST SELLERS SECTION */}
      <section className="py-16 sm:py-24 bg-brand-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold-600 font-bold">
                Most Popular
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
                Our Best Sellers
              </h2>
              <p className="text-sm text-brand-charcoal-700 mt-1">
                Handpicked delicacies customer favourite across India.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-maroon-800 hover:text-brand-gold-700 transition-colors"
            >
              <span>View All 16 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY BANNER */}
      <section className="py-16 bg-brand-maroon-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold-400 font-bold">
            The Varahi Foods Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-snug">
            "Bringing the warmth of Andhra homemade kitchens to your dining table."
          </h2>
          <p className="text-sm text-brand-cream-200/90 max-w-2xl mx-auto leading-relaxed">
            Every pickle jar and sweet box from Varahi Foods is prepared using traditional stone-ground spices, pure organic bellam (jaggery), and cold-pressed oils.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 rounded-full bg-brand-gold-500 text-brand-maroon-900 font-extrabold text-sm hover:bg-brand-gold-400 transition-colors shadow-md"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <TestimonialSection />

      {/* 7. INSTAGRAM SECTION */}
      <InstagramSection />
    </div>
  );
};

export default HomePage;
