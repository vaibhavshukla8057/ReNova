import { useContext } from 'react';
import { CartContext } from '@/context/CartContext'; // CartContext ko import karein

// Custom hook ab is file mein hai
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};