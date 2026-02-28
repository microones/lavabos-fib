import Link from "next/link";

export default function HomePage() {
  const items = [
    { href: "/imatges", label: "Galeria d'imatges", active: true },
    { href: "/about", label: "Sobre el projecte", active: true },
    { href: "/frases", label: "Frases cèlebres", active: false },
    { href: "/ressenyes", label: "Ressenyes", active: false },
  ];

  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center space-y-12 pt-32 pb-12 px-4 bg-cover bg-center bg-fixed z-0"
      style={{ backgroundImage: "url('/img/20260227_235953.jpg')" }}
    >
      {/* Overlay mínim per llegibilitat */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--primary)] drop-shadow-lg ">
          lavabos-fib{" "}
          <span className="text-sm font-mono bg-[var(--primary)] px-2 py-1 rounded text-white align-middle shadow-md">
            BETA
          </span>
        </h1>
        <p className="text-[var(--foreground)] text-lg md:text-l max-w-md mx-auto font-bold drop-shadow-md bg-white/10 backdrop-blur-sm rounded px-6 py-2 border border-white/10">
          La pàgina que definitivament no necessitaves
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {items.map(({ href, label, active }) =>
          active ? (
            <Link
              key={href}
              href={href}
              className="glass-card group p-12 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col items-center justify-center min-h-[160px] border border-white/20 shadow-2xl"
            >
              <span className="text-2xl font-black text-[var(--foreground)] drop-shadow-sm group-hover:text-[var(--primary)] transition-colors">
                {label}
              </span>
            </Link>
          ) : (
            <div
              key={label}
              className="bg-black/10 backdrop-blur-md border border-dashed border-white/20 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[160px] opacity-70 relative grayscale"
            >
              <span className="text-2xl font-bold text-white/40">{label}</span>
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white/80 px-2 py-1 rounded-full border border-white/10">
                Pròximament
              </span>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
