import Link from "next/link";
import { prisma } from "@/lib/db";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import Badge from "@/components/ui/Badge";
import { GENERE_LABEL, estrelles, mitjana, plantaLabel } from "@/lib/lavabos";

export const dynamic = "force-dynamic";

export default async function LavabosPage() {
  const lavabos = await prisma.lavabo.findMany({
    include: {
      ressenyes: { select: { puntuacio: true } },
      _count: { select: { frases: true } },
    },
  });

  // Postgres ordena "-1" després de "0" (la collation ignora el guió): ordenem les plantes aquí.
  const numPlanta = (p: string) => (/^-?\d+$/.test(p.trim()) ? Number(p) : Infinity);
  lavabos.sort(
    (a, b) =>
      a.edifici.localeCompare(b.edifici) ||
      numPlanta(a.planta) - numPlanta(b.planta) ||
      a.planta.localeCompare(b.planta),
  );

  const perEdifici = new Map<string, typeof lavabos>();
  for (const l of lavabos) perEdifici.set(l.edifici, [...(perEdifici.get(l.edifici) ?? []), l]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <header className="space-y-4">
        <Title level={1}>Lavabos</Title>
        <p className="text-lg text-[var(--muted)] font-medium italic">
          Tots els lavabos catalogats de la FIB, edifici per edifici.
        </p>
      </header>

      {lavabos.length === 0 ? (
        <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
          Encara no hi ha cap lavabo catalogat.
        </p>
      ) : (
        [...perEdifici].map(([edifici, llista]) => (
          <section key={edifici} className="space-y-4">
            <Title level={2}>{edifici}</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {llista.map((lavabo) => {
                const nota = mitjana(lavabo.ressenyes.map((r) => r.puntuacio));
                return (
                  <Box
                    key={lavabo.id}
                    as={Link}
                    href={`/lavabos/${lavabo.string_id}`}
                    className="group p-5 flex flex-col gap-3 hover:border-[var(--primary)] transition-colors duration-150"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xl font-bold text-[var(--fg)] group-hover:text-[var(--primary)] transition-colors">
                        {plantaLabel(lavabo.planta)}
                      </span>
                      <Badge variant="muted">{GENERE_LABEL[lavabo.genere]}</Badge>
                    </div>
                    <div className="font-mono text-sm text-[var(--muted)] space-y-1">
                      <p>
                        {nota === null ? (
                          "Sense ressenyes"
                        ) : (
                          <>
                            <span className="text-[var(--primary)]">{estrelles(nota)}</span>{" "}
                            {nota.toFixed(1)} ({lavabo.ressenyes.length})
                          </>
                        )}
                      </p>
                      <p>
                        {lavabo._count.frases} {lavabo._count.frases === 1 ? "frase" : "frases"}
                      </p>
                    </div>
                  </Box>
                );
              })}
            </div>
          </section>
        ))
      )}
    </main>
  );
}
