



import React, { createContext, useState, ReactNode } from 'react';

// Interfaces waise hi rahenge
export interface Product {
  id: number;
  name: string;
  price: number;
}
export interface CartItem extends Product {
  quantity: number;
}
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  itemCount: number;
  clearCart: () => void; // clearCart function ko bhi add kar lein
}

// Yahaan 'export' add karein
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => { /* ... addToCart ka logic ... */ };
  
  // Order ke baad cart khaali karne ke liye
  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};