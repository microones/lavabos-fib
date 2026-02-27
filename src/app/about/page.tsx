// @/app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const Section = ({ title, people }: { title: string; people: any[] }) => (
    <section className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-blue-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((dev) => (
          <div
            key={dev.name}
            className="glass-card p-4 rounded-xl flex items-center space-x-4"
          >
            <Image
              src={dev.src}
              alt={dev.alt}
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-blue-100"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 leading-tight">
                {dev.name}
              </span>
              <span className="text-xs text-gray-500 mb-2">{dev.uni}</span>
              {dev.href && (
                <Link
                  href={dev.href}
                  className="text-xs font-semibold text-blue-500 hover:text-blue-700"
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

  return (
    <main className="max-w-4xl mx-auto space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-black italic text-gray-900">
          Sobre el projecte
        </h1>
        <p className="text-xl text-gray-600">
          "En quin lavabo es caga millor? La comunitat respon."
        </p>
      </header>

      <Section
        title="Idea i desenvolupament"
        people={[
          {
            name: "Yeray Zalaya Domingo",
            src: "/img/about/yeray-zalaya.jpeg",
            uni: "UPC",
            href: "https://github.com/microones/",
          },
          {
            name: "Marc Costa Brusco",
            src: "/img/about/marc-costa.jpeg",
            uni: "UPC",
            href: "https://github.com/mcosta-b/",
          },
          {
            name: "Aura Han Ruiz Sánchez",
            src: "/img/about/aura-han.png",
            uni: "UPC",
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
            uni: "UPC",
            href: "https://github.com/abeel987/",
          },
          {
            name: "Ada Pagès Plaja",
            src: "/img/about/ada-pages.jpeg",
            uni: "UPC",
            href: "https://github.com/ddanor/",
          },
        ]}
      />

      <footer className="text-center pt-12 border-t border-gray-100 space-y-4 text-gray-500">
        <p className="flex items-center justify-center gap-2">
          Fet amb <span className="animate-bounce">💩</span> i{" "}
          <span className="animate-pulse">🧻</span> als passadissos de l'A5
          (HackUPC 2025).
        </p>
        <Link
          href="https://github.com/microones/lavabos-fib"
          className="inline-block px-6 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-black transition-colors"
        >
          Codi font a GitHub
        </Link>
      </footer>
    </main>
  );
}
