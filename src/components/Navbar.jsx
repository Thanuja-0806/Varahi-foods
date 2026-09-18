import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistItems } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { 
      name: 'Categories', 
      path: '#',
      isDropdown: true,
      subLinks: [
        { name: 'Pickles', path: '/category/pickles' },
        { name: 'Traditional Sweets', path: '/category/sweets' },
        { name: 'Snacks', path: '/category/snacks' },
        { name: 'Powders & Spices', path: '/category/powders' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-brand-cream-100/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'border-brand-cream-400 shadow-md py-3'
            : 'border-brand-cream-300/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-brand-charcoal-900 hover:text-brand-maroon-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-brand-maroon-800 border-2 border-brand-gold-500 flex items-center justify-center text-brand-cream-100 font-serif font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-maroon-900 group-hover:text-brand-maroon-700 transition-colors">
                  VARAHI FOODS
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-gold-600 font-semibold -mt-1">
                  Authentic Taste • Homemade Love
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div 
                    key={link.name} 
                    className="relative group py-2"
                    onMouseEnter={() => setIsCategoryMenuOpen(true)}
                    onMouseLeave={() => setIsCategoryMenuOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1.5 font-medium text-sm text-brand-charcoal-900 hover:text-brand-maroon-800 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-brand-gold-600 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-52 bg-brand-cream-100 border border-brand-cream-300 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2.5 text-sm text-brand-charcoal-800 hover:bg-brand-cream-300 hover:text-brand-maroon-800 transition-colors font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `font-medium text-sm tracking-wide transition-colors relative py-1 ${
                        isActive
                          ? 'text-brand-maroon-800 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-maroon-800 after:rounded-full'
                          : 'text-brand-charcoal-900 hover:text-brand-maroon-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-charcoal-900 hover:text-brand-maroon-800 hover:bg-brand-cream-300/70 rounded-full transition-colors relative"
                aria-label="Search site"
              >
                <Search className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                to="/shop?filter=wishlist"
                className="hidden sm:flex p-2 text-brand-charcoal-900 hover:text-brand-maroon-800 hover:bg-brand-cream-300/70 rounded-full transition-colors relative"
                aria-label="View wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-gold-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="p-2.5 bg-brand-maroon-800 text-white rounded-full hover:bg-brand-maroon-700 transition-all transform hover:scale-105 shadow-sm relative flex items-center justify-center ml-1"
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold-500 text-brand-charcoal-900 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-cream-100 shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-brand-cream-100 border-b border-brand-cream-300 shadow-2xl animate-fade-in z-50 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="space-y-2 pt-1 border-t border-brand-cream-300/60">
                  <div className="text-xs uppercase tracking-wider font-bold text-brand-gold-600 px-2 pt-2">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block text-base font-medium text-brand-charcoal-900 hover:text-brand-maroon-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-1.5 transition-colors ${
                      isActive ? 'text-brand-maroon-800 pl-2 border-l-4 border-brand-maroon-800' : 'text-brand-charcoal-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            ))}

            <div className="pt-4 border-t border-brand-cream-300 flex items-center justify-between">
              <Link
                to="/shop?filter=wishlist"
                className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5 text-brand-maroon-800" />
                Wishlist ({wishlistItems.length})
              </Link>
              <div className="text-xs text-brand-charcoal-700">
                Demo Shopping Mode
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
