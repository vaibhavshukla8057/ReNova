import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react'; // Loading icon ke liye

// Order data ka structure
interface Order {
  _id: string;
  item: string;
  condition: string;
  quantity: number;
  status: string;
  createdAt: string;
}

export default function OrdersPage() {
  // 1. States aur Hooks sabse upar
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth(); // Auth context se login token nikalein

  // 2. Data fetch karne ke liye useEffect
  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch('http://localhost:8080/api/requests/my-requests', {
          headers: {
            'Authorization': `Bearer ${token}`, // Token ko request ke saath bhejein
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]); // Yeh effect tabhi chalega jab token milega

  // 3. Loading state ke liye conditional return
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // 4. Final JSX
  return (
    <div className="container mx-auto py-10 min-h-[60vh]">
      <h1 className="text-4xl font-bold">My Orders</h1>
      <p className="mt-2 text-muted-foreground">
        A list of your past pickup requests and their status.
      </p>
      <div className="mt-8 space-y-4">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order._id} className="border bg-card p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold capitalize">{order.item}</h2>
                <span className={`font-medium text-xs px-3 py-1 rounded-full ${
                  order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'Assigned' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-muted-foreground">Condition: {order.condition}</p>
              <p className="text-muted-foreground">Quantity: {order.quantity}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Requested on: {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <div className="mt-8 border-dashed border-2 rounded-lg p-12 text-center">
            <p className="text-muted-foreground">You have not made any pickup requests yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

