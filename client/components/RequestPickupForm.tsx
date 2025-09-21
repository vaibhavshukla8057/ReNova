// import { useEffect, useMemo, useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { Loader2, MapPin, Navigation, Recycle } from "lucide-react";
// import { QuantitySlider, PayoutEstimate } from "./RequestPickupForm.helpers";

// interface Rider { id: string; name: string; lat: number; lng: number; capacityKg: number }

// const RIDERS: Rider[] = [
//   { id: "r1", name: "vidushi singh", lat: 28.6139, lng: 77.2090, capacityKg: 50 },
//   { id: "r2", name: "Rohan tyagi", lat: 28.7041, lng: 77.1025, capacityKg: 80 },
//   { id: "r3", name: "Raunak shivhare", lat: 28.4595, lng: 77.0266, capacityKg: 60 },
//   { id: "r4", name: "himanshu rathore", lat: 28.5355, lng: 77.3910, capacityKg: 40 },
// ];

// function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
//   const R = 6371;
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLon = ((lon2 - lon1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // km
// }

// export default function RequestPickupForm() {
//   const [item, setItem] = useState<string>("");
//   const [quantity, setQuantity] = useState<number>(1);
//   const [address, setAddress] = useState<string>("");
//   const [pickupDate, setPickupDate] = useState<string>("");
//   const [coords, setCoords] = useState<{ lat: number | null; lng: number | null }>({ lat: null, lng: null });
//   const [assigning, setAssigning] = useState(false);
//   const [assigned, setAssigned] = useState<Rider | null>(null);
//   const [distanceKm, setDistanceKm] = useState<number | null>(null);

//   const canSubmit = item && quantity > 0 && pickupDate && ((coords.lat !== null && coords.lng !== null) || address.trim().length > 0);

//   const nearestRider = useMemo(() => {
//     if (coords.lat == null || coords.lng == null) return null;
//     const feasible = RIDERS.filter(r => r.capacityKg >= quantity);
//     if (!feasible.length) return null;
//     let best: { r: Rider; d: number } | null = null;
//     for (const r of feasible) {
//       const d = haversine(coords.lat, coords.lng, r.lat, r.lng);
//       if (!best || d < best.d) best = { r, d };
//     }
//     return best;
//   }, [coords.lat, coords.lng, quantity]);

//   const useMyLocation = () => {
//     if (!navigator.geolocation) {
//       toast.error("Geolocation not supported");
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
//         toast.success("Location captured");
//       },
//       (err) => {
//         let message = "Unable to get location.";
//         if (typeof window !== "undefined" && !window.isSecureContext) {
//           message = "Location requires HTTPS. Open the https link or enter coordinates manually.";
//         } else if (err && typeof err === "object") {
//           const code = (err as GeolocationPositionError).code;
//           if (code === 1) message = "Permission denied. Allow location access or enter coordinates manually.";
//           if (code === 2) message = "Position unavailable. Check GPS/network or enter coordinates.";
//           if (code === 3) message = "Location timed out. Try again or enter coordinates manually.";
//         }
//         console.error("Geolocation error:", (err as any)?.code, (err as any)?.message);
//         toast.error(message);
//       },
//       { enableHighAccuracy: true, timeout: 8000 }
//     );
//   };

//   const submit = async () => {
//     if (!canSubmit) return;
//     setAssigning(true);
//     setAssigned(null);
//     setDistanceKm(null);
//     await new Promise((r) => setTimeout(r, 700));
//     const best = nearestRider;
//     if (!best) {
//       toast.error("No available rider meets the requirement");
//       setAssigning(false);
//       return;
//     }
//     setAssigned(best.r);
//     setDistanceKm(best.d);
//     toast.success(`Pickup assigned to ${best.r.name}`);
//     setAssigning(false);
//   };

//   return (
//     <Card className="shadow-lg">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <Recycle className="h-5 w-5 text-primary" /> Schedule Door‑to‑Door Collection
//         </CardTitle>
//         <CardDescription>
//           Book a convenient time for our certified team to collect your electronic waste. Free collection for 5+ items! Select item, quantity, preferred date, and address or use live location. We’ll estimate payout and suggest the nearest rider.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="grid gap-2">
//           <Label>Item type</Label>
//           <Select value={item} onValueChange={setItem}>
//             <SelectTrigger>
//               <SelectValue placeholder="Choose an item" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="mobile">Mobile Phone</SelectItem>
//               <SelectItem value="tablet">Tablet</SelectItem>
//               <SelectItem value="laptop">Laptop</SelectItem>
//               <SelectItem value="desktop">Desktop PC</SelectItem>
//               <SelectItem value="monitor">Monitor</SelectItem>
//               <SelectItem value="printer">Printer/Scanner</SelectItem>
//               <SelectItem value="router">Router/Modem</SelectItem>
//               <SelectItem value="battery">Battery/Powerbank</SelectItem>
//               <SelectItem value="charger">Chargers/Cables</SelectItem>
//               <SelectItem value="tv">Television</SelectItem>
//               <SelectItem value="console">Gaming Console</SelectItem>
//               <SelectItem value="audio">Audio Equipment</SelectItem>
//               <SelectItem value="camera">Camera</SelectItem>
//               <SelectItem value="appliance">Small Appliance</SelectItem>
//               <SelectItem value="others">Other</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="grid gap-2">
//           <Label>Quantity</Label>
//           <QuantitySlider value={quantity} onChange={setQuantity} />
//         </div>

//         <div className="grid gap-2 sm:grid-cols-2">
//           <div className="grid gap-2">
//             <Label>Pickup address</Label>
//             <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, City" />
//           </div>
//           <div className="grid gap-2">
//             <Label>Preferred date</Label>
//             <Input type="date" value={pickupDate} onChange={(e)=> setPickupDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
//           </div>
//         </div>

//         <div className="grid gap-2">
//           <Label className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Location</Label>
//           <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
//             <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, City (optional if using live location)" />
//             <Button type="button" variant="secondary" onClick={useMyLocation} className="gap-2">
//               <Navigation className="h-4 w-4" /> Use my location
//             </Button>
//           </div>
//           {(coords.lat !== null && coords.lng !== null) && (
//             <p className="text-xs text-muted-foreground">Live location captured.</p>
//           )}
//           {nearestRider && (
//             <p className="text-sm text-muted-foreground">
//               Nearest rider candidate: <span className="font-medium">{nearestRider.r.name}</span> • {nearestRider.d.toFixed(1)} km away
//             </p>
//           )}
//         </div>

//         <PayoutEstimate item={item} quantity={quantity} />
//         <div className="flex items-center justify-between gap-2">
//           <Button onClick={submit} disabled={!canSubmit || assigning} className="gap-2">
//             {assigning && <Loader2 className="h-4 w-4 animate-spin" />} Schedule pickup
//           </Button>
//         </div>

//         {assigned && distanceKm !== null && (
//           <div className="rounded-md border bg-secondary/50 p-4 text-sm">
//             Assigned to <span className="font-medium">{assigned.name}</span>. Estimated distance {distanceKm.toFixed(1)} km. You'll receive updates when the rider is en route.
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }





//-------------------------------------------------------------------


// import { useEffect, useState } from "react";
// import Confetti from "react-confetti";

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { Loader2, MapPin, Recycle, Upload } from "lucide-react";
// import { PayoutEstimate } from "./RequestPickupForm.helpers"; // Yeh helper component aapke project mein hona chahiye

// export default function RequestPickupForm() {


//     const [showConfetti, setShowConfetti] = useState(false);
//   // Form ki shuruaati state, reset karne ke liye
//   const initialFormState = {
//     item: "",
//     condition: "",
//     quantity: 1,
//     address: "",
//     pickupDate: "",
//   };

//   // Form ke sabhi fields ke liye state management
//   const [item, setItem] = useState(initialFormState.item);
//   const [condition, setCondition] = useState(initialFormState.condition);
//   const [photo, setPhoto] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState(initialFormState.quantity);
//   const [address, setAddress] = useState(initialFormState.address);
//   const [pickupDate, setPickupDate] = useState(initialFormState.pickupDate);
//   const [coords, setCoords] = useState<{ lat: number | null; lng: number | null }>({ lat: null, lng: null });
  
//   // UI loading states ke liye
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isFetchingAddress, setIsFetchingAddress] = useState(false);

//   // KADAM 1: Submission ka result store karne ke liye nayi state add karein
//   const [submissionResult, setSubmissionResult] = useState<{ riderName: string } | null>(null);

//   // Submit button ko enable/disable karne ke liye condition
//   const canSubmit = item && condition && quantity > 0 && pickupDate && address.trim().length > 0;

//   // Image preview ke liye temporary URL banane wala effect
//   useEffect(() => {
//     if (!photo) {
//       setPreviewUrl(null);
//       return;
//     }
//     const objectUrl = URL.createObjectURL(photo);
//     setPreviewUrl(objectUrl);
//     // Memory leak se bachne ke liye URL ko cleanup karein
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [photo]);
  
//   // Form ko reset karne wala function
//   const resetForm = () => {
//     setItem(initialFormState.item);
//     setCondition(initialFormState.condition);
//     setQuantity(initialFormState.quantity);
//     setAddress(initialFormState.address);
//     setPickupDate(initialFormState.pickupDate);
//     setPhoto(null);
//     setCoords({ lat: null, lng: null });
//     setSubmissionResult(null); // Result ko bhi reset karein
//   };

//   // User ki location lekar address fetch karne wala function
//   const useMyLocation = () => {
//     if (!navigator.geolocation) {
//       toast.error("Geolocation is not supported by your browser.");
//       return;
//     }
//     setIsFetchingAddress(true);
//     navigator.geolocation.getCurrentPosition(
//       async (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setCoords({ lat: latitude, lng: longitude });
//         toast.info("Location captured. Fetching address...");
//         try {
//           const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
//           const data = await response.json();
//           if (data && data.display_name) {
//             setAddress(data.display_name);
//             toast.success("Address fetched successfully!");
//           } else {
//             toast.error("Could not find a valid address for this location.");
//           }
//         } catch (error) {
//           toast.error("Failed to fetch address. Please enter it manually.");
//         } finally {
//           setIsFetchingAddress(false);
//         }
//       },
//       (err) => {
//         toast.error("Could not get location. Please allow location access in your browser settings.");
//         setIsFetchingAddress(false);
//       }
//     );
//   };

//   // Photo select karne par state update karne wala handler
//   const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setPhoto(e.target.files[0]);
//     }
//   };

//   // Form submit karke backend ko data bhejne wala function
//   const submit = async () => {
//     if (!canSubmit) return;
//     setIsSubmitting(true);
//     setSubmissionResult(null); // Purana result hata dein

//     const formData = new FormData();
//     formData.append("item", item);
//     formData.append("condition", condition);
//     formData.append("quantity", String(quantity));
//     formData.append("address", address);
//     formData.append("pickupDate", pickupDate);
//     if (coords.lat && coords.lng) {
//       formData.append("latitude", String(coords.lat));
//       formData.append("longitude", String(coords.lng));
//     }
//     if (photo) {
//       formData.append("photo", photo);
//     }

//     try {
//       // Yahaan apne backend ka sahi URL daalein
//       const response = await fetch("http://localhost:8080/api/request", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json(); // Pehle response ko parse karein

//       if (!response.ok) {
//         throw new Error(result.message || "Server responded with an error.");
//       }

//       toast.success("Pickup scheduled successfully!");
      
//       // KADAM 2: Backend se mile rider name ko state mein save karein
//       if (result.assignedRider) {
//         setSubmissionResult({ riderName: result.assignedRider });
//       }
      
//       console.log("Success:", result);
//       // Form ko reset karein, lekin result dikhta rahega (kyunki hum result ko form reset ke baad set kar rahe hain)
//       // Actually, behtar UX ke liye, hum form ko reset nahi karte taaki result dikhe. User naya form bharne ke liye page refresh kar sakta hai ya hum ek "New Request" button de sakte hain.
//       // Abhi ke liye, resetForm() ko comment kar dete hain.
//       // resetForm(); 
      
//     } catch (error) {
//       console.error("Failed to submit:", error);
//       toast.error(error.message || "Failed to schedule pickup. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="shadow-lg">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <Recycle className="h-5 w-5 text-primary" /> Schedule Door-to-Door Collection
//         </CardTitle>
//         <CardDescription>
//           Fill in the details below to schedule a pickup for your e-waste.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <div className="grid gap-2">
//             <Label htmlFor="item-type">Item type</Label>
//             <Select value={item} onValueChange={setItem}>
//               <SelectTrigger id="item-type"><SelectValue placeholder="Choose an item" /></SelectTrigger>
//               <SelectContent position="popper">
//                 <SelectItem value="mobile">Mobile Phone</SelectItem>
//                 <SelectItem value="tablet">Tablet</SelectItem>
//                 <SelectItem value="laptop">Laptop</SelectItem>
//                 <SelectItem value="desktop">Desktop PC</SelectItem>
//                 <SelectItem value="monitor">Monitor</SelectItem>
//                 <SelectItem value="printer">Printer/Scanner</SelectItem>
//                 <SelectItem value="router">Router/Modem</SelectItem>
//                 <SelectItem value="battery">Battery/Powerbank</SelectItem>
//                 <SelectItem value="charger">Chargers/Cables</SelectItem>
//                 <SelectItem value="tv">Television</SelectItem>
//                 <SelectItem value="console">Gaming Console</SelectItem>
//                 <SelectItem value="audio">Audio Equipment</SelectItem>
//                 <SelectItem value="camera">Camera</SelectItem>
//                 <SelectItem value="appliance">Small Appliance</SelectItem>
//                 <SelectItem value="others">Other</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="condition">Condition</Label>
//             <Select value={condition} onValueChange={setCondition}>
//               <SelectTrigger id="condition"><SelectValue placeholder="Select condition" /></SelectTrigger>
//               <SelectContent position="popper">
//                 <SelectItem value="good">Good Condition (Working)</SelectItem>
//                 <SelectItem value="fair">Fair Condition (Minor Issues)</SelectItem>
//                 <SelectItem value="damaged">Working but Damaged</SelectItem>
//                 <SelectItem value="dead">Dead / Not Working</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <div className="grid gap-2">
//           <Label>Upload Photo (Optional)</Label>
//           <div className="flex items-center gap-4">
//             <Label htmlFor="photo-upload" className="flex cursor-pointer items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20">
//               <Upload className="h-4 w-4" /> Choose File
//             </Label>
//             <Input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
//             <p className="text-sm text-muted-foreground">{photo ? photo.name : "No file selected."}</p>
//           </div>
//           {previewUrl && (
//             <div className="mt-2">
//               <img src={previewUrl} alt="Image Preview" className="h-32 w-32 rounded-md object-cover" />
//             </div>
//           )}
//         </div>

//         <div className="grid gap-2">
//           <Label htmlFor="quantity">Quantity</Label>
//           <Select value={String(quantity)} onValueChange={(value) => setQuantity(Number(value))}>
//             <SelectTrigger id="quantity"><SelectValue placeholder="Select quantity" /></SelectTrigger>
//             <SelectContent position="popper">
//               {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//                 <SelectItem key={num} value={String(num)}>{num}</SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="grid gap-2">
//           <Label htmlFor="address">Pickup address</Label>
//           <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter full address or use live location" />
//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
//           <div className="grid gap-2">
//             <Label htmlFor="pickup-date">Preferred date</Label>
//             <Input id="pickup-date" type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
//           </div>
//           <div className="grid gap-2 self-end">
//             <Button type="button" variant="secondary" onClick={useMyLocation} disabled={isFetchingAddress} className="gap-2">
//               {isFetchingAddress ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
//               {isFetchingAddress ? "Fetching..." : "Use Live Location"}
//             </Button>
//           </div>
//         </div>

//         <PayoutEstimate item={item} quantity={quantity} />
        
        

//         <Button
//                 onClick={submit}
//               disabled={!canSubmit || isSubmitting}
//             className="w-full gap-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 px-4 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-green-600 hover:to-cyan-600 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-60"
// >
//   {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
//   Schedule Pickup
// </Button>



//         {/* KADAM 3: Result dikhane ke liye naya JSX block */}
//         {submissionResult && (
//           <div className="mt-4 rounded-md border border-green-300 bg-green-50 p-4 text-sm text-green-800">
//             <h4 className="font-bold">Request Confirmed!</h4>
//             <p className="mt-1">
//               Your pickup has been successfully scheduled.
//             </p>
//             <p className="mt-2 font-semibold">
//               Assigned Rider: {submissionResult.riderName}
//             </p>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }



import { useEffect, useState } from "react";
import Confetti from "react-confetti"; // Yeh import zaroori hai
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, MapPin, Recycle, Upload } from "lucide-react";
import { PayoutEstimate } from "./RequestPickupForm.helpers";

export default function RequestPickupForm() {
  const [showConfetti, setShowConfetti] = useState(false);
  const initialFormState = {
    item: "",
    condition: "",
    quantity: 1,
    address: "",
    pickupDate: "",
  };

  const [item, setItem] = useState(initialFormState.item);
  const [condition, setCondition] = useState(initialFormState.condition);
  const [photo, setPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(initialFormState.quantity);
  const [address, setAddress] = useState(initialFormState.address);
  const [pickupDate, setPickupDate] = useState(initialFormState.pickupDate);
  const [coords, setCoords] = useState<{ lat: number | null; lng: number | null }>({ lat: null, lng: null });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ riderName: string } | null>(null);

  const canSubmit = item && condition && quantity > 0 && pickupDate && address.trim().length > 0;

  useEffect(() => {
    if (!photo) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(photo);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);
  
  const resetForm = () => {
    setItem(initialFormState.item);
    setCondition(initialFormState.condition);
    setQuantity(initialFormState.quantity);
    setAddress(initialFormState.address);
    setPickupDate(initialFormState.pickupDate);
    setPhoto(null);
    setCoords({ lat: null, lng: null });
    setSubmissionResult(null);
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    setIsFetchingAddress(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        toast.info("Location captured. Fetching address...");
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          if (data && data.display_name) {
            setAddress(data.display_name);
            toast.success("Address fetched successfully!");
          } else {
            toast.error("Could not find a valid address for this location.");
          }
        } catch (error) {
          toast.error("Failed to fetch address. Please enter it manually.");
        } finally {
          setIsFetchingAddress(false);
        }
      },
      (err) => {
        toast.error("Could not get location. Please allow location access in your browser settings.");
        setIsFetchingAddress(false);
      }
    );
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const submit = async () => {
    if (!canSubmit) return;
    setIsSubmitting(true);
    setSubmissionResult(null);

    const formData = new FormData();
    formData.append("item", item);
    formData.append("condition", condition);
    formData.append("quantity", String(quantity));
    formData.append("address", address);
    formData.append("pickupDate", pickupDate);
    if (coords.lat && coords.lng) {
      formData.append("latitude", String(coords.lat));
      formData.append("longitude", String(coords.lng));
    }
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      const response = await fetch("http://localhost:8080/api/request", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Server responded with an error.");
      }
      
      // --- KADAM 2.3: Animation logic yahaan add karein ---
      setShowConfetti(true); // Animation shuru karein
      toast.success("Pickup scheduled successfully!");
      
      if (result.assignedRider) {
        setSubmissionResult({ riderName: result.assignedRider });
      }

      // 5 second ke baad animation ko band kar dein
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // 5 seconds
      
      console.log("Success:", result);
      resetForm();
      
    } catch (error) {
      console.error("Failed to submit:", error);
      toast.error(error.message || "Failed to schedule pickup. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* --- KADAM 2.4: Confetti component yahaan render karein --- */}
      {showConfetti && <Confetti />}

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-5 w-5 text-primary" /> Schedule Door-to-Door Collection
          </CardTitle>
          <CardDescription>
            Fill in the details below to schedule a pickup for your e-waste.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="item-type">Item type</Label>
              <Select value={item} onValueChange={setItem}>
                <SelectTrigger id="item-type"><SelectValue placeholder="Choose an item" /></SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="mobile">Mobile Phone</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="desktop">Desktop PC</SelectItem>
                  <SelectItem value="monitor">Monitor</SelectItem>
                  <SelectItem value="printer">Printer/Scanner</SelectItem>
                  <SelectItem value="router">Router/Modem</SelectItem>
                  <SelectItem value="battery">Battery/Powerbank</SelectItem>
                  <SelectItem value="charger">Chargers/Cables</SelectItem>
                  <SelectItem value="tv">Television</SelectItem>
                  <SelectItem value="console">Gaming Console</SelectItem>
                  <SelectItem value="audio">Audio Equipment</SelectItem>
                  <SelectItem value="camera">Camera</SelectItem>
                  <SelectItem value="appliance">Small Appliance</SelectItem>
                  <SelectItem value="others">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="condition">Condition</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger id="condition"><SelectValue placeholder="Select condition" /></SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="good">Good Condition (Working)</SelectItem>
                  <SelectItem value="fair">Fair Condition (Minor Issues)</SelectItem>
                  <SelectItem value="damaged">Working but Damaged</SelectItem>
                  <SelectItem value="dead">Dead / Not Working</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Upload Photo (Optional)</Label>
            <div className="flex items-center gap-4">
              <Label htmlFor="photo-upload" className="flex cursor-pointer items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/20">
                <Upload className="h-4 w-4" /> Choose File
              </Label>
              <Input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
              <p className="text-sm text-muted-foreground">{photo ? photo.name : "No file selected."}</p>
            </div>
            {previewUrl && (
              <div className="mt-2">
                <img src={previewUrl} alt="Image Preview" className="h-32 w-32 rounded-md object-cover" />
              </div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Select value={String(quantity)} onValueChange={(value) => setQuantity(Number(value))}>
              <SelectTrigger id="quantity"><SelectValue placeholder="Select quantity" /></SelectTrigger>
              <SelectContent position="popper">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Pickup address</Label>
            <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter full address or use live location" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
            <div className="grid gap-2">
              <Label htmlFor="pickup-date">Preferred date</Label>
              <Input id="pickup-date" type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="grid gap-2 self-end">
              <Button type="button" variant="secondary" onClick={useMyLocation} disabled={isFetchingAddress} className="gap-2">
                {isFetchingAddress ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
                {isFetchingAddress ? "Fetching..." : "Use Live Location"}
              </Button>
            </div>
          </div>

          <PayoutEstimate item={item} quantity={quantity} />
          
          <Button
            onClick={submit}
            disabled={!canSubmit || isSubmitting}
            className="w-full gap-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 px-4 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-green-600 hover:to-cyan-600 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Schedule Pickup
          </Button>

          {submissionResult && (
            <div className="mt-4 rounded-md border border-green-300 bg-green-50 p-4 text-sm text-green-800">
              <h4 className="font-bold">Request Confirmed!</h4>
              <p className="mt-1">
                Your pickup has been successfully scheduled.
              </p>
              <p className="mt-2 font-semibold">
                Assigned Rider: {submissionResult.riderName}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}