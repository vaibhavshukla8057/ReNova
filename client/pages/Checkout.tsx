




// import { useMemo, useState } from "react";
// import { useCart } from "@/hooks/useCart"; // <-- Isse import karein
// import { useSearchParams, useNavigate } from "react-router-dom";

// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Separator } from "@/components/ui/separator";
// import { Lock, MapPin, Loader2 } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";
// import {  type CartItem } from "@/hooks/useCart";



// // `Product` aur `CartItem` dono ko export karein
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// export interface CartItem extends Product {
//   quantity: number;
// }



// interface CheckoutItem {
//   id: number | string;
//   name: string;
//   price: number;
//   quantity: number;
//   img?: string;
//   category?: string;
// }

// const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// // Thank You Animation Component
// const ThankYouAnimation = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   const circleVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: (i: number) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8,
//         ease: "easeOut",
//         y: {
//           repeat: Infinity,
//           repeatType: "reverse",
//           duration: 3 + Math.random() * 2,
//           ease: "easeInOut",
//         },
//       },
//     }),
//   };

//   const colors = ["bg-green-300", "bg-cyan-300", "bg-yellow-300", "bg-rose-300"];
//   const sizes = ["h-4 w-4", "h-6 w-6", "h-5 w-5", "h-7 w-7"];

//   return (
//     <div className="mt-20 text-center relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 min-h-[300px] shadow-lg">
//       <motion.div
//         className="absolute inset-0"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className={`absolute rounded-full ${colors[i % colors.length]} ${sizes[i % sizes.length]}`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.5,
//               filter: `blur(${Math.random() * 2}px)`
//             }}
//             variants={circleVariants}
//             custom={i}
//           />
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//         className="relative z-10 flex flex-col items-center justify-center h-full"
//       >
//         <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Thank You!</h2>
//         <p className="text-xl text-muted-foreground font-semibold">For Your Interest in ReNova</p>
//         <p className="mt-6 text-lg text-gray-700">
//           We appreciate your feedback. You can email us your review at
//           <br />
//           <a href="mailto:vaibhavshukla805737@gmail.com" className="font-bold text-primary underline-offset-4 hover:text-primary/80 transition-colors">
//             vaibhavshukla805737@gmail.com
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default function Checkout() {
//   const [params] = useSearchParams();
//   const navigate = useNavigate();
//   const { token } = useAuth();
//   const { cart } = useCart();

//    const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);

//   const name = params.get("name") ?? "Product";
//   const price = Number(params.get("price") ?? 0);

//   const [qty, setQty] = useState(1);
//   const [pay, setPay] = useState("upi");
//   const [address, setAddress] = useState("");
//   const [isFetchingAddress, setIsFetchingAddress] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//    useEffect(() => {
//     const buyNowName = params.get("name");
//     const buyNowPrice = params.get("price");

//     if (buyNowName && buyNowPrice) {
//       setCheckoutItems([{
//         id: 'buy-now-' + Date.now(),
//         name: buyNowName,
//         price: Number(buyNowPrice),
//         quantity: 1, // Buy Now mein quantity hamesha 1 hoti hai
//         img: params.get("img") || undefined,
//         category: params.get("category") || undefined,
//       }]);
//     } else {
//       // Warna yeh "Proceed from Cart" flow hai
//       setCheckoutItems(cart);
//     }}, [params, cart]);


  

//    const total = useMemo(() => 
//   checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
// [checkoutItems]);

//   const detectMyLocation = async () => {
//     if (!navigator.geolocation) {
//       toast.error("Geolocation is not supported by your browser.");
//       return;
//     }
//     setIsFetchingAddress(true);
//     toast.info("Fetching your location...");
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         try {
//           const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
//           const data = await response.json();
//           if (data && data.display_name) {
//             setAddress(data.display_name);
//             toast.success("Location detected successfully!");
//           } else {
//             toast.error("Could not find a valid address.");
//           }
//         } catch (error) {
//           toast.error("Failed to fetch address.");
//         } finally {
//           setIsFetchingAddress(false);
//         }
//       },
//       (error) => {
//         toast.error("Unable to retrieve your location.");
//         setIsFetchingAddress(false);
//       }
//     );
//   };

//   const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);
//     const shippingInfo = {
//         fullName: formData.get('fullName'),
//         phone: formData.get('phone'),
//         email: formData.get('email'),
//         address: formData.get('address'),
//     };

//     const orderData = {
//         productName: name,
//         quantity: qty,
//         totalPrice: total,
//         shippingInfo,
//         paymentMethod: pay,
//     };

//     try {
//         const response = await fetch('http://localhost:8080/api/orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify(orderData)
//         });

//         if (!response.ok) {
//             throw new Error('Failed to place order. Please try again.');
//         }

//         toast.success("Order placed successfully!");
//         navigate('/orders');

//     } catch (error: any) {
//         toast.error(error.message);
//     } finally {
//         setIsSubmitting(false);
//     }
//   };

//  return (
//     <div className="min-h-[60vh] bg-gradient-to-b from-green-50 to-background">
//       <motion.section 
//         className="container mx-auto py-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold tracking-tight">Complete Your Order</h1>
//         </div>

//         {/* 2-COLUMN LAYOUT */}
//         <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          
//           {/* Left Column: Shipping Details */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">1. Shipping Details</h2>
//             <Card className="shadow-lg">
//               <CardContent className="pt-6">
//                 <form id="checkout-form" onSubmit={submit} className="space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="grid gap-1.5"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" placeholder="Your full name" required /></div>
//                     <div className="grid gap-1.5"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" placeholder="+91 xxxxxxxxxx" required /></div>
//                   </div>
//                   <div className="grid gap-1.5"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="your.email@example.com" required /></div>
//                   <div className="grid gap-1.5"><Label htmlFor="address">Full address</Label>
//                     <div className="flex items-center gap-2">
//                         <Textarea id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House, street, city, pincode" rows={3} required />
//                         <Button type="button" variant="outline" size="icon" onClick={detectMyLocation} disabled={isFetchingAddress} aria-label="Detect Location">
//                             {isFetchingAddress ? <Loader2 className="h-4 w-4 animate-spin"/> : <MapPin className="h-4 w-4"/>}
//                         </Button>
//                     </div>
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column: Order Summary */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">2. Order Summary</h2>
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle>Your Items</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
//                   {checkoutItems.length > 0 ? (
//                     checkoutItems.map(item => (
//                       <div key={item.id} className="flex justify-between items-center text-sm">
//                         <div className="flex items-center gap-3">
//                           <img src={item.img} alt={item.name} className="h-10 w-10 object-contain rounded-md border bg-white" />
//                           <div>
//                             <p className="font-medium line-clamp-1">{item.name}</p>
//                             <p className="text-muted-foreground">Qty: {item.quantity}</p>
//                           </div>
//                         </div>
//                         <p>{INR.format(item.price * item.quantity)}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-muted-foreground text-center py-4">Your cart is empty.</p>
//                   )}
//                 </div>
//                 <Separator />
//                 <div className="grid gap-1.5"><Label>Payment method</Label><Select name="paymentMethod" form="checkout-form" value={pay} onValueChange={setPay}><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem value="upi">UPI</SelectItem><SelectItem value="cod">Cash on Delivery</SelectItem></SelectContent></Select></div>
//                 {pay === "upi" && (
//                     <div className="grid gap-1.5"><Label htmlFor="upi">UPI ID</Label><Input id="upi" form="checkout-form" name="upi" placeholder="your-id@okhdfcbank" required /></div>
//                 )}
//                 <div className="flex items-center justify-between rounded-lg border bg-muted p-4 mt-4">
//                   <span className="text-lg font-medium">Order Total</span>
//                   <span className="text-2xl font-bold">{INR.format(total)}</span>
//                 </div>
//                 <Button
//                   type="submit"
//                   form="checkout-form"
//                   size="lg"
//                   className="w-full gap-2"
//                   disabled={isSubmitting || checkoutItems.length === 0}
//                 >
//                   {isSubmitting && <Loader2 className="h-4 w-4 animate-spin"/>}
//                   <Lock className="h-4 w-4" />
//                   Place Order Securely
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

// function useEffect(arg0: () => void, arg1: (URLSearchParams | CartItem[])[]) {
//   throw new Error("Function not implemented.");
// }













import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Lock, MapPin, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/hooks/useCart";

const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// Ek common type banayein jo Buy Now aur Cart, dono ke items ke liye kaam kare
interface CheckoutItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  img?: string;
  category?: string;
}

// Thank You Animation Component
const ThankYouAnimation = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      };
    
      const circleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i: number) => ({
          opacity: 1,
          scale: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: "easeOut",
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3 + Math.random() * 2,
              ease: "easeInOut",
            },
          },
        }),
      };

  const colors = ["bg-green-300", "bg-cyan-300", "bg-yellow-300", "bg-rose-300"];
  const sizes = ["h-4 w-4", "h-6 w-6", "h-5 w-5", "h-7 w-7"];

  return (
    <div className="mt-20 text-center relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 min-h-[300px] shadow-lg">
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${colors[i % colors.length]} ${sizes[i % sizes.length]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5,
              filter: `blur(${Math.random() * 2}px)`
            }}
            
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Thank You!</h2>
        <p className="text-xl text-muted-foreground font-semibold">For Your Interest in ReNova</p>
        <p className="mt-6 text-lg text-gray-700">
          We appreciate your feedback. You can email us your review at
          <br />
          <a href="mailto:vaibhavshukla805737@gmail.com" className="font-bold text-primary underline-offset-4 hover:text-primary/80 transition-colors">
            vaibhavshukla805737@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default function Checkout() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { cart, clearCart } = useCart();
  const [params] = useSearchParams();

  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [pay, setPay] = useState("upi");
  const [address, setAddress] = useState("");
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const buyNowName = params.get("name");
    const buyNowPrice = params.get("price");

    if (buyNowName && buyNowPrice) {
      setCheckoutItems([{
        id: 'buy-now-' + Date.now(),
        name: buyNowName,
        price: Number(buyNowPrice),
        quantity: 1,
        img: params.get("img") || "/placeholder.svg",
        category: params.get("category") || "",
      }]);
    } else {
      setCheckoutItems(cart);
    }
  }, [params, cart]);

  const total = useMemo(() => 
    checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  [checkoutItems]);

  const detectMyLocation = async () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    setIsFetchingAddress(true);
    toast.info("Fetching your location...");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          if (data && data.display_name) {
            setAddress(data.display_name);
            toast.success("Location detected successfully!");
          } else {
            toast.error("Could not find a valid address.");
          }
        } catch (error) {
          toast.error("Failed to fetch address.");
        } finally {
          setIsFetchingAddress(false);
        }
      },
      (error) => {
        toast.error("Unable to retrieve your location.");
        setIsFetchingAddress(false);
      }
    );
  };

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const shippingInfo = {
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
    };

    const orderData = {
        items: checkoutItems.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })),
        totalPrice: total,
        shippingInfo,
        paymentMethod: pay,
    };

    try {
        const response = await fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to place order. Please try again.');
        }

        toast.success("Order placed successfully!");
        if (!params.has("name")) { // Agar "Buy Now" nahi hai, tabhi cart clear karein
            clearCart();
        }
        navigate('/orders');

    } catch (error: any) {
        toast.error(error.message);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-green-50 to-background">
      <motion.section 
        className="container mx-auto py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold tracking-tight">Complete Your Order</h1>
                <p className="mt-2 text-muted-foreground">Just a few more steps to go!</p>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Shipping & Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <form id="checkout-form" onSubmit={submit} className="space-y-6">
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">1. Contact Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-1.5"><Label htmlFor="fullName">Full name</Label><Input id="fullName" name="fullName" placeholder="Your full name" required /></div>
                      <div className="grid gap-1.5"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" placeholder="+91 xxxxxxxxxx" required /></div>
                    </div>
                     <div className="grid gap-1.5 mt-4"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="your.email@example.com" required /></div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2. Delivery Address</h3>
                    <div className="grid gap-1.5"><Label htmlFor="address">Full address</Label>
                      <div className="flex items-center gap-2">
                          <Textarea id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="House, street, city, pincode" rows={3} required />
                          <Button type="button" variant="outline" size="icon" onClick={detectMyLocation} disabled={isFetchingAddress} aria-label="Detect Location">
                              {isFetchingAddress ? <Loader2 className="h-4 w-4 animate-spin"/> : <MapPin className="h-4 w-4"/>}
                          </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">3. Order Summary & Payment</h3>
                     <div className="space-y-3 max-h-48 overflow-y-auto pr-2 mb-4 border rounded-md p-3">
                        {checkoutItems.length > 0 ? (
                            checkoutItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-3">
                                <img src={item.img} alt={item.name} className="h-10 w-10 object-contain rounded-md border bg-white" />
                                <div>
                                    <p className="font-medium line-clamp-1">{item.name}</p>
                                    <p className="text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                </div>
                                <p>{INR.format(item.price * item.quantity)}</p>
                            </div>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-center py-4">Nothing to checkout.</p>
                        )}
                    </div>
                    <div className="grid gap-1.5"><Label>Payment method</Label><Select name="paymentMethod" value={pay} onValueChange={setPay}><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem value="upi">UPI</SelectItem><SelectItem value="cod">Cash on Delivery</SelectItem></SelectContent></Select></div>
                    {pay === "upi" && (
                        <div className="grid gap-1.5 mt-4"><Label htmlFor="upi">UPI ID</Label><Input id="upi" name="upi" placeholder="your-id@okhdfcbank" required /></div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between rounded-lg border bg-muted p-4 mt-6">
                    <span className="text-lg font-medium">Order Total</span>
                    <span className="text-2xl font-bold">{INR.format(total)}</span>
                  </div>
                  <Button
                    type="submit"
                    form="checkout-form"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting || checkoutItems.length === 0}
                  >
                    {isSubmitting && <Loader2 className="h-4 w-4 animate-spin"/>}
                    <Lock className="h-4 w-4" />
                    Place Order Securely
                  </Button>
                </form>
              </CardContent>
            </Card>

            <ThankYouAnimation /> 
        </div>
      </motion.section>
    </div>
  );
}




// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Separator } from "@/components/ui/separator";
// import { Lock, MapPin, Loader2 } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";
// import { useCart } from "@/hooks/useCart";

// const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// interface CheckoutItem {
//   id: number | string; name: string; price: number; quantity: number; img?: string; category?: string;
// }

// // Thank You Animation Component
// const ThankYouAnimation = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   // --- BADLAAV YAHAN HAI ---
//   // Transition ko variant se hata diya gaya hai
//   const circleVariants = {
//     hidden: { opacity: 0, scale: 0, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//   };

//   const colors = ["bg-green-300", "bg-cyan-300", "bg-yellow-300", "bg-rose-300"];
//   const sizes = ["h-4 w-4", "h-6 w-6", "h-5 w-5", "h-7 w-7"];

//   return (
//     <div className="mt-20 text-center relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 min-h-[300px] shadow-lg">
//       <motion.div
//         className="absolute inset-0"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className={`absolute rounded-full ${colors[i % colors.length]} ${sizes[i % sizes.length]}`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.5,
//               filter: `blur(${Math.random() * 2}px)`
//             }}
//             variants={circleVariants}
//             custom={i}
//             // --- BADLAAV YAHAN HAI ---
//             // Transition ko alag se yahaan prop mein daala gaya hai
//             transition={{
//               delay: i * 0.1,
//               duration: 0.8,
//               ease: "easeOut",
//               y: {
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 duration: 3 + Math.random() * 2,
//                 ease: "easeInOut",
//               },
//             }}
//           />
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//         className="relative z-10 flex flex-col items-center justify-center h-full"
//       >
//         <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Thank You!</h2>
//         <p className="text-xl text-muted-foreground font-semibold">For Your Interest in ReNova</p>
//         <p className="mt-6 text-lg text-gray-700">
//           We appreciate your feedback. You can email us your review at
//           <br />
//           <a href="mailto:vaibhavshukla805737@gmail.com" className="font-bold text-primary underline-offset-4 hover:text-primary/80 transition-colors">
//             vaibhavshukla805737@gmail.com
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default function Checkout() {
//   // ... Baaki ka poora Checkout component waise ka waisa hi rahega ...
//   const navigate = useNavigate();
//   const { token } = useAuth();
//   const { cart, clearCart } = useCart();
//   const [params] = useSearchParams();

//   const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
//   const [pay, setPay] = useState("upi");
//   const [address, setAddress] = useState("");
//   const [isFetchingAddress, setIsFetchingAddress] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const buyNowName = params.get("name");
//     const buyNowPrice = params.get("price");

//     if (buyNowName && buyNowPrice) {
//       setCheckoutItems([{
//         id: 'buy-now-' + Date.now(),
//         name: buyNowName,
//         price: Number(buyNowPrice),
//         quantity: 1,
//         img: params.get("img") || "/placeholder.svg",
//         category: params.get("category") || "",
//       }]);
//     } else {
//       setCheckoutItems(cart);
//     }
//   }, [params, cart]);

//   const total = useMemo(() => 
//     checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
//   [checkoutItems]);

//   const detectMyLocation = async () => { /* ... */ };
//   const submit: React.FormEventHandler<HTMLFormElement> = async (e) => { /* ... */ };

//   return (
//     <div className="min-h-[60vh] bg-gradient-to-b from-green-50 to-background">
//       <motion.section 
//         className="container mx-auto py-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className="mx-auto max-w-2xl">
//             <div className="text-center mb-10">
//                 <h1 className="text-4xl font-bold tracking-tight">Complete Your Order</h1>
//             </div>
//             <Card className="shadow-lg">
//               <CardHeader><CardTitle>Shipping & Payment</CardTitle></CardHeader>
//               <CardContent>
//                 <form id="checkout-form" onSubmit={submit} className="space-y-6">
//                   {/* ... saare form fields ... */}
//                 </form>
//               </CardContent>
//             </Card>
//             <ThankYouAnimation /> 
//         </div>
//       </motion.section>
//     </div>
//   );
// }