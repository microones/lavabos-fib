import { getFrases } from "@/actions/frases";
import FrasesTable from "@/components/FrasesTable";
import Title from "@/components/ui/Title";
import SmallButton from "@/components/ui/SmallButton";

export const dynamic = "force-dynamic";

export default async function FrasesPage() {
  const frases = await getFrases();
  const arrels = frases.filter((f) => f.pare === null);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <header className="space-y-4">
        <Title level={1}>Frases</Title>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg text-[var(--muted)] font-medium italic">
            El que s&apos;escriu a les parets dels lavabos de la FIB.
          </p>
          <SmallButton href="/frases/nova" variant="primary">
            + Afegir frase
          </SmallButton>
        </div>
      </header>

      {arrels.length === 0 ? (
        <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
          Encara no hi ha cap frase catalogada.
        </p>
      ) : (
        <FrasesTable frases={frases} />
      )}
    </main>
  );
}
