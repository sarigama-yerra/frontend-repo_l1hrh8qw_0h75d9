import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <p className="text-fuchsia-300/80 tracking-widest uppercase text-xs mb-3">Lore compendium</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            Astryd: Chronicles of the Violet Eclipse
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            A dark, medieval world touched by cosmic forces. Browse histories, maps, and portraits of those who walk beneath the twin moons.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#history" className="px-5 py-2.5 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] transition">Explore Lore</a>
            <a href="#characters" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/15 transition">Meet Characters</a>
          </div>
        </div>
      </div>
    </section>
  );
}
