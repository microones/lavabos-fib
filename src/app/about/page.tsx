// @/app/about/page.tsx
import Image from "next/image";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import SmallButton from "@/components/ui/SmallButton";

interface Person {
  name: string;
  src: string;
  uni: string;
  href?: string;
}

const Section = ({ title, people }: { title: string; people: Person[] }) => (
  <section className="w-full space-y-6">
    <Title level={2}>{title}</Title>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {people.map((dev) => (
        <Box key={dev.name} className="p-5 flex items-center gap-6">
          <div className="relative flex-shrink-0 w-[90px] h-[90px] border-2 border-[var(--border)] overflow-hidden">
            <Image
              src={dev.src}
              alt={dev.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[var(--fg)] text-lg leading-tight">
              {dev.name}
            </span>
            <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest">
              {dev.uni}
            </span>
            {dev.href && (
              <div className="pt-1">
                <SmallButton href={dev.href} variant="primary" external>
                  GitHub →
                </SmallButton>
              </div>
            )}
          </div>
        </Box>
      ))}
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <header className="space-y-4">
          <Title level={1}>Sobre el projecte</Title>
          <p className="text-lg text-[var(--muted)] font-medium italic">
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

        <footer className="pt-12 border-t-2 border-[var(--border)] text-[var(--muted)] text-center space-y-4">
          <p className="font-medium text-sm">
            Fet amb 💩 i 🧻 pels passadissos de l&apos;A5 durant la HackUPC 2025.
          </p>
          <SmallButton
            href="https://github.com/microones/lavabos-fib"
            variant="ghost"
            external
          >
            Codi font a GitHub
          </SmallButton>
        </footer>
      </div>
    </main>
  );
}
