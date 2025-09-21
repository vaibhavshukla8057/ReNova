export default function BackgroundSquares() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cyan-50 to-white" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-slate-50 [clip-path:polygon(0_10%,100%_0,100%_100%,0%_100%)]" />
      
      {/* Floating Shapes */}
      <div className="absolute -top-10 left-1/4 h-40 w-40 rounded-lg bg-green-200/50 opacity-50 blur-2xl animate-float"></div>
      <div className="absolute -bottom-10 right-1/4 h-40 w-40 rounded-lg bg-cyan-200/50 opacity-50 blur-2xl animate-float [animation-delay:-4s]"></div>
      <div className="absolute top-1/2 -right-10 h-32 w-32 rounded-2xl border-4 border-green-300/30 animate-float [animation-delay:-2s]"></div>
      <div className="absolute top-1/3 left-10 h-32 w-32 rounded-2xl border-4 border-cyan-300/30 animate-float [animation-delay:-6s]"></div>
    </div>
  );
}