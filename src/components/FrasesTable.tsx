'use client'

import { useState } from "react";
import Link from "next/link";
import type { FraseAmbRelacions } from "@/actions/frases";
import Box from "@/components/ui/Box";
import Badge from "@/components/ui/Badge";
import { GENERE_LABEL, plantaLabel } from "@/lib/lavabos";

// Forma mínima d'una frase dins d'un fil (els nivells profunds no porten totes les relacions)
type FraseFil = {
  id: number;
  contingut: string | null;
  dibuix: boolean;
  lavabo: FraseAmbRelacions["lavabo"];
  imatge: { url: string } | null;
  respostes?: FraseFil[];
};

function Contingut({ frase }: { frase: Pick<FraseFil, "contingut" | "dibuix"> }) {
  if (frase.dibuix) {
    return <span className="italic text-[var(--secondary)]">🎨 Dibuix a la paret</span>;
  }
  return <>{frase.contingut}</>;
}

function Ubicacio({ lavabo }: { lavabo: FraseFil["lavabo"] }) {
  return (
    <Link
      href={`/lavabos/${lavabo.string_id}`}
      className="font-mono text-xs text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
    >
      {lavabo.edifici} · {plantaLabel(lavabo.planta)} · {GENERE_LABEL[lavabo.genere]}
    </Link>
  );
}

function EnllacImatge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-mono text-xs text-[var(--secondary)] hover:text-[var(--primary)] underline underline-offset-2"
    >
      📷 Veure imatge
    </a>
  );
}

// Fil de respostes, recursiu
function Fil({ frase }: { frase: FraseFil }) {
  return (
    <div className="border-l-2 border-[var(--border)] pl-4 space-y-3">
      <div className="space-y-1">
        <Ubicacio lavabo={frase.lavabo} />
        <p className="text-[var(--fg)] leading-snug break-words">
          <Contingut frase={frase} />
        </p>
        {frase.imatge && <EnllacImatge url={frase.imatge.url} />}
      </div>
      {frase.respostes && frase.respostes.length > 0 && (
        <div className="space-y-3">
          {frase.respostes.map((r) => (
            <Fil key={r.id} frase={r} />
          ))}
        </div>
      )}
    </div>
  );
}

interface FrasesTableProps {
  frases: FraseAmbRelacions[];
  className?: string;
}

export default function FrasesTable({ frases, className = "" }: FrasesTableProps) {
  const [oberts, setOberts] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setOberts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const arrels = frases.filter((f) => f.pare === null);

  return (
    <ul className={`space-y-4 ${className}`}>
      {arrels.map((f) => {
        const nRespostes = f.respostes.length;
        const obert = oberts.has(f.id);

        return (
          <Box as="li" key={f.id} className="p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Ubicacio lavabo={f.lavabo} />
              <div className="flex items-center gap-2">
                {f.idioma && <Badge variant="muted">{f.idioma}</Badge>}
                <span className="font-mono text-[10px] text-[var(--muted)]">#{f.id}</span>
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium text-[var(--fg)] leading-snug break-words border-l-4 border-[var(--primary)] pl-3">
              <Contingut frase={f} />
            </p>

            {(f.imatge || nRespostes > 0) && (
              <div className="flex flex-wrap items-center gap-4">
                {f.imatge && <EnllacImatge url={f.imatge.url} />}
                {nRespostes > 0 && (
                  <button
                    type="button"
                    onClick={() => toggle(f.id)}
                    aria-expanded={obert}
                    className="inline-flex items-center gap-2 border border-[var(--border)] px-2 py-1 font-mono text-xs text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                  >
                    <span className={`inline-block transition-transform ${obert ? "rotate-90" : ""}`}>▸</span>
                    {obert ? "Amagar" : "Veure"} {nRespostes} {nRespostes === 1 ? "resposta" : "respostes"}
                  </button>
                )}
              </div>
            )}

            {obert && nRespostes > 0 && (
              <div className="space-y-3 pt-2 border-t border-[var(--border)]">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                  Fil de conversa
                </h4>
                {f.respostes.map((r) => (
                  <Fil key={r.id} frase={r} />
                ))}
              </div>
            )}
          </Box>
        );
      })}
    </ul>
  );
}
