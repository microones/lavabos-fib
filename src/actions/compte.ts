'use server'

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";
import { auth, getUserOrThrow } from "@/lib/server/auth";
import { prisma } from "@/lib/db";

export type CanviContrasenyaEstat = { error?: string };

/** Canvia la contrasenya (cal l'actual), tanca les altres sessions i treu la marca de provisional. */
export async function canviaContrasenya(_prev: CanviContrasenyaEstat, form: FormData): Promise<CanviContrasenyaEstat> {
  let user;
  try {
    user = await getUserOrThrow({ allowTempPassword: true });
  } catch {
    return { error: "Has d'iniciar sessió." };
  }

  const actual = String(form.get("actual") ?? "");
  const nova = String(form.get("nova") ?? "");
  const repeteix = String(form.get("repeteix") ?? "");
  if (nova.length < 10) return { error: "La contrasenya nova ha de tenir com a mínim 10 caràcters." };
  if (nova.length > 128) return { error: "La contrasenya nova és massa llarga." };
  if (nova !== repeteix) return { error: "Les dues contrasenyes noves no coincideixen." };
  if (nova === actual) return { error: "La contrasenya nova ha de ser diferent de l'actual." };

  try {
    await auth.api.changePassword({
      body: { currentPassword: actual, newPassword: nova, revokeOtherSessions: true },
      headers: await headers(),
    });
  } catch (e) {
    if (e instanceof APIError && e.status === "BAD_REQUEST") return { error: "La contrasenya actual no és correcta." };
    if (e instanceof APIError && e.status === "TOO_MANY_REQUESTS") return { error: "Massa intents. Espera una mica." };
    console.error("canviaContrasenya", e);
    return { error: "No s'ha pogut canviar la contrasenya." };
  }

  await prisma.user.update({ where: { id: user.id }, data: { mustChangePassword: false } });
  // Redirigim des de l'acció: si no, Next tornaria a pintar la pàgina amb la sessió antiga (ja tancada)
  redirect("/");
}
