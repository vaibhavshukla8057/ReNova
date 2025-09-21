// // export default function About() {
// //   return (
// //     <div className="min-h-[60vh] bg-gradient-to-b from-secondary/30 to-background">
// //       <section className="container mx-auto py-16">
// //         <h1 className="text-3xl font-bold tracking-tight">About ReNova</h1>
// //         <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
// //           <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
// //           <p>
// //             ReNova was founded with a simple yet powerful vision: to create a circular economy for electronic waste where nothing goes to waste and everything has value. We believe that every electronic device contains valuable components that can be refurbished, repurposed, and given a second life.
// //           </p>
// //           <p>
// //             Through our comprehensive door-to-door collection service and state-of-the-art processing facilities, we're making it easier than ever for individuals and businesses to responsibly dispose of their electronic waste while contributing to a more sustainable future.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // pages/about.tsx
// import React from 'react';
// // 👇 YEH LINE BADAL GAYI HAI
// import ImpactCard from '../components/ui/ImpactCard'; // Adjust path if needed

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background py-16">
//       <section className="container mx-auto px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-foreground mb-12 animate-fadeInDown">About ReNova</h1>

//         {/* Vision & Mission Section */}
//         <div className="max-w-4xl mx-auto space-y-8 mb-16 px-4 md:px-0">
          
//           {/* Our Vision */}
//           <div className="bg-card p-6 rounded-lg shadow-md animate-fadeInLeft">
//             <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               At RENOVA, we believe in a future where every resource is valued, and waste is a concept of the past. We're on a mission to redefine how the world interacts with electronic components, rare-earth metals, and vital chips. By championing the power of reuse and responsible recycling, we're not just creating solutions – we're building a sustainable legacy. Join us as we transform 'discarded' into 'desired', paving the way for a greener, more resource-efficient planet.
//             </p>
//           </div>

//           {/* Our Mission */}
//           <div className="bg-card p-6 rounded-lg shadow-md animate-fadeInRight">
//             <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
//             <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
//               <p>
//                 ReNova was founded with a simple yet powerful vision: to create a circular economy for electronic waste where nothing goes to waste and everything has value. We believe that every electronic device contains valuable components that can be refurbished, repurposed, and given a second life.
//               </p>
//               <p>
//                 Through our comprehensive door-to-door collection service and state-of-the-art processing facilities, we're making it easier than ever for individuals and businesses to responsibly dispose of their electronic waste while contributing to a more sustainable future.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Our Impact Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-foreground mb-4 animate-fadeInUp">Our Impact in Numbers</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             See how ReNova is making a tangible difference for a sustainable planet.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <ImpactCard
//             headline="Breathing Easier, Together."
//             text="By giving new life to components, we significantly offset the carbon footprint associated with new manufacturing."
//             targetCount={25000}
//             unit="Tons of CO2 Prevented"
//             suffix="+"
//             visualDescription="Less smoke, green forest"
//             tooltipContent="Equivalent to taking 5,000 cars off the road for a year."
//           />
//           <ImpactCard
//             headline="Protecting Our Most Precious Resource."
//             text="Manufacturing new electronics consumes vast amounts of water. Our reuse initiatives save billions of liters."
//             targetCount={1500000000} // 1.5 Billion
//             unit="Liters of Water Saved"
//             suffix="+"
//             visualDescription="Rippling water, clean river"
//             tooltipContent="Enough to fill 600 Olympic-sized swimming pools."
//           />
//           <ImpactCard
//             headline="Reclaiming Our Land, Renewing Our Future."
//             text="Every chip, every metal component diverted from landfills is a victory for our environment and future generations."
//             targetCount={5000}
//             unit="Tons of E-Waste Diverted"
//             suffix="+"
//             visualDescription="Shrinking landfill, green park"
//             tooltipContent="This is comparable to the weight of 1,000 elephants not going to waste."
//           />
//           <ImpactCard
//             headline="Safeguarding Critical Elements."
//             text="The extraction of rare-earth metals is environmentally intensive. Reuse reduces this demand significantly."
//             targetCount={200}
//             unit="kg of Rare-Earth Metals Recovered & Reused"
//             suffix="+"
//             visualDescription="Abstract swirling elements"
//             tooltipContent="Essential for smartphones, EVs, and renewable energy tech."
//           />
//         </div>
//       </section>
//     </div>
//   );
// }




// pages/about.tsx (ya jahan bhi aapki About component file hai)
import React from 'react';
import ImpactCard from '../components/ui/ImpactCard'; // Adjust path as needed

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background py-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-foreground mb-12 animate-fadeInDown">About ReNova</h1>

        {/* Vision & Mission Section */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16 px-4 md:px-0">
          {/* Our Vision */}
          <div className="bg-card p-6 rounded-lg shadow-md animate-fadeInLeft">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RENOVA, we believe in a future where every resource is valued, and waste is a concept of the past. We're on a mission to redefine how the world interacts with electronic components, rare-earth metals, and vital chips. By championing the power of reuse and responsible recycling, we're not just creating solutions – we're building a sustainable legacy. Join us as we transform 'discarded' into 'desired', paving the way for a greener, more resource-efficient planet.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-card p-6 rounded-lg shadow-md animate-fadeInRight">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                ReNova was founded with a simple yet powerful vision: to create a circular economy for electronic waste where nothing goes to waste and everything has value. We believe that every electronic device contains valuable components that can be refurbished, repurposed, and given a second life.
              </p>
              <p>
                Through our comprehensive door-to-door collection service and state-of-the-art processing facilities, we're making it easier than ever for individuals and businesses to responsibly dispose of their electronic waste while contributing to a more sustainable future.
              </p>
            </div>
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground mb-4 animate-fadeInUp">Our Impact in Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how ReNova is making a tangible difference for a sustainable planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactCard
            headline="Breathing Easier, Together."
            text="By giving new life to components, we significantly offset the carbon footprint associated with new manufacturing."
            targetCount={25000}
            unit="Tons of CO2 Prevented"
            suffix="+"
            visualDescription="Less smoke, green forest"
            tooltipContent="Equivalent to taking 5,000 cars off the road for a year."
          />
          <ImpactCard
            headline="Protecting Our Most Precious Resource."
            text="Manufacturing new electronics consumes vast amounts of water. Our reuse initiatives save billions of liters."
            targetCount={1500000000} // 1.5 Billion
            unit="Liters of Water Saved"
            suffix="+"
            visualDescription="Rippling water, clean river"
            tooltipContent="Enough to fill 600 Olympic-sized swimming pools."
          />
          <ImpactCard
            headline="Reclaiming Our Land, Renewing Our Future."
            text="Every chip, every metal component diverted from landfills is a victory for our environment and future generations."
            targetCount={5000}
            unit="Tons of E-Waste Diverted"
            suffix="+"
            visualDescription="Shrinking landfill, green park"
            tooltipContent="This is comparable to the weight of 1,000 elephants not going to waste."
          />
          <ImpactCard
            headline="Safeguarding Critical Elements."
            text="The extraction of rare-earth metals is environmentally intensive. Reuse reduces this demand significantly."
            targetCount={200}
            unit="kg of Rare-Earth Metals Recovered & Reused"
            suffix="+"
            visualDescription="Abstract swirling elements"
            tooltipContent="Essential for smartphones, EVs, and renewable energy tech."
          />
        </div>
      </section>
    </div>
  );
}
