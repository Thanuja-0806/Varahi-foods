import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const defaultVariant = product.variants && product.variants[0] ? product.variants[0] : { weight: '250g', price: 199 };
  const oldPrice = Math.round(defaultVariant.price * 1.2); // ~20% fake strike-through discount for demo polish
  const isWishlisted = isInWishlist(product.id);
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group bg-brand-cream-100 rounded-2xl border border-brand-cream-300 overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between relative">
      {/* Top Badges & Wishlist Button */}
      <div className="relative aspect-square w-full bg-brand-cream-200 overflow-hidden">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/categories/pickels.webp';
            }}
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.bestseller && (
            <span className="bg-brand-maroon-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Bestseller
            </span>
          )}
          {product.newArrival && (
            <span className="bg-brand-gold-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 shadow-sm ${
            isWishlisted
              ? 'bg-brand-maroon-800 text-white'
              : 'bg-white/80 text-brand-charcoal-900 hover:bg-white hover:text-brand-maroon-800'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Details Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-brand-charcoal-700 font-medium mb-1">
            <span>{product.categoryName}</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-brand-charcoal-900 font-semibold">{product.rating}</span>
              <span className="text-brand-charcoal-700/60">({product.reviewCount || 24})</span>
            </div>
          </div>

          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-maroon-900 group-hover:text-brand-maroon-700 transition-colors line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-brand-charcoal-700/80 line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-brand-cream-300/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-brand-charcoal-700 block">Starts at ({defaultVariant.weight})</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-brand-maroon-900">
                ₹{defaultVariant.price}
              </span>
              <span className="text-xs text-brand-charcoal-700/60 line-through">
                ₹{oldPrice}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all transform active:scale-95 shadow-sm ${
              isInCart
                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                : 'bg-brand-maroon-800 text-white hover:bg-brand-maroon-700 hover:shadow-md'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
