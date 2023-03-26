import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeCartItem = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeCartItem, clearCart, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
