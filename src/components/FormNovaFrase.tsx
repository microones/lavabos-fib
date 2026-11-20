'use client'

import { createFrase } from "@/actions/frases";
import BigButton from "@/components/ui/BigButton";
import type { Genere } from "../../generated/prisma/client";
import { GENERE_LABEL, plantaLabel } from "@/lib/lavabos";

type LavaboOption = {
  id: number;
  edifici: string;
  planta: string;
  genere: Genere;
};

const label = "block text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2";
const camp =
  "block w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] px-3 py-2 text-base focus:outline-none focus:border-[var(--primary)] transition-colors";

export default function FormNovaFrase({ lavabos }: { lavabos: LavaboOption[] }) {
  return (
    <form action={createFrase} className="space-y-6">
      <div>
        <label htmlFor="lavaboId" className={label}>On ho has vist?</label>
        <select name="lavaboId" id="lavaboId" required className={camp} defaultValue="">
          <option value="" disabled>-- Selecciona el lavabo --</option>
          {lavabos.map((l) => (
            <option key={l.id} value={l.id}>
              {l.edifici} · {plantaLabel(l.planta)} · {GENERE_LABEL[l.genere]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contingut" className={label}>Què hi posa?</label>
        <textarea
          id="contingut"
          name="contingut"
          rows={4}
          className={camp}
          placeholder="Escriu aquí el text exacte..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="idioma" className={label}>Idioma</label>
          <select name="idioma" id="idioma" className={camp} defaultValue="CAT">
            <option value="CAT">Català</option>
            <option value="CAST">Castellà</option>
            <option value="ANG">Anglès</option>
            <option value="ALTRE">Altre</option>
          </select>
        </div>

        <label htmlFor="dibuix" className="flex items-center gap-3 sm:pt-6 cursor-pointer text-[var(--fg)]">
          <input
            id="dibuix"
            name="dibuix"
            type="checkbox"
            className="h-4 w-4 accent-[var(--primary)]"
          />
          És només un dibuix?
        </label>
      </div>

      <BigButton type="submit" variant="primary" className="w-full">
        Afegir a l&apos;arxiu
      </BigButton>
    </form>
  );
}
