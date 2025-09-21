import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function Checkout() {
  const [params] = useSearchParams();
  const name = params.get("name") ?? "Product";
  const category = params.get("category") ?? "";
  const price = Number(params.get("price") ?? 0);
  const img = params.get("img") ?? "/placeholder.svg";

  const [qty, setQty] = useState(1);
  const [pay, setPay] = useState("upi");

  const total = useMemo(() => Math.max(1, qty) * price, [qty, price]);

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast.success("Order placed successfully");
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-secondary/30 to-background">
      <section className="container mx-auto py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full bg-secondary/40">
              <img src={img} alt={name} className="h-full w-full object-contain p-6" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{name}</CardTitle>
              <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{INR.format(price)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkout</CardTitle>
              <CardDescription>Enter your details to complete the purchase.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit} className="grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Full name</Label>
                    <Input id="fullName" name="fullName" placeholder="Your full name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+91 xxxxxxxxxx" required />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="qty">Quantity</Label>
                    <Input id="qty" type="number" min={1} value={qty} onChange={(e)=> setQty(Math.max(1, Number(e.target.value)))} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Delivery address</Label>
                  <Textarea id="address" name="address" placeholder="House, street, area, city, pincode" rows={4} required />
                </div>
                <div className="grid gap-2 sm:grid-cols-2 items-end">
                  <div className="grid gap-2">
                    <Label>Payment method</Label>
                    <Select value={pay} onValueChange={setPay}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                        <SelectItem value="bank">Bank transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {pay === "upi" && (
                    <div className="grid gap-2">
                      <Label htmlFor="upi">UPI ID</Label>
                      <Input id="upi" name="upi" placeholder="your@upi" required />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between rounded-md border bg-secondary/40 p-3 text-sm">
                  <span>Order total</span>
                  <span className="font-semibold">{INR.format(total)}</span>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="min-w-40">Place Order</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
