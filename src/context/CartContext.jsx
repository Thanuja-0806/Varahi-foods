import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('varahi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('varahi_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product, selectedVariant, quantity = 1) => {
    const variantToUse = selectedVariant || (product.variants && product.variants[0]);
    if (!variantToUse) return;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant.weight === variantToUse.weight
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            slug: product.slug,
            name: product.name,
            image: product.image,
            categoryName: product.categoryName,
            variant: variantToUse,
            quantity
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${variantToUse.weight}) to Cart`);
  };

  const removeFromCart = (productId, variantWeight) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant.weight === variantWeight)));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, variantWeight, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId, variantWeight);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.variant.weight === variantWeight
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.variant.price * item.quantity), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 999;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 70;
  const grandTotal = subtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        totalItems,
        freeShippingThreshold,
        amountForFreeShipping,
        shippingFee,
        grandTotal,
        notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
