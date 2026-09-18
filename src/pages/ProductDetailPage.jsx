import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, ChevronRight, Minus, Plus, Share2, Check, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Find product by slug
  const product = products.find(p => p.slug === slug) || products[0];

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Update selected variant when slug changes
  useEffect(() => {
    if (product && product.variants) {
      setSelectedVariant(product.variants[0]);
      setSelectedImage(product.image);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);
  const oldPrice = Math.round(selectedVariant.price * 1.2);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, quantity);
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  // Related products from same category or fallback
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="bg-brand-cream-200 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-charcoal-700 font-medium mb-6">
          <Link to="/" className="hover:text-brand-maroon-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold-600" />
          <Link to="/shop" className="hover:text-brand-maroon-800">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold-600" />
          <Link to={`/category/${product.category}`} className="hover:text-brand-maroon-800">{product.categoryName}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold-600" />
          <span className="text-brand-maroon-800 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Top Product Section */}
        <div className="bg-brand-cream-100 rounded-3xl p-6 sm:p-10 border border-brand-cream-300 shadow-warm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT: IMAGE GALLERY */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-brand-cream-200 border border-brand-cream-300 shadow-md">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/categories/pickels.webp';
                  }}
                />

                {product.bestseller && (
                  <span className="absolute top-4 left-4 bg-brand-maroon-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Bestseller
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all shadow-md ${
                    isWishlisted
                      ? 'bg-brand-maroon-800 text-white'
                      : 'bg-white/80 text-brand-charcoal-900 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === img ? 'border-brand-maroon-800 scale-105 shadow-sm' : 'border-brand-cream-300 opacity-70'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: PRODUCT INFO & VARIANT SELECTOR */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold-600 bg-brand-gold-100 px-3 py-1 rounded-full border border-brand-gold-300">
                    {product.categoryName}
                  </span>
                  
                  <button
                    onClick={handleShare}
                    className="text-xs text-brand-charcoal-700 hover:text-brand-maroon-800 flex items-center gap-1 font-semibold"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedNotification ? 'Link Copied!' : 'Share'}</span>
                  </button>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 leading-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-brand-charcoal-900">{product.rating}</span>
                  <span className="text-xs text-brand-charcoal-700">({product.reviewCount || 24} Verified Reviews)</span>
                </div>

                {/* Price Display */}
                <div className="mt-4 p-4 rounded-2xl bg-brand-cream-200/80 border border-brand-cream-300 flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-maroon-900">
                    ₹{selectedVariant.price}
                  </span>
                  <span className="text-base text-brand-charcoal-700/60 line-through">
                    ₹{oldPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md ml-auto">
                    Save ~20% Off
                  </span>
                </div>

                <p className="text-sm text-brand-charcoal-700 leading-relaxed mt-4">
                  {product.shortDescription}
                </p>
              </div>

              {/* DYNAMIC WEIGHT VARIANT SELECTOR */}
              <div className="space-y-4 pt-4 border-t border-brand-cream-300">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-700 mb-2">
                    Select Weight / Pack Size:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.weight}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedVariant.weight === variant.weight
                            ? 'bg-brand-maroon-800 text-white border-brand-maroon-800 font-bold shadow-sm'
                            : 'bg-brand-cream-200 text-brand-charcoal-900 border-brand-cream-400 hover:border-brand-maroon-800'
                        }`}
                      >
                        <span className="block text-sm font-bold">{variant.weight}</span>
                        <span className={`text-xs ${selectedVariant.weight === variant.weight ? 'text-brand-gold-300' : 'text-brand-gold-700 font-semibold'}`}>
                          ₹{variant.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* QUANTITY SELECTOR */}
                <div className="flex items-center gap-4 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-700">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-brand-cream-400 rounded-xl bg-brand-cream-200 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-extrabold text-brand-maroon-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* ACTION BUTTONS: Add to Cart & Buy Now */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="py-3.5 px-6 rounded-xl bg-brand-maroon-800 text-white font-bold text-base hover:bg-brand-maroon-700 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5 text-brand-gold-400" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-3.5 px-6 rounded-xl bg-brand-gold-500 text-brand-maroon-900 font-extrabold text-base hover:bg-brand-gold-400 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-cream-300 text-xs text-brand-charcoal-700 font-medium">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-brand-gold-600 shrink-0" />
                  <span>Free shipping above ₹999</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold-600 shrink-0" />
                  <span>100% Hygienic Guarantee</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* TABBED DETAILS: Description, Ingredients, Storage, Reviews */}
        <div className="bg-brand-cream-100 rounded-3xl p-6 sm:p-10 border border-brand-cream-300 shadow-warm mb-12">
          {/* Tabs header */}
          <div className="flex border-b border-brand-cream-300 overflow-x-auto gap-4 mb-6">
            {[
              { id: 'description', label: 'Description' },
              { id: 'ingredients', label: 'Ingredients' },
              { id: 'storage', label: 'Storage & Shelf Life' },
              { id: 'reviews', label: `Reviews (${product.reviewCount || 24})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm sm:text-base font-bold whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-brand-maroon-800 text-brand-maroon-800'
                    : 'border-transparent text-brand-charcoal-700 hover:text-brand-maroon-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="text-sm text-brand-charcoal-800 leading-relaxed">
            {activeTab === 'description' && (
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-xl text-brand-maroon-900">About {product.name}</h3>
                <p>{product.description}</p>
                <p className="text-xs text-brand-charcoal-700 italic">
                  Note: Prepared in small traditional batches following strict Andhra homemade methods.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-xl text-brand-maroon-900">Pure Ingredients Used</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.ingredients.map((ing, index) => (
                    <li key={index} className="flex items-center gap-2 bg-brand-cream-200 p-2.5 rounded-xl border border-brand-cream-300 font-semibold text-xs">
                      <Check className="w-4 h-4 text-brand-maroon-800 shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-maroon-900">Storage Instructions</h4>
                  <p>{product.storage || "Store in a cool, dry place. Keep container tightly closed."}</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-maroon-900">Shelf Life</h4>
                  <p>{product.shelfLife || "6 Months from date of manufacture."}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-brand-maroon-900">Customer Ratings</h3>
                  <span className="text-xs text-brand-gold-700 font-bold bg-brand-gold-100 px-3 py-1 rounded-full border border-brand-gold-300">
                    ★ {product.rating} / 5.0 Rating
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-brand-cream-200 p-4 rounded-xl border border-brand-cream-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-brand-maroon-900 text-sm">Venkatesh K.</span>
                      <div className="flex text-amber-500"><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/></div>
                    </div>
                    <p className="text-xs text-brand-charcoal-700">"Superb quality! Exactly how my mother makes it at home. Perfect spice level."</p>
                  </div>
                  <div className="bg-brand-cream-200 p-4 rounded-xl border border-brand-cream-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-brand-maroon-900 text-sm">Sita Mahalakshmi</span>
                      <div className="flex text-amber-500"><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/><Star className="w-3.5 h-3.5 fill-current"/></div>
                    </div>
                    <p className="text-xs text-brand-charcoal-700">"Fresh, hygienic packaging and very fast delivery. Loved the authentic aroma!"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-maroon-900">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;
