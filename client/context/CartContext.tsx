import React, { createContext, useState, useContext, ReactNode } from 'react';

// Product aur Cart Item ke types define karein
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

// Context ke type define karein
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component banayein
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook banayein
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};