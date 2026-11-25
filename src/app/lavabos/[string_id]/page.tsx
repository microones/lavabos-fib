import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import Badge from "@/components/ui/Badge";
import SmallButton from "@/components/ui/SmallButton";
import { GENERE_LABEL, estrelles, mitjana, plantaLabel } from "@/lib/lavabos";

export const dynamic = "force-dynamic";

const dataCurta = new Intl.DateTimeFormat("ca-ES", { dateStyle: "medium" });

export default async function LavaboDetailPage({
  params,
}: {
  params: Promise<{ string_id: string }>;
}) {
  const { string_id } = await params;

  const lavabo = await prisma.lavabo.findUnique({
    where: { string_id },
    include: {
      ressenyes: { orderBy: { data: "desc" } },
      frases: {
        where: { respostaId: null },
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { respostes: true } } },
      },
    },
  });

  if (!lavabo) notFound();

  const nota = mitjana(lavabo.ressenyes.map((r) => r.puntuacio));

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div>
        <SmallButton href="/lavabos" variant="ghost">
          ← Tots els lavabos
        </SmallButton>
      </div>

      <header className="space-y-4">
        <Title level={1}>
          {lavabo.edifici} · {plantaLabel(lavabo.planta)}
        </Title>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="info">{GENERE_LABEL[lavabo.genere]}</Badge>
          <span className="font-mono text-sm text-[var(--muted)]">
            {nota === null ? (
              "Sense ressenyes"
            ) : (
              <>
                <span className="text-[var(--primary)] text-base">{estrelles(nota)}</span>{" "}
                {nota.toFixed(1)} / 5 · {lavabo.ressenyes.length}{" "}
                {lavabo.ressenyes.length === 1 ? "ressenya" : "ressenyes"}
              </>
            )}
          </span>
        </div>
      </header>

      <section className="space-y-4">
        <Title level={2}>Frases</Title>
        {lavabo.frases.length === 0 ? (
          <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
            Encara no hi ha frases d&apos;aquest lavabo.
          </p>
        ) : (
          <ul className="space-y-3">
            {lavabo.frases.map((frase) => (
              <Box as="li" key={frase.id} className="p-4 flex items-start justify-between gap-4">
                <p className="text-[var(--fg)] leading-snug">
                  {frase.dibuix && !frase.contingut ? (
                    <span className="italic text-[var(--muted)]">[Dibuix]</span>
                  ) : (
                    <>&laquo;{frase.contingut}&raquo;</>
                  )}
                </p>
                {frase._count.respostes > 0 && (
                  <Badge variant="muted" className="shrink-0">
                    {frase._count.respostes}{" "}
                    {frase._count.respostes === 1 ? "resposta" : "respostes"}
                  </Badge>
                )}
              </Box>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-4">
        <Title level={2}>Ressenyes</Title>
        {lavabo.ressenyes.length === 0 ? (
          <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
            Ningú ha valorat aquest lavabo encara.
          </p>
        ) : (
          <ul className="space-y-3">
            {lavabo.ressenyes.map((r) => (
              <Box as="li" key={r.id} className="p-4 space-y-2">
                <div className="flex items-center justify-between gap-4 font-mono text-sm">
                  <span className="text-[var(--primary)]">{estrelles(r.puntuacio)}</span>
                  <span className="text-[var(--muted)]">{dataCurta.format(r.data)}</span>
                </div>
                <p className="text-[var(--fg)] leading-snug">{r.contingut}</p>
              </Box>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
