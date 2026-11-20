import { getLavabosOptions } from "@/actions/frases";
import { getUser } from "@/lib/server/auth";
import FormNovaFrase from "@/components/FormNovaFrase";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import SmallButton from "@/components/ui/SmallButton";

export const dynamic = "force-dynamic";

export default async function NovaFrasePage() {
  const user = await getUser();

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 space-y-10">
      <header className="space-y-4">
        <Title level={1}>Nova frase</Title>
        <SmallButton href="/frases" variant="ghost">
          ← Tornar a les frases
        </SmallButton>
      </header>

      {user ? (
        <Box className="p-6">
          <FormNovaFrase lavabos={await getLavabosOptions()} />
        </Box>
      ) : (
        <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
          Has d&apos;iniciar sessió per afegir frases.
        </p>
      )}
    </main>
  );
}
