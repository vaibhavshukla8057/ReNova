// import { Link, NavLink, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export default function SiteHeader() {
//   const location = useLocation();
//   const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
//   const onRegisterPage = location.pathname.startsWith("/register");
//   const showFull = !onRegisterPage || isRegistered;

//   const navLink = (
//     to: string,
//     label: string,
    
//   ) => (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         cn(
//           "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//           isActive
//             ? "text-primary bg-secondary"
//             : "text-foreground/80 hover:text-foreground hover:bg-secondary"
//         )
//       }
//     >
//       {label}
//     </NavLink>
//   );

//   return (
//     <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto flex h-16 items-center justify-between">
//         <Link to={showFull ? "/" : "/register"} className="flex items-center gap-2">
//           <img src="https://cdn.builder.io/api/v1/image/assets%2F1cc761525d6d4123b6ceabcac83d7f0e%2F1e757ac932d942b38d1e577fd3e65d4f?format=webp&width=96" alt="ReNova logo" className="h-8 w-8 rounded" />
//           <span className="text-xl font-bold tracking-tight">ReNova</span>
//         </Link>

//         {showFull ? (
//           <div className="flex items-center gap-2">
//           <nav className="hidden items-center gap-1 md:flex">
//             {navLink("/", "Home")}
//             {navLink("/collection", "Collection / Pickup")}
//             {navLink("/shop", "Shop")}
//             {navLink("/contact", "Contact")}
//             {navLink("/about", "About")}
//           </nav>
//           <Button asChild variant="default">
//             <Link to="/register">Get Started</Link>
//           </Button>
//         </div>
//         ) : null}
//       </div>
//     </header>
//   );
// }




// import { useState } from "react"; // Mobile menu ke liye import karein
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { ShoppingCart, Menu, X } from "lucide-react"; // Zaroori icons import karein

// export default function SiteHeader() {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu ke liye state

//   const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
//   const onRegisterPage = location.pathname.startsWith("/register");
//   const showFull = !onRegisterPage || isRegistered;

//   // NavLink banane wala helper function (isse chhedne ki zaroorat nahi)
//   const navLink = (to: string, label: string) => (
//     <NavLink
//       to={to}
//       onClick={() => setIsMenuOpen(false)} // Link par click karne par menu band ho jaaye
//       className={({ isActive }) =>
//         cn(
//           "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//           isActive
//             ? "text-primary bg-secondary"
//             : "text-foreground/80 hover:text-foreground hover:bg-secondary"
//         )
//       }
//     >
//       {label}
//     </NavLink>
//   );

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto flex h-16 items-center justify-between">
//         <Link to={showFull ? "/" : "/register"} className="flex items-center gap-2 transition-opacity hover:opacity-80">
//           <img src="https://cdn.builder.io/api/v1/image/assets%2F1cc761525d6d4123b6ceabcac83d7f0e%2F1e757ac932d942b38d1e577fd3e65d4f?format=webp&width=96" alt="ReNova logo" className="h-8 w-8 rounded" />
//           <span className="text-xl font-bold tracking-tight">ReNova</span>
//         </Link>

//         {showFull ? (
//           <>
//             {/* Desktop Navigation */}
//             <div className="hidden items-center gap-2 md:flex">
//               <nav className="flex items-center gap-1">
//                 {navLink("/", "Home")}
//                 {navLink("/collection", "Collection / Pickup")}
//                 {navLink("/shop", "Shop")}
//                 {navLink("/contact", "Contact")}
//                 {navLink("/about", "About")}
//               </nav>
              
//               {/* NAYA: Cart Icon Button */}
//               <Button asChild variant="ghost" size="icon" className="ml-2">
//                 <Link to="/cart">
//                   <ShoppingCart className="h-5 w-5" />
//                   <span className="sr-only">Open Cart</span>
//                 </Link>
//               </Button>

//               <Button asChild variant="default" className="ml-2">
//                 <Link to="/register">Get Started</Link>
//               </Button>
//             </div>

//             {/* NAYA: Mobile Hamburger Button */}
//             <div className="flex items-center gap-2 md:hidden">
//                 <Button asChild variant="ghost" size="icon">
//                     <Link to="/cart">
//                         <ShoppingCart className="h-5 w-5" />
//                         <span className="sr-only">Open Cart</span>
//                     </Link>
//                 </Button>
//                 <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                     <span className="sr-only">Toggle Menu</span>
//                 </Button>
//             </div>
//           </>
//         ) : null}
//       </div>

//       {/* NAYA: Mobile Menu Dropdown */}
//       {isMenuOpen && showFull && (
//         <div className="md:hidden">
//             <nav className="container mx-auto flex flex-col items-start gap-2 pb-4">
//                 {navLink("/", "Home")}
//                 {navLink("/collection", "Collection / Pickup")}
//                 {navLink("/shop", "Shop")}
//                 {navLink("/contact", "Contact")}
//                 {navLink("/about", "About")}
//                  <Button asChild variant="default" className="w-full mt-2">
//                     <Link to="/register">Get Started</Link>
//                 </Button>
//             </nav>
//         </div>
//       )}
//     </header>
//   );
// }





//-------------------------------------------------




// import { useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { ShoppingCart, Menu, X } from "lucide-react";


// // KADAM 1: useCart hook ko import karein
// import { useCart } from "@/context/CartContext";

// export default function SiteHeader() {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // KADAM 2: itemCount ko cart context se nikalein
//   const { itemCount } = useCart();

//   const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
//   const onRegisterPage = location.pathname.startsWith("/register");
//   const showFull = !onRegisterPage || isRegistered;

//   const navLink = (to: string, label: string) => (
//     <NavLink
//       to={to}
//       onClick={() => setIsMenuOpen(false)}
//       className={({ isActive }) =>
//         cn(
//           "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//           isActive
//             ? "text-primary bg-secondary"
//             : "text-foreground/80 hover:text-foreground hover:bg-secondary"
//         )
//       }
//     >
//       {label}
//     </NavLink>
//   );

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto flex h-16 items-center justify-between">
//         <Link to={showFull ? "/" : "/register"} className="flex items-center gap-2 transition-opacity hover:opacity-80">
//           <img src="/favicon.ico" alt="ReNova logo" className="h-12 w-12 rounded" />
//           <span className="text-3xl font-bold tracking-tight">ReNova</span>
//         </Link>

//         {showFull ? (
//           <>
//             {/* Desktop Navigation */}
//             <div className="hidden items-center gap-2 md:flex">
//               <nav className="flex items-center gap-1">
//                 {navLink("/", "Home")}
//                 {navLink("/collection", "Collection / Pickup")}
//                 {navLink("/shop", "Shop")}
//                 {navLink("/contact", "Query")}
//                 {navLink("/about", "About")}
//               </nav>
              
//               {/* KADAM 3: Desktop cart button mein badge add karein */}
//               <Button asChild variant="ghost" size="icon" className="ml-2 relative">
//                 <Link to="/cart">
//                   <ShoppingCart className="h-5 w-5" />
//                   {itemCount > 0 && (
//                     <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2">
//                       {itemCount}
//                     </span>
//                   )}
//                   <span className="sr-only">Open Cart</span>
//                 </Link>
//               </Button>

//               <Button asChild variant="default" className="ml-2">
//                 <Link to="/register">Get Started</Link>
//               </Button>
//             </div>

//             {/* Mobile Hamburger Button */}
//             <div className="flex items-center gap-2 md:hidden">
//               {/* KADAM 4: Mobile cart button mein badge add karein */}
//               <Button asChild variant="ghost" size="icon" className="relative">
//                 <Link to="/cart">
//                   <ShoppingCart className="h-5 w-5" />
//                   {itemCount > 0 && (
//                      <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2">
//                       {itemCount}
//                     </span>
//                   )}
//                   <span className="sr-only">Open Cart</span>
//                 </Link>
//               </Button>
//               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                 <span className="sr-only">Toggle Menu</span>
//               </Button>
//             </div>
//           </>
//         ) : null}
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && showFull && (
//         <div className="md:hidden">
//           <nav className="container mx-auto flex flex-col items-start gap-2 pb-4">
//             {navLink("/", "Home")}
//             {navLink("/collection", "Collection / Pickup")}
//             {navLink("/shop", "Shop")}
//             {navLink("/contact", "Contact")}
//             {navLink("/about", "About")}
//             <Button asChild variant="default" className="w-full mt-2">
//               <Link to="/register">Get Started</Link>
//             </Button>
//           </nav>
//         </div>
//       )}
//     </header>
//  );
//}







import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

// --- KADAM 1: NAYE IMPORTS ADD KAREIN ---
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function SiteHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  // --- KADAM 2: AUTH CONTEXT KA ISTMAAL KAREIN ---
  const { user, logout, isLoading } = useAuth();

  const isRegistered = typeof window !== "undefined" && localStorage.getItem("renova_registered") === "true";
  const onRegisterPage = location.pathname.startsWith("/register");
  const showFull = !onRegisterPage || isRegistered;

  const navLink = (to: string, label: string) => (
    <NavLink
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive
            ? "text-primary bg-secondary"
            : "text-foreground/80 hover:text-foreground hover:bg-secondary"
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to={showFull ? "/" : "/register"} className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src="/favicon.ico" alt="ReNova logo" className="h-12 w-12 rounded" />
          <span className="text-3xl font-bold tracking-tight">ReNova</span>
        </Link>

        {showFull ? (
          <>
            {/* --- DESKTOP NAVIGATION --- */}
            <div className="hidden items-center gap-2 md:flex">
              <nav className="flex items-center gap-1">
                {navLink("/", "Home")}
                {navLink("/collection", "Collection / Pickup")}
                {navLink("/shop", "Shop")}
                {navLink("/contact", "Query")}
                {navLink("/about", "About")}
              </nav>
              
              <Button asChild variant="ghost" size="icon" className="ml-2 relative">
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2">
                      {itemCount}
                    </span>
                  )}
                  <span className="sr-only">Open Cart</span>
                </Link>
              </Button>

              {/* --- KADAM 3: DYNAMIC AUTH SECTION (DESKTOP) --- */}
              <div className="ml-4">
                {isLoading ? (
                  <div className="h-10 w-24 animate-pulse bg-secondary rounded-md"></div>
                ) : user ? (
                  // Agar user LOGGED IN hai
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name || user.email}`} alt={user.name} />
                          <AvatarFallback>{(user.name || user.email).charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{user.name}</p>
                          <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild><Link to="/orders">My Orders</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link to="/profile">Profile</Link></DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout}>
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  // Agar user LOGGED OUT hai
                  <Button asChild variant="default">
                    <Link to="/register">Login / Signup</Link>
                  </Button>
                )}
              </div>

            </div>

            {/* --- MOBILE NAVIGATION --- */}
            <div className="flex items-center gap-2 md:hidden">
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                     <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2">
                      {itemCount}
                    </span>
                  )}
                  <span className="sr-only">Open Cart</span>
                </Link>
              </Button>
              {/* Mobile par sirf hamburger menu dikhega (login/logout dropdown mein hoga) */}
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </>
        ) : null}
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && showFull && (
        <div className="md:hidden">
          <nav className="container mx-auto flex flex-col items-start gap-2 pb-4">
            {navLink("/", "Home")}
            {navLink("/collection", "Collection / Pickup")}
            {navLink("/shop", "Shop")}
            {navLink("/contact", "Query")}
            {navLink("/about", "About")}
            
            <DropdownMenuSeparator className="w-full" />
            
            {user ? (
              <>
                <div className="w-full px-3 py-2 text-sm font-medium">Welcome, {user.name}!</div>
                <Button asChild variant="ghost" className="w-full justify-start"><Link to="/orders">My Orders</Link></Button>
                <Button variant="ghost" onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full justify-start text-red-500 hover:text-red-600">
                  Log out
                </Button>
              </>
            ) : (
              <Button asChild variant="default" className="w-full mt-2">
                <Link to="/register">Login / Signup</Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}


