


// KADAM 1: Zaroori cheezein import karein
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// KADAM 2: products array mein id ko string ("p1") se number (1) karein
const products = [
  { id: 1, name: "Mobile Battery (OEM Grade)", category: "Mobile Components", price: 799, img: "https://images.pexels.com/photos/1028674/pexels-photo-1028674.jpeg" },
  { id: 2, name: "Laptop RAM 8GB DDR4", category: "Computer Parts", price: 1199, img: "https://images.pexels.com/photos/33307581/pexels-photo-33307581.jpeg" },
  { id: 3, name: "SSD 256GB (Refurb)", category: "Computer Parts", price: 900, img: "https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg" },
  { id: 4, name: "USB‑C Fast Charger", category: "Mobile Components", price: 299, img: "https://images.pexels.com/photos/5208826/pexels-photo-5208826.jpeg" },
  { id: 5, name: "Dual‑Band Wi‑Fi Router", category: "Networking", price: 999, img: "https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg" },
  { id: 6, name: '24" Monitor Grade A', category: "TV Components", price: 5499, img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" },
  { id: 7, name: "GTX 1060 6GB (Refurb)", category: "Gaming Hardware", price: 8999, img: "https://images.pexels.com/photos/4581903/pexels-photo-4581903.jpeg" },
  { id: 8, name: "Bluetooth Speaker", category: "Audio Equipment", price: 1499, img: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg" },
];

export default function Shop() {
  // KADAM 3: useCart hook ka istemaal karein
  const { addToCart } = useCart();

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-secondary/30 to-background">
      <section className="container mx-auto py-16">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Refurbished Components</h1>
          <p className="text-muted-foreground">High‑quality refurbished electronic parts at honest Indian prices.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <Card key={p.id} className="flex flex-col overflow-hidden">
              <div className="aspect-video w-full bg-secondary/40">
                <img src={p.img} alt={p.name} className="h-full w-full object-contain p-6" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 text-base">{p.name}</CardTitle>
                <div className="text-xs text-muted-foreground">{p.category}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-lg font-semibold">{INR.format(p.price)}</div>
              </CardContent>
              {/* CardFooter ko update karein */}
              <CardFooter className="mt-auto flex gap-2">
                {/* KADAM 4: "Add to Cart" button aur uska logic add karein */}
                <Button 
                  className="w-full" 
                  variant="default" 
                  onClick={() => {
                    addToCart(p);
                    toast.success(`${p.name} added to cart!`);
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/checkout?name=${encodeURIComponent(p.name)}&category=${encodeURIComponent(p.category)}&price=${encodeURIComponent(String(p.price))}&img=${encodeURIComponent(p.img)}`}>
                    Buy Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}