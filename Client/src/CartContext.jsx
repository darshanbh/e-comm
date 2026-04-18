import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.findIndex(p => p.id === product.id);
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing] = { ...updated[existing], qty: (updated[existing].qty || 1) + 1 };
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, qty) => {
    if (qty < 1) {
      removeFromCart(index);
      return;
    }
    setCartItems(prev => prev.map((item, i) => i === index ? { ...item, qty } : item));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}