import Box from "@/components/ui/Box";
import BigButton from "@/components/ui/BigButton";
import Title from "@/components/ui/Title";
import Badge from "@/components/ui/Badge";

const items = [
  { href: "/imatges", label: "Galeria d'imatges", active: true },
  { href: "/about", label: "Sobre el projecte", active: true },
  { href: "/frases", label: "Taula de frases", active: false },
  { href: "/lavabos", label: "Llistat de lavabos", active: false },
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[var(--bg)] pt-24 pb-16 px-6">
      <header className="text-center space-y-4 max-w-2xl">
        <div className="flex items-center justify-center gap-4">
          <Title level={1}>lavabos-fib</Title>
          <Badge variant="info">ALPHA</Badge>
        </div>
        <p className="text-lg md:text-xl text-[var(--muted)] font-medium italic">
          
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mt-16">
        {items.map(({ href, label, active }) =>
          active ? (
            <BigButton key={href} href={href} variant="ghost" className="min-h-[140px] text-2xl">
              {label}
            </BigButton>
          ) : (
            <Box
              key={label}
              className="relative flex flex-col items-center justify-center min-h-[140px] p-10 opacity-50"
            >
              <span className="text-2xl font-bold text-[var(--muted)]">{label}</span>
              <div className="absolute top-3 right-3">
                <Badge variant="muted">En desenvolupament</Badge>
              </div>
            </Box>
          ),
        )}
      </div>
    </main>
  );
}
