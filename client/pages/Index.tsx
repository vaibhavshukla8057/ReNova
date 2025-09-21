


  import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Leaf, MapPin, Recycle, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundSquares from "@/components/home/BackgroundSquares";
import { ReactNode } from "react";

// Helper components
function Step({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <motion.div 
      className="rounded-2xl border bg-background/50 p-5 text-center shadow-lg shadow-green-500/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <motion.div 
        className="rounded-xl border bg-background/50 p-6 text-center shadow-lg shadow-green-500/10"
        whileHover={{ scale: 1.05 }}
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-green-600">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}


export default function Index() {
  // Variants yahaan, return se pehle define kiye gaye hain
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative  bg-gradient-to-br from-green-50 via-cyan-50 to-white [background-image:linear-gradient(90deg,rgba(74,222,128,0.2)_1px,transparent_1px),linear-gradient(rgba(74,222,128,0.2)_1px,transparent_1px)] [background-size:90px_90px]">
      <BackgroundSquares />

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto grid min-h-[calc(90vh)] gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants} 
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl lg:text-6xl"
            >
              Transform E‑waste into <span className="text-green-600">Valuable Resources</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-prose"
            >
              ReNova revolutionizes electronic waste management through door-to-door collection, professional refurbishment, and a sustainable marketplace solution.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="gap-2 shadow-lg shadow-green-500/20 hover:shadow-xl transition-shadow">
                <Link to="/collection">Request a pickup <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <a href="#how-it-works" className="font-medium text-primary underline-offset-4 hover:underline">See how it works</a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             <img 
                src="/hero-image.png" 
                alt="E-waste recycling illustration"
                className="max-h-[500px]"
             />
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <motion.section 
        id="how-it-works" 
        className="container mx-auto py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 max-w-2xl text-center mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-2 text-muted-foreground">A seamless end‑to‑end flow that protects people and the planet.</p>
        </motion.div>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
         <div className="relative overflow-hidden rounded-xl  bg-background/50 p-5 shadow-lg
            
            before:absolute before:inset-0 before:-z-10 
            before:bg-gradient-to-br before:from-lightyellow-300 before:via-green-400 before:to-white-400 
            before:blur-2xl before:opacity-0 
            
            hover:before:opacity-75
            
            before:transition-all before:duration-300"> <Step icon={<MapPin />} title="1. Request Pickup" desc="Users select item type, quantity, and address." /></div>
          <div className="relative overflow-hidden rounded-xl border bg-background/50 p-5 shadow-lg
            
            before:absolute before:inset-0 before:-z-10 
            before:bg-gradient-to-br before:from-blue-300 before:via-violet-400 before:to-pink-400 
            before:blur-xl before:opacity-0 
            
            hover:before:opacity-75
            
            before:transition-all before:duration-300"> <Step icon={<Truck />} title="2. Smart Rider Match" desc="We assign the nearest available rider for fast collection." /></div>
          <div className="relative overflow-hidden rounded-xl border bg-background/50 p-5 shadow-lg
            
            before:absolute before:inset-0 before:-z-10 
            before:bg-gradient-to-br before:from-blue-300 before:via-violet-400 before:to-pink-400 
            before:blur-xl before:opacity-0 
            
            hover:before:opacity-75
            
            before:transition-all before:duration-300"> <Step icon={<Factory />} title="3. Warehouse Sorting" desc="Items are segregated into recyclable and non‑recyclable components." /></div>
          <div className="relative overflow-hidden rounded-xl border bg-background/50 p-5 shadow-lg
            
            before:absolute before:inset-0 before:-z-10 
            before:bg-gradient-to-br before:from-blue-300 before:via-violet-400 before:to-pink-400 
            before:blur-xl before:opacity-0 
            
            hover:before:opacity-75
            
            before:transition-all before:duration-300"> <Step icon={<Recycle />} title="4. Recycle & Dispose" desc="Parts go to certified recyclers; hazardous waste is disposed safely." /></div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        id="impact" 
        className="container mx-auto py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold tracking-tight">Built for Sustainability and Scale</h3>
            <p className="text-muted-foreground">Our platform reduces pollution, conserves resources, and scales from city to nation with an integrated logistics and recycling pipeline.</p>
            <ul className="grid gap-3 pt-2">
              <li className="flex items-start gap-3"><Leaf className="mt-1 h-5 w-5 text-primary" /><span>Optimized routing lowers emissions and trip times.</span></li>
              <li className="flex items-start gap-3"><Leaf className="mt-1 h-5 w-5 text-primary" /><span>Recycling partnerships ensure valuable parts re‑enter the economy.</span></li>
              <li className="flex items-start gap-3"><Leaf className="mt-1 h-5 w-5 text-primary" /><span>Hazardous materials handled with certified disposal methods.</span></li>
            </ul>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <Stat number="1.2k t" label="E‑waste diverted" />
            <Stat number="48%" label="Avg. lower CO₂" />
            <Stat number="250+" label="Active riders" />
            <Stat number="60+" label="Recycling partners" />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}








