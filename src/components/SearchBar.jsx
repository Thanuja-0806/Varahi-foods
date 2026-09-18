import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchBar = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = searchTerm.trim() === '' ? [] : products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleProductClick = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onClose();
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-brand-cream-100 rounded-2xl shadow-2xl border border-brand-cream-300 overflow-hidden z-10">
        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-brand-cream-300 p-4">
          <Search className="w-5 h-5 text-brand-maroon-800 ml-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pickles, sweets, snacks, spices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-3 pr-10 py-2 bg-transparent text-brand-charcoal-900 placeholder:text-brand-charcoal-700/60 focus:outline-none text-base sm:text-lg font-medium"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-brand-charcoal-700 hover:text-brand-maroon-800 hover:bg-brand-cream-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </form>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-xs uppercase tracking-widest text-brand-gold-600 font-semibold mb-2">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Mango Pickle', 'Gongura', 'Ariselu', 'Sunnundalu', 'Murukku', 'Idli Karam'].map(term => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-3.5 py-1.5 rounded-full bg-brand-cream-300 text-xs font-medium text-brand-charcoal-900 hover:bg-brand-maroon-800 hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                Found {filteredProducts.length} product{filteredProducts.length > 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-brand-cream-300 cursor-pointer transition-colors group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg border border-brand-cream-400 group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/categories/pickels.webp';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-semibold text-brand-maroon-900 group-hover:text-brand-maroon-700 truncate text-base">
                        {product.name}
                      </h4>
                      <p className="text-xs text-brand-charcoal-700">
                        {product.categoryName} • <span className="font-medium text-brand-gold-700 font-sans">From ₹{product.variants[0].price}</span>
                      </p>
                    </div>
                    <div className="text-brand-gold-600 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <ShoppingBag className="w-10 h-10 text-brand-cream-400 mx-auto mb-2" />
              <p className="font-serif text-lg font-semibold text-brand-maroon-900">No products found</p>
              <p className="text-xs text-brand-charcoal-700 mt-1">We couldn't find any results for "{searchTerm}". Try searching another keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
