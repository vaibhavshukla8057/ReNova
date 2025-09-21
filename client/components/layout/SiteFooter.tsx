//export default function SiteFooter() {
  ///return (
    //<footer className="bg-black text-white">
      //<div className="container mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        //<div className="space-y-3">
          //<div className="flex items-center gap-2">
            //<img src="https://cdn.builder.io/api/v1/image/assets%2F1cc761525d6d4123b6ceabcac83d7f0e%2F1e757ac932d942b38d1e577fd3e65d4f?format=webp&width=80" alt="ReNova logo" className="h-8 w-8 rounded" />
            //<span className="text-lg font-semibold">ReNova</span>
          //</div>
          //<p className="text-sm text-white/70 max-w-sm">
            //ReNova Transforming electronic waste into valuable resources through sustainable door-to-door collection and professional refurbishment services.
          //</p>
        //</div>

        //<div>
          //<h3 className="text-sm font-semibold mb-3 text-white">Services</h3>
          //<ul className="space-y-2 text-sm">
            //<li className="text-white/80">Door-to-Door Collection</li>
            //<li className="text-white/80">E-Waste Processing</li>
            //<li className="text-white/80">Component Refurbishment</li>
  //           <li className="text-white/80">Data Destruction</li>
  //           <li className="text-white/80">Corporate Solutions</li>
  //           <li className="text-white/80">Marketplace</li>
  //         </ul>
  //       </div>

  //       <div>
  //         <h3 className="text-sm font-semibold mb-3 text-white">Marketplace</h3>
  //         <ul className="space-y-2 text-sm">
  //           <li className="text-white/80">Mobile Components</li>
  //           <li className="text-white/80">Computer Parts</li>
  //           <li className="text-white/80">TV Components</li>
  //           <li className="text-white/80">Gaming Hardware</li>
  //           <li className="text-white/80">Audio Equipment</li>
  //         </ul>
  //       </div>

  //     </div>
  //     <div className="py-6 text-center text-xs text-white/60">
  //       © {new Date().getFullYear()} ReNova. All rights reserved.
  //     </div>
  //   </footer>
  // );
///}






//-------------------------------------



export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Changed md:grid-cols-3 to lg:grid-cols-5 to accommodate new sections on larger screens */}
      <div className="container mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <div className="space-y-3 md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="ReNova logo" className="h-16 w-16 rounded" />
            <span className="text-2xl font-bold ">ReNova</span>
          </div>
          <p className="text-sm text-white/70 max-w-sm">
            ReNova Transforming electronic waste into valuable resources through sustainable door-to-door collection and professional refurbishment services.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-white/80">Door-to-Door Collection</li>
            <li className="text-white/80">E-Waste Processing</li>
            <li className="text-white/80">Component Refurbishment</li>
            <li className="text-white/80">Data Destruction</li>
            <li className="text-white/80">Corporate Solutions</li>
            <li className="text-white/80">Marketplace</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-white">Marketplace</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-white/80">Mobile Components</li>
            <li className="text-white/80">Computer Parts</li>
            <li className="text-white/80">TV Components</li>
            <li className="text-white/80">Gaming Hardware</li>
            <li className="text-white/80">Audio Equipment</li>
          </ul>
        </div>

        {/* --- ADDED SECTION: Connect with us --- */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white">Connect with us</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-white/80"><a href="#" className="hover:text-white">Facebook</a></li>
            <li className="text-white/80"><a href="#" className="hover:text-white">X (Twitter)</a></li>
            <li className="text-white/80"><a href="#" className="hover:text-white">YouTube</a></li>
            <li className="text-white/80"><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>

        {/* --- ADDED SECTION: Contact us --- */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-white/80">
              <a href="tel:7088436695" className="hover:text-white">7088436695</a>
            </li>
            <li className="text-white/80">
              <a href="mailto:help.ReNova@33gmail.com" className="hover:text-white">help.ReNova@33gmail.com</a>
            </li>
            <li className="text-white/80">
              [Your Warehouse Address Here]
            </li>
          </ul>
        </div>
      </div>

      <div className="py-6 text-center text-xs text-white/60">
        {/* --- ADDED LINE: Made with heart --- */}
        <div className="mb-2">
          Made with ❤️ by Team ReNova
        </div>
        © {new Date().getFullYear()} ReNova. All rights reserved.
      </div>
    </footer>
  );
}