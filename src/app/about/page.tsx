// @/app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

interface Person {
  name: string;
  src: string;
  alt?: string;
  uni: string;
  href?: string;
}

const Section = ({ title, people }: { title: string; people: Person[] }) => (
  <section className="w-full space-y-8 relative z-10">
    <h2 className="text-2xl font-bold text-[var(--primary)] border-b pb-2 border-[var(--primary)]/10 tracking-tight">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {people.map((dev) => (
        <div
          key={dev.name}
          className="glass-card p-5 rounded-2xl flex items-center space-x-6 transition-all duration-300 hover:border-[var(--accent)]/30 group"
        >
          {/* Foto circular mitjana i uniforme */}
          <div className="relative flex-shrink-0 w-[100px] h-[100px]">
            <Image
              src={dev.src}
              alt={dev.name}
              fill
              className="rounded-full object-cover border-2 border-[var(--primary)]/10 group-hover:border-[var(--accent)] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-bold text-[var(--foreground)] text-lg leading-tight">
              {dev.name}
            </span>
            <span className="text-xs font-semibold text-[var(--foreground)]/40 uppercase tracking-widest">
              {dev.uni}
            </span>
            {dev.href && (
              <Link
                href={dev.href}
                className="text-xs font-bold text-[var(--accent)] hover:underline pt-1"
              >
                GitHub →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)]">
            Sobre el projecte
          </h1>
          <p className="text-lg text-[var(--foreground)]/60 font-medium italic">
            Quin és el millor lavabo de la FIB? La comunitat respon.
          </p>
        </header>

        <div className="space-y-16">
          <Section
            title="Idea i desenvolupament"
            people={[
              {
                name: "Yeray Zalaya Domingo",
                src: "/img/about/yeray-zalaya.jpeg",
                uni: "Universitat Politècnica de Catalunya",
                href: "https://github.com/microones/",
              },
              {
                name: "Marc Costa Brusco",
                src: "/img/about/marc-costa.jpeg",
                uni: "Universitat Politècnica de Catalunya",
                href: "https://github.com/mcosta-b/",
              },
              {
                name: "Aura Han Ruiz Sánchez",
                src: "/img/about/aura-han.png",
                uni: "Universitat Politècnica de Catalunya",
                href: "https://github.com/AuraHan5/",
              },
            ]}
          />

          <Section
            title="Col·laboradors"
            people={[
              {
                name: "Abel Aymerich",
                src: "/img/about/abel-aymerich.png",
                uni: "Universitat Politècnica de Catalunya",
                href: "https://github.com/abeel987/",
              },
              {
                name: "Ada Pagès Plaja",
                src: "/img/about/ada-pages.jpeg",
                uni: "Universitat Politècnica de Catalunya",
                href: "https://github.com/ddanor/",
              },
            ]}
          />
        </div>

        <footer className="text-center pt-12 border-t border-[var(--primary)]/10 text-[var(--foreground)]/40 space-y-4">
          <p className="font-medium text-sm">
            Fet amb 💩 i 🧻 pels passadissos de l&apos;A5 durant la HackUPC
            2025.
          </p>
          <Link
            href="https://github.com/microones/lavabos-fib"
            className="inline-block text-xs font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors"
          >
            Codi font a GitHub
          </Link>
        </footer>
      </div>
    </main>
  );
}
