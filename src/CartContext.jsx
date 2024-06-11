import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {

    // Load cart from local storage when the app initializes
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {

    // Save cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
