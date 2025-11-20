import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { CardGrid, CharacterRow } from './components/Cards'

function App() {
  const historyItems = [
    { tag: 'Era I', title: 'The Shattering', description: 'A comet of violet fire split the sky and fractured the kingdoms. Magic seeped from the wound between worlds.' },
    { tag: 'Era II', title: 'The Pale Inquisition', description: 'An iron-fisted faith rose to purge star-touched bloodlines. Cities burned. Secrets went underground.' },
    { tag: 'Era III', title: 'Age of Veils', description: 'Guilds and covens bargain in the shadows while empires pretend at order beneath twin moons.' },
  ]

  const places = [
    { tag: 'Capital', title: 'Vesperhold', description: 'A citadel-city wrapped around a luminous crater, its spires crowned in perpetual dusk.', image: 'https://images.unsplash.com/photo-1584285404748-5c82dd7fe9c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBQYWxlJTIwSW5xdWlzaXRpb258ZW58MHwwfHx8MTc2MzY2NTI4MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { tag: 'Wilds', title: 'The Gloamwood', description: 'Forest of bioluminescent spores and whispering roots where roads shift like memory.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'North', title: 'Frostspire', description: 'Glacial monastery guarding a gate of starlight sealed in ice.', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  ]

  const characters = [
    { name: 'Selene Varrow', role: 'Starbound Inquisitor', bio: 'Hunts the very magic that saved her life under the violet comet.', avatar: 'https://images.unsplash.com/photo-1545225461-b2e4f03f8533?q=80&w=400&auto=format&fit=crop' },
    { name: 'Kael of Gloam', role: 'Warden of the Deepwood', bio: 'Tracks monsters and men by the glow of drifting spores.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ysera Althain', role: 'Craterborn Arcanist', bio: 'Speaks with the lattice of light beneath Vesperhold.', avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop' },
  ]

  const gallery = [
    { tag: 'Relic', title: 'Violet Eclipse Sigil', description: 'Emblem carried by comet cults across the underways.', image: 'https://images.unsplash.com/photo-1520975693416-24f2450daf25?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Bestiary', title: 'Moon-touched Stag', description: 'Antlers threaded with starlit veins. Harbinger of blizzards.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Order', title: 'Veilwatch Sigils', description: 'Marks worn by scouts who police the borders between worlds.', image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />

      <Section id="history" eyebrow="Chronicles" title="History of Astryd" bg>
        <p>
          Long before the Violet Eclipse, Astryd was a mortal world of steel and prayer. When the sky tore open and the comet fell, a seam was stitched between realms. Magic seeped out like dawn through shutters. Empires rose to claim it, faiths formed to deny it, and the common folk learned to survive between both.
        </p>
        <div className="mt-6">
          <CardGrid items={historyItems} />
        </div>
      </Section>

      <Section id="places" eyebrow="Atlas" title="Places of note">
        <CardGrid items={places} />
      </Section>

      <Section id="map" eyebrow="Cartography" title="World Map" bg>
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop" alt="Map of Astryd" className="w-full h-auto object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent text-slate-200 text-sm">An ancient star-chart rumored to be a true map of Astryd.</div>
        </div>
      </Section>

      <Section id="characters" eyebrow="Faces" title="Notable Characters">
        <CharacterRow people={characters} />
      </Section>

      <Section id="gallery" eyebrow="Relics & Scenes" title="Gallery" bg>
        <CardGrid items={gallery} />
      </Section>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Astryd Realm. Forged under the Violet Eclipse.</p>
          <p className="text-slate-500">Dark theme • Medieval • Anime-styled</p>
        </div>
      </footer>
    </div>
  )
}

export default App
