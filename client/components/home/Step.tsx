// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// export default function Step({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
//   return (
//     <motion.div 
//       className="rounded-xl border bg-background/50 p-5 shadow-lg shadow-green-500/10"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.5 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="mb-3 inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
//         {icon}
//       </div>
//       <div className="text-base font-semibold">{title}</div>
//       <p className="text-sm text-muted-foreground">{desc}</p>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Step({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    // 1. YEH OUTER CONTAINER HAI (GLOW KE LIYE)
    <motion.div 
      className="group relative overflow-hidden rounded-xl p-[1px] shadow-lg transition-all duration-500 hover:shadow-green-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {/* 2. YEH GLOW WALA GRADIENT HAI JO HOVER PAR DIKHEGA */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-300 via-cyan-400 to-green-400 opacity-0 transition-opacity duration-500 group-hover:opacity-75"></div>

      {/* 3. YEH INNER CONTAINER HAI (CONTENT KE LIYE) */}
      <div className="relative h-full rounded-lg bg-background/80 p-5">
        <div className="mb-3 inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
          {icon}
        </div>
        <div className="text-base font-semibold">{title}</div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
}