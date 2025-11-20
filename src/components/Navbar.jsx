import { Menu, Moon, ScrollText, Map, Castle, Users, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "#history", label: "History", icon: ScrollText },
    { href: "#places", label: "Places", icon: Castle },
    { href: "#map", label: "Map", icon: Map },
    { href: "#characters", label: "Characters", icon: Users },
    { href: "#gallery", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur-md bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-white/20 shadow-[0_0_20px_rgba(168,85,247,0.45)]" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide">Astryd Realm</p>
              <p className="text-xs text-slate-300/70">A dark medieval anime universe</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {items.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5 transition">
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Theme" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5 transition">
              <Moon size={16} />
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5 transition">
              <Menu size={18} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 grid gap-1 bg-slate-900/80">
              {items.map(({ href, label, icon: Icon }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5 transition">
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
