import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Truck, Sparkles, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    amountForFreeShipping,
    freeShippingThreshold,
    shippingFee,
    grandTotal
  } = useCart();

  const navigate = useNavigate();

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  if (cartItems.length === 0) {
    return (
      <div className="bg-brand-cream-200 min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-brand-cream-100 rounded-3xl p-8 text-center border border-brand-cream-300 shadow-warm">
          <div className="w-20 h-20 rounded-full bg-brand-cream-300 text-brand-maroon-800 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl font-extrabold text-brand-maroon-900 mb-2">
            Your Bag is Empty
          </h1>
          <p className="text-xs text-brand-charcoal-700 mb-6 leading-relaxed">
            You haven't added any items to your shopping cart yet. Explore our delicious collection of pickles, sweets, snacks, and podis!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-maroon-800 text-white font-bold text-sm hover:bg-brand-maroon-700 transition-colors shadow-md"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream-200 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-brand-cream-300 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-600">
              Checkout Preparation
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
              Shopping Cart ({cartItems.length} Items)
            </h1>
          </div>

          <button
            onClick={clearCart}
            className="text-xs font-semibold text-brand-charcoal-700 hover:text-red-700 transition-colors self-start sm:self-auto"
          >
            Clear Entire Cart
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-brand-cream-100 p-4 sm:p-5 rounded-2xl border border-brand-cream-300 shadow-xs mb-8">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-charcoal-900 mb-2">
            <Truck className="w-5 h-5 text-brand-gold-600" />
            {amountForFreeShipping > 0 ? (
              <span>Add <strong className="text-brand-maroon-800 font-extrabold text-base">₹{amountForFreeShipping}</strong> more to unlock FREE Shipping across India!</span>
            ) : (
              <span className="text-emerald-700 font-bold flex items-center gap-1 text-base">
                <Sparkles className="w-5 h-5 text-brand-gold-500 inline" /> You have unlocked FREE Shipping!
              </span>
            )}
          </div>
          <div className="w-full bg-brand-cream-300 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                amountForFreeShipping === 0 ? 'bg-emerald-600' : 'bg-brand-gold-500'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: ITEMS LIST */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item, index) => {
              // Find full product details to allow variant switching if desired
              const fullProduct = products.find(p => p.id === item.id);

              return (
                <div
                  key={`${item.id}-${item.variant.weight}-${index}`}
                  className="bg-brand-cream-100 rounded-2xl p-4 sm:p-6 border border-brand-cream-300 shadow-warm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-brand-cream-300 shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/categories/pickels.webp';
                      }}
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-600">
                        {item.categoryName}
                      </span>
                      <Link to={`/product/${item.slug}`}>
                        <h3 className="font-serif font-bold text-lg text-brand-maroon-900 hover:underline">
                          {item.name}
                        </h3>
                      </Link>

                      {/* Variant Selector */}
                      <div className="mt-1 text-xs text-brand-charcoal-700 flex items-center gap-2">
                        <span className="font-semibold bg-brand-gold-100 border border-brand-gold-300 px-2.5 py-0.5 rounded-md text-brand-gold-800">
                          Pack: {item.variant.weight}
                        </span>
                        <span className="font-bold text-brand-maroon-900">
                          ₹{item.variant.price} / item
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Price & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-cream-200">
                    <div className="flex items-center border border-brand-cream-400 rounded-xl bg-brand-cream-200 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant.weight, item.quantity - 1)}
                        className="p-1.5 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-lg transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-extrabold text-brand-maroon-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant.weight, item.quantity + 1)}
                        className="p-1.5 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <span className="font-extrabold text-lg text-brand-maroon-900 block">
                        ₹{item.variant.price * item.quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.variant.weight)}
                      className="p-2 text-brand-charcoal-700/50 hover:text-red-700 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex justify-between items-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-maroon-800 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="lg:col-span-4 bg-brand-cream-100 rounded-2xl p-6 border border-brand-cream-300 shadow-warm space-y-6">
            <h2 className="font-serif font-bold text-xl text-brand-maroon-900 border-b border-brand-cream-300 pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-brand-charcoal-800">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-bold text-brand-maroon-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes (Estimated)</span>
                <span className="text-emerald-700 font-bold">Included</span>
              </div>

              <div className="pt-3 border-t border-brand-cream-300 flex justify-between items-baseline text-lg font-extrabold text-brand-maroon-900">
                <span>Grand Total</span>
                <span className="text-2xl">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 px-6 rounded-xl bg-brand-maroon-800 text-white font-bold text-base hover:bg-brand-maroon-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="bg-brand-cream-200 p-4 rounded-xl border border-brand-cream-300 text-xs text-brand-charcoal-700 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-brand-maroon-900">
                <ShieldCheck className="w-4 h-4 text-brand-gold-600" />
                <span>100% Demo Guarantee</span>
              </div>
              <p className="text-[11px]">
                No real payment gateway is charged. This flow lets you inspect the complete client experience.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CartPage;
