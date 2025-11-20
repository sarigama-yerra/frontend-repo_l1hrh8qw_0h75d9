export function CardGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <article key={item.title} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-fuchsia-400/40 transition relative">
          {item.image && (
            <div className="aspect-[16/9] overflow-hidden">
              <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
          )}
          <div className="p-5">
            <p className="text-xs uppercase tracking-widest text-fuchsia-300/70">{item.tag}</p>
            <h3 className="text-white text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-slate-300/90 text-sm mt-2">{item.description}</p>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-t from-fuchsia-600/10 to-transparent" />
        </article>
      ))}
    </div>
  );
}

export function CharacterRow({ people }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {people.map((p) => (
        <div key={p.name} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-center">
          <img src={p.avatar} alt={p.name} className="w-16 h-16 rounded-md object-cover ring-1 ring-white/20" />
          <div>
            <div className="text-white font-semibold">{p.name}</div>
            <div className="text-sm text-slate-300/90">{p.role}</div>
            <p className="text-slate-400 text-sm mt-1">{p.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
