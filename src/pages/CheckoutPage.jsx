import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ShoppingBag, ArrowRight, Lock, Sparkles, Building2, MapPin, User, Mail, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, subtotal, shippingFee, grandTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Srinivas Reddy',
    email: 'srinivas.demo@example.com',
    phone: '+91 98765 43210',
    address: 'Plot No. 42, Green Meadows Colony',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    pincode: '520001'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate placing demo order
    setTimeout(() => {
      const generatedOrderId = `VARAHI-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderSummary = {
        orderId: generatedOrderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        items: [...cartItems],
        total: grandTotal,
        customer: formData
      };

      setOrderSuccess(orderSummary);
      setIsSubmitting(false);
      clearCart();
    }, 1200);
  };

  if (orderSuccess) {
    return (
      <div className="bg-brand-cream-200 min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="max-w-xl w-full bg-brand-cream-100 rounded-3xl p-8 sm:p-10 border border-brand-cream-300 shadow-2xl text-center space-y-6 animate-fade-in relative">
          
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div>
            <span className="inline-block bg-brand-gold-100 text-brand-gold-800 border border-brand-gold-300 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              DEMO ORDER SIMULATION SUCCESSFUL
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900">
              Thank You For Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-brand-charcoal-700 mt-2">
              Your demo order has been placed successfully.
            </p>
          </div>

          <div className="bg-brand-cream-200 p-5 rounded-2xl border border-brand-cream-300 text-left space-y-3">
            <div className="flex justify-between items-center text-xs pb-2 border-b border-brand-cream-300">
              <span className="text-brand-charcoal-700 font-medium">Demo Order ID:</span>
              <strong className="text-brand-maroon-900 font-extrabold text-sm">{orderSuccess.orderId}</strong>
            </div>
            <div className="flex justify-between items-center text-xs pb-2 border-b border-brand-cream-300">
              <span className="text-brand-charcoal-700 font-medium">Customer Name:</span>
              <strong className="text-brand-charcoal-900">{orderSuccess.customer.name}</strong>
            </div>
            <div className="flex justify-between items-center text-xs pb-2 border-b border-brand-cream-300">
              <span className="text-brand-charcoal-700 font-medium">Delivery Address:</span>
              <span className="text-brand-charcoal-900 font-medium text-right max-w-[240px] truncate">
                {orderSuccess.customer.address}, {orderSuccess.customer.city}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1">
              <span className="text-brand-charcoal-700 font-bold">Total Amount Paid (Demo):</span>
              <strong className="text-brand-maroon-900 font-extrabold text-base">₹{orderSuccess.total}</strong>
            </div>
          </div>

          <div className="p-3 bg-brand-maroon-50 rounded-xl border border-brand-maroon-200 text-xs text-brand-maroon-900 font-medium text-left">
            <Sparkles className="w-4 h-4 text-brand-gold-600 inline mr-1" />
            Note: This order was simulated for presentation purposes. In production, this trigger will connect to Razorpay payment gateway & database order logs.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/shop"
              className="w-full py-3.5 rounded-xl bg-brand-maroon-800 text-white font-bold text-sm hover:bg-brand-maroon-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Back to Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-brand-cream-200 min-h-screen py-16 px-4 text-center">
        <h2 className="font-serif text-2xl font-bold text-brand-maroon-900 mb-2">No items in cart</h2>
        <p className="text-xs text-brand-charcoal-700 mb-4">Please add items to your cart before proceeding to checkout.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-brand-maroon-800 text-white font-bold text-xs">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream-200 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 border-b border-brand-cream-300 pb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold-600">
            DEMO CHECKOUT PROCESS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-maroon-900 mt-1">
            Shipping & Payment Details
          </h1>
          <p className="text-xs text-brand-charcoal-700 mt-1">
            Fill in demo customer info to simulate the full order placement experience.
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SHIPPING ADDRESS & PAYMENT FORM */}
          <div className="lg:col-span-8 bg-brand-cream-100 rounded-3xl p-6 sm:p-8 border border-brand-cream-300 shadow-warm space-y-6">
            
            {/* Section 1: Customer Details */}
            <div>
              <h2 className="font-serif font-bold text-xl text-brand-maroon-900 mb-4 flex items-center gap-2 border-b border-brand-cream-300 pb-2">
                <User className="w-5 h-5 text-brand-gold-600" />
                <span>1. Contact Information</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Delivery Address */}
            <div>
              <h2 className="font-serif font-bold text-xl text-brand-maroon-900 mb-4 flex items-center gap-2 border-b border-brand-cream-300 pb-2">
                <MapPin className="w-5 h-5 text-brand-gold-600" />
                <span>2. Delivery Address</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                <div className="sm:col-span-2">
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Street Address / House No.</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Payment Method */}
            <div>
              <h2 className="font-serif font-bold text-xl text-brand-maroon-900 mb-4 flex items-center gap-2 border-b border-brand-cream-300 pb-2">
                <Lock className="w-5 h-5 text-brand-gold-600" />
                <span>3. Select Payment Method</span>
              </h2>

              <div className="p-4 rounded-2xl bg-brand-cream-200 border-2 border-brand-gold-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-4 border-brand-maroon-800 bg-white" />
                  <div>
                    <span className="font-bold text-brand-maroon-900 block text-sm">Demo Payment Mode</span>
                    <span className="text-xs text-brand-charcoal-700">Simulates instant payment verification & order placement</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                  Ready
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: ORDER ITEMS REVIEW */}
          <div className="lg:col-span-4 bg-brand-cream-100 rounded-3xl p-6 border border-brand-cream-300 shadow-warm space-y-6">
            <h2 className="font-serif font-bold text-xl text-brand-maroon-900 border-b border-brand-cream-300 pb-3">
              Summary ({cartItems.length} items)
            </h2>

            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cartItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs pb-2 border-b border-brand-cream-200">
                  <div className="flex items-center gap-2">
                    <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-md border border-brand-cream-300" />
                    <div>
                      <span className="font-bold text-brand-maroon-900 block truncate max-w-[140px]">{item.name}</span>
                      <span className="text-brand-charcoal-700 text-[11px]">{item.variant.weight} × {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-brand-maroon-900">₹{item.variant.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs text-brand-charcoal-800 pt-2 border-t border-brand-cream-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-brand-maroon-900 pt-2 border-t border-brand-cream-300">
                <span>Total Amount</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-brand-maroon-800 text-white font-bold text-base hover:bg-brand-maroon-700 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Demo Order...</span>
              ) : (
                <>
                  <span>Place Demo Order</span>
                  <ArrowRight className="w-5 h-5 text-brand-gold-400" />
                </>
              )}
            </button>

            <div className="text-[11px] text-brand-charcoal-700 text-center italic">
              * DEMO MODE — No real credit card or bank details are required.
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default CheckoutPage;
