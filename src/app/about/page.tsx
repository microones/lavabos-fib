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

const UPC = "Universitat Politècnica de Catalunya";
const FALLBACK_PHOTO = "https://placehold.co/90x90/1a1a1a/666?text=?";

const TEAM: Record<string, Omit<Person, "src">> = {
  "yeray-zalaya": { name: "Yeray Zalaya Domingo", uni: UPC, href: "https://github.com/microones/" },
  "marc-costa": { name: "Marc Costa Brusco", uni: UPC, href: "https://github.com/mcosta-b/" },
  "aura-han": { name: "Aura Han Ruiz Sánchez", uni: UPC, href: "https://github.com/AuraHan5/" },
  "abel-aymerich": { name: "Abel Aymerich", uni: UPC, href: "https://github.com/abeel987/" },
  "ada-pages": { name: "Ada Pagès Plaja", uni: UPC, href: "https://github.com/ddanor/" },
};

async function getTeamWithPhotos(): Promise<Record<string, string>> {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return {};
  try {
    const res = await fetch(`${apiUrl}/api/v1/photos/about`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return {};
    const { data } = await res.json() as { data: { member: string; url: string }[] };
    return Object.fromEntries(data.map((m) => [m.member, m.url]));
  } catch {
    return {};
  }
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

export default async function AboutPage() {
  const photoUrls = await getTeamWithPhotos();

  const makePerson = (slug: string): Person => ({
    ...TEAM[slug],
    src: photoUrls[slug] ?? FALLBACK_PHOTO,
  });

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
              makePerson("yeray-zalaya"),
              makePerson("marc-costa"),
              makePerson("aura-han"),
            ]}
          />
          <Section
            title="Col·laboradors"
            people={[
              makePerson("abel-aymerich"),
              makePerson("ada-pages"),
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
