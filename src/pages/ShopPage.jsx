import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X, ShoppingBag, Heart, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialFilter = searchParams.get('filter') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(700);
  const [minRating, setMinRating] = useState(0);
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(initialFilter === 'wishlist');

  const { wishlistItems } = useWishlist();

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchTerm(searchParams.get('search'));
    }
    if (searchParams.get('filter') === 'wishlist') {
      setShowWishlistOnly(true);
    }
  }, [searchParams]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Wishlist filter
      if (showWishlistOnly && !wishlistItems.some(w => w.id === product.id)) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesIng = product.ingredients.some(i => i.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesDesc && !matchesIng) return false;
      }
      // Price filter (checking default 250g/500g starting price)
      const basePrice = product.variants[0].price;
      if (basePrice > maxPrice) return false;

      // Rating filter
      if (product.rating < minRating) return false;

      // Bestsellers filter
      if (onlyBestsellers && !product.bestseller) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.variants[0].price - b.variants[0].price;
      }
      if (sortBy === 'price-desc') {
        return b.variants[0].price - a.variants[0].price;
      }
      if (sortBy === 'newest') {
        return b.newArrival ? 1 : -1;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // default featured
      return b.bestseller ? 1 : -1;
    });
  }, [selectedCategory, searchTerm, maxPrice, minRating, onlyBestsellers, sortBy, showWishlistOnly, wishlistItems]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('featured');
    setMaxPrice(700);
    setMinRating(0);
    setOnlyBestsellers(false);
    setShowWishlistOnly(false);
    setSearchParams({});
  };

  return (
    <div className="bg-brand-cream-200 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-cream-300 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
                Varahi Catalog
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
                {showWishlistOnly ? 'Your Saved Wishlist' : 'Shop All Products'}
              </h1>
              <p className="text-xs text-brand-charcoal-700 mt-1">
                Showing {filteredProducts.length} of {products.length} authentic delicacies
              </p>
            </div>

            {/* Quick Actions & Wishlist Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                  showWishlistOnly
                    ? 'bg-brand-maroon-800 text-white border-brand-maroon-800 shadow-sm'
                    : 'bg-brand-cream-100 text-brand-charcoal-900 border-brand-cream-400 hover:border-brand-maroon-800'
                }`}
              >
                <Heart className={`w-4 h-4 ${showWishlistOnly ? 'fill-current' : ''}`} />
                <span>Wishlist ({wishlistItems.length})</span>
              </button>

              {/* Mobile Filter Trigger Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden px-4 py-2 rounded-xl bg-brand-cream-100 text-brand-maroon-900 font-bold text-xs border border-brand-cream-400 flex items-center gap-2 shadow-xs"
              >
                <SlidersHorizontal className="w-4 h-4 text-brand-gold-600" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Shop Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* DESKTOP FILTER SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-1 bg-brand-cream-100 rounded-2xl p-6 border border-brand-cream-300 shadow-warm sticky top-24 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-cream-300 pb-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-maroon-800" />
                <h2 className="font-serif font-bold text-lg text-brand-maroon-900">Filters</h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-brand-gold-700 hover:text-brand-maroon-800 font-semibold flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Search Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-xs font-medium text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                />
                <Search className="w-4 h-4 text-brand-charcoal-700 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                Categories
              </label>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'bg-brand-maroon-800 text-white font-bold'
                      : 'text-brand-charcoal-800 hover:bg-brand-cream-200'
                  }`}
                >
                  <span>All Categories</span>
                  <span>{products.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = products.filter(p => p.category === cat.slug).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors flex items-center justify-between ${
                        selectedCategory === cat.slug
                          ? 'bg-brand-maroon-800 text-white font-bold'
                          : 'text-brand-charcoal-800 hover:bg-brand-cream-200'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-700">
                  Max Price
                </label>
                <span className="text-xs font-bold text-brand-maroon-900">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="100"
                max="700"
                step="20"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-maroon-800 cursor-pointer"
              />
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                Minimum Rating
              </label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full p-2 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-xs font-medium text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
              >
                <option value={0}>All Ratings</option>
                <option value={4.5}>4.5 Stars & Above</option>
                <option value={4.8}>4.8 Stars & Above</option>
              </select>
            </div>

            {/* Bestseller Checkbox */}
            <div className="pt-2 border-t border-brand-cream-300">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-brand-charcoal-900">
                <input
                  type="checkbox"
                  checked={onlyBestsellers}
                  onChange={(e) => setOnlyBestsellers(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-maroon-800 focus:ring-brand-maroon-800 accent-brand-maroon-800 cursor-pointer"
                />
                <span>Bestsellers Only</span>
              </label>
            </div>
          </aside>

          {/* RIGHT PRODUCT GRID AREA */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Sorting Toolbar */}
            <div className="bg-brand-cream-100 p-4 rounded-2xl border border-brand-cream-300 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-medium text-brand-charcoal-700">
                Found <strong className="text-brand-maroon-900 font-bold">{filteredProducts.length}</strong> items
              </div>

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
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-brand-cream-100 rounded-2xl p-12 text-center border border-brand-cream-300 shadow-warm my-8">
                <ShoppingBag className="w-12 h-12 text-brand-cream-400 mx-auto mb-3" />
                <h3 className="font-serif text-2xl font-bold text-brand-maroon-900 mb-1">
                  No products matched your criteria
                </h3>
                <p className="text-xs text-brand-charcoal-700 mb-6 max-w-md mx-auto">
                  Try adjusting your search keyword, category selection, or price slider.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-brand-maroon-800 text-white font-bold text-xs hover:bg-brand-maroon-700 transition-colors shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-brand-cream-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-brand-cream-300 pb-3">
                  <h3 className="font-serif font-bold text-xl text-brand-maroon-900">Filters</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 rounded-full text-brand-charcoal-700 hover:bg-brand-cream-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-xs"
                  />
                </div>

                {/* Mobile Categories */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                    Categories
                  </label>
                  <div className="space-y-1 text-xs">
                    <button
                      onClick={() => { setSelectedCategory('all'); setIsMobileFilterOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl ${
                        selectedCategory === 'all' ? 'bg-brand-maroon-800 text-white font-bold' : 'text-brand-charcoal-900'
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.slug); setIsMobileFilterOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl ${
                          selectedCategory === cat.slug ? 'bg-brand-maroon-800 text-white font-bold' : 'text-brand-charcoal-900'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Price */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Max Price</span>
                    <span>₹{maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="700"
                    step="20"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-brand-maroon-800"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-brand-cream-300 space-y-2">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 rounded-xl bg-brand-maroon-800 text-white font-bold text-xs"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => { resetFilters(); setIsMobileFilterOpen(false); }}
                  className="w-full py-2 rounded-xl bg-brand-cream-200 text-brand-charcoal-900 font-semibold text-xs"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
