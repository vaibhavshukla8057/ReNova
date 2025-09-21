



// import "./global.css";

// import { Toaster } from "@/components/ui/toaster";
// import { createRoot } from "react-dom/client";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// // --- KADAM 2.1: ZAROORI IMPORTS ADD KAREIN ---
// import { CartProvider } from "./context/CartContext"; // Cart Provider ko import karein
// import CartPage from "./pages/Cart.tsx"; // Naye Cart page ko import karein

// import Index from "./pages/Index";
// import Register from "./pages/Register";
// import Collection from "./pages/Collection";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Checkout from "./pages/Checkout";
// import NotFound from "./pages/NotFound";
// import SiteHeader from "@/components/layout/SiteHeader";
// import SiteFooter from "@/components/layout/SiteFooter";
// import UploadPhoto from "./pages/UploadPhoto";
// import MyPage from "./pages/MyPage";

// const queryClient = new QueryClient();

// function RequireRegistered({ children }: { children: JSX.Element }) {
//   const location = useLocation();
//   const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
//   if (isRegistered || location.pathname === "/register") return children;
//   const from = encodeURIComponent(location.pathname + location.search);
//   return <Navigate to={`/register?from=${from}`} replace />;
// }

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         {/* --- KADAM 2.2: YAHAN CART PROVIDER SE WRAP KAREIN --- */}
//         <CartProvider>
//           <SiteHeader />
//           <Routes>
//             <Route path="/" element={<RequireRegistered><Index /></RequireRegistered>} />
//             <Route path="/collection" element={<RequireRegistered><Collection /></RequireRegistered>} />
//             <Route path="/pickup" element={<RequireRegistered><Collection /></RequireRegistered>} />
//             <Route path="/shop" element={<RequireRegistered><Shop /></RequireRegistered>} />
//             <Route path="/contact" element={<RequireRegistered><Contact /></RequireRegistered>} />
//             <Route path="/checkout" element={<RequireRegistered><Checkout /></RequireRegistered>} />
//             <Route path="/about" element={<RequireRegistered><About /></RequireRegistered>} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/upload-photo" element={<UploadPhoto />} />
//             <Route path="/my-page" element={<MyPage />} />
            
//             {/* --- KADAM 2.3: NAYA CART ROUTE ADD KAREIN --- */}
//             <Route path="/cart" element={<RequireRegistered><CartPage /></RequireRegistered>} />

//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <SiteFooter />
//         </CartProvider>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// createRoot(document.getElementById("root")!).render(<App />);

import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// --- ZAROORI IMPORTS ---
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./context/AuthContext"; // <-- NAYA IMPORT YAHAN
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/Cart.tsx";

import Index from "./pages/Index";
import Register from "./pages/Register";
import Collection from "./pages/Collection";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import UploadPhoto from "./pages/UploadPhoto";
import MyPage from "./pages/MyPage";

const queryClient = new QueryClient();

function RequireRegistered({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
  if (isRegistered || location.pathname === "/register") return children;
  const from = encodeURIComponent(location.pathname + location.search);
  return <Navigate to={`/register?from=${from}`} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* --- AUTH PROVIDER YAHAN SE SHURU --- */}
        <AuthProvider>
          <CartProvider>
            <SiteHeader />
            <Routes>
              <Route path="/" element={<RequireRegistered><Index /></RequireRegistered>} />
              <Route path="/collection" element={<RequireRegistered><Collection /></RequireRegistered>} />
              <Route path="/pickup" element={<RequireRegistered><Collection /></RequireRegistered>} />
              <Route path="/shop" element={<RequireRegistered><Shop /></RequireRegistered>} />
              <Route path="/contact" element={<RequireRegistered><Contact /></RequireRegistered>} />
              <Route path="/checkout" element={<RequireRegistered><Checkout /></RequireRegistered>} />
              <Route path="/about" element={<RequireRegistered><About /></RequireRegistered>} />
              <Route path="/register" element={<Register />} />
              <Route path="/upload-photo" element={<UploadPhoto />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/cart" element={<RequireRegistered><CartPage /></RequireRegistered>} />
               <Route path="/orders" element={<RequireRegistered><OrdersPage /></RequireRegistered>} />
              <Route path="/profile" element={<RequireRegistered><ProfilePage /></RequireRegistered>} /> 
              <Route path="*" element={<NotFound />} />
            </Routes>
            <SiteFooter />
          </CartProvider>
        </AuthProvider>
        {/* --- AUTH PROVIDER YAHAN KHATAM --- */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);