import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-brand-cream-200 min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-brand-gold-600 font-extrabold">
            Customer Support & Enquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-maroon-900 mt-1">
            Get in Touch with Varahi Foods
          </h1>
          <p className="text-xs sm:text-sm text-brand-charcoal-700 mt-2">
            Have a question about our products, bulk orders, or festival sweets? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DEMO CONTACT DETAILS & SOCIALS */}
          <div className="lg:col-span-5 bg-brand-maroon-900 text-white rounded-3xl p-8 shadow-2xl border-4 border-brand-gold-500/30 space-y-8">
            <div>
              <span className="text-xs text-brand-gold-400 font-extrabold uppercase tracking-wider block mb-1">
                Demo Contact Information
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                We're Here to Help
              </h2>
              <p className="text-xs text-brand-cream-200/90 mt-1">
                Note: These contact details are placeholders for demo review.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gold-300 font-bold block uppercase tracking-wider">Phone (Demo)</span>
                  <a href="tel:+919000000000" className="text-base font-bold text-white hover:text-brand-gold-400 transition-colors">
                    +91 90000 00000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gold-300 font-bold block uppercase tracking-wider">Email</span>
                  <a href="mailto:hello@varahifoods.com" className="text-base font-bold text-white hover:text-brand-gold-400 transition-colors">
                    hello@varahifoods.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gold-300 font-bold block uppercase tracking-wider">Location</span>
                  <p className="text-base font-bold text-white">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-maroon-800 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-gold-300 font-bold block uppercase tracking-wider">Support Hours</span>
                  <p className="text-xs text-brand-cream-200">
                    Mon - Sat: 9:00 AM - 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK BUTTONS */}
            <div className="pt-4 border-t border-brand-maroon-800 space-y-3">
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-brand-maroon-800 text-brand-gold-300 font-bold text-xs hover:bg-brand-gold-500 hover:text-brand-maroon-900 transition-colors flex items-center justify-center gap-2 border border-brand-gold-500/30"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit Instagram @varahifoods.official</span>
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 bg-brand-cream-100 rounded-3xl p-6 sm:p-10 border border-brand-cream-300 shadow-warm">
            <h2 className="font-serif font-bold text-2xl text-brand-maroon-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-brand-charcoal-700 mb-6">
              Fill in your details below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-900 text-center space-y-2 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="font-serif font-bold text-lg">Thank You!</h3>
                <p className="text-xs">Your demo message has been received successfully. We will contact you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-charcoal-800 font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-charcoal-800 font-bold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-charcoal-800 font-bold mb-1">Your Message / Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you'd like to ask or order..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-brand-cream-200 border border-brand-cream-400 rounded-xl text-brand-charcoal-900 focus:outline-none focus:border-brand-maroon-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-maroon-800 text-white font-bold text-sm hover:bg-brand-maroon-700 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-brand-gold-400" />
                  <span>Send Demo Message</span>
                </button>
              </form>
            )}

            {/* GOOGLE MAPS PLACEHOLDER */}
            <div className="mt-8 pt-6 border-t border-brand-cream-300">
              <span className="text-xs font-bold text-brand-maroon-900 block mb-2">
                Location Map Preview (Placeholder)
              </span>
              <div className="aspect-[16/6] w-full rounded-2xl bg-brand-cream-300 border border-brand-cream-400 flex flex-col items-center justify-center text-center p-4">
                <Globe className="w-8 h-8 text-brand-gold-600 mb-1" />
                <span className="font-serif font-bold text-sm text-brand-maroon-900">Andhra Pradesh, India</span>
                <span className="text-[10px] text-brand-charcoal-700">Google Maps Embed placeholder area</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
