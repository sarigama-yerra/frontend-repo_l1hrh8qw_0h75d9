export default function Section({ id, eyebrow, title, children, bg = false }) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${bg ? 'bg-slate-900/60' : ''}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_55%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow && <p className="text-fuchsia-300/80 tracking-widest uppercase text-xs mb-3">{eyebrow}</p>}
          {title && <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>}
          <div className="text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
