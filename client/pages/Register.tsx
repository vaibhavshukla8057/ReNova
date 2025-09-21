// import RegistrationTabs from "@/components/RegistrationTabs";

// export default function Register() {
//   return (
//     <div className="relative min-h-[calc(100vh-4rem)]">
//       <div aria-hidden className="pointer-events-none absolute inset-0">
//         <img
//           src="https://images.pexels.com/photos/33339844/pexels-photo-33339844.jpeg"
//           alt="Recycling warehouse sorting electronics"
//           className="h-full w-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.25),transparent_60%)]" />
//       </div>

//       <section className="relative container mx-auto py-20">
//         <div className="mx-auto max-w-3xl space-y-6 text-center text-white">
//           <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
//           <p className="text-white/80">
//             Choose your role to get started. You can always connect multiple roles later.
//           </p>
//         </div>
//         <div className="relative mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-background/80 p-4 md:p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
//           <RegistrationTabs />
//         </div>
//       </section>
//     </div>
//   );
// }



// import { useState } from "react";
// import AuthForm from "@/components/AuthForm"; // Is component ka code wahi rahega jo pehle tha

// export default function Register() {
//   const [mode, setMode] = useState<'login' | 'signup'>('login');

//   return (
//     // Pehle version ka background aur image container
//     <div className="relative min-h-[calc(100vh-4rem)]">
//       <div aria-hidden className="pointer-events-none absolute inset-0">
//         <img
//           src="https://images.pexels.com/photos/33339844/pexels-photo-33339844.jpeg"
//           alt="Recycling warehouse sorting electronics"
//           className="h-full w-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.25),transparent_60%)]" />
//       </div>

//       {/* Form ko page ke center mein laane ke liye flexbox ka istemaal */}
//       <section className="relative container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-6">
//           {/* Doosre version se dynamic text (Login/Signup ke hisaab se badlega) */}
//           <div className="text-center text-white">
//             <h1 className="text-3xl font-bold tracking-tight">
//               {mode === 'login' ? 'Login Now' : 'Create an Account'}
//             </h1>
//             <p className="mt-2 text-white/80">
//               {mode === 'login' ? 'Welcome back! Access your account.' : 'Join us to make a difference.'}
//             </p>
//           </div>

//           {/* Pehle version ka card style, lekin andar naya AuthForm component */}
//           <div className="relative rounded-2xl border border-white/10 bg-background/80 p-6 md:p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
//             <AuthForm mode={mode} />
//           </div>

//           {/* Doosre version ka Login/Signup toggle button */}
//           <div className="text-center text-sm text-white">
//             {mode === 'login' ? (
//               <>
//                 Not a member?{' '}
//                 <button onClick={() => setMode('signup')} className="font-semibold text-primary underline-offset-4 hover:underline">
//                   Signup now
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{' '}
//                 <button onClick={() => setMode('login')} className="font-semibold text-primary underline-offset-4 hover:underline">
//                   Login
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import { motion } from "framer-motion"; // Framer Motion ko import karein

// Background mein circles dikhane ke liye ek helper component
const BackgroundCircles = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-200/50 blur-2xl animate-float"></div>
    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-green-200/50 blur-2xl animate-float [animation-delay:-3s]"></div>
    <div className="absolute top-1/2 -right-10 h-32 w-32 rounded-full border-4 border-blue-200/80 animate-float [animation-delay:-1s]"></div>
    <div className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-xl animate-float [animation-delay:-5s]"></div>
    <div className="absolute bottom-1/4 left-1/4 h-20 w-20 rounded-full border-4 border-green-200/80 animate-float [animation-delay:-2s]"></div>
  </div>
);

export default function Register() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white p-4">
      <BackgroundCircles />
      
      {/* Framer Motion ka istemaal karke animation add karein */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md space-y-6"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            {mode === 'login' ? 'Login Now' : 'Create an Account'}
          </h1>
          <p className="mt-2 text-gray-500">
            {mode === 'login' ? 'Welcome back!' : 'Join us to make a difference.'}
          </p>
        </div>

        <div className="rounded-2xl border bg-white/80 p-6 shadow-2xl backdrop-blur-sm md:p-8">
  <AuthForm mode={mode} />
</div>

        <div className="text-center text-sm">
          {mode === 'login' ? (
            <>
              <span className="text-gray-600">Not a member? </span>
              <button onClick={() => setMode('signup')} className="font-semibold text-primary underline-offset-4 hover:underline">
                Signup now
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account? </span>
              <button onClick={() => setMode('login')} className="font-semibold text-primary underline-offset-4 hover:underline">
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}