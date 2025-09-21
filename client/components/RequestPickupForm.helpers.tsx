import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Battery } from "lucide-react";

export function itemRate(item: string): number {
  const rates: Record<string, number> = {
    mobile:  1200,
    tablet: 1500,
    laptop: 2000,
    desktop: 5000,
    monitor: 1800,
    printer: 1400,
    router: 300,
    battery: 200,
    inverter: 500,
    charger: 200,
    tv: 250,
    console: 220,
    audio: 140,
    camera: 160,
    appliance: 150,
    others: 8000,
  };
  return rates[item] ?? 0;
}

export function QuantitySlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-4">
      <Slider value={[value]} min={1} max={100} step={1} onValueChange={(v) => onChange(v[0] ?? 1)} className="flex-1" />
      <div className="w-10 text-sm tabular-nums text-right">{value}</div>
    </div>
  );
}

export function PayoutEstimate({ item, quantity }: { item: string; quantity: number }) {
  const rate = itemRate(item);
  const estimate = rate * quantity;
  return (
    <div className="grid gap-3 rounded-md border bg-secondary/40 p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Estimated payout</span>
        <span className="font-semibold">₹ {estimate.toLocaleString()}</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label>Preferred payout</Label>
          <Select defaultValue="upi">
            <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="upi">UPI</SelectItem>
              <SelectItem value="bank">Bank transfer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Payout ID</Label>
          <Input placeholder="UPI ID or account number" />
        </div>
      </div>
    </div>
  );
}
