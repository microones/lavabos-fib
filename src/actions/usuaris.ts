'use server'

import { revalidatePath } from "next/cache";
import { getUserOrThrow } from "@/lib/server/auth";
import { createUserWithTempPassword, resetPassword } from "@/lib/server/usuaris";
import { prisma } from "@/lib/db";

// Gestió de comptes des de /admin. Només admins; des d'aquí no es poden crear admins
// (només amb `bun run crea-usuari --admin` al servidor).

export type ResultatUsuari = { error?: string; email?: string; password?: string };

async function admin() {
  try {
    return await getUserOrThrow({ admin: true });
  } catch {
    return null;
  }
}

export async function creaUsuari(_prev: ResultatUsuari, form: FormData): Promise<ResultatUsuari> {
  if (!(await admin())) return { error: "No autoritzat" };
  try {
    const { user, password } = await createUserWithTempPassword(String(form.get("email") ?? ""), String(form.get("nom") ?? ""));
    revalidatePath("/admin");
    return { email: user.email, password };
  } catch (e) {
    return { error: (e as Error).message };
  }
}

export async function restableixContrasenya(id: string): Promise<ResultatUsuari> {
  const jo = await admin();
  if (!jo) return { error: "No autoritzat" };
  if (id === jo.id) return { error: "La teva la canvies a Compte → Contrasenya." };
  const usuari = await prisma.user.findUnique({ where: { id }, select: { email: true } });
  if (!usuari) return { error: "Aquest compte no existeix." };
  const password = await resetPassword(id);
  revalidatePath("/admin");
  return { email: usuari.email, password };
}

export async function esborraUsuari(id: string): Promise<ResultatUsuari> {
  const jo = await admin();
  if (!jo) return { error: "No autoritzat" };
  if (id === jo.id) return { error: "No et pots esborrar a tu mateix." };
  const usuari = await prisma.user.findUnique({ where: { id }, select: { admin: true } });
  if (!usuari) return { error: "Aquest compte no existeix." };
  if (usuari.admin) return { error: "Els admins no es poden esborrar des d'aquí." };
  await prisma.user.delete({ where: { id } });
  revalidatePath("/admin");
  return {};
}
