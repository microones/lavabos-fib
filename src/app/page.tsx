import Link from "next/link";

export default function HomePage() {
  const items = [
    { href: "/imatges", label: "Galeria d'imatges", active: true },
    { href: "/about", label: "Sobre el projecte", active: true },
    { href: "/frases", label: "Taula de frases", active: false },
    { href: "/lavabos", label: "Llistat de lavabos", active: false },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[var(--background)] pt-32 pb-12 px-6">
      <header className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[var(--foreground)]">
	  lavabos-fib
	  <span className="ml-3 text-xs font-mono bg-[var(--primary)] px-2 py-1 rounded text-white align-middle tracking-normal">
	    ALPHA
	  </span>
	</h1>
        
        <p className="text-lg md:text-xl text-[var(--foreground)]/60 font-medium italic">
          La pàgina que definitivament no necessitaves
        </p>
      </header>

      {/* Grid de navegació principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mt-16">
        {items.map(({ href, label, active }) =>
          active ? (
            <Link
              key={href}
              href={href}
              className="glass-card group p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/50 shadow-sm flex flex-col items-center justify-center min-h-[160px] border border-[var(--primary)]/5"
            >
              <span className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {label}
              </span>
            </Link>
          ) : (
            <div
              key={label}
              className="bg-[var(--foreground)]/5 border border-dashed border-[var(--foreground)]/10 rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[160px] opacity-50 grayscale relative"
            >
              <span className="text-2xl font-bold text-[var(--foreground)]/40">{label}</span>
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest font-bold bg-[var(--foreground)]/5 text-[var(--foreground)]/40 px-2 py-1 rounded-full border border-[var(--foreground)]/10">
                En desenvolupament
              </span>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
