"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client/auth";
import BigButton from "@/components/ui/BigButton";
import { campClass, errorClass, labelClass } from "@/components/ui/form";

export default function LoginForm({ next }: { next: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setError("");
    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });
    setLoading(false);
    if (error) {
      setError(error.status === 429 ? "Massa intents. Espera una mica i torna-ho a provar." : "Correu o contrasenya incorrectes.");
      return;
    }
    const mustChange = (data?.user as { mustChangePassword?: boolean } | undefined)?.mustChangePassword;
    router.push(mustChange ? "/compte/contrasenya" : next);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className={labelClass}>Correu</label>
        <input id="email" name="email" type="email" required autoComplete="username" className={campClass} />
      </div>
      <div>
        <label htmlFor="password" className={labelClass}>Contrasenya</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className={campClass} />
      </div>
      {error && <p role="alert" className={errorClass}>{error}</p>}
      <BigButton type="submit" variant="primary" className="w-full" disabled={loading}>
        {loading ? "Entrant..." : "Entra"}
      </BigButton>
    </form>
  );
}
