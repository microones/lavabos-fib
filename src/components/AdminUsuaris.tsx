"use client";

import { useActionState, useState } from "react";
import { creaUsuari, esborraUsuari, restableixContrasenya, type ResultatUsuari } from "@/actions/usuaris";
import SmallButton from "@/components/ui/SmallButton";
import Badge from "@/components/ui/Badge";
import { campClass, errorClass, labelClass } from "@/components/ui/form";

export type UsuariAdmin = {
  id: string;
  email: string;
  name: string | null;
  admin: boolean;
  mustChangePassword: boolean;
  createdAt: Date;
};

/** Mostra una contrasenya provisional un sol cop, per passar-la a la persona. */
function Contrasenya({ r }: { r: ResultatUsuari }) {
  if (!r.password) return null;
  return (
    <div role="status" className="border-2 border-[var(--secondary)] p-4 space-y-2 font-mono text-sm">
      <p>Contrasenya provisional de <strong>{r.email}</strong> (no es tornarà a mostrar):</p>
      <p className="text-lg font-bold select-all break-all">{r.password}</p>
      <p className="text-[var(--muted)]">Haurà de triar-ne una de nova en entrar a /login.</p>
    </div>
  );
}

export default function AdminUsuaris({ usuaris, jo }: { usuaris: UsuariAdmin[]; jo: string }) {
  const [creat, crea, creant] = useActionState<ResultatUsuari, FormData>(creaUsuari, {});
  const [resultat, setResultat] = useState<ResultatUsuari>({});
  const [ocupat, setOcupat] = useState<string | null>(null);

  async function accio(id: string, fn: (id: string) => Promise<ResultatUsuari>) {
    setOcupat(id);
    setResultat(await fn(id));
    setOcupat(null);
  }

  return (
    <div className="space-y-8">
      <form action={crea} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <div>
          <label htmlFor="email" className={labelClass}>Correu</label>
          <input id="email" name="email" type="email" required className={campClass} />
        </div>
        <div>
          <label htmlFor="nom" className={labelClass}>Nom</label>
          <input id="nom" name="nom" type="text" maxLength={100} className={campClass} />
        </div>
        <SmallButton type="submit" variant="primary" disabled={creant} className="h-[42px]">
          {creant ? "Creant..." : "Crea el compte"}
        </SmallButton>
      </form>
      {creat.error && <p role="alert" className={errorClass}>{creat.error}</p>}
      <Contrasenya r={creat} />

      {resultat.error && <p role="alert" className={errorClass}>{resultat.error}</p>}
      <Contrasenya r={resultat} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-[var(--muted)] border-b-2 border-[var(--border)]">
              <th className="py-2 pr-4">Compte</th>
              <th className="py-2 pr-4">Creat</th>
              <th className="py-2 text-right">Accions</th>
            </tr>
          </thead>
          <tbody>
            {usuaris.map((u) => (
              <tr key={u.id} className="border-b border-[var(--border)]">
                <td className="py-3 pr-4">
                  <div className="font-bold">{u.name ?? u.email}</div>
                  <div className="font-mono text-xs text-[var(--muted)]">{u.email}</div>
                  <div className="flex gap-2 mt-1">
                    {u.admin && <Badge>admin</Badge>}
                    {u.mustChangePassword && <Badge variant="muted">contrasenya provisional</Badge>}
                  </div>
                </td>
                <td className="py-3 pr-4 font-mono text-xs whitespace-nowrap">
                  {new Date(u.createdAt).toLocaleDateString("ca", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td className="py-3 text-right whitespace-nowrap space-x-2">
                  {u.id !== jo && (
                    <>
                      <SmallButton disabled={ocupat === u.id} onClick={() => accio(u.id, restableixContrasenya)}>
                        Nova contrasenya
                      </SmallButton>
                      {!u.admin && (
                        <SmallButton
                          disabled={ocupat === u.id}
                          onClick={() => confirm(`Segur que vols esborrar el compte de ${u.email}?`) && accio(u.id, esborraUsuari)}
                        >
                          Esborra
                        </SmallButton>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
