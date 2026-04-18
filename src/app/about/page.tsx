import Image from "next/image";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import SmallButton from "@/components/ui/SmallButton";

async function getFotos(): Promise<Record<string, string>> {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return {};
  try {
    const res = await fetch(`${apiUrl}/api/v1/photos/about`, { next: { revalidate: 3600 } });
    if (!res.ok) return {};
    const { data } = await res.json() as { data: { member: string; url: string }[] };
    return Object.fromEntries(data.map((m) => [m.member, m.url]));
  } catch {
    return {};
  }
}

export default async function AboutPage() {
  const fotos = await getFotos();

  const equip = [
    {
      nom: "Yeray Zalaya Domingo",
      foto: fotos["yeray-zalaya"],
      uni: "Universitat Politècnica de Catalunya",
      github: "https://github.com/microones/",
    },
    {
      nom: "Marc Costa Brusco",
      foto: fotos["marc-costa"],
      uni: "Universitat Politècnica de Catalunya",
      github: "https://github.com/kosta019/",
    },
    {
      nom: "Aura Han Ruiz Sánchez",
      foto: fotos["aura-han"],
      uni: "Universitat Politècnica de Catalunya",
      github: "https://github.com/AuraHan5/",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <header className="space-y-4">
          <Title level={1}>Sobre el projecte</Title>
          <p className="text-lg text-[var(--muted)] font-medium italic">
            Quin és el millor lavabo de la FIB? La comunitat FIBer respon.
          </p>
        </header>

        <section className="w-full space-y-6">
          <Title level={2}>Idea i desenvolupament</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equip.map((persona) => (
              <Box key={persona.nom} className="p-5 flex items-center gap-6">
                <div className="relative flex-shrink-0 w-[90px] h-[90px] border-2 border-[var(--border)] overflow-hidden">
                  {persona.foto ? (
                    <Image src={persona.foto} alt={persona.nom} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[var(--muted)] opacity-30" />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[var(--fg)] text-lg leading-tight">
                    {persona.nom}
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest">
                    {persona.uni}
                  </span>
                  <div className="pt-1">
                    <SmallButton href={persona.github} variant="primary" external>
                      GitHub →
                    </SmallButton>
                  </div>
                </div>
              </Box>
            ))}
          </div>
        </section>

        <footer className="pt-12 border-t-2 border-[var(--border)] text-[var(--muted)] text-center space-y-4">
          <p className="font-medium text-sm">
            Fet amb 💩 i 🧻 pels passadissos de l&apos;A5 durant la HackUPC 2024, 2025, sessions del Crea i altres moments lliures.
          </p>
          <SmallButton href="https://github.com/microones/lavabos-fib" variant="ghost" external>
            Codi font a GitHub
          </SmallButton>
					<p className="font-medium text-sm">
					  Les imatges es poden obtenir a través de 
						<a href="https://api.lavabos-fib.microones.cat/"> l'API de lavabos-fib </a>.
					</p>
        </footer>
      </div>
    </main>
  );
}
