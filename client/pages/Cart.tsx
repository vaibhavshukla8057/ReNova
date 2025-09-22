import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CartPage() {
  // Apne custom hook se cart ki poori list nikalein
  const { cart } = useCart();

  // Total price calculate karein
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Agar cart khaali hai to yeh message dikhayein
  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link to="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  // Agar cart mein items hain to unhein dikhayein
  return (
    <div className="container mx-auto py-10 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border p-4 rounded-lg shadow-sm">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ₹{item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="text-lg font-bold mt-2 sm:mt-0">Total: ₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t text-right">
        <h2 className="text-2xl font-bold">Grand Total: ₹{totalPrice}</h2>
        <Button asChild size="lg" className="mt-4">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}