import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, ArrowLeft } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState('featured');

  // Find category by slug
  const category = categories.find(c => c.slug === slug) || categories[0];

  // Filter products matching this category
  let categoryProducts = products.filter(p => p.category === category.slug);

  // Sorting
  categoryProducts = [...categoryProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.variants[0].price - b.variants[0].price;
    if (sortBy === 'price-desc') return b.variants[0].price - a.variants[0].price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.bestseller ? 1 : -1;
  });

  return (
    <div className="bg-brand-cream-200 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-charcoal-700 font-medium mb-6">
          <Link to="/" className="hover:text-brand-maroon-800 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold-600" />
          <Link to="/shop" className="hover:text-brand-maroon-800 transition-colors">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold-600" />
          <span className="text-brand-maroon-800 font-bold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-cream-300 shadow-2xl bg-brand-maroon-900 text-white mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            <div className="md:col-span-7 p-8 sm:p-12 space-y-3 z-10">
              <span className="text-xs uppercase tracking-widest text-brand-gold-400 font-extrabold bg-brand-maroon-800/80 px-3 py-1 rounded-full border border-brand-gold-500/30">
                {category.badge || 'Varahi Foods Specialty'}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
                {category.name}
              </h1>
              <p className="text-sm text-brand-cream-200 leading-relaxed max-w-xl">
                {category.description}
              </p>
              <div className="pt-2 text-xs text-brand-gold-300 font-semibold">
                Available Items: {categoryProducts.length} Products
              </div>
            </div>

            <div className="md:col-span-5 aspect-[16/9] md:aspect-square relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/categories/pickels.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon-900 via-transparent to-transparent md:block hidden" />
            </div>

          </div>
        </div>

        {/* Sort & Count Header */}
        <div className="bg-brand-cream-100 p-4 rounded-2xl border border-brand-cream-300 shadow-xs flex items-center justify-between gap-4 mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-maroon-800 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Categories</span>
          </Link>

          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-brand-charcoal-700">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-brand-cream-200 border border-brand-cream-400 rounded-xl px-3 py-1.5 text-xs font-semibold text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;
