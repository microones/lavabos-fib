"use client";

import { useActionState } from "react";
import { canviaContrasenya, type CanviContrasenyaEstat } from "@/actions/compte";
import BigButton from "@/components/ui/BigButton";
import { campClass, errorClass, labelClass } from "@/components/ui/form";

export default function CanviContrasenyaForm({ provisional }: { provisional: boolean }) {
  // si va bé, l'acció redirigeix a la pàgina principal
  const [estat, action, pending] = useActionState<CanviContrasenyaEstat, FormData>(canviaContrasenya, {});

  return (
    <form action={action} className="space-y-6">
      <div>
        <label htmlFor="actual" className={labelClass}>{provisional ? "Contrasenya provisional" : "Contrasenya actual"}</label>
        <input id="actual" name="actual" type="password" required autoComplete="current-password" className={campClass} />
      </div>
      <div>
        <label htmlFor="nova" className={labelClass}>Contrasenya nova (mínim 10 caràcters)</label>
        <input id="nova" name="nova" type="password" required minLength={10} maxLength={128} autoComplete="new-password" className={campClass} />
      </div>
      <div>
        <label htmlFor="repeteix" className={labelClass}>Repeteix-la</label>
        <input id="repeteix" name="repeteix" type="password" required minLength={10} maxLength={128} autoComplete="new-password" className={campClass} />
      </div>
      {estat.error && <p role="alert" className={errorClass}>{estat.error}</p>}
      <BigButton type="submit" variant="primary" className="w-full" disabled={pending}>
        {pending ? "Desant..." : "Desa la contrasenya"}
      </BigButton>
    </form>
  );
}
