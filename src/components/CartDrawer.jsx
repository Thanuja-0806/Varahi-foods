import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    amountForFreeShipping,
    freeShippingThreshold,
    shippingFee,
    grandTotal
  } = useCart();

  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-cream-100 shadow-2xl flex flex-col border-l border-brand-cream-300">
          {/* Header */}
          <div className="p-5 bg-brand-maroon-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-gold-400" />
              <h2 className="font-serif font-bold text-xl tracking-wide">Your Shopping Bag</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-brand-cream-200 hover:text-white hover:bg-brand-maroon-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-brand-cream-200 p-4 border-b border-brand-cream-300">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal-900 mb-1.5">
              <Truck className="w-4 h-4 text-brand-gold-600" />
              {amountForFreeShipping > 0 ? (
                <span>Add <strong className="text-brand-maroon-800 font-extrabold">₹{amountForFreeShipping}</strong> more to unlock FREE Shipping!</span>
              ) : (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-brand-gold-500 inline" /> You unlocked FREE Shipping!
                </span>
              )}
            </div>
            <div className="w-full bg-brand-cream-300 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  amountForFreeShipping === 0 ? 'bg-emerald-600' : 'bg-brand-gold-500'
                }`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-20 h-20 rounded-full bg-brand-cream-300 flex items-center justify-center mx-auto mb-4 text-brand-maroon-800">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-maroon-900 mb-1">Your bag is empty</h3>
                <p className="text-xs text-brand-charcoal-700 mb-6 max-w-xs mx-auto">
                  Explore our authentic Andhra pickles, handmade sweets, crunchy snacks, and aromatic podis!
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 rounded-full bg-brand-maroon-800 text-white font-semibold text-sm hover:bg-brand-maroon-700 transition-colors shadow-sm"
                >
                  Explore Shop
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.variant.weight}-${index}`}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-brand-cream-300 shadow-xs relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-brand-cream-300 shrink-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/categories/pickels.webp';
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif font-bold text-base text-brand-maroon-900 truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant.weight)}
                          className="text-brand-charcoal-700/50 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs font-semibold text-brand-gold-700 bg-brand-gold-100 px-2 py-0.5 rounded-md inline-block mt-0.5">
                        Weight: {item.variant.weight}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-cream-400 rounded-lg bg-brand-cream-100">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant.weight, item.quantity - 1)}
                          className="p-1 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-brand-maroon-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant.weight, item.quantity + 1)}
                          className="p-1 text-brand-charcoal-800 hover:bg-brand-cream-300 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-bold text-base text-brand-maroon-900">
                        ₹{item.variant.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-brand-cream-300 space-y-3 shadow-lg">
              <div className="space-y-1.5 text-xs text-brand-charcoal-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-sm text-brand-maroon-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-brand-maroon-900 pt-2 border-t border-brand-cream-200">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full py-3.5 px-4 rounded-xl bg-brand-maroon-800 text-white font-bold text-base hover:bg-brand-maroon-700 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex justify-between items-center pt-1">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/cart');
                  }}
                  className="text-xs text-brand-maroon-800 hover:underline font-semibold"
                >
                  View Full Cart Page
                </button>
                <span className="text-[10px] text-brand-charcoal-700 bg-brand-cream-200 px-2 py-0.5 rounded">
                  Demo Payment Mode
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
